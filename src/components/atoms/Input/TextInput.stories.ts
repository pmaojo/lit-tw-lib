// src/components/atoms/Input/TextInput.stories.ts
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './TextInput';

const meta: Meta = {
  title: 'Atoms/Input/TextInput',
  tags: ['autodocs'],
  render: (args) => html`
    <text-input
      .value=${args.value}
      .label=${args.label}
      .placeholder=${args.placeholder}
      .type=${args.type}
      .error=${args.error}
      ?disabled=${args.disabled}
      @change=${args.onChange}
    ></text-input>
  `,
  argTypes: {
    value: { control: 'text' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    type: { 
      control: 'select',
      options: ['text', 'email', 'password', 'tel', 'url']
    },
    error: { control: 'text' },
    disabled: { control: 'boolean' },
    onChange: { action: 'change' }
  }
};

export default meta;

export const Default: StoryObj = {
  args: {
    value: '',
    label: 'Text Input',
    placeholder: 'Enter text...',
    type: 'text',
    error: '',
    disabled: false
  }
};

export const Password: StoryObj = {
  args: {
    ...Default.args,
    type: 'password',
    label: 'Password',
    placeholder: 'Enter password...'
  }
};

export const WithError: StoryObj = {
  args: {
    ...Default.args,
    error: 'Invalid input'
  }
};