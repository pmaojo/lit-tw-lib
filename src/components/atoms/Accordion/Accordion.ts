// src/components/atoms/Accordion/Accordion.ts
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseComponent } from '../../base/BaseComponent';

interface AccordionItem {
  title: string;
  content: string;
  open: boolean;
}

@customElement('accordion-component')
export class Accordion extends BaseComponent {
  @property({ type: Array }) items: AccordionItem[] = [];

  protected renderContent(item?: AccordionItem): ReturnType<typeof html> {
    return html`
      <div class="space-y-2">
        ${this.items.map((item, index) => this.renderAccordionItem(item, index))}
      </div>
    `;
  }

  private renderAccordionItem(item: AccordionItem, index: number) {
    return html`
      <div class="border rounded-md">
        ${this.renderHeader(item, index)}
        ${this.renderContent(item)}
      </div>
    `;
  }

  private renderHeader(item: AccordionItem, index: number) {
    return html`
      <button
        @click=${() => this._toggleItem(index)}
        class="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-700 
               bg-gray-100 hover:bg-gray-200 focus:outline-none 
               focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75"
      >
        <span>${item.title}</span>
        ${this.renderIcon(item.open)}
      </button>
    `;
  }

  private renderIcon(isOpen: boolean) {
    return html`
      <svg 
        class="w-5 h-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 20 20" 
        fill="currentColor"
      >
        <path fill-rule="evenodd" 
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
              clip-rule="evenodd" />
      </svg>
    `;
  }

  private _toggleItem(index: number) {
    this.items = this.items.map((item, i) => ({
      ...item,
      open: i === index ? !item.open : item.open
    }));
    
    this.dispatchEvent(new CustomEvent('item-toggle', { 
      detail: { index, isOpen: this.items[index].open }
    }));
  }
}