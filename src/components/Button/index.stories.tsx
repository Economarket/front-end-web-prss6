import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./index";

export default {
  title: "Form/Button",
  component: Button,
  args: {
    disabled: false,
    text: "",
    onClick: () => {},
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
    type: {
      options: ["submit", "button"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Basic = Template.bind({});

export const Onclick = Template.bind({});
Onclick.args = { onClick: () => console.log("Click") };
