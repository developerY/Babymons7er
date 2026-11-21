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
        class="inline-block align-baseline h-[0.72em] w-auto overflow-visible"
        [class]="glyphSpacingClass()"
      >
        <!-- Bold Playfair-harmonized barred 7: sweeping diagonal stem, classic left beak, and signature horizontal mid-bar -->
        <path
          d="M 6 0 L 72 0 L 72 5.5 C 58.5 31 45.5 62 35.5 92.5 C 34.8 95 36.5 96.5 40 96.5 L 40 100 L 13 100 L 13 96.5 C 16.2 96.5 17.5 95 18.2 92.5 C 27.8 62 40.5 32 52 11 L 21 11 C 13.5 11.4 9.5 16 7 25 L 2.5 24 Z"
        />
        <path d="M 20.5 48.5 L 62.5 48.5 L 61 57 L 19 57 Z" /></svg
      >} @else {<svg
        aria-hidden="true"
        viewBox="0 0 72 100"
        fill="currentColor"
        class="inline-block align-baseline h-[0.73em] w-auto overflow-visible"
        [class]="glyphSpacingClass()"
      >
        <!-- Bold geometric sans barred 7 -->
        <path d="M 4 0 L 68 0 L 68 14 L 35 100 L 17 100 L 49 15 L 4 15 Z" />
        <path d="M 22 50 L 64 50 L 62.5 60.5 L 20.5 60.5 Z" /></svg
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
        return '-ml-[0.02em] mr-[0.14em]';
      case 'wider':
        return '-ml-[0.01em] mr-[0.07em]';
      case 'tight':
        return '-ml-[0.01em] mr-[0.03em]';
      default:
        return 'ml-[0.02em] mr-[0.04em]';
    }
  });
}
