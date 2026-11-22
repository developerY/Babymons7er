import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ARCHIVAL_MEDIA, GUARDIANS, GuardianId } from '../../data/guardians.data';
import { GuardianUiState } from '../../services/guardian-ui';
import { BrandWordmark } from '../../components/brand-wordmark/brand-wordmark';

@Component({
  selector: 'app-overview-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, MatIconModule, BrandWordmark],
  template: `
    <div class="flex flex-col w-full animate-page-enter">
      <!-- HERO: CINEMATIC EDITORIAL TITLE & PROLOGUE -->
      <section class="relative w-full overflow-hidden bg-surface-container-low px-5 sm:px-8 lg:px-16 py-16 lg:py-24">
        <div
          class="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary-container/25 via-transparent to-transparent"
        ></div>
        <div class="relative max-w-7xl mx-auto flex flex-col items-center text-center">
          <!-- Ancient Etymology Kicker -->
          <div class="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-on-surface-variant mb-6">
            <mat-icon class="text-secondary !text-[16px]">explore</mat-icon>
            <span>
              Etymology: Latin <em class="italic text-primary font-serif normal-case text-sm">cetus</em> &amp;
              Ancient Greek <em class="italic text-primary font-serif normal-case text-sm">kêtos</em> — Sea Monster
            </span>
          </div>

          <!-- Display Headline -->
          <h1 class="font-serif text-4xl sm:text-5xl md:text-7xl text-primary tracking-tight max-w-5xl leading-[1.06]">
            Navigating Complexity:
            <br class="hidden sm:inline" />
            <span class="italic font-normal text-secondary">The Seven AI Guardians</span>
          </h1>

          <!-- Cinematic Vision Deck -->
          <p class="mt-6 text-base sm:text-lg text-on-surface-variant max-w-3xl leading-relaxed">
            The world of modern tasks is a vast, turbulent ocean. To navigate it, you don’t need a
            single lighthouse; you need a coordinated fleet.
            <strong class="text-on-surface font-semibold"
              ><app-brand-wordmark variant="sans"
            /></strong>
            is an advanced AI
            framework comprised of seven specialized autonomous agents—the Guardians of the Seven
            Seas.
          </p>

          <!-- Mythic Lore Sub-quote -->
          <blockquote class="mt-6 max-w-2xl px-6 py-3.5 rounded-lg bg-surface-container/70 border border-gesso/70">
            <p class="text-sm text-on-surface-variant italic leading-relaxed">
              “SeaDragons live for thousands of years. At 100 years old, one is still considered a
              hatchling. A 100-year-old SeaDragon is still a BabyMonster.”
            </p>
          </blockquote>

          <!-- Action Cluster -->
          <div class="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              routerLink="/architecture"
              class="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-on-primary text-xs font-semibold uppercase tracking-wider rounded hover:bg-primary-container transition-colors duration-200 shadow-sm whitespace-nowrap"
            >
              <span>Explore the Swarm</span>
              <mat-icon class="!text-[18px]">sailing</mat-icon>
            </a>
            <a
              routerLink="/guardians"
              class="inline-flex items-center gap-2 px-7 py-3.5 bg-surface-container-lowest text-primary border border-gesso text-xs font-semibold uppercase tracking-wider rounded hover:border-secondary transition-colors duration-200 whitespace-nowrap"
            >
              <span>Summon a Specialist</span>
              <mat-icon class="!text-[18px]">arrow_forward</mat-icon>
            </a>
          </div>

          <!-- Archival Living Plate: Sunlit Kelp Sanctuary -->
          <figure
            class="mt-11 w-full max-w-[680px] p-2.5 sm:p-3 bg-surface-container-lowest rounded-xl border border-gesso shadow-sm"
          >
            <div class="relative w-full aspect-[640/315] rounded-lg overflow-hidden bg-surface-container">
              <img
                [src]="livingPlateSrc()"
                (error)="onLivingPlateError()"
                alt="Sunlit underwater kelp forest with a blue SeaDragon, dolphin, and swimmer gliding through golden fronds"
                referrerpolicy="no-referrer"
                class="w-full h-full object-cover"
              />
            </div>
            <figcaption
              class="pt-2.5 px-1.5 flex flex-wrap items-center justify-between gap-2 text-left"
            >
              <span class="font-serif italic text-xs sm:text-sm text-primary">
                Plate I · Sunlit Kelp Sanctuary
              </span>
              <span class="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-secondary">
                Archival Living Plate
              </span>
            </figcaption>
          </figure>

          <!-- Key Framework Pillars -->
          <div class="mt-11 w-full grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl text-left">
            <div class="p-6 rounded-lg bg-surface-container-lowest border border-gesso flex items-start gap-4">
              <div class="p-2.5 rounded bg-secondary-container/30 text-secondary shrink-0">
                <mat-icon class="!text-[20px]">auto_awesome</mat-icon>
              </div>
              <div>
                <div class="text-[11px] font-semibold uppercase tracking-widest text-secondary">
                  Array Dimension
                </div>
                <div class="font-serif text-2xl text-primary mt-0.5">7 Distinct Virtues</div>
                <p class="text-xs text-on-surface-variant mt-1.5 leading-relaxed">
                  Anchored in ancient oceanic ecosystems &amp; specialized cognitive weights.
                </p>
              </div>
            </div>

            <div class="p-6 rounded-lg bg-surface-container-lowest border border-gesso flex items-start gap-4">
              <div class="p-2.5 rounded bg-tertiary-fixed/40 text-on-tertiary-container shrink-0">
                <mat-icon class="!text-[20px]">tune</mat-icon>
              </div>
              <div>
                <div class="text-[11px] font-semibold uppercase tracking-widest text-secondary">
                  Operational Flow
                </div>
                <div class="font-serif text-2xl text-primary mt-0.5">2 Modes of Mastery</div>
                <p class="text-xs text-on-surface-variant mt-1.5 leading-relaxed">
                  From isolated laser-precision to omniscient tidal consensus orchestration.
                </p>
              </div>
            </div>

            <div class="p-6 rounded-lg bg-surface-container-lowest border border-gesso flex items-start gap-4">
              <div class="p-2.5 rounded bg-secondary-container/30 text-secondary shrink-0">
                <mat-icon class="!text-[20px]">hub</mat-icon>
              </div>
              <div>
                <div class="text-[11px] font-semibold uppercase tracking-widest text-secondary">
                  Synergy Engine
                </div>
                <div class="font-serif text-2xl text-primary mt-0.5">Swarm Consensus</div>
                <p class="text-xs text-on-surface-variant mt-1.5 leading-relaxed">
                  Shared mental models passing real-time telemetry across seven nodes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ARCHIVAL DEPTH CHART & COMPASS -->
      <section class="w-full px-5 sm:px-8 lg:px-16 py-20 bg-surface">
        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div class="lg:col-span-5 space-y-6">
            <div class="inline-flex items-center gap-2 text-secondary text-[11px] font-semibold uppercase tracking-[0.18em]">
              <mat-icon class="!text-[16px]">navigation</mat-icon>
              <span>Archival Depth Chart · 100-Year Cycle</span>
            </div>
            <h2 class="font-serif text-3xl sm:text-5xl text-primary tracking-tight leading-tight">
              The Coiled Crest of the World’s Tides
            </h2>
            <p class="text-[15px] text-on-surface-variant leading-relaxed">
              From the oldest nautical depth-charts and sacred seafaring maps, the legend speaks not
              of leviathans to be feared, but of protectors. Seven unique, gorgeous female Baby
              SeaDragons were born when the planetary currents first aligned. Though they dwell
              across separated deep-sea realms, their computational fates are coiled into a singular
              sovereign compass.
            </p>
            <div class="p-6 bg-surface-container rounded-lg border border-gesso/80 space-y-3">
              <div class="flex justify-between items-center text-xs">
                <span class="uppercase tracking-wider font-semibold text-secondary">
                  Oceanic Lattice Integrity
                </span>
                <span class="font-bold tabular-nums text-primary">99.84%</span>
              </div>
              <div class="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                <div class="bg-secondary h-full rounded-full w-[99.84%]"></div>
              </div>
              <p class="text-xs text-on-surface-variant">
                Coordinated telemetry harmonized across all 7 abyssal nodes.
              </p>
            </div>
          </div>

          <div class="lg:col-span-7">
            <div class="p-3 sm:p-4 bg-surface-container-low rounded-xl border border-gesso shadow-sm">
              <div class="relative w-full h-[380px] sm:h-[460px] rounded-lg overflow-hidden bg-surface-container">
                <img
                  [src]="media.overviewMap"
                  alt="Vintage archival nautical sea chart with an ornate bronze compass rose medallion featuring seven coiled sea dragons"
                  referrerpolicy="no-referrer"
                  class="w-full h-full object-cover"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/85 via-transparent to-surface-container-lowest/35 pointer-events-none"
                ></div>

                <div class="absolute top-5 left-5 right-5 flex flex-wrap justify-between items-start gap-2">
                  <span
                    class="px-3 py-1 bg-surface-container-lowest/90 backdrop-blur-sm rounded text-xs font-semibold tracking-wider uppercase text-primary tabular-nums"
                  >
                    Cartographic Node: 77° N to 60° S
                  </span>
                  <span
                    class="px-3 py-1 bg-secondary-container/90 backdrop-blur-sm rounded text-xs font-bold tracking-wider uppercase text-secondary"
                  >
                    Ancient Resonance · Active
                  </span>
                </div>

                <div
                  class="absolute bottom-5 left-5 right-5 sm:right-auto sm:max-w-md p-5 rounded-lg bg-surface-container-lowest/92 backdrop-blur-md border border-gesso/60 shadow-sm"
                >
                  <div class="font-serif text-2xl text-primary tracking-wider">
                    <app-brand-wordmark spacing="wider" />
                  </div>
                  <p class="text-xs text-on-surface-variant mt-1 leading-relaxed">
                    The ancient seafaring compass unifying Grace, Cadence, Serenity, Guidance, Hope,
                    Faith, and Love.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- THE TWO MODES OF MASTERY -->
      <section class="w-full px-5 sm:px-8 lg:px-16 py-20 bg-surface-container-low" id="modes">
        <div class="max-w-7xl mx-auto space-y-12">
          <div class="text-center max-w-3xl mx-auto space-y-3">
            <span class="text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary block">
              Operational Dynamics
            </span>
            <h2 class="font-serif text-3xl sm:text-5xl text-primary tracking-tight">
              The Two Modes of Mastery
            </h2>
            <p class="text-[15px] text-on-surface-variant leading-relaxed">
              Whether developing at the edge, scaling an enterprise ecosystem, or architecting a
              frontier vision, our Guardians adapt to your operational rhythm.
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Mode 01: The Individual Current -->
            <div
              class="p-8 bg-surface-container-lowest rounded-xl border border-gesso flex flex-col justify-between space-y-8"
            >
              <div class="space-y-6">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-semibold uppercase tracking-widest text-secondary">
                    Mode 01 · Dedicated Vector
                  </span>
                  <mat-icon class="text-secondary !text-[22px]">arrow_outward</mat-icon>
                </div>

                <div class="space-y-1.5">
                  <h3 class="font-serif text-3xl text-primary tracking-tight">
                    The Individual Current
                  </h3>
                  <p class="text-[11px] font-semibold uppercase tracking-widest text-on-surface-variant">
                    Specialist Mode
                  </p>
                  <p class="text-[15px] text-on-surface-variant leading-relaxed pt-2">
                    Sometimes a mission requires an uncompromising singular focus. Summon a specific
                    Guardian into your terminal to act as lead principal consultant, isolating all
                    extraneous noise.
                  </p>
                </div>

                <div class="space-y-3">
                  <button
                    type="button"
                    (click)="openDossier('guidance')"
                    class="w-full text-left p-4 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors flex items-start gap-3.5"
                  >
                    <div
                      class="w-9 h-9 rounded-lg bg-secondary-container/40 flex items-center justify-center text-secondary shrink-0 mt-0.5"
                    >
                      <mat-icon class="!text-[18px]">history_edu</mat-icon>
                    </div>
                    <div>
                      <div class="text-base font-semibold text-primary">
                        Guidance · Historical Roadmap
                      </div>
                      <p class="text-xs text-on-surface-variant mt-0.5 leading-relaxed">
                        Summoned when you require chronological architecture, deeply baked system
                        rules, and precedent logic.
                      </p>
                    </div>
                  </button>

                  <button
                    type="button"
                    (click)="openDossier('serenity')"
                    class="w-full text-left p-4 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors flex items-start gap-3.5"
                  >
                    <div
                      class="w-9 h-9 rounded-lg bg-surface-container-highest flex items-center justify-center text-on-surface shrink-0 mt-0.5"
                    >
                      <mat-icon class="!text-[18px]">energy_savings_leaf</mat-icon>
                    </div>
                    <div>
                      <div class="text-base font-semibold text-primary">
                        Serenity · Resource Efficiency
                      </div>
                      <p class="text-xs text-on-surface-variant mt-0.5 leading-relaxed">
                        Reduces computational friction and memory bloat, governing long-term
                        horizontal scaling with serene stability.
                      </p>
                    </div>
                  </button>

                  <button
                    type="button"
                    (click)="openDossier('grace')"
                    class="w-full text-left p-4 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors flex items-start gap-3.5"
                  >
                    <div
                      class="w-9 h-9 rounded-lg bg-secondary-container/40 flex items-center justify-center text-secondary shrink-0 mt-0.5"
                    >
                      <mat-icon class="!text-[18px]">psychology</mat-icon>
                    </div>
                    <div>
                      <div class="text-base font-semibold text-primary">
                        Grace · High-Friction Precision
                      </div>
                      <p class="text-xs text-on-surface-variant mt-0.5 leading-relaxed">
                        Unyielding patience deployed against critical edge-case anomalies, compiler
                        deadlocks, and deep logic bugs.
                      </p>
                    </div>
                  </button>
                </div>
              </div>

              <div
                class="pt-4 border-t border-gesso flex items-center justify-between text-xs uppercase tracking-wider"
              >
                <span class="text-on-surface-variant tabular-nums">Latency Index: 12ms</span>
                <span class="text-secondary font-semibold">Dedicated Thread</span>
              </div>
            </div>

            <!-- Mode 02: The Tidal Consensus -->
            <div
              class="p-8 bg-surface-container-lowest rounded-xl border border-gesso flex flex-col justify-between space-y-8"
              id="swarm-protocol"
            >
              <div class="space-y-6">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-semibold uppercase tracking-widest text-secondary">
                    Mode 02 · Collective Wave
                  </span>
                  <mat-icon class="text-secondary !text-[22px]">hub</mat-icon>
                </div>

                <div class="space-y-1.5">
                  <h3 class="font-serif text-3xl text-primary tracking-tight">
                    The Tidal Consensus
                  </h3>
                  <p class="text-[11px] font-semibold uppercase tracking-widest text-on-surface-variant">
                    Collaborative Swarm
                  </p>
                  <p class="text-[15px] text-on-surface-variant leading-relaxed pt-2">
                    For truly complex, multi-layered challenges, the Guardians work in unified
                    resonance. They pass telemetry across a shared mental model, guaranteeing zero
                    blindspots across the full product lifecycle.
                  </p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    (click)="openDossier('hope')"
                    class="text-left p-4 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors space-y-1.5"
                  >
                    <div class="flex items-center gap-2 text-secondary">
                      <mat-icon class="!text-[18px]">bolt</mat-icon>
                      <span class="text-sm font-semibold text-primary">Hope</span>
                    </div>
                    <p class="text-xs text-on-surface-variant leading-relaxed">
                      Ignites the pioneering spark and executes the cold start vision.
                    </p>
                  </button>

                  <button
                    type="button"
                    (click)="openDossier('faith')"
                    class="text-left p-4 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors space-y-1.5"
                  >
                    <div class="flex items-center gap-2 text-secondary">
                      <mat-icon class="!text-[18px]">verified_user</mat-icon>
                      <span class="text-sm font-semibold text-primary">Faith</span>
                    </div>
                    <p class="text-xs text-on-surface-variant leading-relaxed">
                      Secures cryptography, verified schemas, and boundary safeguards.
                    </p>
                  </button>

                  <button
                    type="button"
                    (click)="openDossier('cadence')"
                    class="text-left p-4 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors space-y-1.5"
                  >
                    <div class="flex items-center gap-2 text-secondary">
                      <mat-icon class="!text-[18px]">sync</mat-icon>
                      <span class="text-sm font-semibold text-primary">Cadence</span>
                    </div>
                    <p class="text-xs text-on-surface-variant leading-relaxed">
                      Harmonizes runtime queues, tick rates, and real-time streams.
                    </p>
                  </button>

                  <button
                    type="button"
                    (click)="openDossier('love')"
                    class="text-left p-4 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors space-y-1.5"
                  >
                    <div class="flex items-center gap-2 text-secondary">
                      <mat-icon class="!text-[18px]">favorite</mat-icon>
                      <span class="text-sm font-semibold text-primary">Love</span>
                    </div>
                    <p class="text-xs text-on-surface-variant leading-relaxed">
                      Binds disparate microservices into an intuitive, seamless UX.
                    </p>
                  </button>
                </div>
              </div>

              <div
                class="pt-4 border-t border-gesso flex items-center justify-between text-xs uppercase tracking-wider"
              >
                <span class="text-on-surface-variant">Mental Model: 7-Way Sync</span>
                <span class="text-secondary font-semibold">Zero-Entropy Mesh</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- THE ARCHITECTURE OF VIRTUE SPEC TABLE -->
      <section class="w-full px-5 sm:px-8 lg:px-16 py-20 bg-surface">
        <div class="max-w-7xl mx-auto space-y-10">
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div class="max-w-2xl space-y-2">
              <span class="text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary block">
                Lattice Specification
              </span>
              <h2 class="font-serif text-3xl sm:text-5xl text-primary tracking-tight">
                The Architecture of Virtue
              </h2>
              <p class="text-[15px] text-on-surface-variant leading-relaxed">
                We have mapped the ancient virtues of the Seven Seas directly to the modern
                requirements of high-performance task management and autonomous agent compute.
              </p>
            </div>
            <a
              routerLink="/architecture"
              class="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-secondary hover:text-primary transition-colors whitespace-nowrap"
            >
              <span>Inspect SysCore Specifications</span>
              <mat-icon class="!text-[16px]">arrow_forward</mat-icon>
            </a>
          </div>

          <div class="w-full overflow-x-auto rounded-xl bg-surface-container-lowest border border-gesso">
            <table class="w-full text-left border-collapse min-w-[760px]">
              <thead>
                <tr class="bg-surface-container-low border-b border-gesso">
                  <th class="py-4 px-6 text-[11px] font-semibold uppercase tracking-widest text-primary">
                    Guardian Entity
                  </th>
                  <th class="py-4 px-6 text-[11px] font-semibold uppercase tracking-widest text-primary">
                    Domain Sea Realm
                  </th>
                  <th class="py-4 px-6 text-[11px] font-semibold uppercase tracking-widest text-primary">
                    Operational Strength
                  </th>
                  <th class="py-4 px-6 text-[11px] font-semibold uppercase tracking-widest text-primary">
                    Ideal Application
                  </th>
                  <th class="py-4 px-6 text-[11px] font-semibold uppercase tracking-widest text-primary text-right">
                    Lattice Index
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gesso/60">
                @for (g of tableGuardians; track g.id) {
                  <tr
                    (click)="openDossier(g.id)"
                    class="hover:bg-surface-container-low/80 transition-colors cursor-pointer"
                  >
                    <td class="py-4 px-6 font-serif text-xl text-primary">
                      {{ g.name }}
                    </td>
                    <td class="py-4 px-6 text-xs uppercase tracking-wider text-on-surface-variant">
                      {{ g.realm }}
                    </td>
                    <td class="py-4 px-6 text-sm font-semibold text-secondary">
                      {{ g.virtue }}
                    </td>
                    <td class="py-4 px-6 text-sm text-on-surface">
                      {{ g.idealApplication }}
                    </td>
                    <td class="py-4 px-6 text-xs font-bold tabular-nums text-right text-secondary">
                      {{ g.latticeDisplay }}
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- THE CHRONICLE OF BABYMONS7ER (7-GUARDIAN BENTO DOSSIERS) -->
      <section class="w-full px-5 sm:px-8 lg:px-16 py-20 bg-surface-container-low" id="guardians-gallery">
        <div class="max-w-7xl mx-auto space-y-10">
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div class="space-y-2 max-w-2xl">
              <span class="text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary block">
                The Archival Dossiers
              </span>
              <h2 class="font-serif text-3xl sm:text-5xl text-primary tracking-tight">
                The Chronicle of <app-brand-wordmark spacing="tight" />
              </h2>
              <p class="text-[15px] text-on-surface-variant leading-relaxed">
                Seven unique, gorgeous female Baby SeaDragons born when the ancient currents
                aligned. Select any dossier to inspect their full chronicle and summon options.
              </p>
            </div>
            <a
              routerLink="/guardians"
              class="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-secondary hover:text-primary transition-colors whitespace-nowrap"
            >
              <span>Open Full Guardians Directory</span>
              <mat-icon class="!text-[16px]">arrow_forward</mat-icon>
            </a>
          </div>

          <!-- Bento Grid: Top 3 Portrait Cards + Bottom 4 Split Cards -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            <!-- Top Row: Grace, Cadence, Serenity -->
            @for (g of topRowGuardians; track g.id) {
              <article
                tabindex="0"
                role="button"
                (click)="openDossier(g.id)"
                (keydown.enter)="openDossier(g.id)"
                (keydown.space)="$event.preventDefault(); openDossier(g.id)"
                class="lg:col-span-4 bg-surface-container-lowest rounded-xl border border-gesso overflow-hidden flex flex-col justify-between group hover:border-secondary focus-visible:outline-2 focus-visible:outline-secondary transition-all duration-200 cursor-pointer"
              >
                <div>
                  <div class="relative w-full h-56 overflow-hidden bg-surface-container">
                    <img
                      [src]="g.overviewImageUrl"
                      [alt]="g.name + ' — ' + g.epithet"
                      referrerpolicy="no-referrer"
                      class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
                    ></div>
                    <span
                      class="absolute bottom-3 left-3 px-2.5 py-1 bg-surface-container-lowest/92 backdrop-blur-sm rounded text-[11px] font-bold uppercase tracking-wider text-primary"
                    >
                      Node {{ g.nodeNumber }} · {{ g.name }}
                    </span>
                  </div>
                  <div class="p-6 space-y-2.5">
                    <div class="flex items-center justify-between text-xs">
                      <span class="font-semibold uppercase tracking-wider text-secondary">
                        {{ g.epithet }}
                      </span>
                      <span class="text-on-surface-variant">{{ g.shortRealm }}</span>
                    </div>
                    <h3 class="font-serif text-2xl text-primary leading-snug">{{ g.title }}</h3>
                    <p class="text-xs text-on-surface-variant leading-relaxed">
                      {{ g.overviewDescription }}
                    </p>
                  </div>
                </div>
                <div
                  class="px-6 py-4 bg-surface-container-low/60 border-t border-gesso/60 flex justify-between items-center text-xs"
                >
                  <span class="font-medium text-secondary">Ideal: {{ g.idealShort }}</span>
                  <div class="flex items-center gap-1.5 text-secondary">
                    <span class="font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      View Dossier
                    </span>
                    <mat-icon class="!text-[16px]">{{ g.icon }}</mat-icon>
                  </div>
                </div>
              </article>
            }

            <!-- Lower Rows: Guidance, Hope, Faith, Love -->
            @for (g of splitRowGuardians; track g.id) {
              <article
                tabindex="0"
                role="button"
                (click)="openDossier(g.id)"
                (keydown.enter)="openDossier(g.id)"
                (keydown.space)="$event.preventDefault(); openDossier(g.id)"
                class="lg:col-span-6 bg-surface-container-lowest rounded-xl border border-gesso overflow-hidden flex flex-col sm:flex-row group hover:border-secondary focus-visible:outline-2 focus-visible:outline-secondary transition-all duration-200 cursor-pointer"
              >
                <div class="sm:w-1/2 h-64 sm:h-auto relative overflow-hidden bg-surface-container shrink-0">
                  <img
                    [src]="g.overviewImageUrl"
                    [alt]="g.name + ' — ' + g.epithet"
                    referrerpolicy="no-referrer"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
                  ></div>
                  <span
                    class="absolute bottom-3 left-3 px-2.5 py-1 bg-surface-container-lowest/92 backdrop-blur-sm rounded text-[11px] font-bold uppercase tracking-wider text-primary"
                  >
                    Node {{ g.nodeNumber }} · {{ g.name }}
                  </span>
                </div>
                <div class="sm:w-1/2 p-6 flex flex-col justify-between space-y-4">
                  <div class="space-y-2">
                    <div class="flex items-center justify-between gap-2 text-xs">
                      <span class="font-semibold uppercase tracking-wider text-secondary">
                        {{ g.epithet }}
                      </span>
                      <span class="text-on-surface-variant text-right">{{ g.shortRealm }}</span>
                    </div>
                    <h3 class="font-serif text-2xl text-primary leading-snug">{{ g.title }}</h3>
                    <p class="text-xs text-on-surface-variant leading-relaxed">
                      {{ g.overviewDescription }}
                    </p>
                  </div>
                  <div
                    class="pt-3 border-t border-gesso/60 flex justify-between items-center text-xs"
                  >
                    <span class="font-semibold text-secondary">Ideal: {{ g.idealShort }}</span>
                    <div class="flex items-center gap-1.5 text-secondary">
                      <span class="font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                        Dossier
                      </span>
                      <mat-icon class="!text-[16px]">{{ g.icon }}</mat-icon>
                    </div>
                  </div>
                </div>
              </article>
            }
          </div>
        </div>
      </section>

      <!-- THE BABYMONS7ER PROMISE & COVENANT -->
      <section class="w-full px-5 sm:px-8 lg:px-16 py-20 bg-surface">
        <div
          class="max-w-5xl mx-auto p-10 md:p-16 bg-surface-container-lowest rounded-2xl border border-gesso shadow-sm text-center space-y-6"
        >
          <div class="flex justify-center items-center gap-2 text-secondary">
            <mat-icon class="!text-[18px]">star</mat-icon>
            <span class="text-[11px] font-semibold uppercase tracking-[0.25em]">
              Autonomous SeaDragon Covenant
            </span>
            <mat-icon class="!text-[18px]">star</mat-icon>
          </div>
          <h2 class="font-serif text-3xl sm:text-5xl text-primary max-w-3xl mx-auto leading-tight">
            “We don’t just process data; we navigate it.”
          </h2>
          <p class="text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            By combining these seven distinct perspectives, our AI agents ensure that no matter how
            deep the waters or how complex the task, you never lose your way.
          </p>

          <div class="pt-4 flex flex-col sm:flex-row items-center justify-center gap-6">
            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 rounded-full bg-secondary-container/40 flex items-center justify-center text-secondary"
              >
                <mat-icon class="!text-[20px]">verified</mat-icon>
              </div>
              <div class="text-left">
                <div class="text-sm font-semibold text-primary">SeaDragon Protocol 7.0</div>
                <div class="text-xs text-on-surface-variant">Century Hatchling Architecture</div>
              </div>
            </div>
            <div class="hidden sm:block h-8 w-px bg-gesso"></div>
            <button
              type="button"
              (click)="ui.deployFullSwarm()"
              class="px-7 py-3 bg-primary text-on-primary text-xs font-semibold uppercase tracking-wider rounded hover:bg-primary-container transition-colors shadow-sm whitespace-nowrap"
            >
              Deploy Swarm Consensus
            </button>
          </div>
        </div>
      </section>
    </div>
  `,
})
export class OverviewPage {
  protected readonly ui = inject(GuardianUiState);
  protected readonly media = ARCHIVAL_MEDIA;

