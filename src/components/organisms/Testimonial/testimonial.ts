import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('custom-testimonial')
export class CustomTestimonial extends LitElement {

  createRenderRoot() {
    return this; // Desactiva el Shadow DOM
  }
  
  static styles = css`
    :host {
      display: block;
    }
  `;

  @property({ type: String }) quote = '';
  @property({ type: String }) author = '';
  @property({ type: String }) role = '';
  @property({ type: String }) avatar = '';

  render() {
    return html`
      <div class="bg-white shadow-lg rounded-lg p-8">
        <div class="text-xl italic mb-4">"${this.quote}"</div>
        <div class="flex items-center">
          <img src="${this.avatar}" alt="${this.author}" class="w-12 h-12 rounded-full mr-4">
          <div>
            <div class="font-bold">${this.author}</div>
            <div class="text-gray-500">${this.role}</div>
          </div>
        </div>
      </div>
    `;
  }
}

