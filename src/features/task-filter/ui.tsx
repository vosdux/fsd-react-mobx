import { Radio } from "antd";
import { QueryParams } from "shared/api/todos/model";
import { buttons } from "./config";
const { Button, Group } = Radio;
type Props = {
  onChange: (params: QueryParams) => void;
};

export const TaskFilter = ({ onChange }: Props) => {
  return (
    <Group defaultValue={"3"}>
      {buttons.map(({ id, title, params }) => (
        <Button
          key={id}
          value={id}
          onClick={() => {
            onChange(params);
          }}
        >
          {title}
        </Button>
      ))}
    </Group>
  );
};
