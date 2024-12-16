// src/components/atoms/Avatar/BaseAvatar.ts
import { LitElement, TemplateResult, html } from 'lit';
import { property } from 'lit/decorators.js';

export abstract class BaseAvatar extends LitElement {
  @property({ type: String }) size: 'sm' | 'md' | 'lg' = 'md';
  @property({ type: String }) alt = '';
  
  protected abstract renderContent(): TemplateResult;
  protected abstract getStatusColor(): string;

  protected getSizeClass(): string {
    return {
      sm: 'w-8 h-8',
      md: 'w-12 h-12',
      lg: 'w-16 h-16'
    }[this.size];
  }

  render() {
    return html`
      <div class="relative inline-block">
        <div class="${this.getSizeClass()} rounded-full overflow-hidden">
          ${this.renderContent()}
        </div>
        ${this.getStatusColor() ? html`
          <span class="absolute bottom-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white ${this.getStatusColor()}"></span>
        ` : ''}
      </div>
    `;
  }
}