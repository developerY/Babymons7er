import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export type WordmarkVariant = 'serif' | 'sans';
export type WordmarkSpacing = 'tight' | 'normal' | 'wider' | 'wide';

@Component({
  selector: 'app-brand-wordmark',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span class="inline" aria-label="BABYMONS7ER"
      ><span aria-hidden="true">BABYMONS</span
      >@if (variant() === 'serif') {<svg
        aria-hidden="true"
        viewBox="0 0 76 100"
        fill="currentColor"
        class="inline-block align-baseline h-[0.71em] w-auto overflow-visible"
        [class]="glyphSpacingClass()"
      >
        <!-- Playfair-inspired cap-height 7/T hybrid: full serif T-crossbar with subtle diagonal 7-stem -->
        <path
          d="M 3 0 L 73 0 L 73 17.5 L 70.5 17.5 C 69.3 10.2 65.5 6.1 59 5.8 L 56 5.8 C 52.4 28 46.8 61 43.2 92 C 43 95.5 46.5 97 53.5 97 L 53.5 100 L 21 100 L 21 97 C 28 97 31.2 95.5 31.5 92 C 35 61 40.5 28 44 5.8 L 18.5 5.8 C 9.5 6.1 6.2 12.2 5.5 23.5 L 3 23.5 Z"
        /></svg
      >} @else {<svg
        aria-hidden="true"
        viewBox="0 0 72 100"
        fill="currentColor"
        class="inline-block align-baseline h-[0.72em] w-auto overflow-visible"
        [class]="glyphSpacingClass()"
      >
        <!-- Geometric sans cap-height 7/T hybrid -->
        <path
          d="M 4 0 L 68 0 L 68 12.5 L 53.5 12.5 L 41.5 100 L 27.5 100 L 39.5 12.5 L 4 12.5 Z"
        /></svg
      >}<span aria-hidden="true">ER</span></span
    >
  `,
})
export class BrandWordmark {
  readonly variant = input<WordmarkVariant>('serif');
  readonly spacing = input<WordmarkSpacing>('normal');

  protected readonly glyphSpacingClass = computed(() => {
    switch (this.spacing()) {
      case 'wide':
        return '-ml-[0.03em] mr-[0.13em]';
      case 'wider':
        return '-ml-[0.02em] mr-[0.06em]';
      case 'tight':
        return '-ml-[0.02em] mr-[0.02em]';
      default:
        return 'ml-[0.01em] mr-[0.03em]';
    }
  });
}
