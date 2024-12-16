// src/components/atoms/Button/PrimaryButton.ts
import { customElement } from 'lit/decorators.js';
import { BaseButton } from './BaseButton';

@customElement('primary-button')
export class PrimaryButton extends BaseButton {
  protected getColorClasses(): string {
    return this.disabled
      ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
      : 'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700';
  }

  protected getSizeClasses(): string {
    return {
      small: 'px-2 py-1 text-sm',
      medium: 'px-4 py-2',
      large: 'px-6 py-3 text-lg',
    }[this.size];
  }
}