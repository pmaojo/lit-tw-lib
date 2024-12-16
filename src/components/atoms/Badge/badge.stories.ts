import { html } from 'lit';
import './Badge';

export default {
  title: 'Components/Badge',
  argTypes: {
    content: { control: 'text' },
    color: {
      control: { type: 'select', options: ['blue', 'green', 'red', 'yellow'] },
    },
  },
};

const Template = ({ content, color }) => html`
  <custom-badge
    content=${content}
    color=${color}
  ></custom-badge>
`;

export const Default = Template.bind({});
Default.args = {
  content: 'Badge',
  color: 'blue',
};

export const Green = Template.bind({});
Green.args = {
  ...Default.args,
  color: 'green',
};

export const Red = Template.bind({});
Red.args = {
  ...Default.args,
  color: 'red',
};

export const Yellow = Template.bind({});
Yellow.args = {
  ...Default.args,
  color: 'yellow',
};

