import { html } from 'lit';
import './price-card';

export default {
  title: 'Components/PriceCard',
  argTypes: {
    plan: { control: 'text' },
    price: { control: 'text' },
    period: { control: 'text' },
    features: { control: 'array' },
    popular: { control: 'boolean' },
  },
};

const Template = ({ plan, price, period, features, popular }) => html`
  <price-card
    plan=${plan}
    price=${price}
    period=${period}
    .features=${features}
    ?popular=${popular}
  ></price-card>
`;

export const Basic = Template.bind({});
Basic.args = {
  plan: 'Basic',
  price: '$9',
  period: 'month',
  features: ['10 components', 'Basic support', 'Community access'],
  popular: false,
};

export const Popular = Template.bind({});
Popular.args = {
  plan: 'Pro',
  price: '$29',
  period: 'month',
  features: ['All components', 'Priority support', 'Source code access'],
  popular: true,
};

