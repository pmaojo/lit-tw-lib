import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('secondary-button')
export class SecondaryButton extends LitElement {

  createRenderRoot() {
    return this; // Desactiva el Shadow DOM
  }
  
  static styles = css`
    :host {
      display: inline-block;
    }
  `;

  @property({ type: String }) label = 'Button';
  @property({ type: String }) size = 'medium';
  @property({ type: Boolean }) disabled = false;

  render() {
    const sizeClasses: Record<string, string> = {
      small: 'px-2 py-1 text-sm',
      medium: 'px-4 py-2',
      large: 'px-6 py-3 text-lg',
    };

    const baseClasses = 'font-bold rounded transition-colors duration-200';
    const colorClasses = this.disabled
      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 active:bg-gray-200';

    return html`
      <button
        class="${baseClasses} ${colorClasses} ${sizeClasses[this.size]}"
        ?disabled=${this.disabled}
      >
        ${this.label}
      </button>
    `;
  }
}