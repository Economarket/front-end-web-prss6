import React from "react";
import { Story, Meta } from "@storybook/react";

import Select, { SelectProps } from ".";

export default {
  title: "Select",
  component: Select,
  args: {
    options: [
      { id: 0, label: "Andreza" },
      { id: 1, label: "Meiri" },
      { id: 2, label: "Bruno" },
      { id: 3, label: "Renan" },
    ],
    isAutocomplete: true,
  },
} as Meta;

export const Basic: Story<SelectProps> = (args) => (
  <Select {...args} placeholder="Escolha" />
);
