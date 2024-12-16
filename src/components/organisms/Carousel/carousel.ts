import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('custom-carousel')
export class CustomCarousel extends LitElement {
  // Evita desactivar Shadow DOM

  @property({ type: Array }) items = [];
  @state() private currentIndex = 0;

  render() {
    return html`
      <!-- Inyección de Tailwind directamente en el Shadow DOM -->
      <style>
        @tailwind base;
        @tailwind components;
        @tailwind utilities;

        :host {
          display: block;
        }

        .carousel-container {
          position: relative;
          overflow: hidden;
          width: 100%;
        }

        .carousel-items {
          display: flex;
          transition: transform 0.5s ease-in-out;
          width: 100%;
        }

        .carousel-item {
          flex: 0 0 100%;
          box-sizing: border-box;
          
        }

         .carousel-item  img{
          width: 100%;
          
        }
        .carousel-control {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.5);
          color: white;
          padding: 10px;
          border: none;
          cursor: pointer;
          z-index: 10;
        }

        .carousel-control.prev {
          left: 10px;
        }

        .carousel-control.next {
          right: 10px;
        }
      </style>
      <!-- Contenido del carrusel -->
      <div class="carousel-container">
        <div
          class="carousel-items"
          style="transform: translateX(-${this.currentIndex * 100}%)"
        >
          ${this.items.map(
            (item: { image: string; alt: string; title: string; description: string }) => html`
              <div class="carousel-item">
                <img src="${item.image}" alt="${item.alt}" class="w-full h-64 object-cover" />
                <div class="p-4 bg-gray-100">
                  <h3 class="text-xl font-bold">${item.title}</h3>
                  <p>${item.description}</p>
                </div>
              </div>
            `
          )}
        </div>
        <!-- Botones de navegación -->
        <button
          class="carousel-control prev"
          @click=${this.prevSlide}
        >&lt;</button>
        <button
          class="carousel-control next"
          @click=${this.nextSlide}
        >&gt;</button>
      </div>
    `;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
  }
}
