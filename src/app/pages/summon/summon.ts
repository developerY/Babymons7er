import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { GUARDIANS, GuardianId, getGuardianById } from '../../data/guardians.data';
import { DispatchSession, GuardianUiState } from '../../services/guardian-ui';

@Component({
  selector: 'app-summon-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, MatIconModule],
  template: `
    <div class="flex flex-col w-full animate-page-enter">
      <!-- Top Editorial Header -->
      <section class="w-full px-5 sm:px-8 lg:px-16 pt-12 pb-10 bg-surface">
        <div class="max-w-7xl mx-auto space-y-6">
          <div class="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-gesso text-xs">
            <span class="font-semibold uppercase tracking-[0.22em] text-secondary">
              Executive Dispatch Console · SeaDragon Protocol
            </span>
            <span class="text-on-surface-variant tabular-nums">
              Active Sessions: <strong class="text-primary font-semibold">{{ ui.sessions().length }}</strong>
            </span>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div class="lg:col-span-7 space-y-2">
              <h1 class="font-serif text-4xl sm:text-5xl lg:text-6xl text-primary tracking-tight">
                Summon the Guardians
              </h1>
              <p class="text-base sm:text-lg text-on-surface-variant leading-relaxed">
                Allocate a dedicated specialist Guardian or engage the full Seven-Way Tidal
                Consensus directly to your engineering enclave.
              </p>
            </div>
            <div class="lg:col-span-5 flex lg:justify-end">
              <div class="inline-flex p-1 rounded-lg bg-surface-container-high border border-gesso">
                <button
                  type="button"
                  (click)="mode.set('individual')"
                  class="px-4 py-2 rounded-md text-xs font-semibold uppercase tracking-wider transition-colors whitespace-nowrap"
                  [class.bg-surface-container-lowest]="mode() === 'individual'"
                  [class.text-primary]="mode() === 'individual'"
                  [class.shadow-sm]="mode() === 'individual'"
                  [class.text-on-surface-variant]="mode() !== 'individual'"
                >
                  Individual Current
                </button>
                <button
                  type="button"
                  (click)="mode.set('swarm')"
                  class="px-4 py-2 rounded-md text-xs font-semibold uppercase tracking-wider transition-colors whitespace-nowrap"
                  [class.bg-surface-container-lowest]="mode() === 'swarm'"
                  [class.text-primary]="mode() === 'swarm'"
                  [class.shadow-sm]="mode() === 'swarm'"
                  [class.text-on-surface-variant]="mode() !== 'swarm'"
                >
                  Tidal Consensus (All 7)
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Main Dispatch Workspace -->
      <section class="w-full px-5 sm:px-8 lg:px-16 py-8">
        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <!-- Left 7 Columns: Selector + Directive Form -->
          <div class="lg:col-span-7 space-y-8">
            <!-- Guardian Selector (when Individual mode) -->
            @if (mode() === 'individual') {
              <div class="bg-surface-container-lowest p-6 sm:p-8 rounded-xl border border-gesso space-y-5">
                <div class="flex items-center justify-between">
                  <div>
                    <span class="text-[11px] font-semibold uppercase tracking-widest text-secondary block">
                      Step 01 · Select Specialist Node
                    </span>
                    <h2 class="font-serif text-2xl text-primary mt-0.5">Choose a Guardian</h2>
                  </div>
                  <button
                    type="button"
                    (click)="ui.openDossier(selectedGuardianId())"
                    class="text-xs font-semibold uppercase tracking-wider text-secondary hover:text-primary transition-colors whitespace-nowrap"
                  >
                    Inspect Dossier →
                  </button>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  @for (g of guardians; track g.id) {
                    <button
                      type="button"
                      (click)="selectedGuardianId.set(g.id)"
                      class="p-3.5 rounded-lg border text-left transition-all flex items-center gap-3.5 focus-visible:outline-2 focus-visible:outline-secondary"
                      [class.border-secondary]="selectedGuardianId() === g.id"
                      [class.bg-surface-container-low]="selectedGuardianId() === g.id"
                      [class.border-gesso]="selectedGuardianId() !== g.id"
                      [class.hover:border-outline-variant]="selectedGuardianId() !== g.id"
                    >
                      <img
                        [src]="g.overviewImageUrl"
                        [alt]="g.name"
                        referrerpolicy="no-referrer"
                        class="w-12 h-12 rounded-md object-cover shrink-0 bg-surface-container"
                      />
                      <div class="min-w-0 flex-1">
                        <div class="flex items-center justify-between gap-2">
                          <span class="font-semibold text-sm text-primary truncate">
                            {{ g.name }}
                          </span>
                          <span class="text-[11px] font-bold tabular-nums text-secondary shrink-0">
                            {{ g.latticeDisplay }}
                          </span>
                        </div>
                        <p class="text-xs text-on-surface-variant truncate mt-0.5">
                          {{ g.virtue }} · {{ g.shortRealm }}
                        </p>
                      </div>
                    </button>
                  }
                </div>
              </div>
            } @else {
              <div class="bg-primary text-on-primary p-6 sm:p-8 rounded-xl space-y-4">
                <div class="flex items-center justify-between">
                  <span class="text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary-fixed">
                    Mode 02 · Full Septet Engaged
                  </span>
                  <span class="text-xs font-semibold tabular-nums text-secondary-fixed">
                    7 / 7 Cores Locked
                  </span>
                </div>
                <h2 class="font-serif text-3xl text-white">The Tidal Consensus Mesh</h2>
                <p class="text-sm text-primary-fixed-dim leading-relaxed">
                  Grace, Cadence, Serenity, Guidance, Hope, Faith, and Love will execute in
                  synchronous seven-way verification with ECDSA attestation on every frame.
                </p>
                <div class="flex flex-wrap gap-2 pt-1">
                  @for (g of guardians; track g.id) {
                    <span class="px-2.5 py-1 rounded bg-white/10 text-xs text-white font-medium">
                      {{ g.nodeNumber }} · {{ g.name }}
                    </span>
                  }
                </div>
              </div>
            }

            <!-- Mission Directive Form -->
            <form
              [formGroup]="dispatchForm"
              (ngSubmit)="onSubmit()"
              novalidate
              class="bg-surface-container-lowest p-6 sm:p-8 rounded-xl border border-gesso space-y-6"
            >
              <div>
                <span class="text-[11px] font-semibold uppercase tracking-widest text-secondary block">
                  Step 02 · Mission Specification
                </span>
                <h2 class="font-serif text-2xl text-primary mt-0.5">Dispatch Directive</h2>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div class="space-y-1.5">
                  <label for="operator-name" class="block text-xs font-semibold uppercase tracking-wider text-on-surface">
                    Operator Name
                  </label>
                  <input
                    id="operator-name"
                    type="text"
                    formControlName="operatorName"
                    placeholder="Elena Vance"
                    class="w-full h-11 px-3.5 rounded bg-surface-container-lowest border border-gesso text-sm text-primary focus:outline-none focus:border-secondary"
                  />
                  @if (dispatchForm.controls.operatorName.touched && dispatchForm.controls.operatorName.invalid) {
                    <p class="text-xs text-error">Please enter an operator or team name.</p>
                  }
                </div>

                <div class="space-y-1.5">
                  <label for="operator-email" class="block text-xs font-semibold uppercase tracking-wider text-on-surface">
                    Enterprise Email
                  </label>
                  <input
                    id="operator-email"
                    type="email"
                    formControlName="email"
                    placeholder="elena@oceanic-systems.io"
                    class="w-full h-11 px-3.5 rounded bg-surface-container-lowest border border-gesso text-sm text-primary focus:outline-none focus:border-secondary"
                  />
                  @if (dispatchForm.controls.email.touched && dispatchForm.controls.email.invalid) {
                    <p class="text-xs text-error">Enter a valid enterprise email address.</p>
                  }
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div class="space-y-1.5">
                  <label for="enclave-select" class="block text-xs font-semibold uppercase tracking-wider text-on-surface">
                    Target Enclave
                  </label>
                  <select
                    id="enclave-select"
                    formControlName="enclave"
                    class="w-full h-11 px-3.5 rounded bg-surface-container-lowest border border-gesso text-sm text-primary focus:outline-none focus:border-secondary"
                  >
                    <option value="Abyssal Station Ivory">Abyssal Station Ivory (Global)</option>
                    <option value="North Atlantic Ice Shelf">North Atlantic Shelf (EU-North)</option>
                    <option value="Mediterranean Archive">Mediterranean Archive (EU-South)</option>
                    <option value="Pacific Mariana Core">Pacific Mariana Core (APAC)</option>
                  </select>
                </div>

                <div class="space-y-1.5">
                  <label for="sla-select" class="block text-xs font-semibold uppercase tracking-wider text-on-surface">
                    Latency Ceiling
                  </label>
                  <select
                    id="sla-select"
                    formControlName="sla"
                    class="w-full h-11 px-3.5 rounded bg-surface-container-lowest border border-gesso text-sm text-primary focus:outline-none focus:border-secondary"
                  >
                    <option value="Ultra-Low (< 15ms)">Ultra-Low (&lt; 15ms)</option>
                    <option value="Standard (< 45ms)">Standard (&lt; 45ms)</option>
                    <option value="Deep Archival Audit">Deep Archival Audit</option>
                  </select>
                </div>
              </div>

              <div class="space-y-1.5">
                <label for="directive-input" class="block text-xs font-semibold uppercase tracking-wider text-on-surface">
                  Operational Directive
                </label>
                <textarea
                  id="directive-input"
                  rows="4"
                  formControlName="directive"
                  placeholder="Describe the architectural challenge, deadlock audit, or synchronization workflow..."
                  class="w-full p-3.5 rounded bg-surface-container-lowest border border-gesso text-sm text-primary leading-relaxed focus:outline-none focus:border-secondary"
                ></textarea>
                @if (dispatchForm.controls.directive.touched && dispatchForm.controls.directive.invalid) {
                  <p class="text-xs text-error">Please provide at least 12 characters describing your mission.</p>
                }
              </div>

              <div class="pt-2 flex flex-wrap items-center justify-between gap-4">
                <span class="text-xs text-on-surface-variant">
                  Hardware Enclave Attestation · Zero Resident State
                </span>
                <button
                  type="submit"
                  class="px-7 py-3 bg-primary text-on-primary text-xs font-semibold uppercase tracking-wider rounded hover:bg-primary-container transition-colors shadow-sm inline-flex items-center gap-2 whitespace-nowrap"
                >
                  <mat-icon class="!text-[16px]">bolt</mat-icon>
                  <span>
                    {{ mode() === 'swarm' ? 'Engage Full Swarm' : 'Dispatch ' + selectedGuardian().name }}
                  </span>
                </button>
              </div>
            </form>
          </div>

          <!-- Right 5 Columns: Latest Receipt & Live Session Ledger -->
          <div class="lg:col-span-5 space-y-6">
            @if (latestReceipt(); as receipt) {
              <div class="bg-surface-container-lowest p-6 rounded-xl border border-secondary space-y-4 animate-card-fade">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2 text-secondary">
                    <mat-icon class="!text-[20px]">verified</mat-icon>
                    <span class="text-xs font-bold uppercase tracking-widest">
                      Dispatch Attested
                    </span>
                  </div>
                  <span class="text-xs font-bold tabular-nums text-primary">{{ receipt.id }}</span>
                </div>
                <p class="text-sm text-on-surface leading-relaxed">
                  {{ receipt.directive }}
                </p>
                <div class="grid grid-cols-2 gap-3 pt-2 border-t border-gesso text-xs tabular-nums">
                  <div>
                    <span class="text-on-surface-variant block">Allocated Core</span>
                    <span class="font-semibold text-primary">{{ receipt.guardians.join(', ') }}</span>
                  </div>
                  <div>
                    <span class="text-on-surface-variant block">ECDSA Stamp</span>
                    <span class="font-semibold text-secondary">{{ receipt.signature }}</span>
                  </div>
                </div>
              </div>
            }

            <!-- Live Archival Session Ledger -->
            <div class="bg-surface-container-lowest p-6 sm:p-8 rounded-xl border border-gesso space-y-5">
              <div class="flex items-center justify-between">
                <div>
                  <span class="text-[11px] font-semibold uppercase tracking-widest text-secondary block">
                    Archival Register
                  </span>
                  <h2 class="font-serif text-2xl text-primary mt-0.5">Active Session Ledger</h2>
                </div>
                <span class="text-xs font-semibold tabular-nums text-on-surface-variant">
                  {{ ui.sessions().length }} Records
                </span>
              </div>

              <div class="divide-y divide-gesso">
                @for (session of ui.sessions(); track session.id) {
                  <div class="py-4 first:pt-0 last:pb-0 space-y-2">
                    <div class="flex items-center justify-between gap-2 text-xs">
                      <span class="font-bold tabular-nums text-secondary">
                        {{ session.id }} · {{ session.guardians.join(', ') }}
                      </span>
                      <span class="text-on-surface-variant tabular-nums">{{ session.latencyMs }}</span>
                    </div>
                    <p class="text-xs text-on-surface leading-relaxed">
                      {{ session.directive }}
                    </p>
                    <div class="flex items-center justify-between text-[11px] text-on-surface-variant">
                      <span>{{ session.enclave }} · {{ session.operator }}</span>
                      <span class="font-mono tabular-nums">{{ session.signature }}</span>
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
})
export class SummonPage implements OnInit {
  protected readonly ui = inject(GuardianUiState);
  private readonly route = inject(ActivatedRoute);

  protected readonly guardians = GUARDIANS;
  protected readonly mode = signal<'individual' | 'swarm'>('individual');
  protected readonly selectedGuardianId = signal<GuardianId>('grace');
  protected readonly latestReceipt = signal<DispatchSession | null>(null);

  protected readonly selectedGuardian = computed(() =>
    getGuardianById(this.selectedGuardianId())
  );

  protected readonly dispatchForm = new FormGroup({
    operatorName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(2)],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    enclave: new FormControl('Abyssal Station Ivory', { nonNullable: true }),
    sla: new FormControl('Ultra-Low (< 15ms)', { nonNullable: true }),
    directive: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(12)],
    }),
  });

  ngOnInit(): void {
    const paramGuardian = this.route.snapshot.queryParamMap.get('guardian');
    if (paramGuardian && GUARDIANS.some((g) => g.id === paramGuardian)) {
      this.selectedGuardianId.set(paramGuardian as GuardianId);
      this.mode.set('individual');
    }
  }

  protected onSubmit(): void {
    if (this.dispatchForm.invalid) {
      this.dispatchForm.markAllAsTouched();
      return;
    }

    const { operatorName, enclave, directive } = this.dispatchForm.getRawValue();
    const session = this.ui.recordCustomDispatch({
      mode: this.mode(),
      guardian: this.selectedGuardian(),
      enclave,
      directive,
      operator: operatorName,
    });
    this.latestReceipt.set(session);
    this.dispatchForm.controls.directive.reset('');
  }
}
