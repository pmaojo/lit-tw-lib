// src/components/molecules/AlertDialog/AlertDialog.ts
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

type AlertType = 'info' | 'success' | 'warning' | 'error';

@customElement('alert-dialog')
export class AlertDialog extends LitElement {
  createRenderRoot() {
    return this;
  }

  @property({ type: String }) title = '';
  @property({ type: String }) message = '';
  @property({ type: String }) type: AlertType = 'info';
  @property({ type: Boolean }) open = false;
  @property({ type: Boolean }) showCancel = false;
  @property({ type: String }) confirmText = 'Confirm';
  @property({ type: String }) cancelText = 'Cancel';

  render() {
    if (!this.open) return null;

    const colors = {
      info: 'blue',
      success: 'green',
      warning: 'yellow',
      error: 'red'
    };

    const icons = {
      info: 'info',
      success: 'check_circle',
      warning: 'warning',
      error: 'error'
    };

    return html`
      <div class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <!-- Backdrop -->
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" @click=${this._handleCancel}></div>

          <!-- Dialog -->
          <div class="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <!-- Icon -->
                <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-${colors[this.type]}-100 sm:mx-0 sm:h-10 sm:w-10">
                  <span class="material-icons text-${colors[this.type]}-600">
                    ${icons[this.type]}
                  </span>
                </div>

                <!-- Content -->
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 class="text-lg font-medium leading-6 text-gray-900" id="modal-title">
                    ${this.title}
                  </h3>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">
                      ${this.message}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Actions -->
            <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <primary-button
                @click=${this._handleConfirm}
                class="w-full sm:w-auto sm:ml-3"
              >
                ${this.confirmText}
              </primary-button>
              
              ${this.showCancel ? html`
                <secondary-button
                  @click=${this._handleCancel}
                  class="mt-3 w-full sm:w-auto sm:mt-0"
                >
                  ${this.cancelText}
                </secondary-button>
              ` : ''}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  private _handleConfirm() {
    this.dispatchEvent(new CustomEvent('confirm'));
  }

  private _handleCancel() {
    this.dispatchEvent(new CustomEvent('cancel'));
  }
}