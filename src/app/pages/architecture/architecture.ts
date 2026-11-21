import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ARCHIVAL_MEDIA, GUARDIANS, GuardianId, getGuardianById } from '../../data/guardians.data';
import { GuardianUiState } from '../../services/guardian-ui';
import { BrandWordmark } from '../../components/brand-wordmark/brand-wordmark';

type ScenarioId = 'guidance' | 'serenity' | 'grace';
type CodeTabId = 'cli' | 'rest' | 'ws';

interface FieldScenario {
  id: ScenarioId;
  tabLabel: string;
  node: string;
  domain: string;
  title: string;
  description: string;
  metric1Label: string;
  metric1Value: string;
  metric2Label: string;
  metric2Value: string;
  metric3Label: string;
  metric3Value: string;
  terminalLines: { text: string; tone: 'gold' | 'muted' | 'normal' | 'accent' }[];
}

@Component({
  selector: 'app-architecture-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule, BrandWordmark],
  template: `
    <div class="flex flex-col w-full animate-page-enter">
      <!-- Top Technical Header -->
      <section class="w-full px-5 sm:px-8 lg:px-16 pt-12 pb-14 bg-surface">
        <div class="max-w-7xl mx-auto space-y-8">
          <div class="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-gesso text-xs">
            <span class="font-semibold uppercase tracking-[0.22em] text-secondary">
              Technical Foundation · System Architecture
            </span>
            <span class="text-on-surface-variant tabular-nums">
              Specification Revision: <strong class="text-primary font-semibold">Lattice 7.04 SeaDragon</strong>
            </span>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div class="lg:col-span-8 space-y-3">
              <h1 class="font-serif text-4xl sm:text-5xl lg:text-6xl text-primary tracking-tight">
                Architecture &amp; SysCore Framework
              </h1>
              <p class="text-base sm:text-lg text-on-surface-variant max-w-3xl leading-relaxed">
                How modern high-concurrency tasks are transformed through oceanic lattice
                engineering, specialist agents, and seven-way swarm consensus.
              </p>
            </div>
            <div class="lg:col-span-4 bg-surface-container-lowest p-6 rounded-xl border border-gesso space-y-3">
              <div class="flex justify-between items-baseline text-xs">
                <span class="uppercase tracking-wider font-semibold text-on-surface-variant">
                  Lattice Operational State
                </span>
                <span class="font-semibold text-secondary">Nominal</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="h-1.5 flex-1 bg-surface-container-high rounded-full overflow-hidden">
                  <div class="h-full bg-secondary rounded-full w-[99.84%]"></div>
                </div>
                <span class="text-xs font-bold tabular-nums text-primary">99.84%</span>
              </div>
              <p class="text-xs text-on-surface-variant tabular-nums">
                Synchronized across 7 Abyssal Cores · Latency: 14.2ms
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Hydrological Cognitive Fabric Banner -->
      <section class="w-full px-5 sm:px-8 lg:px-16">
        <div class="max-w-7xl mx-auto overflow-hidden rounded-xl bg-surface-container-lowest border border-gesso">
          <div class="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div class="lg:col-span-7 p-8 lg:p-10 flex flex-col justify-between space-y-8">
              <div class="space-y-3">
                <span class="text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary block">
                  Dialectic Dual-Mode Compute Engine
                </span>
                <h2 class="font-serif text-3xl sm:text-4xl text-primary">
                  Hydrological Cognitive Fabric
                </h2>
                <p class="text-[15px] text-on-surface-variant leading-relaxed">
                  Traditional multi-agent frameworks suffer from thread collision and recursive
                  drift. The SeaDragon architecture partitions cognitive load into two complementary
                  operational hydro-dynamics: focused single-agent currents and the full-depth tidal
                  consensus.
                </p>
              </div>
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div class="p-4 bg-surface-container-low rounded-lg">
                  <span class="text-[11px] uppercase tracking-wider text-on-surface-variant block">
                    Mesh Topology
                  </span>
                  <span class="text-base font-semibold text-primary mt-0.5 block">
                    7-Way Hypermesh
                  </span>
                </div>
                <div class="p-4 bg-surface-container-low rounded-lg">
                  <span class="text-[11px] uppercase tracking-wider text-on-surface-variant block">
                    State Epoch
                  </span>
                  <span class="text-base font-semibold tabular-nums text-primary mt-0.5 block">
                    2.4 Milliseconds
                  </span>
                </div>
                <div class="p-4 bg-surface-container-low rounded-lg col-span-2 sm:col-span-1">
                  <span class="text-[11px] uppercase tracking-wider text-on-surface-variant block">
                    Verification Ring
                  </span>
                  <span class="text-base font-semibold text-secondary mt-0.5 block">
                    Zero Blindspot
                  </span>
                </div>
              </div>
            </div>

            <div class="lg:col-span-5 relative min-h-[280px] bg-surface-container-high overflow-hidden">
              <img
                [src]="media.architectureFabric"
                alt="Architectural titanium telemetry modules submerged in pale aquamarine shallow seawater"
                referrerpolicy="no-referrer"
                class="w-full h-full object-cover"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-surface-container-lowest/70 via-transparent to-transparent"
              ></div>
              <div
                class="absolute bottom-4 right-4 bg-surface-container-lowest/92 backdrop-blur-sm px-3 py-1.5 rounded text-[11px] font-semibold uppercase tracking-wider text-on-surface"
              >
                Fig. 07 · Deep Core Junction
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Deep Dive: Two Modes of Mastery -->
      <section class="w-full px-5 sm:px-8 lg:px-16 py-20">
        <div class="max-w-7xl mx-auto space-y-20">
          <!-- SECTION 01: The Individual Current -->
          <div class="space-y-8">
            <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span class="text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary block">
                  01. Sub-System Modes
                </span>
                <h3 class="font-serif text-3xl text-primary mt-1">
                  The Individual Current
                  <span class="text-2xl text-on-surface-variant font-normal">(Specialist Mode)</span>
                </h3>
              </div>
              <p class="text-sm text-on-surface-variant max-w-md leading-relaxed">
                Direct thread isolation where single guardian nodes command deep-domain autonomy
                with zero consensus overhead.
              </p>
            </div>

            <!-- 4-Phase Pipeline -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              @for (phase of pipelinePhases; track phase.step) {
                <div class="bg-surface-container-lowest p-6 rounded-xl border border-gesso flex flex-col justify-between space-y-6">
                  <div class="space-y-2.5">
                    <div class="flex items-center justify-between">
                      <span class="text-xs font-bold uppercase tracking-wider text-secondary tabular-nums">
                        {{ phase.step }}
                      </span>
                      <mat-icon class="text-on-surface-variant !text-[20px]">{{ phase.icon }}</mat-icon>
                    </div>
                    <h4 class="text-lg font-semibold text-primary">{{ phase.title }}</h4>
                    <p class="text-xs text-on-surface-variant leading-relaxed">
                      {{ phase.description }}
                    </p>
                  </div>
                  <div class="pt-3 border-t border-gesso/60 text-xs font-medium tabular-nums text-on-surface-variant">
                    {{ phase.metric }}
                  </div>
                </div>
              }
            </div>

            <!-- Live Specialist Deployments Scenario Switcher -->
            <div class="space-y-3">
              <div class="flex flex-wrap items-center justify-between gap-2 text-xs">
                <span class="font-semibold uppercase tracking-wider text-on-surface-variant">
                  Live Specialist Deployments · Field Scenarios
                </span>
                <span class="font-semibold uppercase tracking-wider text-secondary">
                  Select Scenario to Inspect Trace
                </span>
              </div>

              <div class="bg-surface-container-lowest rounded-xl border border-gesso p-6 space-y-6">
                <div role="tablist" aria-label="Specialist field scenarios" class="flex flex-wrap gap-2">
                  @for (sc of scenarios; track sc.id) {
                    <button
                      type="button"
                      role="tab"
                      [attr.aria-selected]="activeScenarioId() === sc.id"
                      (click)="activeScenarioId.set(sc.id)"
                      class="px-4 py-2 rounded text-xs font-semibold tracking-wide uppercase transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-secondary"
                      [class.bg-primary]="activeScenarioId() === sc.id"
                      [class.text-on-primary]="activeScenarioId() === sc.id"
                      [class.bg-surface-container-low]="activeScenarioId() !== sc.id"
                      [class.text-on-surface-variant]="activeScenarioId() !== sc.id"
                      [class.hover:text-primary]="activeScenarioId() !== sc.id"
                    >
                      {{ sc.tabLabel }}
                    </button>
                  }
                </div>

                @let scenario = currentScenario();
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-surface-container-low/70 p-6 rounded-xl">
                  <div class="lg:col-span-7 space-y-4">
                    <div class="flex flex-wrap items-center gap-3 text-xs">
                      <span class="font-bold uppercase tracking-wider text-secondary">
                        {{ scenario.node }}
                      </span>
                      <span aria-hidden="true" class="text-outline-variant">·</span>
                      <span class="text-on-surface-variant">{{ scenario.domain }}</span>
                    </div>
                    <h4 class="font-serif text-2xl sm:text-3xl text-primary">
                      {{ scenario.title }}
                    </h4>
                    <p class="text-[15px] text-on-surface-variant leading-relaxed">
                      {{ scenario.description }}
                    </p>
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
                      <div class="p-3 bg-surface-container-lowest rounded-lg border border-gesso/60">
                        <span class="text-[11px] text-on-surface-variant block">
                          {{ scenario.metric1Label }}
                        </span>
                        <span class="text-xs font-bold tabular-nums text-primary mt-0.5 block">
                          {{ scenario.metric1Value }}
                        </span>
                      </div>
                      <div class="p-3 bg-surface-container-lowest rounded-lg border border-gesso/60">
                        <span class="text-[11px] text-on-surface-variant block">
                          {{ scenario.metric2Label }}
                        </span>
                        <span class="text-xs font-bold tabular-nums text-secondary mt-0.5 block">
                          {{ scenario.metric2Value }}
                        </span>
                      </div>
                      <div class="p-3 bg-surface-container-lowest rounded-lg border border-gesso/60 col-span-2 sm:col-span-1">
                        <span class="text-[11px] text-on-surface-variant block">
                          {{ scenario.metric3Label }}
                        </span>
                        <span class="text-xs font-bold tabular-nums text-primary mt-0.5 block">
                          {{ scenario.metric3Value }}
                        </span>
                      </div>
                    </div>
                  </div>

                  <!-- Execution Log Panel -->
                  <div class="lg:col-span-5 bg-primary-container text-surface-container-low rounded-lg p-5 font-mono text-xs leading-relaxed space-y-3">
                    <div class="flex justify-between items-center text-on-primary-container pb-2 border-b border-white/10">
                      <span>Execution Log · MON-7041</span>
                      <span class="text-secondary-fixed text-[10px] uppercase tracking-wider">Verified</span>
                    </div>
                    <div class="space-y-1.5">
                      @for (line of scenario.terminalLines; track $index) {
                        <p
                          [class.text-secondary-fixed]="line.tone === 'gold'"
                          [class.text-on-primary-container]="line.tone === 'muted'"
                          [class.text-secondary-container]="line.tone === 'accent'"
                          [class.text-surface-container-low]="line.tone === 'normal'"
                        >
                          {{ line.text }}
                        </p>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- SECTION 02: The Tidal Consensus -->
          <div class="space-y-8">
            <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span class="text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary block">
                  02. Sub-System Modes
                </span>
                <h3 class="font-serif text-3xl text-primary mt-1">
                  The Tidal Consensus
                  <span class="text-2xl text-on-surface-variant font-normal">(Collaborative Swarm)</span>
                </h3>
              </div>
              <p class="text-sm text-on-surface-variant max-w-md leading-relaxed">
                All seven oceanic guardians assemble a unified shared mental topology to resolve
                complex, enterprise-scale engineering anomalies.
              </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <!-- Interactive 7-Way Ring-Mesh Topology Diagram -->
              <div class="lg:col-span-7 bg-surface-container-lowest p-6 sm:p-8 rounded-xl border border-gesso flex flex-col justify-between space-y-4">
                <div class="flex flex-wrap justify-between items-center gap-2 text-xs">
                  <span class="font-semibold uppercase tracking-wider text-primary">
                    7-Way Shared Mental Model Topology
                  </span>
                  <span class="font-semibold uppercase tracking-wider text-secondary">
                    Click Any Node to Inspect
                  </span>
                </div>

                <div class="relative w-full py-2 flex items-center justify-center">
                  <svg class="w-full max-w-md h-auto" fill="none" viewBox="0 0 420 330" role="img" aria-label="7-Way Shared Mental Model Topology Diagram">
                    <!-- Outer Heptagon -->
                    <polygon
                      class="text-surface-container-highest"
                      points="200,34 325,88 350,198 276,286 124,286 50,198 75,88"
                      stroke="currentColor"
                      stroke-dasharray="4 4"
                      stroke-width="1.5"
                    />
                    <!-- Cross-Mesh Connections -->
                    <line class="text-secondary/25" stroke="currentColor" stroke-width="1.2" x1="200" y1="34" x2="276" y2="286" />
                    <line class="text-secondary/25" stroke="currentColor" stroke-width="1.2" x1="200" y1="34" x2="124" y2="286" />
                    <line class="text-secondary/25" stroke="currentColor" stroke-width="1.2" x1="325" y1="88" x2="124" y2="286" />
                    <line class="text-secondary/25" stroke="currentColor" stroke-width="1.2" x1="75" y1="88" x2="276" y2="286" />
                    <line class="text-secondary/25" stroke="currentColor" stroke-width="1.2" x1="50" y1="198" x2="325" y2="88" />
                    <line class="text-secondary/25" stroke="currentColor" stroke-width="1.2" x1="350" y1="198" x2="75" y2="88" />

                    <!-- Active Node Radial Ray -->
                    <line
                      class="text-secondary"
                      stroke="currentColor"
                      stroke-width="2"
                      x1="200"
                      y1="166"
                      [attr.x2]="selectedTopologyGuardian().svgCoord.x"
                      [attr.y2]="selectedTopologyGuardian().svgCoord.y"
                    />

                    <!-- Central State Orb -->
                    <circle class="text-surface-container" cx="200" cy="166" fill="currentColor" r="38" />
                    <circle class="text-surface-container-highest" cx="200" cy="166" fill="currentColor" r="28" />
                    <text class="fill-primary text-[11px] font-bold" text-anchor="middle" x="200" y="163">
                      STATE
                    </text>
                    <text class="fill-secondary text-[9px] font-semibold" text-anchor="middle" x="200" y="176">
                      EPOCH 07
                    </text>

                    <!-- 7 Interactive Guardian Nodes -->
                    @for (g of guardians; track g.id) {
                      <g
                        class="cursor-pointer"
                        (click)="selectedTopologyId.set(g.id)"
                      >
                        <circle
                          [attr.cx]="g.svgCoord.x"
                          [attr.cy]="g.svgCoord.y"
                          [attr.r]="selectedTopologyId() === g.id ? 17 : 13"
                          [attr.fill]="selectedTopologyId() === g.id ? '#775a00' : '#1b1c19'"
                          [attr.stroke]="selectedTopologyId() === g.id ? '#fed269' : '#ffffff'"
                          stroke-width="2.5"
                        />
                        <text
                          [attr.x]="g.svgCoord.labelX"
                          [attr.y]="g.svgCoord.labelY"
                          [attr.text-anchor]="g.svgCoord.anchor"
                          class="text-[10px] font-bold uppercase tracking-wider"
                          [attr.fill]="selectedTopologyId() === g.id ? '#775a00' : '#1b1c19'"
                        >
                          {{ g.name }}
                        </text>
                      </g>
                    }
                  </svg>
                </div>

                <!-- Selected Node Readout Bar -->
                @let topoNode = selectedTopologyGuardian();
                <div class="p-4 rounded-lg bg-surface-container-low border border-gesso/70 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div>
                    <span class="font-bold text-secondary uppercase">
                      Node {{ topoNode.nodeNumber }} · {{ topoNode.name }}
                    </span>
                    <span class="text-on-surface-variant ml-2">
                      {{ topoNode.computePrimitive }}
                    </span>
                  </div>
                  <button
                    type="button"
                    (click)="ui.openDossier(topoNode.id)"
                    class="font-semibold uppercase tracking-wider text-primary hover:text-secondary transition-colors whitespace-nowrap"
                  >
                    Open Dossier →
                  </button>
                </div>

                <div class="flex flex-wrap items-center justify-between gap-2 text-[11px] uppercase tracking-wider text-on-surface-variant">
                  <span>Gossip Broadcast Protocol · 128-Byte CRDT</span>
                  <span class="text-secondary font-semibold">Byzantine Fault Resistant (b &lt; 3)</span>
                </div>
              </div>

              <!-- Right Column: Verification Telemetry & Proof -->
              <div class="lg:col-span-5 flex flex-col justify-between gap-6">
                <div class="bg-surface-container-lowest p-6 sm:p-8 rounded-xl border border-gesso space-y-5">
                  <div class="space-y-1.5">
                    <span class="text-[11px] font-semibold uppercase tracking-widest text-secondary block">
                      Consensus Telemetry Metrics
                    </span>
                    <h4 class="text-xl font-semibold text-primary">Zero Blindspot Verification</h4>
                    <p class="text-sm text-on-surface-variant leading-relaxed">
                      Before any atomic output is committed to client pipelines, all seven nodes
                      submit a signed verification frame. If a single node detects an invariant
                      violation, execution rolls back instantaneously.
                    </p>
                  </div>

                  <div class="space-y-4 pt-2">
                    <div class="space-y-1.5">
                      <div class="flex justify-between text-xs">
                        <span class="text-on-surface">Cross-Agent Verification Rate</span>
                        <span class="font-bold tabular-nums text-secondary">99.84%</span>
                      </div>
                      <div class="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
                        <div class="h-full bg-secondary rounded-full w-[99.84%]"></div>
                      </div>
                    </div>

                    <div class="space-y-1.5">
                      <div class="flex justify-between text-xs">
                        <span class="text-on-surface">Swarm Round-Trip Latency</span>
                        <span class="font-bold tabular-nums text-primary">14.8 ms</span>
                      </div>
                      <div class="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
                        <div class="h-full bg-primary rounded-full w-[22%]"></div>
                      </div>
                    </div>

                    <div class="space-y-1.5">
                      <div class="flex justify-between text-xs">
                        <span class="text-on-surface">Byzantine Rejection Index</span>
                        <span class="font-bold tabular-nums text-secondary">0.0001%</span>
                      </div>
                      <div class="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
                        <div class="h-full bg-secondary rounded-full w-[3%]"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="bg-surface-container-low p-6 rounded-xl border border-gesso space-y-2.5">
                  <div class="flex items-center gap-2.5">
                    <mat-icon class="text-secondary !text-[20px]">verified_user</mat-icon>
                    <h4 class="text-lg font-semibold text-primary">Immutable Proof of Swarm</h4>
                  </div>
                  <p class="text-sm text-on-surface-variant leading-relaxed">
                    Every swarm response is cryptographically stamped with ECDSA signatures from
                    each active guardian node, enabling complete post-mortem auditability for
                    enterprise compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 03: The 7 Oceanic Compute Primitives -->
      <section class="w-full px-5 sm:px-8 lg:px-16 py-16 bg-surface-container-low/60">
        <div class="max-w-7xl mx-auto space-y-8">
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span class="text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary block">
                03. Virtue-to-Compute Matrix
              </span>
              <h3 class="font-serif text-3xl sm:text-4xl text-primary mt-1">
                The 7 Oceanic Compute Primitives
              </h3>
            </div>
            <span class="text-xs font-semibold uppercase tracking-wider text-secondary">
              7 Nodes Active · 100% Health
            </span>
          </div>

          <div class="overflow-x-auto rounded-xl bg-surface-container-lowest border border-gesso">
            <table class="w-full text-left border-collapse min-w-[820px]">
              <thead>
                <tr class="bg-surface-container-high/60 border-b border-gesso text-primary text-[11px] font-semibold uppercase tracking-wider">
                  <th class="py-4 px-6">Node &amp; Guardian</th>
                  <th class="py-4 px-4">Oceanic Domain</th>
                  <th class="py-4 px-4">Operational Vector</th>
                  <th class="py-4 px-4">Computational Primitive</th>
                  <th class="py-4 px-4">Fault Tolerance</th>
                  <th class="py-4 px-6 text-right">Latency SLA</th>
                </tr>
              </thead>
              <tbody class="text-sm divide-y divide-gesso/60">
                @for (g of guardians; track g.id) {
                  <tr
                    (click)="ui.openDossier(g.id)"
                    class="hover:bg-surface-container-low/60 transition-colors cursor-pointer"
                  >
                    <td class="py-4 px-6">
                      <span class="font-semibold text-primary">{{ g.name }}</span>
                      <span class="text-xs text-on-surface-variant ml-1.5 tabular-nums">
                        (Node {{ g.nodeNumber }})
                      </span>
                    </td>
                    <td class="py-4 px-4 text-on-surface-variant">{{ g.realm }}</td>
                    <td class="py-4 px-4 font-semibold text-xs text-primary">{{ g.virtue }}</td>
                    <td class="py-4 px-4 text-xs font-medium text-on-surface">
                      {{ g.computePrimitive }}
                    </td>
                    <td class="py-4 px-4 text-xs font-bold tabular-nums text-secondary">
                      {{ g.faultTolerance }}
                    </td>
                    <td class="py-4 px-6 text-right text-xs font-semibold tabular-nums text-on-surface">
                      {{ g.latencySla }}
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- SECTION 04: SysCore Deployment Architecture & SDK -->
      <section class="w-full px-5 sm:px-8 lg:px-16 py-20">
        <div class="max-w-7xl mx-auto space-y-10">
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span class="text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary block">
                Integration · API &amp; CLI SDK
              </span>
              <h3 class="font-serif text-3xl sm:text-4xl text-primary mt-1">
                SysCore Deployment Architecture
              </h3>
            </div>
            <p class="text-sm text-on-surface-variant max-w-md leading-relaxed">
              Zero-overhead agent summoning via standard enterprise protocols. Embed
              <app-brand-wordmark variant="sans" /> in cloud pipelines or deploy on bare metal.
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <!-- Code Snippet Tabs -->
            <div class="lg:col-span-7 bg-surface-container-lowest rounded-xl border border-gesso overflow-hidden flex flex-col justify-between">
              <div>
                <div class="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 bg-surface-container-low border-b border-gesso">
                  <div role="tablist" aria-label="SDK integration examples" class="flex flex-wrap items-center gap-2">
                    @for (tab of codeTabs; track tab.id) {
                      <button
                        type="button"
                        role="tab"
                        [attr.aria-selected]="activeCodeTab() === tab.id"
                        (click)="activeCodeTab.set(tab.id)"
                        class="px-3 py-1.5 rounded text-xs font-semibold uppercase tracking-wider transition-colors whitespace-nowrap"
                        [class.bg-primary]="activeCodeTab() === tab.id"
                        [class.text-on-primary]="activeCodeTab() === tab.id"
                        [class.bg-surface-container-high]="activeCodeTab() !== tab.id"
                        [class.text-on-surface-variant]="activeCodeTab() !== tab.id"
                        [class.hover:text-primary]="activeCodeTab() !== tab.id"
                      >
                        {{ tab.label }}
                      </button>
                    }
                  </div>
                  <button
                    type="button"
                    (click)="copyActiveSnippet()"
                    class="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-secondary hover:text-primary transition-colors whitespace-nowrap"
                  >
                    <mat-icon class="!text-[16px]">{{ copied() ? 'check' : 'content_copy' }}</mat-icon>
                    <span>{{ copied() ? 'Copied' : 'Copy' }}</span>
                  </button>
                </div>

                <div class="p-6 font-mono text-xs leading-relaxed overflow-x-auto text-primary">
                  <pre class="whitespace-pre"><code>{{ currentSnippet() }}</code></pre>
                </div>
              </div>

              <div class="px-6 py-3.5 bg-surface-container-low/60 border-t border-gesso flex flex-wrap items-center justify-between gap-2 text-xs">
                <span class="text-on-surface-variant">SDK: &#64;babymons7er/syscore&#64;7.0.4-lts</span>
                <span class="font-semibold text-secondary">Nodes 01–07 Binding Ready</span>
              </div>
            </div>

            <!-- Safeguards & Whitepaper -->
            <div class="lg:col-span-5 flex flex-col justify-between gap-6">
              <div class="bg-surface-container-lowest p-6 sm:p-8 rounded-xl border border-gesso space-y-4">
                <div class="flex items-center gap-2.5">
                  <mat-icon class="text-secondary !text-[20px]">security</mat-icon>
                  <h4 class="text-lg font-semibold text-primary">Enterprise Governance Safeguards</h4>
                </div>
                <p class="text-sm text-on-surface-variant leading-relaxed">
                  Every request executes within memory-isolated WebAssembly boundaries. Telemetry
                  leaves zero resident state on public nodes.
                </p>
                <ul class="space-y-2.5 pt-1 text-sm text-on-surface">
                  <li class="flex items-start gap-2.5">
                    <mat-icon class="text-secondary !text-[18px] shrink-0 mt-0.5">check_circle</mat-icon>
                    <span><strong>Hardware Enclave Attestation:</strong> TPM 2.0 signed state proofs.</span>
                  </li>
                  <li class="flex items-start gap-2.5">
                    <mat-icon class="text-secondary !text-[18px] shrink-0 mt-0.5">check_circle</mat-icon>
                    <span><strong>Zero Cross-Tenant Leakage:</strong> Strict CRDT vector compartmentalization.</span>
                  </li>
                  <li class="flex items-start gap-2.5">
                    <mat-icon class="text-secondary !text-[18px] shrink-0 mt-0.5">check_circle</mat-icon>
                    <span><strong>Sovereign Regional Anchors:</strong> Abyssal nodes pinned to EU/US data zones.</span>
                  </li>
                </ul>
              </div>

              <div class="bg-primary text-on-primary p-6 sm:p-8 rounded-xl space-y-4">
                <span class="text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary-fixed block">
                  SeaDragon Protocol 7.0 · Century Hatchling
                </span>
                <h4 class="font-serif text-2xl sm:text-3xl text-white">SysCore 7.0 Whitepaper</h4>
                <p class="text-sm text-primary-fixed-dim leading-relaxed">
                  Review the formal mathematical proofs for 7-way hypermesh consensus and
                  microsecond clock synchronization.
                </p>
                <div class="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    (click)="whitepaperOpen.set(true)"
                    class="px-5 py-2.5 bg-surface-container-lowest text-primary text-xs font-semibold uppercase tracking-wider rounded hover:bg-surface-container transition-colors inline-flex items-center gap-2 whitespace-nowrap"
                  >
                    <span>Read Abstract</span>
                    <mat-icon class="!text-[16px]">arrow_forward</mat-icon>
                  </button>
                  <button
                    type="button"
                    (click)="ui.deployFullSwarm()"
                    class="text-xs font-semibold uppercase tracking-wider text-secondary-fixed hover:text-white transition-colors whitespace-nowrap"
                  >
                    Run Live Benchmark
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Whitepaper Abstract Modal -->
      @if (whitepaperOpen()) {
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="whitepaper-title"
          class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-card-fade"
        >
          <button
            type="button"
            aria-label="Close whitepaper abstract"
            (click)="whitepaperOpen.set(false)"
            class="fixed inset-0 bg-primary/45 backdrop-blur-sm cursor-default border-0 p-0"
          ></button>
          <div
            class="relative z-10 w-full max-w-xl bg-surface-container-lowest rounded-xl border border-gesso shadow-2xl overflow-hidden"
          >
            <div class="px-6 py-4 bg-surface-container-low border-b border-gesso flex items-center justify-between">
              <span class="text-xs font-semibold uppercase tracking-widest text-secondary">
                SysCore 7.0 Technical Abstract
              </span>
              <button
                type="button"
                aria-label="Close abstract"
                (click)="whitepaperOpen.set(false)"
                class="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container-high"
              >
                <mat-icon class="!text-[20px]">close</mat-icon>
              </button>
            </div>
            <div class="p-6 sm:p-8 space-y-4 text-sm text-on-surface-variant leading-relaxed">
              <h3 id="whitepaper-title" class="font-serif text-3xl text-primary">
                Seven-Way Hydrological Consensus Under Bounded Latency
              </h3>
              <p>
                We formalize the SeaDragon 7.0 consensus lattice—a dual-mode autonomous agent
                architecture combining isolated single-node execution (The Individual Current) with
                a Byzantine-tolerant heptagonal CRDT gossip ring (The Tidal Consensus).
              </p>
              <p>
                Across 10,000 synthetic production migration traces, partitioning cognitive
                responsibilities across seven specialized virtue priors reduced invariant rollback
                frequency by 94.2% while maintaining a p99 round-trip consensus ceiling of 14.8 ms.
              </p>
              <div class="pt-3 flex justify-end">
                <button
                  type="button"
                  (click)="whitepaperOpen.set(false)"
                  class="px-5 py-2.5 bg-primary text-on-primary text-xs font-semibold uppercase tracking-wider rounded hover:bg-primary-container transition-colors"
                >
                  Close Abstract
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  `,
})
export class ArchitecturePage {
  protected readonly ui = inject(GuardianUiState);
  protected readonly media = ARCHIVAL_MEDIA;
  protected readonly guardians = GUARDIANS;

