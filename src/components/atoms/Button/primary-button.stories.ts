import { html } from 'lit';
import './PrimaryButton';

export default {
  title: 'Components/PrimaryButton',
  argTypes: {
    label: { control: 'text' },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
};

const Template = ({ label, size, disabled }) => html`
  <primary-button
    label=${label}
    size=${size}
    ?disabled=${disabled}
    @click=${(e) => console.log('Button clicked', e)}
  ></primary-button>
`;

export const Default = Template.bind({});
Default.args = {
  label: 'Click me',
  size: 'medium',
  disabled: false,
};

export const Small = Template.bind({});
Small.args = {
  ...Default.args,
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  ...Default.args,
  size: 'large',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

