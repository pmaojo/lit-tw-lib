import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

type DividerOrientation = 'horizontal' | 'vertical';

@customElement('custom-divider')
export class CustomDivider extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  @property({ type: String }) orientation: DividerOrientation = 'horizontal';
  @property({ type: String }) color = 'gray-200';

  render() {
    const orientationClasses = {
      horizontal: 'w-full h-px',
      vertical: 'h-full w-px',
    };

    return html`
      <div class="${orientationClasses[this.orientation]} bg-${this.color}"></div>
    `;
  }
}

