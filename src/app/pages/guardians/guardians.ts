import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { GUARDIANS, Guardian, RealmFilter } from '../../data/guardians.data';
import { GuardianUiState } from '../../services/guardian-ui';

interface FilterOption {
  id: RealmFilter;
  label: string;
  count: number;
}

@Component({
  selector: 'app-guardians-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule],
  template: `
    <div class="flex flex-col w-full animate-page-enter">
      <!-- Top Editorial Header & Filter Bar -->
      <section class="w-full px-5 sm:px-8 lg:px-16 pt-12 pb-10">
        <div class="max-w-7xl mx-auto space-y-8">
          <!-- Quiet Metadata Strip -->
          <div class="flex flex-wrap items-center justify-between gap-4 text-xs text-on-surface-variant pb-4 border-b border-gesso">
            <span class="font-semibold uppercase tracking-widest text-secondary">
              Autonomous Agent Profiles · 7 Active Cores
            </span>
            <div class="flex items-center gap-3 tabular-nums">
              <span>Cognitive Matrix: <strong class="text-primary font-semibold">SeaDragon v7.4</strong></span>
              <span aria-hidden="true" class="hidden sm:inline text-outline-variant">·</span>
              <span class="hidden sm:inline">Equilibrium: <strong class="text-primary font-semibold">100.0% Nominal</strong></span>
            </div>
          </div>

          <!-- Asymmetric Editorial Hero Split -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div class="lg:col-span-7 space-y-2">
              <span class="text-[11px] font-semibold uppercase tracking-[0.26em] text-secondary block">
                Lattice Archetypes &amp; Cognitive Guardians
              </span>
              <h1 class="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-primary">
                The Seven AI Guardians
              </h1>
            </div>
            <div class="lg:col-span-5">
              <p class="text-base sm:text-lg text-on-surface-variant leading-relaxed">
                Seven specialized autonomous intelligence agents derived from ancient ocean realms.
                Each guardian embodies an irreproducible virtue, operational lattice, and distinct
                problem-solving cadence.
              </p>
            </div>
          </div>

          <!-- Interactive Domain Filter Tabs & Dynamic Cohesion Readout -->
          <div class="pt-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <div
              role="tablist"
              aria-label="Filter Guardians by realm"
              class="flex flex-wrap items-center gap-2"
            >
              @for (tab of filterOptions; track tab.id) {
                <button
                  type="button"
                  role="tab"
                  [attr.aria-selected]="activeFilter() === tab.id"
                  (click)="setFilter(tab.id)"
                  class="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-colors duration-200 border whitespace-nowrap focus-visible:outline-2 focus-visible:outline-secondary"
                  [class.bg-primary-container]="activeFilter() === tab.id"
                  [class.text-white]="activeFilter() === tab.id"
                  [class.border-secondary]="activeFilter() === tab.id"
                  [class.font-semibold]="activeFilter() === tab.id"
                  [class.bg-surface-container-low]="activeFilter() !== tab.id"
                  [class.text-on-surface-variant]="activeFilter() !== tab.id"
                  [class.border-gesso]="activeFilter() !== tab.id"
                  [class.hover:border-secondary]="activeFilter() !== tab.id"
                  [class.hover:text-primary]="activeFilter() !== tab.id"
                >
                  <span>{{ tab.label }}</span>
                  <span
                    class="text-[11px] tabular-nums px-1.5 py-0.5 rounded-full"
                    [class.bg-secondary]="activeFilter() === tab.id"
                    [class.text-white]="activeFilter() === tab.id"
                    [class.bg-surface-container-high]="activeFilter() !== tab.id"
                    [class.text-on-surface-variant]="activeFilter() !== tab.id"
                  >
                    {{ tab.count }}
                  </span>
                </button>
              }
            </div>

            <div class="flex flex-wrap items-center gap-4 text-xs tabular-nums">
              <div class="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-surface-container border border-gesso">
                <mat-icon class="text-secondary !text-[16px]">visibility</mat-icon>
                <span class="font-semibold text-on-surface">
                  Showing {{ filteredGuardians().length }} of {{ allGuardians.length }} Guardians
                </span>
              </div>
              <div class="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-surface-container-low border border-gesso">
                <span class="uppercase tracking-wider text-on-surface-variant text-[11px]">
                  Mean Cohesion:
                </span>
                <span class="font-bold text-secondary">Ψ {{ meanCohesion() }}</span>
                <span aria-hidden="true" class="text-outline-variant">·</span>
                <span class="text-on-surface-variant uppercase text-[11px]">
                  {{ filteredGuardians().length === 7 ? 'Full Harmony' : filteredGuardians().length + ' Subset Nominal' }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Deep Feature Guardian Dossier Cards -->
      <section class="w-full px-5 sm:px-8 lg:px-16 py-6">
        <div class="max-w-7xl mx-auto space-y-10">
          @for (g of filteredGuardians(); track g.id) {
            <article
              class="group bg-surface-container-lowest rounded-xl p-6 sm:p-10 border border-gesso hover:border-secondary/60 transition-all duration-300 animate-card-fade"
            >
              <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                <!-- Left Column: Portrait + Telemetry Sparkline -->
                <div class="lg:col-span-5 flex flex-col justify-between gap-4">
                  <div class="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-surface-container">
                    <img
                      [src]="g.portraitImageUrl"
                      [alt]="g.name + ' — ' + g.epithet"
                      referrerpolicy="no-referrer"
                      class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent"
                    ></div>
                    <div
                      class="absolute top-4 left-4 px-3 py-1 rounded bg-surface-container-lowest/92 backdrop-blur-sm"
                    >
                      <span class="text-[11px] font-bold uppercase tracking-wider text-primary">
                        {{ g.oceanRegionBadge }}
                      </span>
                    </div>
                    <div
                      class="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs"
                    >
                      <span class="uppercase tracking-wider font-medium">{{ g.subRealmLabel }}</span>
                      <span class="tabular-nums text-secondary-fixed font-medium">
                        {{ g.coordinates }}
                      </span>
                    </div>
                  </div>

                  <!-- Telemetry Sparkline Box -->
                  <div
                    class="p-4 rounded-lg bg-surface-container-low border border-gesso/60 flex items-center justify-between gap-4"
                  >
                    <div>
                      <span class="text-[11px] font-semibold uppercase tracking-wider text-on-surface-variant block">
                        {{ g.telemetryLabel }}
                      </span>
                      <span class="text-xs font-semibold tabular-nums text-primary">
                        {{ g.telemetryValue }}
                      </span>
                    </div>
                    @switch (g.sparklineType) {
                      @case ('rise') {
                        <svg class="w-24 h-8 text-secondary shrink-0" fill="none" viewBox="0 0 100 30" aria-hidden="true">
                          <path d="M0 25 L20 22 L40 18 L60 8 L80 12 L100 4" stroke="currentColor" stroke-linecap="round" stroke-width="2" />
                          <circle cx="100" cy="4" fill="currentColor" r="3" />
                        </svg>
                      }
                      @case ('wave') {
                        <svg class="w-24 h-8 text-secondary shrink-0" fill="none" viewBox="0 0 100 30" aria-hidden="true">
                          <path d="M0 15 Q 12.5 2, 25 15 T 50 15 T 75 15 T 100 15" stroke="currentColor" stroke-width="2" />
                        </svg>
                      }
                      @case ('bars') {
                        <svg class="w-24 h-8 text-secondary shrink-0" fill="none" viewBox="0 0 100 30" aria-hidden="true">
                          <rect fill="currentColor" height="14" opacity="0.4" width="10" x="10" y="14" />
                          <rect fill="currentColor" height="20" opacity="0.6" width="10" x="30" y="8" />
                          <rect fill="currentColor" height="24" opacity="0.8" width="10" x="50" y="4" />
                          <rect fill="currentColor" height="18" width="10" x="70" y="10" />
                        </svg>
                      }
                      @case ('trend') {
                        <svg class="w-24 h-8 text-secondary shrink-0" fill="none" viewBox="0 0 100 30" aria-hidden="true">
                          <path d="M5 25 L35 15 L65 18 L95 5" stroke="currentColor" stroke-width="2" />
                          <polygon fill="currentColor" points="90,5 95,5 95,10" />
                        </svg>
                      }
                      @case ('curve') {
                        <svg class="w-24 h-8 text-secondary shrink-0" fill="none" viewBox="0 0 100 30" aria-hidden="true">
                          <path d="M0 28 C 30 28, 50 15, 70 8 L 100 2" stroke="currentColor" stroke-width="2" />
                          <polygon fill="currentColor" points="95,0 100,2 96,7" />
                        </svg>
                      }
                      @case ('nodes') {
                        <svg class="w-24 h-8 text-secondary shrink-0" fill="none" viewBox="0 0 100 30" aria-hidden="true">
                          <circle cx="20" cy="15" r="6" stroke="currentColor" stroke-width="2" />
                          <circle cx="50" cy="15" r="6" stroke="currentColor" stroke-width="2" />
                          <circle cx="80" cy="15" r="6" stroke="currentColor" stroke-width="2" />
                          <path d="M26 15 L44 15 M56 15 L74 15" stroke="currentColor" stroke-width="2" />
                        </svg>
                      }
                      @case ('infinity') {
                        <svg class="w-24 h-8 text-secondary shrink-0" fill="none" viewBox="0 0 100 30" aria-hidden="true">
                          <path d="M5 15 C 25 5, 25 25, 50 15 C 75 5, 75 25, 95 15" stroke="currentColor" stroke-width="2" />
                          <circle cx="50" cy="15" fill="currentColor" r="4" />
                        </svg>
                      }
                    }
                  </div>
                </div>

                <!-- Right Column: Dossier Details -->
                <div class="lg:col-span-7 flex flex-col justify-between space-y-6">
                  <div>
                    <div class="flex flex-wrap items-center justify-between gap-2 pb-2">
                      <span class="text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary">
                        {{ g.realm }}
                      </span>
                      <span class="text-xs font-bold tabular-nums text-secondary">
                        Lattice Index: {{ g.latticeDisplay }}
                      </span>
                    </div>

                    <h2 class="font-serif text-3xl sm:text-4xl text-primary tracking-tight">
                      {{ g.name }}
                    </h2>
                    <p class="text-base font-semibold text-secondary mt-1">“{{ g.title }}”</p>

                    <div class="mt-4 space-y-3 text-[15px] text-on-surface-variant leading-relaxed">
                      <p>{{ g.dossierDescription }}</p>
                      <p>
                        <strong class="text-primary font-semibold">Specialty:</strong>
                        {{ g.specialtyDescription }}
                      </p>
                    </div>

                    <!-- 3 Operational Metric Tiles -->
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6">
                      <div class="p-3.5 rounded-lg bg-surface-container-low">
                        <span class="text-[11px] font-semibold uppercase tracking-wider text-on-surface-variant block">
                          {{ g.metric1Label }}
                        </span>
                        <span class="text-sm font-semibold text-primary mt-0.5 block">
                          {{ g.metric1Value }}
                        </span>
                      </div>
                      <div class="p-3.5 rounded-lg bg-surface-container-low">
                        <span class="text-[11px] font-semibold uppercase tracking-wider text-on-surface-variant block">
                          {{ g.metric2Label }}
                        </span>
                        <span class="text-sm font-semibold tabular-nums text-primary mt-0.5 block">
                          {{ g.metric2Value }}
                        </span>
                      </div>
                      <div class="p-3.5 rounded-lg bg-surface-container-low col-span-2 sm:col-span-1">
                        <span class="text-[11px] font-semibold uppercase tracking-wider text-on-surface-variant block">
                          {{ g.metric3Label }}
                        </span>
                        <span class="text-sm font-semibold text-primary mt-0.5 block">
                          {{ g.metric3Value }}
                        </span>
                      </div>
                    </div>
                  </div>

                  <!-- Actions -->
                  <div class="pt-4 border-t border-gesso/70 flex flex-wrap items-center justify-between gap-4">
                    <button
                      type="button"
                      (click)="ui.openDossier(g.id)"
                      class="text-xs font-semibold uppercase tracking-wider text-secondary hover:text-primary transition-colors inline-flex items-center gap-1.5 group/link whitespace-nowrap"
                    >
                      <span>View Full Archival File</span>
                      <mat-icon class="!text-[16px] transition-transform group-hover/link:translate-x-1">
                        arrow_forward
                      </mat-icon>
                    </button>
                    <button
                      type="button"
                      (click)="summonSingle(g)"
                      class="px-5 py-2.5 rounded bg-primary text-on-primary text-xs font-semibold uppercase tracking-wider hover:bg-primary-container transition-colors shadow-sm whitespace-nowrap inline-flex items-center gap-2"
                    >
                      <mat-icon class="!text-[16px]">bolt</mat-icon>
                      <span>Initialize Node Session</span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          }
        </div>
      </section>

      <!-- Cross-Domain Competency Matrix & Septet Swarm Banner -->
      <section class="w-full px-5 sm:px-8 lg:px-16 py-16">
        <div class="max-w-7xl mx-auto space-y-10">
          <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span class="text-[11px] font-semibold uppercase tracking-[0.22em] text-secondary block">
                Cross-Domain Competency Matrix
              </span>
              <h2 class="font-serif text-3xl text-primary mt-1">
                Operational Co-Efficiency Benchmarks
              </h2>
            </div>
            <span class="text-xs font-medium uppercase tracking-wider text-on-surface-variant">
              Telemetry Pool · All 7 Guardian Cores
            </span>
          </div>

          <div class="bg-surface-container-lowest rounded-xl border border-gesso overflow-hidden">
            <div class="overflow-x-auto">
              <table class="w-full text-left min-w-[740px]">
                <thead>
                  <tr class="bg-surface-container-low border-b border-gesso text-on-surface-variant text-[11px] font-semibold uppercase tracking-wider">
                    <th class="py-4 px-6">Guardian Core</th>
                    <th class="py-4 px-6">Domain Archetype</th>
                    <th class="py-4 px-6">Operational Specialty</th>
                    <th class="py-4 px-6 text-center">Lattice Weight</th>
                    <th class="py-4 px-6 text-right">Node Protocol</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gesso/60 text-sm text-on-surface">
                  @for (g of allGuardians; track g.id) {
                    <tr class="hover:bg-surface-container-low/60 transition-colors">
                      <td class="py-4 px-6 font-semibold text-primary">
                        {{ g.name }} <span class="text-on-surface-variant font-normal">({{ g.nodeNumber }})</span>
                      </td>
                      <td class="py-4 px-6 text-on-surface-variant">{{ g.realm }}</td>
                      <td class="py-4 px-6">{{ g.idealApplication }}</td>
                      <td class="py-4 px-6 text-xs font-bold tabular-nums text-center text-secondary">
                        {{ g.latticeDisplay }}
                      </td>
                      <td class="py-4 px-6 text-right">
                        <button
                          type="button"
                          (click)="summonSingle(g)"
                          class="text-[11px] font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded bg-surface-container-high text-primary hover:bg-primary hover:text-on-primary transition-colors whitespace-nowrap"
                        >
                          Summon {{ g.nodeNumber }}
                        </button>
                      </td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>
          </div>

          <!-- Unified Swarm Consensus Banner -->
          <div class="relative bg-primary-container text-on-primary rounded-xl p-8 sm:p-12 overflow-hidden">
            <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div class="lg:col-span-8 space-y-3">
                <span class="text-xs font-semibold uppercase tracking-[0.2em] text-secondary-fixed block">
                  Autonomous Collective Invocations
                </span>
                <h3 class="font-serif text-3xl sm:text-4xl text-white tracking-tight">
                  Deploy the Complete Septet Swarm
                </h3>
                <p class="text-[15px] text-primary-fixed-dim max-w-2xl leading-relaxed">
                  Activate the synchronous execution matrix across all seven oceanic nodes. In full
                  swarm mode, Grace’s precision, Cadence’s pulse, Serenity’s calm, Guidance’s
                  precedent, Hope’s velocity, Faith’s security, and Love’s synthesis operate as a
                  singular hyper-intelligent engine.
                </p>
              </div>
              <div class="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center gap-3">
                <button
                  type="button"
                  (click)="ui.deployFullSwarm()"
                  class="w-full sm:w-auto px-7 py-3.5 bg-surface-container-lowest text-primary text-xs font-bold uppercase tracking-widest rounded hover:bg-surface-container transition-colors shadow-md whitespace-nowrap"
                >
                  Engage Swarm Consensus
                </button>
                <span class="text-xs tabular-nums text-primary-fixed-dim">
                  Estimated time to full harmony: 420ms
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
})
export class GuardiansPage {
  protected readonly ui = inject(GuardianUiState);
  protected readonly allGuardians = GUARDIANS;
  protected readonly activeFilter = signal<RealmFilter>('all');

  protected readonly filterOptions: FilterOption[] = [
    { id: 'all', label: 'All Guardians', count: 7 },
    { id: 'polar', label: 'Polar & Deep Oceanic', count: 3 },
    { id: 'equatorial', label: 'Warm & Equatorial', count: 2 },
    { id: 'ancient', label: 'Ancient & Ridge', count: 2 },
  ];

  protected readonly filteredGuardians = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'all') {
      return this.allGuardians;
    }
    return this.allGuardians.filter((g) => g.filterCategory === filter);
  });

  protected readonly meanCohesion = computed(() => {
    const list = this.filteredGuardians();
    if (!list.length) return '0.0000';
    const avg = list.reduce((sum, g) => sum + g.latticeWeight, 0) / list.length;
    return avg.toFixed(4);
  });

  protected setFilter(filter: RealmFilter): void {
    this.activeFilter.set(filter);
  }

  protected summonSingle(guardian: Guardian): void {
    this.ui.deploySingleNode(guardian);
  }
}
