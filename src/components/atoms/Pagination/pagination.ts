import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('custom-pagination')
export class CustomPagination extends LitElement {

  createRenderRoot() {
    return this; // Desactiva el Shadow DOM
  }
  
  static styles = css`
    :host {
      display: block;
    }
  `;

  @property({ type: Number }) currentPage = 1;
  @property({ type: Number }) totalPages = 1;

  render() {
    return html`
      <nav class="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
        <div class="flex w-0 flex-1">
          <button
            @click=${() => this._changePage(this.currentPage - 1)}
            ?disabled=${this.currentPage === 1}
            class="inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 ${this.currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}"
          >
            Previous
          </button>
        </div>
        <div class="hidden md:flex">
          ${this._generatePageNumbers()}
        </div>
        <div class="flex w-0 flex-1 justify-end">
          <button
            @click=${() => this._changePage(this.currentPage + 1)}
            ?disabled=${this.currentPage === this.totalPages}
            class="inline-flex items-center border-t-2 border-transparent pt-4 pl-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 ${this.currentPage === this.totalPages ? 'cursor-not-allowed opacity-50' : ''}"
          >
            Next
          </button>
        </div>
      </nav>
    `;
  }

  private _generatePageNumbers() {
    const pages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(html`
        <button
          @click=${() => this._changePage(i)}
          class="inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium ${i === this.currentPage ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}"
        >
          ${i}
        </button>
      `);
    }
    return pages;
  }

  private _changePage(newPage: number) {
    if (newPage >= 1 && newPage <= this.totalPages) {
      this.currentPage = newPage;
      this.dispatchEvent(new CustomEvent('page-change', { detail: { page: this.currentPage } }));
    }
  }
}

