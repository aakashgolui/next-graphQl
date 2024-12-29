import { Avatar, Button, Card, Group, Text } from "@mantine/core";
import { FC } from "react";
import { IconArrowRight, IconPhoto } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

interface IUserCardProps {
  id: string;
  name: string;
  email: string;
}

export const UserCard: FC<IUserCardProps> = ({ name, email, id }) => {
  const router = useRouter();

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder className="w-[23%]">
      <Group gap={"xs"}>
        <Avatar src={null} alt="no image here" color="indigo" />
        <Text fw={600}>{name}</Text>
      </Group>
      <Text fs={"italic"} size="sm" mt="xs" className="lowercase">
        <b className="text-blue-600">@</b> {email}
      </Text>
      <Button
        variant="light"
        mt={"xs"}
        leftSection={<IconPhoto size={14} />}
        rightSection={<IconArrowRight size={14} />}
        onClick={() => router.push(`/posts/${id}`)}
      >
        View posts
      </Button>
    </Card>
  );
};
