import { html } from 'lit';
import './divider';

export default {
  title: 'Components/Divider',
  argTypes: {
    orientation: {
      control: { type: 'select', options: ['horizontal', 'vertical'] },
    },
    color: { control: 'text' },
  },
};

const Template = ({ orientation, color }) => html`
  <div style="height: ${orientation === 'vertical' ? '100px' : 'auto'};">
    <custom-divider
      orientation=${orientation}
      color=${color}
    ></custom-divider>
  </div>
`;

export const Horizontal = Template.bind({});
Horizontal.args = {
  orientation: 'horizontal',
  color: 'gray-200',
};

export const Vertical = Template.bind({});
Vertical.args = {
  orientation: 'vertical',
  color: 'gray-200',
};

