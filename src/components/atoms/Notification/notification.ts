import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('custom-notification')
export class CustomNotification extends LitElement {

  createRenderRoot() {
    return this; // Desactiva el Shadow DOM
  }
  
  static styles = css`
    :host {
      display: block;
    }
  `;

  @property({ type: String }) type = 'info';
  @property({ type: String }) message = '';

  render() {
    const bgColor = {
      info: 'bg-blue-50',
      success: 'bg-green-50',
      warning: 'bg-yellow-50',
      error: 'bg-red-50'
    }[this.type];

    const textColor = {
      info: 'text-blue-700',
      success: 'text-green-700',
      warning: 'text-yellow-700',
      error: 'text-red-700'
    }[this.type];

    const icon = {
      info: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      success: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      warning: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
      error: 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
    }[this.type];

    return html`
      <div class="rounded-md p-4 ${bgColor}">
        <div class="flex">
          <div class="flex-shrink-0">
            <svg class="h-5 w-5 ${textColor}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="${icon}" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium ${textColor}">
              ${this.message}
            </p>
          </div>
        </div>
      </div>
    `;
  }
}

