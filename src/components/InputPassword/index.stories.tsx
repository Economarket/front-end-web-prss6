import { ComponentStory, ComponentMeta } from "@storybook/react";

import IconSearch from "../Icons/search";
import InputPassword from "./index";

export default {
  title: "Form/InputPassword",
  component: InputPassword,
  args: {
    placeholder: "E-mail",
    name: "email",
    value: "",
    label: "E-mail",
    required: false,
    autoFocus: false,
    error: false,
    disabled: false,
    maxLength: 0,
  },
  argTypes: {
    onChange: { action: "onChange" },
    appearance: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
    sizes: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof InputPassword>;

const Template: ComponentStory<typeof InputPassword> = (args) => (
  <InputPassword {...args} />
);

export const Password = Template.bind({});

export const PasswordError = Template.bind({});
PasswordError.args = { errorMessage: "Ops ... something is wrong" };

export const Icon = Template.bind({});
Icon.args = { icon: <IconSearch /> };
