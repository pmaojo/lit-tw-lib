
// src/components/molecules/ButtonGroup/ButtonGroup.ts
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('button-group')
export class ButtonGroup extends LitElement {
  @property({ type: String }) orientation: 'horizontal' | 'vertical' = 'horizontal';
  @property({ type: String }) size: 'sm' | 'md' | 'lg' = 'md';
  @property({ type: Boolean }) attached = true;

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="
        ${this.orientation === 'horizontal' ? 'flex' : 'flex flex-col'}
        ${this.attached ? 'divide-x divide-gray-200' : 'gap-2'}
        rounded-md
      ">
        <slot></slot>
      </div>
    `;
  }
}