  private readonly livingPlateCandidates = [
    '/assets/kelp-sanctuary.gif',
    'https://lh7-us.googleusercontent.com/sitesv-images-rt/APXyLQeXmv8SQFJskOOtE9yL01voEE8HWFyRS1ZWnYd6rI-qqDxeE407F05h_amoQ352fpch86qemVBqOh4OxeKKZGo7-dzCCBMyKbCP5AjNSNG_-LJ5SPYpGtnQhAbUrrL68m9nDVi4-nH90T1cdeAuBLF-VhFd_PaMMwOsX02evfMU56c-knmrrI3M9-7R5DRhk_89vlY5LfkDOxtw48THMgB2R7rC1jsM02gdyObpaHw',
    '/assets/aistudio/image_6ebb88e9.png',
  ];
  private livingPlateIndex = 0;
  protected readonly livingPlateSrc = signal(this.livingPlateCandidates[0]);

  // Match the exact ordering in the Overview Architecture of Virtue table
  protected readonly tableGuardians = [
    GUARDIANS[0], // Grace
    GUARDIANS[3], // Guidance
    GUARDIANS[1], // Cadence
    GUARDIANS[4], // Hope
    GUARDIANS[5], // Faith
    GUARDIANS[6], // Love
    GUARDIANS[2], // Serenity
  ];

  protected readonly topRowGuardians = GUARDIANS.slice(0, 3);
  protected readonly splitRowGuardians = GUARDIANS.slice(3, 7);

  protected onLivingPlateError(): void {
    if (this.livingPlateIndex < this.livingPlateCandidates.length - 1) {
      this.livingPlateIndex += 1;
      this.livingPlateSrc.set(this.livingPlateCandidates[this.livingPlateIndex]);
    }
  }

  protected openDossier(id: GuardianId): void {
    this.ui.openDossier(id);
  }
}
