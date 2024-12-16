// src/components/atoms/Progress/Progress.ts
import { customElement, property } from 'lit/decorators.js';
import { BaseProgress } from './BaseProgress';

type ProgressColor = 'blue' | 'green' | 'red' | 'yellow';

@customElement('custom-progress')
export class Progress extends BaseProgress {
  @property({ type: String }) color: ProgressColor = 'blue';

  protected getColorClass(): string {
    const colorClasses = {
      blue: 'bg-blue-600',
      green: 'bg-green-600',
      red: 'bg-red-600',
      yellow: 'bg-yellow-600'
    };
    
    return colorClasses[this.color];
  }
}