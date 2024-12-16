import { html } from 'lit';
import './checkbox';

export default {
  title: 'Components/Checkbox',
  argTypes: {
    checked: { control: 'boolean' },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
};

const Template = ({ checked, label, disabled }) => html`
  <custom-checkbox
    ?checked=${checked}
    label=${label}
    ?disabled=${disabled}
    @change=${(e) => console.log('Checkbox changed', e.detail)}
  ></custom-checkbox>
`;

export const Default = Template.bind({});
Default.args = {
  checked: false,
  label: 'Checkbox label',
  disabled: false,
};

export const Checked = Template.bind({});
Checked.args = {
  ...Default.args,
  checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

