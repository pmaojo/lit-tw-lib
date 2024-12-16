// src/components/molecules/SearchBar/SearchBar.ts
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('search-bar')
export class SearchBar extends LitElement {
  createRenderRoot() {
    return this;
  }

  @property({ type: String }) value = '';
  @property({ type: String }) placeholder = 'Search...';
  @property({ type: Boolean }) loading = false;
  @property({ type: Array }) suggestions = [];
  @property({ type: Boolean }) showSuggestions = false;

  render() {
    return html`
      <div class="relative">
        <div class="relative">
          <text-input
            .value=${this.value}
            .placeholder=${this.placeholder}
            @change=${this._handleInput}
            class="pl-10"
          ></text-input>
          
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            ${this.loading ? html`
              <loading-spinner size="sm"></loading-spinner>
            ` : html`
              <icon-button icon="search" size="sm" disabled></icon-button>
            `}
          </div>
        </div>

        ${this.showSuggestions && this.suggestions.length > 0 ? html`
          <div class="absolute w-full mt-1 bg-white border rounded-md shadow-lg z-10">
            ${this.suggestions.map(suggestion => html`
              <button
                @click=${() => this._handleSuggestionClick(suggestion)}
                class="w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                ${suggestion.text}
              </button>
            `)}
          </div>
        ` : ''}
      </div>
    `;
  }

  private _handleInput(e: CustomEvent) {
    this.value = e.detail;
    this.dispatchEvent(new CustomEvent('search', { 
      detail: this.value 
    }));
  }

  private _handleSuggestionClick(suggestion: any) {
    this.value = suggestion.text;
    this.showSuggestions = false;
    this.dispatchEvent(new CustomEvent('suggestion-select', { 
      detail: suggestion 
    }));
  }
}