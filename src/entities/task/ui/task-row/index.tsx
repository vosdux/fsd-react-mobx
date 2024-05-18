import { Card, Space } from "antd";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  id: number;
  action: ReactNode;
};

export const TaskRow = ({ title, id, action }: Props) => {
  return (
    <Card style={{ width: "600px" }}>
      <Space>
        {action}
        <Link to={`/${id}`}>{title}</Link>
      </Space>
    </Card>
  );
};
