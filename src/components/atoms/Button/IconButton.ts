import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('icon-button')
export class IconButton extends LitElement {

  createRenderRoot() {
    return this; // Desactiva el Shadow DOM
  }
  
  static styles = css`
    :host {
      display: inline-block;
    }
  `;

  @property({ type: String }) icon = '';
  @property({ type: String }) size = 'medium';
  @property({ type: Boolean }) disabled = false;

  render() {
    const sizeClasses = {
      small: 'p-1 text-sm',
      medium: 'p-2',
      large: 'p-3 text-lg',
    };

    const baseClasses = 'rounded-full transition-colors duration-200 flex items-center justify-center';
    const colorClasses = this.disabled
      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
      : 'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700';

    return html`
      <button
        class="${baseClasses} ${colorClasses} ${sizeClasses[this.size]}"
        ?disabled=${this.disabled}
      >
        <span class="material-icons">${this.icon}</span>
      </button>
    `;
  }
}

