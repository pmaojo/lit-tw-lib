// src/components/atoms/Input/NumberInput.ts
import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import { BaseInput } from './BaseInput';

@customElement('number-input')
export class NumberInput extends BaseInput {
  @property({ type: Number }) min?: number;
  @property({ type: Number }) max?: number;
  @property({ type: Number }) step = 1;

  protected renderInput() {
    return html`
      <div class="relative">
        <button
          type="button"
          @click=${this._decrease}
          ?disabled=${this.disabled || (this.min !== undefined && Number(this.value) <= this.min)}
          class="absolute left-0 top-0 h-full px-2 text-gray-500 hover:text-gray-700 disabled:text-gray-300"
        >
          -
        </button>
        
        <input
          type="number"
          .value=${this.value}
          ?disabled=${this.disabled}
          min=${this.min}
          max=${this.max}
          step=${this.step}
          @input=${this._handleInput}
          class="w-full px-8 py-2 text-center border rounded-md ${
            this.error ? 'border-red-500' : 'border-gray-300'
          }"
        />
        
        <button
          type="button"
          @click=${this._increase}
          ?disabled=${this.disabled || (this.max !== undefined && Number(this.value) >= this.max)}
          class="absolute right-0 top-0 h-full px-2 text-gray-500 hover:text-gray-700 disabled:text-gray-300"
        >
          +
        </button>
      </div>
    `;
  }

  private _handleInput(e: InputEvent) {
    const target = e.target as HTMLInputElement;
    this.emitChange(target.value);
  }

  private _increase() {
    const newValue = Number(this.value || 0) + this.step;
    if (this.max === undefined || newValue <= this.max) {
      this.emitChange(String(newValue));
    }
  }

  private _decrease() {
    const newValue = Number(this.value || 0) - this.step;
    if (this.min === undefined || newValue >= this.min) {
      this.emitChange(String(newValue));
    }
  }
}