import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('custom-tabs')
export class CustomTabs extends LitElement {

  createRenderRoot() {
    return this; // Desactiva el Shadow DOM
  }
  
  static styles = css`
    :host {
      display: block;
    }
  `;

  @property({ type: Array }) tabs = [];
  @state() private _activeTab = 0;

  render() {
    return html`
      <div>
        <div class="border-b border-gray-200">
          <nav class="-mb-px flex space-x-8" aria-label="Tabs">
            ${this.tabs.map((tab, index) => html`
              <button
                @click=${() => this._setActiveTab(index)}
                class="${index === this._activeTab
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} 
                  whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                aria-current="${index === this._activeTab ? 'page' : 'false'}"
              >
                ${tab.label}
              </button>
            `)}
          </nav>
        </div>
        <div class="mt-4">
          ${this.tabs[this._activeTab].content}
        </div>
      </div>
    `;
  }

  private _setActiveTab(index: number) {
    this._activeTab = index;
  }
}

