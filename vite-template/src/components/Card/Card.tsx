import { IconHeart } from '@tabler/icons-react';
import { Card, Image, Text, Group, Badge, ActionIcon } from '@mantine/core';
import classes from './Card.module.css';
import { NormalButton } from '../buttons/Button';
import { deletePlan, getAllMealPlans, updatePlanLikes } from '@/Functions/Meal/meal';
import { UpdateMealModal } from '../Modal/UpdateMealModal';
import { CommentModal } from '../Modal/Comment/commentModal';
import imageSrc from '../../assets/1e2bb6bb-e01a-49b4-a013-c7cf6c5d0ecd.png';

export function BadgeCard({image, title, instructions, ingredients, preference, planId, setPlans, mealPlan, navLocation, ownerId, likes, setLikes}: any) {
  const deleteMealPlan = async () => {
    deletePlan(planId, navLocation)

    const data = await getAllMealPlans();
    setPlans(data);
  }

  const updateMealPlanLikes = async () => {
    const likedUser = { "likedUser" : localStorage.getItem('userId') }
    let data: string[] = await updatePlanLikes(planId, likedUser, ownerId)
    setLikes(data.length)
  }

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image 
          src={imageSrc} 
          alt={title} 
          height={180} 
        />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group justify="apart">
          <Text fz="lg" fw={500}>
            {title}
          </Text>
          <Badge size="sm" variant="light">
            {preference}
          </Badge>
        </Group>
        <Text fz="m" mt="xs">Instructions</Text>
        {instructions.map((item:any, index:number) => (
            <Text key={index} fz="sm" mt="xs">{item}</Text>
        ))}
        <Text fz="m" mt="xs">Ingredients</Text>
        {ingredients.map((item:any, index:number) => (
            <Text key={index} fz="sm" mt="xs">{item}</Text>
        ))}
        
      </Card.Section>

      <Group mt="xs">
        <CommentModal mealPlanId={mealPlan.planId} />
        {localStorage.getItem('userId') == ownerId ? <NormalButton label={"Delete"} bgColor={'red'} onClick={() => deleteMealPlan()}/> : null}
        {localStorage.getItem('userId') == ownerId ? <UpdateMealModal meal={mealPlan} /> : null}
        <ActionIcon variant="default" radius="md" size={36} onClick={() => updateMealPlanLikes()}>
          <IconHeart className={classes.like} stroke={1.5} />
        </ActionIcon>
        <Text>{likes}</Text>
      </Group>
    </Card>
  );
}