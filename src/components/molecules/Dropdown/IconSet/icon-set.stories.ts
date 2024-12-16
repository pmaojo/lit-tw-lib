import { html } from 'lit';
import './icon-set';

export default {
  title: 'Components/IconSet',
  argTypes: {
    icon: {
      control: { type: 'select', options: ['home', 'user', 'cog'] },
    },
    size: { control: 'text' },
    color: { control: 'color' },
  },
};

const Template = ({ icon, size, color }) => html`
  <icon-set icon=${icon} size=${size} color=${color}></icon-set>
`;

export const Home = Template.bind({});
Home.args = {
  icon: 'home',
  size: '24',
  color: 'currentColor',
};

export const User = Template.bind({});
User.args = {
  icon: 'user',
  size: '24',
  color: 'currentColor',
};

export const Cog = Template.bind({});
Cog.args = {
  icon: 'cog',
  size: '24',
  color: 'currentColor',
};

