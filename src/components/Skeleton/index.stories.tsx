import React from 'react';
import { Story, Meta } from '@storybook/react';

import Skeleton from '.';

export default {
  title: 'Skeleton',
  component: Skeleton,
} as Meta;

export const Basic: Story = (args) => <Skeleton {...args} />;

export const Circle: Story = (args) => <Skeleton {...args} />;

Circle.args = {
  width: '6.25rem',
  height: '6.25rem',
  borderRadius: '50%',
};
