import { Card, CardProps } from './card';
import { Meta, Story } from '@storybook/react';
import React from 'react';

export default {
  title: 'Atoms/Card',
  component: Card,
  argTypes: {
    variant: { control: 'select' },
  },
} as Meta;

export const Default: Story<CardProps> = (args) => <Card {...args} />;

Default.args = {
  variant: 'elevation',
  classes: 'w-64 h-64',
};

export const WithText: Story<CardProps> = (args) => (
  <Card {...args}>
    <div>
      <span>Story that shows component with text</span>
    </div>
  </Card>
);

WithText.args = {
  ...Default.args,
  classes: 'w-64 h-64 text-xl',
};
