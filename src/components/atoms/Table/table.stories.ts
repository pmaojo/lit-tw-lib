import { html } from 'lit';
import './table';

export default {
  title: 'Components/Table',
  argTypes: {
    headers: { control: 'array' },
    rows: { control: 'array' },
  },
};

const Template = ({ headers, rows }) => html`
  <custom-table .headers=${headers} .rows=${rows}></custom-table>
`;

export const Default = Template.bind({});
Default.args = {
  headers: ['Name', 'Title', 'Email'],
  rows: [
    ['John Brown', 'Manager', 'john@example.com'],
    ['Jim Green', 'Developer', 'jim@example.com'],
    ['Joe Black', 'Designer', 'joe@example.com'],
  ],
};

export const LongTable = Template.bind({});
LongTable.args = {
  headers: ['ID', 'Name', 'Age', 'Address', 'Tags'],
  rows: Array(20).fill(null).map((_, index) => [
    index + 1,
    index + 1,
    `User ${index + 1}`,
    Math.floor(Math.random() * 50) + 20,
    `Street ${index + 1}, City`,
    ['cool', 'nice'].slice(0, Math.floor(Math.random() * 2) + 1)
  ]),
};

