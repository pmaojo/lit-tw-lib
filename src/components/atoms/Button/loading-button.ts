import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('loading-button')
export class LoadingButton extends LitElement {

  createRenderRoot() {
    return this; // Desactiva el Shadow DOM
  }
  
  static styles = css`
    :host {
      display: inline-block;
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    .spinner {
      animation: spin 1s linear infinite;
    }
  `;

  @property({ type: String }) label = 'Button';
  @property({ type: Boolean }) loading = false;
  @property({ type: Boolean }) disabled = false;

  render() {
    const baseClasses = 'font-bold rounded transition-colors duration-200 px-4 py-2 flex items-center';
    const colorClasses = this.disabled || this.loading
      ? 'bg-blue-300 text-white cursor-not-allowed'
      : 'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700';

    return html`
      <button
        class="${baseClasses} ${colorClasses}"
        ?disabled=${this.disabled || this.loading}
      >
        ${this.loading ? html`
          <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        ` : ''}
        ${this.label}
      </button>
    `;
  }
}

