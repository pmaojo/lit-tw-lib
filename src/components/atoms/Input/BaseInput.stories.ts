// src/components/atoms/Input/BaseInput.stories.ts
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './BaseInput';

const meta: Meta = {
  title: 'Atoms/Input/BaseInput',
  tags: ['autodocs'],
  render: (args) => html`
    <base-input
      .value=${args.value}
      .label=${args.label}
      .error=${args.error}
      ?disabled=${args.disabled}
    ></base-input>
  `,
  argTypes: {
    value: { control: 'text' },
    label: { control: 'text' },
    error: { control: 'text' },
    disabled: { control: 'boolean' }
  }
};

export default meta;

export const Default: StoryObj = {
  args: {
    value: '',
    label: 'Label',
    error: '',
    disabled: false
  }
};

export const WithError: StoryObj = {
  args: {
    ...Default.args,
    error: 'This field is required'
  }
};

export const Disabled: StoryObj = {
  args: {
    ...Default.args,
    disabled: true
  }
};