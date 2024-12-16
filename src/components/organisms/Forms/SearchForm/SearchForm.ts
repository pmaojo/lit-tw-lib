// src/components/organisms/Forms/SearchForm/SearchForm.ts
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('search-form')
export class SearchForm extends LitElement {
  @property({ type: String }) value = '';
  @property({ type: Boolean }) loading = false;
  @property({ type: String }) placeholder = 'Search...';

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <form @submit=${this._handleSubmit} class="flex gap-2">
        <text-input
          .value=${this.value}
          .placeholder=${this.placeholder}
          @change=${this._handleInput}
          class="flex-1"
        ></text-input>
        
        <primary-button
          type="submit"
          .loading=${this.loading}
        >
          Search
        </primary-button>
      </form>
    `;
  }

  private _handleInput(e: CustomEvent) {
    this.dispatchEvent(new CustomEvent('search-input', {
      detail: e.detail,
      bubbles: true,
      composed: true
    }));
  }

  private _handleSubmit(e: Event) {
    e.preventDefault();
    this.dispatchEvent(new CustomEvent('search-submit', {
      detail: this.value,
      bubbles: true,
      composed: true
    }));
  }
}