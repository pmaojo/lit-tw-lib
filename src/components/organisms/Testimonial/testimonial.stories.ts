import { html } from 'lit';
import './testimonial';

export default {
  title: 'Components/Testimonial',
  argTypes: {
    quote: { control: 'text' },
    author: { control: 'text' },
    role: { control: 'text' },
    avatar: { control: 'text' },
  },
};

const Template = ({ quote, author, role, avatar }) => html`
  <custom-testimonial
    quote=${quote}
    author=${author}
    role=${role}
    avatar=${avatar}
  ></custom-testimonial>
`;

export const Default = Template.bind({});
Default.args = {
  quote: 'This is an amazing product! I highly recommend it to everyone.',
  author: 'John Doe',
  role: 'CEO, Tech Company',
  avatar: 'https://i.pravatar.cc/150?img=1',
};

