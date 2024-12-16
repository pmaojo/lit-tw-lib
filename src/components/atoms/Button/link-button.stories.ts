import { html } from 'lit';
import './link-button';

export default {
  title: 'Components/LinkButton',
  argTypes: {
    label: { control: 'text' },
    href: { control: 'text' },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
};

const Template = ({ label, href, disabled }) => html`
  <link-button
    label=${label}
    href=${href}
    ?disabled=${disabled}
    @click=${(e) => console.log('Link button clicked', e)}
  ></link-button>
`;

export const Default = Template.bind({});
Default.args = {
  label: 'Link Button',
  href: '#',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

