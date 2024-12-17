// src/components/atoms/Button/variants/PrimaryButton.ts
import { customElement } from 'lit/decorators.js';
import { LitElement, html } from 'lit';
import { BaseButton } from './BaseButton';

@customElement('primary-button')
export class PrimaryButton extends BaseButton {
  protected getVariantClasses(): string {  // Implementación del método abstracto
    return this.disabled
      ? 'bg-blue-300 text-white cursor-not-allowed'
      : 'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700';
  }
}