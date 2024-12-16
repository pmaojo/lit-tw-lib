import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('custom-breadcrumbs')
export class CustomBreadcrumbs extends LitElement {

  createRenderRoot() {
    return this; // Desactiva el Shadow DOM
  }
  static styles = css`
    :host {
      display: block;
    }
  `;

  @property({ type: Array }) items = [];

  render() {
    return html`
      <nav class="flex" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          ${this.items.map((item, index) => html`
            <li class="inline-flex items-center">
              ${index > 0 ? html`
                <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                </svg>
              ` : ''}
              <a href="${item.href}" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
                ${item.label}
              </a>
            </li>
          `)}
        </ol>
      </nav>
    `;
  }
}

