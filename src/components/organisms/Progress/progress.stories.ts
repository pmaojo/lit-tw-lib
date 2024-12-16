import { html } from 'lit';
import './progress';

export default {
  title: 'Components/Progress',
  argTypes: {
    value: { control: 'number' },
    max: { control: 'number' },
    color: {
      control: { type: 'select', options: ['blue', 'green', 'red', 'yellow'] },
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    showLabel: { control: 'boolean' },
  },
};

const Template = ({ value, max, color, size, showLabel }) => html`
  <custom-progress
    .value=${value}
    .max=${max}
    color=${color}
    size=${size}
    ?showLabel=${showLabel}
  ></custom-progress>
`;

export const Default = Template.bind({});
Default.args = {
  value: 60,
  max: 100,
  color: 'blue',
  size: 'medium',
  showLabel: true,
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  ...Default.args,
  showLabel: false,
};

export const Different = Template.bind({});
Different.args = {
  ...Default.args,
  color: 'green',
  size: 'large',
};

