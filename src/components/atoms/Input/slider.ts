import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('custom-slider')
export class CustomSlider extends LitElement {

  createRenderRoot() {
    return this; // Desactiva el Shadow DOM
  }
  
  static styles = css`
    :host {
      display: block;
    }
  `;

  @property({ type: Number }) min = 0;
  @property({ type: Number }) max = 100;
  @property({ type: Number }) value = 50;
  @property({ type: String }) label = '';

  render() {
    return html`
      <div class="w-full">
        ${this.label ? html`<label class="block text-sm font-medium text-gray-700 mb-1">${this.label}</label>` : ''}
        <input 
          type="range" 
          class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          min=${this.min}
          max=${this.max}
          .value=${this.value}
          @input=${this._handleInput}
        >
        <div class="text-sm text-gray-500 mt-1">${this.value}</div>
      </div>
    `;
  }

  private _handleInput(e: Event) {
    this.value = Number((e.target as HTMLInputElement).value);
    this.dispatchEvent(new CustomEvent('change', { detail: { value: this.value } }));
  }
}

