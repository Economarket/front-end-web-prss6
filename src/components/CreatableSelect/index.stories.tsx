import React from "react";
import { Story, Meta } from "@storybook/react";

import CreatableSelect, { SelectProps } from ".";

export default {
  title: "CreatableSelect",
  component: CreatableSelect,
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
  <CreatableSelect {...args} placeholder="Escolha" />
);
