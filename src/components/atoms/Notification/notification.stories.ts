import { html } from 'lit';
import './notification';

export default {
  title: 'Components/Notification',
  argTypes: {
    type: { control: 'select', options: ['info', 'success', 'warning', 'error'] },
    message: { control: 'text' },
  },
};

const Template = ({ type, message }) => html`
  <custom-notification .type=${type} .message=${message}></custom-notification>
`;

export const Info = Template.bind({});
Info.args = {
  type: 'info',
  message: 'This is an informational message.',
};

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  message: 'Operation completed successfully!',
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  message: 'Please be cautious about this action.',
};

export const Error = Template.bind({});
Error.args = {
  type: 'error',
  message: 'An error occurred. Please try again.',
};

