import { Checkbox, Spin } from "antd";
import { taskModel } from "entities/task";
import { Todo } from "shared/api/todos/model";

type Props = {
  todo: Todo;
};

export const ToggleTask = ({ todo }: Props) => {
  const {
    store: { updateTodo, isUpdateLoading },
  } = taskModel;

  return isUpdateLoading ? (
    <Spin />
  ) : (
    <Checkbox
      onChange={(val) => updateTodo({ ...todo, completed: val.target.checked })}
    />
  );
};
