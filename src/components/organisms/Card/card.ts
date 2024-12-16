import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('custom-card')
export class CustomCard extends LitElement {

  createRenderRoot() {
    return this; // Desactiva el Shadow DOM
  }
  
  static styles = css`
    :host {
      display: block;
    }
  `;

  @property({ type: String }) title = '';
  @property({ type: String }) content = '';
  @property({ type: String }) imageUrl = '';
  @property({ type: Boolean }) elevated = false;

  render() {
    const cardClasses = `bg-white rounded-lg overflow-hidden ${
      this.elevated ? 'shadow-lg' : 'border border-gray-200'
    }`;

    return html`
      <div class="${cardClasses}">
        ${this.imageUrl
          ? html`<img src="${this.imageUrl}" alt="${this.title}" class="w-full h-48 object-cover" />`
          : ''}
        <div class="p-4">
          ${this.title ? html`<h2 class="text-xl font-bold mb-2">${this.title}</h2>` : ''}
          <p class="text-gray-700">${this.content}</p>
        </div>
      </div>
    `;
  }
}

