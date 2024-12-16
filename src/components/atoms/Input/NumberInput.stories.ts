// src/components/atoms/Input/NumberInput.stories.ts
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './NumberInput';

const meta: Meta = {
  title: 'Atoms/Input/NumberInput',
  tags: ['autodocs'],
  render: (args) => html`
    <number-input
      .value=${args.value}
      .label=${args.label}
      .min=${args.min}
      .max=${args.max}
      .step=${args.step}
      .error=${args.error}
      ?disabled=${args.disabled}
      @change=${args.onChange}
    ></number-input>
  `,
  argTypes: {
    value: { control: 'number' },
    label: { control: 'text' },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    error: { control: 'text' },
    disabled: { control: 'boolean' },
    onChange: { action: 'change' }
  }
};

export default meta;

export const Default: StoryObj = {
  args: {
    value: 0,
    label: 'Number Input',
    min: undefined,
    max: undefined,
    step: 1,
    error: '',
    disabled: false
  }
};

export const WithMinMax: StoryObj = {
  args: {
    ...Default.args,
    min: 0,
    max: 100,
    label: 'Range (0-100)'
  }
};

export const WithStep: StoryObj = {
  args: {
    ...Default.args,
    step: 5,
    label: 'Step by 5'
  }
};