import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('button-group')
export class ButtonGroup extends LitElement {
  
  createRenderRoot() {
    return this; // Desactiva el Shadow DOM
  }

  static styles = css`
    :host {
      display: inline-flex;
    }
    ::slotted(*) {
      border-radius: 0;
    }
    ::slotted(:first-child) {
      border-top-left-radius: 0.25rem;
      border-bottom-left-radius: 0.25rem;
    }
    ::slotted(:last-child) {
      border-top-right-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
    }
  `;

  render() {
    return html`
      <div class="inline-flex rounded-md shadow-sm" role="group">
        <slot></slot>
      </div>
    `;
  }
}

