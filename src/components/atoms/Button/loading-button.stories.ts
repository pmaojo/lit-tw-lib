import { html } from 'lit';
import './loading-button';

export default {
  title: 'Components/LoadingButton',
  argTypes: {
    label: { control: 'text' },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
};

const Template = ({ label, loading, disabled }) => html`
  <loading-button
    label=${label}
    ?loading=${loading}
    ?disabled=${disabled}
    @click=${(e) => console.log('Loading button clicked', e)}
  ></loading-button>
`;

export const Default = Template.bind({});
Default.args = {
  label: 'Submit',
  loading: false,
  disabled: false,
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  loading: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

