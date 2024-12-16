// src/components/atoms/Input/TextInput.ts
import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import { BaseInput } from './BaseInput';

@customElement('text-input')
export class TextInput extends BaseInput {
  @property({ type: String }) placeholder = '';
  @property({ type: String }) type: 'text' | 'password' | 'email' | 'tel' | 'url' = 'text';

  protected renderInput() {
    return html`
      <input
        type=${this.type}
        .value=${this.value}
        placeholder=${this.placeholder}
        ?disabled=${this.disabled}
        @input=${this._handleInput}
        class="w-full px-3 py-2 border rounded-md ${
          this.error ? 'border-red-500' : 'border-gray-300'
        } focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:bg-gray-100"
      />
    `;
  }

  private _handleInput(e: InputEvent) {
    const target = e.target as HTMLInputElement;
    this.emitChange(target.value);
  }
}