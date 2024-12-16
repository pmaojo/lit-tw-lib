import { html } from 'lit';
import './slider';

export default {
  title: 'Components/Slider',
  argTypes: {
    min: { control: 'number' },
    max: { control: 'number' },
    value: { control: 'number' },
    label: { control: 'text' },
    onChange: { action: 'changed' },
  },
};

const Template = ({ min, max, value, label }) => html`
  <custom-slider
    min=${min}
    max=${max}
    .value=${value}
    label=${label}
    @change=${(e) => console.log('Slider changed', e.detail)}
  ></custom-slider>
`;

export const Default = Template.bind({});
Default.args = {
  min: 0,
  max: 100,
  value: 50,
  label: 'Volume',
};

export const CustomRange = Template.bind({});
CustomRange.args = {
  min: -10,
  max: 10,
  value: 0,
  label: 'Temperature',
};

