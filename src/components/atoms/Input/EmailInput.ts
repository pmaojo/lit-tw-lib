// src/components/atoms/Input/EmailInput.ts
import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import { BaseInput } from './BaseInput';

@customElement('email-input')
export class EmailInput extends BaseInput {
  @property({ type: String }) placeholder = 'email@example.com';
  @property({ type: Boolean }) allowMultiple = false;

  protected renderInput() {
    return html`
      <div class="relative">
        <input
          type="email"
          .value=${this.value}
          placeholder=${this.placeholder}
          ?disabled=${this.disabled}
          ?multiple=${this.allowMultiple}
          @input=${this._handleInput}
          class="w-full px-3 py-2 border rounded-md ${
            this.error ? 'border-red-500' : 'border-gray-300'
          }"
        />
        <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          ${this.error ? html`
            <span class="material-icons text-red-500 text-sm">error</span>
          ` : ''}
        </div>
      </div>
    `;
  }

  private _handleInput(e: InputEvent) {
    const target = e.target as HTMLInputElement;
    if (this._validateEmail(target.value)) {
      this.emitChange(target.value);
    }
  }

  private _validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}