// src/components/molecules/FormField/FormField.ts
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('form-field')
export class FormField extends LitElement {
  @property({ type: String }) label = '';
  @property({ type: String }) error = '';
  @property({ type: Boolean }) required = false;
  @property({ type: String }) helpText = '';

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="flex flex-col gap-1">
        ${this.label && html`
          <label class="text-sm font-medium text-gray-700">
            ${this.label}
            ${this.required && html`
              <span class="text-red-500">*</span>
            `}
          </label>
        `}
        
        <slot></slot>

        ${this.error && html`
          <span class="text-xs text-red-500">${this.error}</span>
        `}
        
        ${this.helpText && html`
          <span class="text-xs text-gray-500">${this.helpText}</span>
        `}
      </div>
    `;
  }
}