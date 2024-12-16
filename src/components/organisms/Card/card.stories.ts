import { html } from 'lit';
import './card';

export default {
  title: 'Components/Card',
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
    imageUrl: { control: 'text' },
    elevated: { control: 'boolean' },
  },
};

const Template = ({ title, content, imageUrl, elevated }) => html`
  <custom-card
    title=${title}
    content=${content}
    imageUrl=${imageUrl}
    ?elevated=${elevated}
  ></custom-card>
`;

export const Default = Template.bind({});
Default.args = {
  title: 'Card Title',
  content: 'This is the content of the card.',
  imageUrl: 'https://picsum.photos/seed/picsum/300/200',
  elevated: false,
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
  ...Default.args,
  imageUrl: '',
};

export const Elevated = Template.bind({});
Elevated.args = {
  ...Default.args,
  elevated: true,
};

