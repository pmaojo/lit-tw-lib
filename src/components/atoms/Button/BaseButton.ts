// src/components/atoms/Button/base/BaseButton.ts
import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';

export abstract class BaseButton extends LitElement {
  @property({ type: Boolean }) disabled = false;
  @property({ type: String }) size: 'sm' | 'md' | 'lg' = 'md';
  @property({ type: String }) type: 'button' | 'submit' = 'button';

  createRenderRoot() {
    return this;
  }

  protected abstract getVariantClasses(): string;  // Método abstracto

  protected getSizeClasses(): string {
    const sizes = {
      sm: 'px-2 py-1 text-sm',
      md: 'px-4 py-2',
      lg: 'px-6 py-3 text-lg'
    };
    return sizes[this.size];
  }

  render() {
    return html`
      <button
        type=${this.type}
        ?disabled=${this.disabled}
        class="rounded-md ${this.getVariantClasses()} ${this.getSizeClasses()}"
        @click=${this._handleClick}
      >
        <slot></slot>
      </button>
    `;
  }

  private _handleClick(e: Event) {
    this.dispatchEvent(new CustomEvent('click', { 
      detail: e,
      bubbles: true,
      composed: true 
    }));
  }
}