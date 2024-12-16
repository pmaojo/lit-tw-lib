import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('custom-badge')
export class CustomBadge extends LitElement {
  createRenderRoot() {
    return this; // Desactiva el Shadow DOM
  }
  static styles = css`
    :host {
      display: inline-block;
    }
  `;

  @property({ type: String }) content = '';
  @property({ type: String }) color = 'blue';

  render() {
    const colorClasses = {
      blue: 'bg-blue-100 text-blue-800',
      green: 'bg-green-100 text-green-800',
      red: 'bg-red-100 text-red-800',
      yellow: 'bg-yellow-100 text-yellow-800',
    };

    return html`
      <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${colorClasses[this.color]}">
        ${this.content}
      </span>
    `;
  }
}

