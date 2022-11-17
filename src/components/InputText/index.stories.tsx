import { ComponentStory, ComponentMeta } from '@storybook/react';

import IconSearch from '../../assets/icons/search';
import InputText from './index';

export default {
  title: 'Form/InputText',
  component: InputText,
  args: {
    placeholder: 'E-mail',
    name: 'email',
    value: '',
    label: 'E-mail',
    required: false,
    autoFocus: false,
    error: false,
    disabled: false,
    maxLength: 0,
  },
  argTypes: {
    onChange: { action: 'onChange' },
    appearance: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    sizes: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args) => (
  <InputText {...args} />
);

export const Basic = Template.bind({});

export const Error = Template.bind({});
Error.args = { errorMessage: 'Ops ... something is wrong' };

export const Icon = Template.bind({});
Icon.args = { icon: <IconSearch /> };
