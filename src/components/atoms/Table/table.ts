import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('custom-table')
export class CustomTable extends LitElement {

  createRenderRoot() {
    return this; // Desactiva el Shadow DOM
  }
  
  static styles = css`
    :host {
      display: block;
    }
  `;

  @property({ type: Array }) headers = [];
  @property({ type: Array }) rows = [];

  render() {
    return html`
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              ${this.headers.map(header => html`
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ${header}
                </th>
              `)}
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            ${this.rows.map(row => html`
              <tr>
                ${row.map(cell => html`
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ${cell}
                  </td>
                `)}
              </tr>
            `)}
          </tbody>
        </table>
      </div>
    `;
  }
}

