import React from "react";

export interface TaskType {
  id: string
  title: string
  state?: string
}

export interface Props {
  task: TaskType
  onRemoveTask: (task: TaskType) => void;
  onStateChange: (task: TaskType) => void;
}

const Task: React.FC<Props> = ({
  task,
  onRemoveTask,
  onStateChange,
}) => {
  return (
    <div className={`list-item ${task.state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={task.state === "TASK_ARCHIVED"}
          disabled={true}
          name="checked"
        />
        <span className="checkbox-custom" onClick={() =>{onRemoveTask(task)}} />
      </label>
      <div className="title">
        <input
          type="text"
          value={task.title}
          readOnly={true}
          placeholder="Input title"
        />
      </div>

      <div className="actions" onClick={(event) => event.stopPropagation()}>
        {task.state !== "TASK_ARCHIVED" && (
          <a onClick={() => onStateChange(task)}>
            <span className={`icon-star`} />
          </a>
        )}
      </div>
    </div>
  );
};

export default Task;