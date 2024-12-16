// src/components/atoms/Avatar/ImageAvatar.ts
import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import { BaseAvatar } from './BaseAvatar';

@customElement('image-avatar')
export class ImageAvatar extends BaseAvatar {
  @property({ type: String }) src = '';
  @property({ type: String }) status: 'online' | 'offline' | 'away' | 'busy' = '';

  protected renderContent() {
    return this.src ? html`
      <img
        src=${this.src}
        alt=${this.alt}
        class="w-full h-full object-cover"
      >
    ` : html`
      <div class="w-full h-full bg-gray-200 flex items-center justify-center">
        <span class="text-gray-500 material-icons">person</span>
      </div>
    `;
  }

  protected getStatusColor() {
    return {
      online: 'bg-green-500',
      offline: 'bg-gray-500',
      away: 'bg-yellow-500',
      busy: 'bg-red-500'
    }[this.status] || '';
  }
}