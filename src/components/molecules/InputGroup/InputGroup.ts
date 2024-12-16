// src/components/molecules/InputGroup/InputGroup.ts
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('input-group')
export class InputGroup extends LitElement {
  createRenderRoot() {
    return this;
  }

  @property({ type: String }) label = '';
  @property({ type: Boolean }) required = false;
  @property({ type: String }) helpText = '';
  @property({ type: String }) error = '';
  @property({ type: String }) direction: 'horizontal' | 'vertical' = 'vertical';

  render() {
    return html`
      <div class="flex ${this.direction === 'horizontal' ? 'flex-row items-center gap-4' : 'flex-col gap-2'}">
        ${this.label && html`
          <label class="block text-sm font-medium text-gray-700 ${
            this.direction === 'horizontal' ? 'min-w-[120px]' : ''
          }">
            ${this.label}
            ${this.required ? html`<span class="text-red-500">*</span>` : ''}
          </label>
        `}
        
        <div class="flex-1">
          <div class="flex gap-2">
            <slot></slot>
          </div>
          
          ${this.helpText && !this.error ? html`
            <p class="mt-1 text-sm text-gray-500">${this.helpText}</p>
          ` : ''}
          
          ${this.error ? html`
            <p class="mt-1 text-sm text-red-500">${this.error}</p>
          ` : ''}
        </div>
      </div>
    `;
  }
}