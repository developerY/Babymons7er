import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { GuardianUiState } from '../../services/guardian-ui';

@Component({
  selector: 'app-guardian-dossier-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule],
  host: {
    '(document:keydown.escape)': 'onEscape()',
  },
  template: `
    @if (ui.activeDossier(); as guardian) {
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="dossier-modal-title"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-card-fade"
      >
        <button
          type="button"
          aria-label="Close dossier modal"
          (click)="ui.closeDossier()"
          class="fixed inset-0 bg-primary/45 backdrop-blur-sm cursor-default border-0 p-0"
        ></button>
        <div
          class="relative z-10 w-full max-w-2xl bg-surface-container-lowest rounded-xl shadow-2xl border border-gesso overflow-hidden flex flex-col max-h-[88vh]"
        >
          <!-- Header -->
          <div class="flex items-center justify-between px-6 py-4 bg-surface-container-low border-b border-gesso shrink-0">
            <div class="flex items-center gap-2.5 text-xs font-medium tracking-wider uppercase text-secondary">
              <span class="tabular-nums font-semibold">Node {{ guardian.nodeNumber }}</span>
              <span aria-hidden="true" class="text-outline-variant">·</span>
              <span>{{ guardian.name }} — {{ guardian.epithet }}</span>
            </div>
            <button
              type="button"
              aria-label="Close dossier"
              (click)="ui.closeDossier()"
              class="w-9 h-9 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors focus-visible:outline-2 focus-visible:outline-secondary"
            >
              <mat-icon class="!text-[20px]">close</mat-icon>
            </button>
          </div>

          <!-- Scrollable Content -->
          <div class="p-6 sm:p-8 space-y-6 overflow-y-auto">
            <!-- Portrait Banner -->
            <div class="relative w-full aspect-[16/9] rounded-lg overflow-hidden bg-surface-container">
              <img
                [src]="guardian.portraitImageUrl"
                [alt]="guardian.name + ' — ' + guardian.epithet"
                referrerpolicy="no-referrer"
                class="w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>
              <div class="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <span class="text-xs font-medium tracking-wider uppercase">{{ guardian.subRealmLabel }}</span>
                <span class="text-xs font-medium tabular-nums text-secondary-fixed">{{ guardian.coordinates }}</span>
              </div>
            </div>

            <!-- Title & Lattice Weight -->
            <div class="space-y-2">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <span class="text-xs font-semibold tracking-wider uppercase text-on-surface-variant">
                  {{ guardian.realm }}
                </span>
                <span class="text-xs font-semibold tabular-nums text-secondary">
                  Lattice Index: {{ guardian.latticeDisplay }}
                </span>
              </div>
              <h3 id="dossier-modal-title" class="font-serif text-3xl text-primary tracking-tight">
                {{ guardian.name }}
              </h3>
              <p class="text-base font-semibold text-secondary">“{{ guardian.title }}”</p>
            </div>

            <!-- Lore & Cadence -->
            <div class="p-5 rounded-lg bg-surface-container-low border border-gesso/70 space-y-2">
              <div class="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                Chronicle Lore &amp; Visual Dossier
              </div>
              <p class="text-[15px] text-on-surface leading-relaxed">
                {{ guardian.dossierDescription }}
              </p>
            </div>

            <!-- Operational Spec Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="p-4 rounded-lg bg-surface-container-low/70 border border-gesso/60 space-y-1">
                <div class="text-xs font-semibold uppercase tracking-wider text-secondary">
                  Ideal Application
                </div>
                <p class="text-sm text-on-surface leading-relaxed">
                  {{ guardian.idealApplication }}
                </p>
              </div>
              <div class="p-4 rounded-lg bg-surface-container-low/70 border border-gesso/60 space-y-1">
                <div class="text-xs font-semibold uppercase tracking-wider text-secondary">
                  Operational Strength
                </div>
                <p class="text-sm font-semibold text-primary">
                  {{ guardian.virtue }}
                </p>
                <p class="text-xs text-on-surface-variant tabular-nums">
                  {{ guardian.metric2Label }}: {{ guardian.metric2Value }} · SLA {{ guardian.latencySla }}
                </p>
              </div>
            </div>
          </div>

          <!-- Footer Actions -->
          <div class="px-6 py-4 bg-surface-container-low border-t border-gesso flex flex-wrap items-center justify-between gap-3 shrink-0">
            <button
              type="button"
              (click)="openInSummonConsole(guardian.id)"
              class="text-xs font-semibold uppercase tracking-wider text-secondary hover:text-primary transition-colors inline-flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>Configure in Summon Console</span>
              <mat-icon class="!text-[16px]">arrow_forward</mat-icon>
            </button>
            <div class="flex items-center gap-3">
              <button
                type="button"
                (click)="ui.closeDossier()"
                class="px-5 py-2.5 bg-surface-container-lowest text-primary border border-gesso text-xs font-semibold uppercase tracking-wider rounded hover:border-secondary transition-colors whitespace-nowrap"
              >
                Close
              </button>
              <button
                type="button"
                (click)="summonNow()"
                class="px-5 py-2.5 bg-primary text-on-primary text-xs font-semibold uppercase tracking-wider rounded hover:bg-primary-container transition-colors shadow-sm whitespace-nowrap inline-flex items-center gap-2"
              >
                <mat-icon class="!text-[16px]">bolt</mat-icon>
                <span>Summon {{ guardian.name }}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    }
  `,
})
export class GuardianDossierModal {
  protected readonly ui = inject(GuardianUiState);
  private readonly router = inject(Router);

  protected onEscape(): void {
    if (this.ui.activeDossier()) {
      this.ui.closeDossier();
    }
  }

  protected summonNow(): void {
    const guardian = this.ui.activeDossier();
    if (!guardian) return;
    this.ui.deploySingleNode(guardian);
    this.ui.closeDossier();
  }

  protected openInSummonConsole(guardianId: string): void {
    this.ui.closeDossier();
    void this.router.navigate(['/summon'], { queryParams: { guardian: guardianId } });
  }
}
