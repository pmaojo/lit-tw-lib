// src/components/atoms/Input/BaseInput.ts
import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export abstract class BaseInput extends LitElement {
  @property({ type: String }) value = '';
  @property({ type: String }) label = '';
  @property({ type: String }) error = '';
  @property({ type: Boolean }) disabled = false;

  createRenderRoot() {
    return this;
  }

  protected abstract renderInput(): TemplateResult;

  protected emitChange(value: string) {
    this.value = value;
    this.dispatchEvent(new CustomEvent('change', { 
      detail: value,
      bubbles: true 
    }));
  }

  render() {
    return html`
      <div class="w-full">
        ${this.label ? html`
          <label class="block text-sm font-medium text-gray-700 mb-1">
            ${this.label}
          </label>
        ` : ''}
        
        ${this.renderInput()}
        
        ${this.error ? html`
          <p class="mt-1 text-sm text-red-500">
            ${this.error}
          </p>
        ` : ''}
      </div>
    `;
  }
}