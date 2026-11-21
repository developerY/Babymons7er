import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { GuardianUiState } from '../../services/guardian-ui';

@Component({
  selector: 'app-dispatch-toast',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule],
  template: `
    @if (ui.toast(); as message) {
      <div
        role="status"
        aria-live="polite"
        class="fixed bottom-6 right-6 z-50 max-w-md bg-primary text-on-primary px-5 py-4 rounded-xl shadow-2xl border border-white/10 flex items-start gap-3.5 animate-card-fade"
      >
        <mat-icon class="text-secondary-container !text-[22px] shrink-0 mt-0.5">sensors</mat-icon>
        <div class="min-w-0 flex-1">
          <div class="text-xs font-semibold uppercase tracking-widest text-secondary-fixed">
            {{ message.title }}
          </div>
          <p class="text-sm text-surface-bright/90 mt-0.5 leading-snug">
            {{ message.description }}
          </p>
        </div>
        <button
          type="button"
          aria-label="Dismiss notification"
          (click)="ui.dismissToast()"
          class="text-on-primary-container hover:text-white transition-colors p-1 rounded"
        >
          <mat-icon class="!text-[18px]">close</mat-icon>
        </button>
      </div>
    }
  `,
})
export class DispatchToast {
  protected readonly ui = inject(GuardianUiState);
}
