import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { BrandWordmark } from '../brand-wordmark/brand-wordmark';

interface NavLink {
  label: string;
  path: string;
  exact?: boolean;
}

@Component({
  selector: 'app-site-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive, MatIconModule, BrandWordmark],
  template: `
    <header class="fixed top-0 inset-x-0 z-40 bg-surface/90 backdrop-blur-xl border-b border-gesso/80">
      <div class="max-w-[1440px] mx-auto h-16 lg:h-20 px-5 sm:px-8 lg:px-12 flex items-center justify-between gap-8">
        <!-- Zone 1: Brand Wordmark (Single Element) -->
        <a
          routerLink="/"
          (click)="closeMenu()"
          class="font-serif text-xl sm:text-2xl tracking-[0.14em] text-primary hover:opacity-80 transition-opacity whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-secondary rounded"
        >
          <app-brand-wordmark spacing="wide" />
        </a>

        <!-- Zone 2: Clean Single-Line Navigation Links -->
        <nav aria-label="Primary navigation" class="hidden lg:flex items-center gap-7 xl:gap-9">
          @for (item of navLinks; track item.path) {
            <a
              [routerLink]="item.path"
              routerLinkActive="text-primary font-semibold border-secondary"
              [routerLinkActiveOptions]="{ exact: !!item.exact }"
              class="text-[13px] font-medium tracking-wide text-on-surface-variant hover:text-primary border-b-2 border-transparent py-1 transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-secondary"
            >
              {{ item.label }}
            </a>
          }
        </nav>

        <!-- Zone 3: Single Primary CTA + Mobile Drawer Toggle -->
        <div class="flex items-center gap-3 shrink-0">
          <a
            routerLink="/summon"
            (click)="closeMenu()"
            class="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-on-primary text-xs font-semibold tracking-wider uppercase rounded hover:bg-primary-container transition-colors duration-200 shadow-sm whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-secondary"
          >
            <span>Summon Guardians</span>
            <mat-icon class="!text-[16px]">arrow_outward</mat-icon>
          </a>

          <button
            type="button"
            (click)="toggleMenu()"
            [attr.aria-expanded]="mobileOpen()"
            aria-label="Toggle navigation menu"
            class="lg:hidden w-10 h-10 rounded-lg border border-gesso bg-surface-container-lowest flex items-center justify-center text-primary hover:border-secondary transition-colors focus-visible:outline-2 focus-visible:outline-secondary"
          >
            <mat-icon class="!text-[22px]">{{ mobileOpen() ? 'close' : 'menu' }}</mat-icon>
          </button>
        </div>
      </div>

      <!-- Responsive Mobile Navigation Drawer -->
      @if (mobileOpen()) {
        <div class="lg:hidden bg-surface-container-lowest border-t border-gesso shadow-lg animate-card-fade">
          <nav aria-label="Mobile navigation" class="px-5 py-5 flex flex-col gap-1">
            @for (item of navLinks; track item.path) {
              <a
                [routerLink]="item.path"
                routerLinkActive="bg-surface-container-low text-primary font-semibold border-secondary"
                [routerLinkActiveOptions]="{ exact: !!item.exact }"
                (click)="closeMenu()"
                class="px-4 py-3 rounded-lg text-sm font-medium text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-colors flex items-center justify-between"
              >
                <span>{{ item.label }}</span>
                <mat-icon class="!text-[18px] text-secondary">arrow_forward</mat-icon>
              </a>
            }
            <div class="pt-3 mt-2 border-t border-gesso">
              <a
                routerLink="/summon"
                (click)="closeMenu()"
                class="w-full py-3 px-4 bg-primary text-on-primary text-xs font-semibold uppercase tracking-wider rounded flex items-center justify-center gap-2"
              >
                <span>Summon Guardians</span>
                <mat-icon class="!text-[16px]">arrow_outward</mat-icon>
              </a>
            </div>
          </nav>
        </div>
      }
    </header>
  `,
})
export class SiteHeader {
  protected readonly mobileOpen = signal(false);

  protected readonly navLinks: NavLink[] = [
    { label: 'Overview', path: '/', exact: true },
    { label: 'The Guardians', path: '/guardians' },
    { label: 'Architecture', path: '/architecture' },
    { label: 'Chronicle', path: '/chronicle' },
    { label: 'Summon', path: '/summon' },
  ];

  protected toggleMenu(): void {
    this.mobileOpen.update((v) => !v);
  }

  protected closeMenu(): void {
    this.mobileOpen.set(false);
  }
}
