import { html } from 'lit';
import './breadcrumbs';

export default {
  title: 'Components/Breadcrumbs',
  argTypes: {
    items: { control: 'object' },
  },
};

const Template = ({ items }) => html`
  <custom-breadcrumbs .items=${items}></custom-breadcrumbs>
`;

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: 'Home', href: '#' },
    { label: 'Category', href: '#' },
    { label: 'Subcategory', href: '#' },
  ],
};

export const LongPath = Template.bind({});
LongPath.args = {
  items: [
    { label: 'Home', href: '#' },
    { label: 'Category', href: '#' },
    { label: 'Subcategory', href: '#' },
    { label: 'Product', href: '#' },
    { label: 'Details', href: '#' },
  ],
};