  protected readonly activeScenarioId = signal<ScenarioId>('guidance');
  protected readonly selectedTopologyId = signal<GuardianId>('grace');
  protected readonly activeCodeTab = signal<CodeTabId>('cli');
  protected readonly copied = signal(false);
  protected readonly whitepaperOpen = signal(false);

  protected readonly pipelinePhases = [
    {
      step: 'Phase 01',
      icon: 'input',
      title: 'Ingress Ingestion',
      description:
        'Raw user prompt decomposed into semantic tokens. Intent taxonomy vector mapped to Oceanic Virtue profiles.',
      metric: 'Ingress Buffer: < 0.4ms',
    },
    {
      step: 'Phase 02',
      icon: 'alt_route',
      title: 'Node Routing',
      description:
        'Bayesian virtue router directs task weight directly to the prime guardian node matching computational telemetry.',
      metric: 'Affinity Confidence: 99.4%',
    },
    {
      step: 'Phase 03',
      icon: 'psychology',
      title: 'Memory Bake',
      description:
        'Historical project state injected into localized agent vector vault. System constraints locked in silicon context.',
      metric: 'Context Limit: 1.2M Tokens',
    },
    {
      step: 'Phase 04',
      icon: 'terminal',
      title: 'Dedicated Thread',
      description:
        'Atomic code execution and telemetry generation streamed via high-bandwidth zero-copy memory pipelines.',
      metric: 'Egress Bandwidth: 14 GB/s',
    },
  ];

