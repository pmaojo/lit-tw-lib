// src/components/organisms/Forms/LoginForm/LoginForm.ts
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('login-form')
export class LoginForm extends LitElement {
  createRenderRoot() {
    return this;
  }

  @property({ type: String }) email = '';
  @property({ type: String }) password = '';
  @property({ type: Boolean }) rememberMe = false;
  @property({ type: Boolean }) loading = false;
  @property({ type: Object }) errors = {};

  render() {
    return html`
      <form @submit=${this._handleSubmit} class="space-y-6">
        <!-- Email Input -->
        <text-input
          label="Email"
          type="email"
          .value=${this.email}
          @input=${this._handleEmailInput}
          .error=${this.errors?.email}
          required
        ></text-input>

        <!-- Password Input -->
        <text-input
          label="Password"
          type="password"
          .value=${this.password}
          @input=${this._handlePasswordInput}
          .error=${this.errors?.password}
          required
        ></text-input>

        <!-- Remember Me -->
        <custom-checkbox
          .checked=${this.rememberMe}
          @change=${this._handleRememberMeChange}
          label="Remember me"
        ></custom-checkbox>

        <!-- Submit Button -->
        <loading-button
          label="Sign in"
          .loading=${this.loading}
          type="submit"
          class="w-full"
        ></loading-button>
      </form>
    `;
  }

  private _handleEmailInput(e: CustomEvent) {
    this.dispatchEvent(new CustomEvent('email-change', { 
      detail: e.detail.value 
    }));
  }

  private _handlePasswordInput(e: CustomEvent) {
    this.dispatchEvent(new CustomEvent('password-change', { 
      detail: e.detail.value 
    }));
  }

  private _handleRememberMeChange(e: CustomEvent) {
    this.dispatchEvent(new CustomEvent('remember-change', { 
      detail: e.detail.checked 
    }));
  }

  private _handleSubmit(e: Event) {
    e.preventDefault();
    this.dispatchEvent(new CustomEvent('submit', {
      detail: {
        email: this.email,
        password: this.password,
        rememberMe: this.rememberMe
      }
    }));
  }
}