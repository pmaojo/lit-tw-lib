import { html } from 'lit';
import './secondary-button';

export default {
  title: 'Components/SecondaryButton',
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
  <secondary-button
    label=${label}
    size=${size}
    ?disabled=${disabled}
    @click=${(e) => console.log('Secondary button clicked', e)}
  ></secondary-button>
`;

export const Default = Template.bind({});
Default.args = {
  label: 'Secondary Button',
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