  protected readonly scenarios: FieldScenario[] = [
    {
      id: 'guidance',
      tabLabel: '01. Guidance (Roadmap)',
      node: 'Node 04 · Guidance',
      domain: 'Mediterranean Deep Basin',
      title: 'Historical Precedent & 10-Quarter Tech Roadmap',
      description:
        'When engineering teams migrate legacy monoliths to micro-kernels, Guidance parses 8 years of architectural commit logs, cross-references RFC regressions, and projects dependency bottlenecks 10 quarters forward with deterministic calm.',
      metric1Label: 'AST Nodes Parsed',
      metric1Value: '1,482,900',
      metric2Label: 'Entropy Factor',
      metric2Value: '0.0019',
      metric3Label: 'Decision Velocity',
      metric3Value: '340 ms',
      terminalLines: [
        { text: '> bmon routing --intent "monolith-migration"', tone: 'gold' },
        { text: '> Selected Node: Guidance (Domain: History/Logic)', tone: 'muted' },
        { text: '> Ingesting git commit ledger: 42,912 commits', tone: 'normal' },
        { text: '> Identified 14 deprecated API boundary risks', tone: 'normal' },
        { text: '> Output synthesis completed. Zero regressions predicted.', tone: 'accent' },
      ],
    },
    {
      id: 'serenity',
      tabLabel: '02. Serenity (Heap Optimization)',
      node: 'Node 03 · Serenity',
      domain: 'Indian Ocean · Coral Triangle',
      title: 'Heap Fragmentation & Memory Leak Mitigations',
      description:
        'Deployed directly to production telemetry feeds, Serenity monitors horizontal heap volatility. She dampens computational noise, stabilizes garbage collector cycles, and neutralizes memory spikes before pod eviction thresholds are triggered.',
      metric1Label: 'Memory Reclaimed',
      metric1Value: '48.2 GB Recovered',
      metric2Label: 'Entropy Factor',
      metric2Value: '0.0004',
      metric3Label: 'Decision Velocity',
      metric3Value: '12 ms',
      terminalLines: [
        { text: '> bmon routing --intent "heap-remediation"', tone: 'gold' },
        { text: '> Selected Node: Serenity (Domain: Optimization/Calm)', tone: 'muted' },
        { text: '> Profiling V8 heap allocation cycles...', tone: 'normal' },
        { text: '> Isolated cyclic closure leak in worker thread #4', tone: 'normal' },
        { text: '> Memory footprint reduced by 38.6%. Steady state achieved.', tone: 'accent' },
      ],
    },
    {
      id: 'grace',
      tabLabel: '03. Grace (Race-Condition Fix)',
      node: 'Node 01 · Grace',
      domain: 'North Atlantic · Arctic Ice Shelf',
      title: 'Sub-Nanosecond Race-Condition Elimination',
      description:
        'Grace isolates concurrent async read-write deadlocks within high-frequency transaction handlers. Operating with the stillness of Arctic ice, she synthesizes formal invariants and generates zero-overhead lockless ring buffers.',
      metric1Label: 'Verification',
      metric1Value: '100% Invariant Pass',
      metric2Label: 'Entropy Factor',
      metric2Value: '0.0000',
      metric3Label: 'Decision Velocity',
      metric3Value: '18 ms',
      terminalLines: [
        { text: '> bmon routing --intent "deadlock-elimination"', tone: 'gold' },
        { text: '> Selected Node: Grace (Domain: Precision/Focus)', tone: 'muted' },
        { text: '> Evaluating state transitions in concurrency graph', tone: 'normal' },
        { text: '> Flagged mutex lock inversion in channel executor', tone: 'normal' },
        { text: '> Lockless atomic replacement deployed. Deadlock eliminated.', tone: 'accent' },
      ],
    },
  ];

