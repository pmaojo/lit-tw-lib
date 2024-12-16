// src/components/atoms/Input/TextAreaInput.ts
import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import { BaseInput } from './BaseInput';

@customElement('textarea-input')
export class TextAreaInput extends BaseInput {
  @property({ type: Number }) rows = 3;
  @property({ type: String }) placeholder = '';
  @property({ type: Number }) maxLength?: number;
  @property({ type: Boolean }) autoResize = false;

  protected renderInput() {
    return html`
      <textarea
        .value=${this.value}
        placeholder=${this.placeholder}
        ?disabled=${this.disabled}
        rows=${this.rows}
        maxlength=${this.maxLength}
        @input=${this._handleInput}
        class="w-full px-3 py-2 border rounded-md resize-y ${
          this.error ? 'border-red-500' : 'border-gray-300'
        }"
      ></textarea>
      ${this.maxLength ? html`
        <div class="text-xs text-gray-500 text-right mt-1">
          ${this.value.length}/${this.maxLength}
        </div>
      ` : ''}
    `;
  }

  private _handleInput(e: InputEvent) {
    const target = e.target as HTMLTextAreaElement;
    this.emitChange(target.value);
    
    if (this.autoResize) {
      target.style.height = 'auto';
      target.style.height = `${target.scrollHeight}px`;
    }
  }
}