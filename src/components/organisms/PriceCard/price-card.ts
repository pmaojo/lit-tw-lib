import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('price-card')
export class PriceCard extends LitElement {
  
  createRenderRoot() {
    return this; // Desactiva el Shadow DOM
  }

  static styles = css`
    :host {
      display: block;
    }
  `;

  @property({ type: String }) plan = '';
  @property({ type: String }) price = '';
  @property({ type: String }) period = '';
  @property({ type: Array }) features = [];
  @property({ type: Boolean }) popular = false;

  render() {
    return html`
      <div class="relative p-6 bg-white shadow-lg rounded-lg ${this.popular ? 'border-2 border-blue-500' : ''}">
        ${this.popular ? html`
          <span class="absolute top-0 right-0 px-3 py-1 text-xs font-medium tracking-wider text-white bg-blue-500 rounded-bl">
            Popular
          </span>
        ` : ''}
        <h3 class="text-2xl font-bold text-gray-900 mb-4">${this.plan}</h3>
        <div class="flex items-baseline mb-6">
          <span class="text-5xl font-extrabold">${this.price}</span>
          <span class="ml-1 text-xl font-medium text-gray-500">/${this.period}</span>
        </div>
        <ul class="mb-8 space-y-4">
          ${this.features.map(feature => html`
            <li class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              ${feature}
            </li>
          `)}
        </ul>
        <button class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline">
          Choose Plan
        </button>
      </div>
    `;
  }
}

