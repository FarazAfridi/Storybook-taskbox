import React from 'react';
import { PureInboxScreen } from './InboxScreen';
import { Story } from '@storybook/react/types-6-0';

export default {
  component: PureInboxScreen,
  title: 'InboxScreen',
};

const Template: Story = args => <PureInboxScreen {...args} />;

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: 'Something',
};