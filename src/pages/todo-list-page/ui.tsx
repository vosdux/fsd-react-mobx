import { Result, Space, Spin } from "antd";
import { TaskRow, taskModel } from "entities/task";
import { TaskFilter } from "features/task-filter";
import { ToggleTask } from "features/toggle-task";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

export const TodoListPage = observer(() => {
  const {
    store: { getTaskList, isLoading, taskListError, taskList },
  } = taskModel;

  useEffect(() => {
    getTaskList({});
  }, []);

  if (taskListError) {
    return <Result title={taskListError} />;
  }

  return (
    <Space direction="vertical">
      <TaskFilter onChange={getTaskList} />
      {isLoading ? (
        <Spin />
      ) : (
        taskList.map((task) => (
          <TaskRow
            key={task.id}
            title={task.title}
            id={task.id}
            action={<ToggleTask todo={task} />}
          />
        ))
      )}
    </Space>
  );
});
