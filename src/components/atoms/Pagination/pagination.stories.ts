import { html } from 'lit';
import './pagination';

export default {
  title: 'Components/Pagination',
  argTypes: {
    currentPage: { control: 'number' },
    totalPages: { control: 'number' },
    onPageChange: { action: 'page-change' },
  },
};

const Template = ({ currentPage, totalPages }) => html`
  <custom-pagination
    .currentPage=${currentPage}
    .totalPages=${totalPages}
    @page-change=${(e) => console.log('Page changed', e.detail)}
  ></custom-pagination>
`;

export const Default = Template.bind({});
Default.args = {
  currentPage: 1,
  totalPages: 5,
};

export const ManyPages = Template.bind({});
ManyPages.args = {
  currentPage: 5,
  totalPages: 10,
};

