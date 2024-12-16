// src/components/molecules/Accordion/AccordionItem.ts
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('accordion-item')
export class AccordionItem extends LitElement {
  @property({ type: Boolean }) open = false;
  @property({ type: String }) title = '';

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="border rounded-md">
        <button
          @click=${this._toggle}
          class="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-700 bg-gray-100 hover:bg-gray-200"
        >
          <slot name="title">${this.title}</slot>
          <svg 
            class="w-5 h-5 transform ${this.open ? 'rotate-180' : ''}" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
          </svg>
        </button>
        ${this.open ? html`
          <div class="px-4 py-2">
            <slot></slot>
          </div>
        ` : ''}
      </div>
    `;
  }

  private _toggle() {
    this.open = !this.open;
    this.dispatchEvent(new CustomEvent('toggle', { 
      detail: { open: this.open },
      bubbles: true 
    }));
  }
}