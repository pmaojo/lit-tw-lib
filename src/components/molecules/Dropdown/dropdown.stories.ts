import { html } from 'lit';
import './dropdown';

export default {
  title: 'Components/Dropdown',
  argTypes: {
    label: { control: 'text' },
    items: { control: 'object' },
  },
};

const Template = ({ label, items }) => html`
  <custom-dropdown .label=${label} .items=${items}></custom-dropdown>
`;

export const Default = Template.bind({});
Default.args = {
  label: 'Options',
  items: [
    { label: 'Edit', href: '#' },
    { label: 'Duplicate', href: '#' },
    { label: 'Delete', href: '#' },
  ],
};

export const LongList = Template.bind({});
LongList.args = {
  label: 'More Actions',
  items: [
    { label: 'Profile', href: '#' },
    { label: 'Settings', href: '#' },
    { label: 'Notifications', href: '#' },
    { label: 'Privacy', href: '#' },
    { label: 'Security', href: '#' },
    { label: 'Help', href: '#' },
    { label: 'Logout', href: '#' },
  ],
};

