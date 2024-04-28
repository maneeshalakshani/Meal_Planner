import { Card, Text, Badge, Group } from '@mantine/core';

export function UserCard({followers, name, onClick, userId}:any) {
  return (
    <Card 
        shadow="sm" 
        padding="sm" 
        radius="md" 
        withBorder 
        onClick={() => window.location.href = `http://localhost:5173/user/${userId}`}
    >
      <Group justify="space-between" >
        <Text fw={500}>{name}</Text>
        <Badge color="orange">{`${followers.length} Followers`}</Badge>
      </Group>
    </Card>
  );
}