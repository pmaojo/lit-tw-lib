// src/components/molecules/Accordion/Accordion.ts
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('custom-accordion')
export class Accordion extends LitElement {
  @property({ type: Boolean }) allowMultiple = false;

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="space-y-2" @toggle=${this._handleToggle}>
        <slot></slot>
      </div>
    `;
  }

  private _handleToggle(e: CustomEvent) {
    if (!this.allowMultiple) {
      const items = this.querySelectorAll('accordion-item');
      items.forEach(item => {
        if (item !== e.target) {
          item.open = false;
        }
      });
    }
  }
}