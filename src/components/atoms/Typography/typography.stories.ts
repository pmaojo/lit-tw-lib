import { html } from 'lit';
import './typography';

export default {
  title: 'Components/Typography',
  argTypes: {
    variant: {
      control: { type: 'select', options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2', 'caption'] },
    },
  },
};

const Template = ({ variant }) => html`
  <custom-typography variant=${variant}>
    This is a ${variant} typography example.
  </custom-typography>
`;

export const Heading1 = Template.bind({});
Heading1.args = {
  variant: 'h1',
};

export const Heading2 = Template.bind({});
Heading2.args = {
  variant: 'h2',
};

export const Body1 = Template.bind({});
Body1.args = {
  variant: 'body1',
};

export const Caption = Template.bind({});
Caption.args = {
  variant: 'caption',
};

