import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BrandWordmark } from '../brand-wordmark/brand-wordmark';

@Component({
  selector: 'app-site-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, BrandWordmark],
  template: `
    <footer class="w-full bg-surface-container-lowest border-t border-gesso mt-20">
      <div class="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          <!-- Brand Column -->
          <div class="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div class="space-y-2">
              <a routerLink="/" class="font-serif text-3xl tracking-[0.12em] text-primary block">
                <app-brand-wordmark spacing="wide" />
              </a>
              <p class="text-[11px] font-semibold uppercase tracking-[0.22em] text-secondary">
                SeaDragon Autonomous Framework
              </p>
              <p class="text-sm text-on-surface-variant max-w-sm pt-2 leading-relaxed">
                An executive seven-agent computational lattice engineered for frontier autonomous
                orchestration, mythic lore preservation, and crystalline cognitive architecture.
              </p>
            </div>
            <div class="text-xs text-on-surface-variant">
              <span>Registry:</span>
              <span class="ml-2 font-semibold text-secondary">Seven Nodes Harmonized</span>
            </div>
          </div>

          <!-- Navigation Mirror -->
          <div class="lg:col-span-2 space-y-4">
            <h4 class="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
              Navigation
            </h4>
            <ul class="space-y-2.5 text-sm">
              <li>
                <a routerLink="/" class="text-on-surface-variant hover:text-primary transition-colors">
                  Overview
                </a>
              </li>
              <li>
                <a routerLink="/guardians" class="text-on-surface-variant hover:text-primary transition-colors">
                  The Guardians
                </a>
              </li>
              <li>
                <a routerLink="/architecture" class="text-on-surface-variant hover:text-primary transition-colors">
                  Architecture &amp; SysCore
                </a>
              </li>
              <li>
                <a routerLink="/chronicle" class="text-on-surface-variant hover:text-primary transition-colors">
                  Chronicle &amp; Lore
                </a>
              </li>
              <li>
                <a routerLink="/summon" class="text-on-surface-variant hover:text-primary transition-colors">
                  Contact &amp; Summon
                </a>
              </li>
            </ul>
          </div>

          <!-- Virtue Index Summary -->
          <div class="lg:col-span-3 space-y-4">
            <h4 class="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
              Virtue Index Summary
            </h4>
            <ul class="space-y-2.5 text-sm">
              <li class="flex justify-between items-baseline pr-4">
                <span class="text-on-surface-variant">Abyssal Resonance</span>
                <span class="text-xs font-semibold tabular-nums text-secondary">Ψ 0.994</span>
              </li>
              <li class="flex justify-between items-baseline pr-4">
                <span class="text-on-surface-variant">Sovereign Equilibrium</span>
                <span class="text-xs font-semibold tabular-nums text-secondary">Ω 1.000</span>
              </li>
              <li class="flex justify-between items-baseline pr-4">
                <span class="text-on-surface-variant">Cognitive Fidelity</span>
                <span class="text-xs font-semibold tabular-nums text-secondary">λ 0.988</span>
              </li>
              <li class="flex justify-between items-baseline pr-4">
                <span class="text-on-surface-variant">Hydrological Logic</span>
                <span class="text-xs font-semibold tabular-nums text-secondary">Δ 0.997</span>
              </li>
              <li class="flex justify-between items-baseline pr-4">
                <span class="text-on-surface-variant">Virtue Alignment</span>
                <span class="text-xs font-semibold tabular-nums text-secondary">Α 0.999</span>
              </li>
            </ul>
          </div>

          <!-- Oceanic Lore -->
          <div class="lg:col-span-3 space-y-4">
            <h4 class="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
              Oceanic Lore
            </h4>
            <p class="text-sm text-on-surface-variant leading-relaxed">
              “Seven leviathans bound in silicon and light, rising from the Mariana Trench to
              balance the computational tides of humanity.”
            </p>
            <div class="pt-1 space-y-0.5">
              <div class="text-[11px] font-semibold uppercase tracking-wider text-on-tertiary-container">
                Sector 07 · Abyssal Station Ivory
              </div>
              <div class="text-xs font-medium tabular-nums text-secondary">
                Lat 11°21′N, Lon 142°12′E
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div
          class="mt-12 pt-5 border-t border-gesso flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-on-surface-variant"
        >
          <div class="flex flex-wrap items-center gap-3">
            <span>© 2026 <app-brand-wordmark variant="sans" />. All Archival Rights Reserved.</span>
            <span aria-hidden="true" class="hidden sm:inline text-secondary">·</span>
            <span class="hidden sm:inline">Edition 7.0 SeaDragon</span>
          </div>
          <div class="flex items-center gap-6">
            <a routerLink="/architecture" class="hover:text-secondary transition-colors">
              Protocol Terms
            </a>
            <a routerLink="/architecture" class="hover:text-secondary transition-colors">
              Telemetry Privacy
            </a>
            <a routerLink="/chronicle" class="hover:text-secondary transition-colors">
              Archival Feed
            </a>
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class SiteFooter {}
