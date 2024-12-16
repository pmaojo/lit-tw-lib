// src/components/atoms/Input/PhoneInput.ts
import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import { BaseInput } from './BaseInput';

@customElement('phone-input')
export class PhoneInput extends BaseInput {
  @property({ type: String }) placeholder = '(123) 456-7890';
  @property({ type: String }) countryCode = '+1';

  protected renderInput() {
    return html`
      <div class="flex">
        <div class="flex-shrink-0">
          <select
            class="h-full py-2 pl-3 pr-7 border-r-0 border rounded-l-md ${
              this.error ? 'border-red-500' : 'border-gray-300'
            }"
            .value=${this.countryCode}
            @change=${this._handleCountryChange}
          >
            <option value="+1">US (+1)</option>
            <option value="+44">UK (+44)</option>
            <option value="+34">ES (+34)</option>
          </select>
        </div>
        <input
          type="tel"
          .value=${this.value}
          placeholder=${this.placeholder}
          ?disabled=${this.disabled}
          @input=${this._handleInput}
          class="flex-1 px-3 py-2 border-l-0 border rounded-r-md ${
            this.error ? 'border-red-500' : 'border-gray-300'
          }"
        />
      </div>
    `;
  }

  private _handleInput(e: InputEvent) {
    const target = e.target as HTMLInputElement;
    const formatted = this._formatPhoneNumber(target.value);
    target.value = formatted;
    this.emitChange(formatted);
  }

  private _handleCountryChange(e: Event) {
    const target = e.target as HTMLSelectElement;
    this.countryCode = target.value;
    this.dispatchEvent(new CustomEvent('country-change', { 
      detail: this.countryCode 
    }));
  }

  private _formatPhoneNumber(value: string): string {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 6) return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
    return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
  }
}