import { Card } from "antd";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  loading: boolean;
  title: string;
  text: string;
  actions?: ReactNode[];
};

export const TaskCard = ({ text, title, actions, loading }: Props) => {
  return (
    <Card
      loading={loading}
      title={title}
      actions={actions}
      extra={<Link to="/">Back</Link>}
      style={{ width: "500px" }}
    >
      {text}
    </Card>
  );
};
