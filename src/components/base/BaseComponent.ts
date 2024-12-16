import { LitElement } from 'lit';

export abstract class BaseComponent extends LitElement {
  createRenderRoot() {
    return this; // Mantener la consistencia del Shadow DOM
  }

  protected abstract renderContent(): TemplateResult;

  render() {
    return this.renderContent();
  }
}