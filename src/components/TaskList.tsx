import * as React from 'react';
import Task, { TaskType } from './Task';

export interface Tasks {
  id: string
  title: string
  state: string
}

export interface Props {
  loading: boolean
  tasks: Tasks[]
}

const TaskList: React.FC<Props> = ({ loading, tasks }) => {
  const [taskItems, setTaskItem] = React.useState<Tasks[]>(tasks);

  const onStateChange = React.useCallback((tasks: TaskType) => {

    const filteredList = taskItems.filter(item => item.id !== tasks.id)
    let newTask: Tasks = {
      id: tasks.id,
      title: tasks.title,
      state: tasks.state === 'TASK_PINNED' ? "TASK_INBOXED" : 'TASK_PINNED'
    }
    setTaskItem([
      ...filteredList,
      newTask
    ])
  }, [taskItems])

  const onRemoveTask = React.useCallback((tasks: TaskType) => {
    const filteredList = taskItems.filter(item => item.id !== tasks.id)
    setTaskItem(filteredList)
  }, [taskItems])

  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );
  if (loading) {
    return (
      <div className="list-items">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }
  if (taskItems.length === 0) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no tasks</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    );
  }
  const tasksInOrder = [
    ...taskItems.filter(t => t.state === 'TASK_PINNED'),
    ...taskItems.filter(t => t.state !== 'TASK_PINNED'),
  ];
  return (
    <div className="list-items">
      {tasksInOrder.map(task => (
        <Task key={task.id} task={task} onRemoveTask={onRemoveTask} onStateChange={onStateChange} />
      ))}
    </div>
  );
}


export default TaskList;