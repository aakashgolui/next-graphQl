import { Badge, Card } from "@mantine/core";

export const PostCard = ({ id, title }: { id: string; title: string }) => (
  <Card className="p-4 border rounded shadow">
    <Badge color="blue" size="lg">
      Post #{id}
    </Badge>
    <p className="p-2">
      <b>Post:</b> {title}
    </p>
  </Card>
);
