import { html } from 'lit';
import './button-group';
import './atoms/Button/PrimaryButton';
import './secondary-button';

export default {
  title: 'Components/ButtonGroup',
};

export const Default = () => html`
  <button-group>
    <primary-button label="Left"></primary-button>
    <primary-button label="Middle"></primary-button>
    <primary-button label="Right"></primary-button>
  </button-group>
`;

export const MixedButtons = () => html`
  <button-group>
    <primary-button label="Primary"></primary-button>
    <secondary-button label="Secondary"></secondary-button>
    <primary-button label="Primary"></primary-button>
  </button-group>
`;

