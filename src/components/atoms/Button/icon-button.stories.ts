import { html } from 'lit';
import './IconButton';

export default {
  title: 'Components/IconButton',
  argTypes: {
    icon: { control: 'text' },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
};

const Template = ({ icon, size, disabled }) => html`
  <icon-button
    icon=${icon}
    size=${size}
    ?disabled=${disabled}
    @click=${(e) => console.log('IconButton clicked', e)}
  ></icon-button>
`;

export const Default = Template.bind({});
Default.args = {
  icon: 'star',
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

