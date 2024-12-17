// src/components/molecules/Slider/Slider.ts
import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

interface SlideItem {
  src: string;
  alt: string;
}

@customElement('custom-slider')
export class Slider extends LitElement {
  @property({ type: Array }) items: SlideItem[] = [];
  @property({ type: Boolean }) autoplay = true;
  @property({ type: Number }) interval = 3000;
  @state() private currentSlide = 0;
  private autoplayInterval?: number;

  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.autoplay) {
      this.startAutoplay();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.stopAutoplay();
  }

  render() {
    return html`
      <div class="relative w-full" role="region" aria-label="carousel">
        <!-- Carousel wrapper -->
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
          ${this.items.map((item, index) => this.renderSlide(item, index))}
        </div>
        
        <!-- Indicators -->
        ${this.renderIndicators()}
        
        <!-- Controls -->
        ${this.renderControls()}
      </div>
    `;
  }

  private renderSlide(item: SlideItem, index: number) {
    return html`
      <div 
        class="absolute w-full h-full transition-opacity duration-700 ease-in-out ${
          index === this.currentSlide ? 'opacity-100' : 'opacity-0'
        }"
        aria-hidden=${index !== this.currentSlide}
      >
        <img 
          src=${item.src} 
          alt=${item.alt}
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        >
      </div>
    `;
  }

  private renderIndicators() {
    return html`
      <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        ${this.items.map((_, index) => html`
          <button
            type="button"
            class="w-3 h-3 rounded-full ${
              index === this.currentSlide 
                ? 'bg-white' 
                : 'bg-white/50'
            }"
            aria-current=${index === this.currentSlide}
            aria-label="Slide ${index + 1}"
            @click=${() => this.goToSlide(index)}
          ></button>
        `)}
      </div>
    `;
  }

  private renderControls() {
    return html`
      <button
        type="button"
        class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        @click=${this.previousSlide}
      >
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg class="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        @click=${this.nextSlide}
      >
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg class="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    `;
  }

  private startAutoplay() {
    this.autoplayInterval = window.setInterval(() => {
      this.nextSlide();
    }, this.interval);
  }

  private stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  private goToSlide(index: number) {
    this.currentSlide = index;
    if (this.autoplay) {
      this.stopAutoplay();
      this.startAutoplay();
    }
  }

  private nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.items.length;
  }

  private previousSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.items.length) % this.items.length;
  }
}