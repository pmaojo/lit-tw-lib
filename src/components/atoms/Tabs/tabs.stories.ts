import { html } from 'lit';
import './tabs';

export default {
  title: 'Components/Tabs',
  argTypes: {
    tabs: { control: 'object' },
  },
};

const Template = ({ tabs }) => html`
  <custom-tabs .tabs=${tabs}></custom-tabs>
`;

export const Default = Template.bind({});
Default.args = {
  tabs: [
    { label: 'Tab 1', content: html`<p>Content for Tab 1</p>` },
    { label: 'Tab 2', content: html`<p>Content for Tab 2</p>` },
    { label: 'Tab 3', content: html`<p>Content for Tab 3</p>` },
  ],
};

export const WithComponents = Template.bind({});
WithComponents.args = {
  tabs: [
    { 
      label: 'Info', 
      content: html`<custom-card title="Information" content="This is some important information."></custom-card>` 
    },
    { 
      label: 'Settings', 
      content: html`<custom-slider min="0" max="100" value="50" label="Volume"></custom-slider>` 
    },
    { 
      label: 'Data', 
      content: html`
        <custom-table 
          .headers=${['Name', 'Value']}
          .rows=${[
            ['Item 1', '100'],
            ['Item 2', '200'],
            ['Item 3', '300'],
          ]}
        ></custom-table>
      ` 
    },
  ],
};

