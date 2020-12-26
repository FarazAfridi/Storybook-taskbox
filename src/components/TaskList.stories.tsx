import React from 'react';
import TaskList, { Props } from './TaskList';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  component: TaskList,
  title: 'TaskList',
} as Meta

const Template: Story<Props> = (args) => <TaskList {...args} />;

export const Default = Template.bind({});
Default.args = {
  tasks: [
    { id: '1', title: 'Task 1', state: 'TASK_INBOX', },
    {  id: '2', title: 'Task 2' ,state: 'TASK_INBOX'},
    {  id: '3', title: 'Task 3' ,state: 'TASK_INBOX'},
  ]
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  tasks: [
    { id: '1', title: 'Task 1', state: 'TASK_INBOX', },
    {  id: '2', title: 'Task 2' ,state: 'TASK_INBOX'},
    {  id: '3', title: 'Task 3' ,state: 'TASK_PINNED'},
  ]
};

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  ...Loading.args,
  loading: false,
};