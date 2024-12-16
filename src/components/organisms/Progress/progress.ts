import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('custom-progress')
export class CustomProgress extends LitElement {

  createRenderRoot() {
    return this; // Desactiva el Shadow DOM
  }
  
  static styles = css`
    :host {
      display: block;
    }
  `;

  @property({ type: Number }) value = 0;
  @property({ type: Number }) max = 100;
  @property({ type: String }) color = 'blue';
  @property({ type: String }) size = 'medium';
  @property({ type: Boolean }) showLabel = true;

  render() {
    const percentage = (this.value / this.max) * 100;
    
    const sizeClasses = {
      small: 'h-1',
      medium: 'h-2',
      large: 'h-4'
    }[this.size];

    const colorClasses = {
      blue: 'bg-blue-600',
      green: 'bg-green-600',
      red: 'bg-red-600',
      yellow: 'bg-yellow-600'
    }[this.color];

    return html`
      <div class="w-full">
        ${this.showLabel ? html`
          <div class="flex justify-between mb-1">
            <span class="text-sm font-medium text-gray-700">Progress</span>
            <span class="text-sm font-medium text-gray-700">${Math.round(percentage)}%</span>
          </div>
        ` : ''}
        <div class="w-full bg-gray-200 rounded-full ${sizeClasses}">
          <div
            class="${colorClasses} rounded-full ${sizeClasses}"
            style="width: ${percentage}%"
          ></div>
        </div>
      </div>
    `;
  }
}

