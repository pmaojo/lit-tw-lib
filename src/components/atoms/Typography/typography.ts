import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('custom-typography')
export class CustomTypography extends LitElement {

  createRenderRoot() {
    return this; // Desactiva el Shadow DOM
  }
  
  static styles = css`
    :host {
      display: block;
    }
  `;

  @property({ type: String }) variant = 'body1';

  render() {
    const variantClasses: { [key: string]: string } = {
      h1: 'text-4xl font-bold mb-4',
      h2: 'text-3xl font-bold mb-3',
      h3: 'text-2xl font-bold mb-2',
      h4: 'text-xl font-bold mb-2',
      h5: 'text-lg font-bold mb-2',
      h6: 'text-base font-bold mb-2',
      body1: 'text-base mb-2',
      body2: 'text-sm mb-2',
      caption: 'text-xs text-gray-600',
    };

    return html`
      <div class="${variantClasses[this.variant]}">
        <slot></slot>
      </div>
    `;
  }}

