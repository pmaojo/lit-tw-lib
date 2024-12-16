// src/components/atoms/Input/UrlInput.ts
import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import { BaseInput } from './BaseInput';

@customElement('url-input')
export class UrlInput extends BaseInput {
  @property({ type: String }) placeholder = 'https://example.com';
  @property({ type: Boolean }) requireHttps = true;

  protected renderInput() {
    return html`
      <div class="relative">
        <input
          type="url"
          .value=${this.value}
          placeholder=${this.placeholder}
          ?disabled=${this.disabled}
          @input=${this._handleInput}
          class="w-full pl-10 pr-3 py-2 border rounded-md ${
            this.error ? 'border-red-500' : 'border-gray-300'
          }"
        />
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span class="material-icons text-gray-400 text-sm">link</span>
        </div>
      </div>
    `;
  }

  private _handleInput(e: InputEvent) {
    const target = e.target as HTMLInputElement;
    if (this._validateUrl(target.value)) {
      this.emitChange(target.value);
    }
  }

  private _validateUrl(url: string): boolean {
    try {
      const urlObj = new URL(url);
      return this.requireHttps ? urlObj.protocol === 'https:' : true;
    } catch {
      return false;
    }
  }
}