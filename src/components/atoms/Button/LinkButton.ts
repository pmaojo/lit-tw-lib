import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('link-button')
export class LinkButton extends LitElement {

  createRenderRoot() {
    return this; // Desactiva el Shadow DOM
  }
  
  static styles = css`
    :host {
      display: inline-block;
    }
  `;

  @property({ type: String }) label = 'Link';
  @property({ type: String }) href = '#';
  @property({ type: Boolean }) disabled = false;

  render() {
    const baseClasses = 'font-medium transition-colors duration-200';
    const colorClasses = this.disabled
      ? 'text-gray-400 cursor-not-allowed'
      : 'text-blue-600 hover:text-blue-800';

    return html`
      <a
        href=${this.disabled ? null : this.href}
        class="${baseClasses} ${colorClasses}"
        ?disabled=${this.disabled}
      >
        ${this.label}
      </a>
    `;
  }
}