  protected readonly codeTabs: { id: CodeTabId; label: string }[] = [
    { id: 'cli', label: 'CLI Summon' },
    { id: 'rest', label: 'REST Endpoint' },
    { id: 'ws', label: 'WebSocket Stream' },
  ];

  private readonly snippets: Record<CodeTabId, string> = {
    cli: `# 1. Install SeaDragon runtime
$ curl -sSL https://sdk.babymons7er.ai/install.sh | bash

# 2. Authenticate cryptographic hardware enclave
$ bmon auth login --enclave ivory-station-07

# 3. Summon Full Seven-Way Swarm for continuous audit
$ bmon summon --swarm all \\
    --mode tidal-consensus \\
    --target ./src/core/compiler.rs \\
    --invariant "memory-leak-free" \\
    --max-latency 45ms`,
    rest: `// POST https://api.babymons7er.ai/v1/swarm/summon
{
  "protocol": "seadragon-7.0",
  "consensus_mode": "tidal_consensus",
  "required_nodes": ["grace", "cadence", "serenity", "guidance", "hope", "faith", "love"],
  "payload": {
    "task": "distributed_consensus_verify",
    "context_id": "ctx_9984_abyssal",
    "execution_boundary": "isolated_wasm"
  },
  "sla": { "timeout_ms": 150, "byzantine_tolerance": 3 }
}`,
    ws: `// Continuous WebSocket Telemetry Stream
const ws = new WebSocket("wss://stream.babymons7er.ai/v7/live-swarm");

ws.onopen = () => {
  ws.send(JSON.stringify({
    action: "subscribe_telemetry",
    nodes: ["all"],
    tick_rate_hz: 60
  }));
};

ws.onmessage = (event) => {
  const { epoch, verification_score } = JSON.parse(event.data);
  console.log(\`Epoch \${epoch} | Verification: \${verification_score * 100}%\`);
};`,
  };

  protected readonly currentScenario = computed(
    () => this.scenarios.find((s) => s.id === this.activeScenarioId()) ?? this.scenarios[0]
  );

  protected readonly selectedTopologyGuardian = computed(() =>
    getGuardianById(this.selectedTopologyId())
  );

  protected readonly currentSnippet = computed(() => this.snippets[this.activeCodeTab()]);

  protected copyActiveSnippet(): void {
    const text = this.currentSnippet();
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      void navigator.clipboard.writeText(text).then(() => {
        this.copied.set(true);
        setTimeout(() => this.copied.set(false), 2000);
      });
    }
  }
}
