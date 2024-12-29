import { Badge, Blockquote, Card, Group } from "@mantine/core";
import { IconShare } from "@tabler/icons-react";

export const PostCard = ({
  id,
  title,
  body,
  userName,
}: {
  id: string;
  title: string;
  body: string;
  userName: string;
}) => (
  <Card className="p-4 border rounded shadow">
    <Group gap={"xs"}>
      <Badge color="blue" size="lg">
        #{id}
      </Badge>
      <p className="font-bold">{title}</p>
    </Group>
    <Blockquote
      color="blue"
      cite={`– ${userName}`}
      icon={<IconShare size={20} />}
      mt="xl"
    >
      <p dangerouslySetInnerHTML={{ __html: body }}></p>
    </Blockquote>
  </Card>
);
