import React from "react";
import TaskList from "./TaskList";

export function PureInboxScreen({ error }: any) {
  if (error) {
    return (
      <div className="page lists-show">
        <div className="wrapper-message">
          <span className="icon-face-sad" />
          <div className="title-message">Oh no!</div>
          <div className="subtitle-message">Something went wrong</div>
        </div>
      </div>
    );
  }

  return (
    <div className="page lists-show">
      <nav>
        <h1 className="title-page">
          <span className="title-wrapper">Taskbox</span>
        </h1>
      </nav>
      <TaskList
        loading={false}
        tasks={[
          { id: "1", state: "TASK_INBOXED", title: "Task 1" },
          { id: "2", state: "TASK_INBOXED", title: "Task 2" },
          { id: "3", state: "TASK_INBOXED", title: "Task 3" },
          { id: "4", state: "TASK_PINNED", title: "Task 4" },
          { id: "5", state: "TASK_PINNED", title: "Task 5" },
        ]}
      />
    </div>
  );
}

export default PureInboxScreen;
