import { html } from 'lit';
import './modal';

export default {
  title: 'Components/Modal',
  argTypes: {
    open: { control: 'boolean' },
    title: { control: 'text' },
    onClose: { action: 'closed' },
  },
};

const Template = ({ open, title, onClose }) => html`
  <custom-modal ?open=${open} title=${title} @close=${onClose}>
    <p>This is the content of the modal. You can put any HTML here.</p>
  </custom-modal>
`;

export const Default = Template.bind({});
Default.args = {
  open: true,
  title: 'Modal Title',
};

export const LongContent = Template.bind({});
LongContent.args = {
  open: true,
  title: 'Terms and Conditions',
  content: html`
    <p>This is a longer content for the modal. It demonstrates how the modal handles more text.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  `,
};

