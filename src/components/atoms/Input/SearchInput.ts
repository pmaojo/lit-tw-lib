// src/components/atoms/Input/SearchInput.ts
import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import { BaseInput } from './BaseInput';

@customElement('search-input')
export class SearchInput extends BaseInput {
  @property({ type: Boolean }) loading = false;
  @property({ type: String }) placeholder = 'Search...';

  protected renderInput() {
    return html`
      <div class="relative">
        <input
          type="search"
          placeholder=${this.placeholder}
          .value=${this.value}
          ?disabled=${this.disabled}
          @input=${this._handleInput}
          class="w-full pl-10 pr-4 py-2 border rounded-lg ${
            this.error ? 'border-red-500' : 'border-gray-300'
          }"
        >
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          ${this.loading ? html`
            <loading-spinner size="sm"></loading-spinner>
          ` : html`
            <search-icon></search-icon>
          `}
        </div>
      </div>
    `;
  }

  private _handleInput(e: InputEvent) {
    const target = e.target as HTMLInputElement;
    this.emitChange(target.value);
  }
}