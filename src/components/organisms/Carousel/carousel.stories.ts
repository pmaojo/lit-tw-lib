import { html } from 'lit';
import './carousel';

export default {
  title: 'Components/Carousel',
  argTypes: {
    items: { control: 'object' },
  },
};

const Template = ({ items }) => html`
  <custom-carousel .items=${items}></custom-carousel>
`;

export const Default = Template.bind({});
Default.args = {
  items: [
    { image: 'https://picsum.photos/id/1018/800/400', title: 'Slide 1', description: 'Description for slide 1' },
    { image: 'https://picsum.photos/id/1015/800/400', title: 'Slide 2', description: 'Description for slide 2' },
    { image: 'https://picsum.photos/id/1019/800/400', title: 'Slide 3', description: 'Description for slide 3' },
  ],
};

