// src/components/atoms/Button/BaseButton.ts
import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';

export abstract class BaseButton extends LitElement {
  @property({ type: Boolean }) disabled = false;
  @property({ type: String }) type: 'button' | 'submit' = 'button';
  @property({ type: String }) size: 'sm' | 'md' | 'lg' = 'md';

  createRenderRoot() {
    return this;
  }

  protected abstract getVariantClasses(): string;

  protected getSizeClasses(): string {
    return {
      sm: 'px-2 py-1 text-sm',
      md: 'px-4 py-2',
      lg: 'px-6 py-3 text-lg'
    }[this.size];
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