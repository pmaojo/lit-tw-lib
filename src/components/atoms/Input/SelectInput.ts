// src/components/atoms/Input/SelectInput.ts
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

interface SelectOption {
  value: string;
  label: string;
}

@customElement('select-input')
export class SelectInput extends LitElement {
  createRenderRoot() {
    return this;
  }

  @property({ type: String }) value = '';
  @property({ type: String }) label = '';
  @property({ type: Array }) options: SelectOption[] = [];
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) required = false;
  @property({ type: String }) error = '';

  render() {
    return html`
      <div class="flex flex-col">
        ${this.label ? html`
          <label class="mb-1 text-sm font-medium text-gray-700">
            ${this.label}
            ${this.required ? html`<span class="text-red-500">*</span>` : ''}
          </label>
        ` : ''}
        
        <select
          class="w-full px-3 py-2 border rounded-md ${
            this.error ? 'border-red-500' : 'border-gray-300'
          } ${
            this.disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'
          }"
          .value=${this.value}
          ?disabled=${this.disabled}
          ?required=${this.required}
          @change=${this._handleChange}
        >
          <option value="">Seleccionar...</option>
          ${this.options.map(option => html`
            <option value=${option.value}>${option.label}</option>
          `)}
        </select>
        
        ${this.error ? html`
          <span class="mt-1 text-sm text-red-500">${this.error}</span>
        ` : ''}
      </div>
    `;
  }

  private _handleChange(e: Event) {
    const target = e.target as HTMLSelectElement;
    this.value = target.value;
    this.dispatchEvent(new CustomEvent('change', { 
      detail: { value: this.value }
    }));
  }
}