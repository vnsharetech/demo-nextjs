import React from 'react';
import Logo from './index';

export default {
  title: 'Atoms/Logo',
  component: Logo,
  argTypes: {
    fill1: { control: 'color' },
    fill2: { control: 'color' },
  },
};

const Template = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const CustomColors = Template.bind({});
CustomColors.args = { fill1: 'green', fill2: 'red' };
