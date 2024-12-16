// src/components/atoms/Progress/BaseProgress.ts
import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';

export abstract class BaseProgress extends LitElement {
  @property({ type: Number }) value = 0;
  @property({ type: Number }) max = 100;
  @property({ type: String }) size = 'medium';
  @property({ type: Boolean }) showLabel = true;

  createRenderRoot() {
    return this;
  }

  protected abstract getColorClass(): string;

  render() {
    const percentage = (this.value / this.max) * 100;
    const sizeClasses = {
      small: 'h-1',
      medium: 'h-2',
      large: 'h-4'
    }[this.size];

    return html`
      <div class="w-full">
        ${this.showLabel ? this.renderLabel(percentage) : ''}
        <div class="w-full bg-gray-200 rounded-full ${sizeClasses}">
          <div
            class="${this.getColorClass()} rounded-full ${sizeClasses}"
            style="width: ${percentage}%"
          ></div>
        </div>
      </div>
    `;
  }

  protected renderLabel(percentage: number) {
    return html`
      <div class="flex justify-between mb-1">
        <slot name="label">
          <span class="text-sm font-medium text-gray-700">Progress</span>
        </slot>
        <span class="text-sm font-medium text-gray-700">${Math.round(percentage)}%</span>
      </div>
    `;
  }
}