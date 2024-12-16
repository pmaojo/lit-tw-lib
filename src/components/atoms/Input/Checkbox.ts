import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('custom-checkbox')
export class CustomCheckbox extends LitElement {

  createRenderRoot() {
    return this; // Desactiva el Shadow DOM
  }
  
  static styles = css`
    :host {
      display: inline-block;
    }
  `;

  @property({ type: Boolean }) checked = false;
  @property({ type: String }) label = '';
  @property({ type: Boolean }) disabled = false;

  render() {
    return html`
      <label class="inline-flex items-center">
        <input
          type="checkbox"
          class="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this._handleChange}
        >
        <span class="ml-2 text-gray-700">${this.label}</span>
      </label>
    `;
  }

  _handleChange(e) {
    this.checked = e.target.checked;
    this.dispatchEvent(new CustomEvent('change', { detail: { checked: this.checked } }));
  }
}

