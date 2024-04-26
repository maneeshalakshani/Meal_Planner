import { IconHeart } from '@tabler/icons-react';
import { Card, Image, Text, Group, Badge, Button, ActionIcon } from '@mantine/core';
import classes from './Card.module.css';
import { NormalButton } from '../buttons/Button';
import { deletePlan, getAllMealPlans } from '@/Functions/Meal/meal';
import { UpdateMealModal } from '../Modal/UpdateMealModal';
import { CommentModal } from '../Modal/Comment/commentModal';

export function BadgeCard({image, title, instructions, ingredients, preference, planId, setPlans, mealPlan, navLocation, ownerId}: any) {

  const deleteMealPlan = async () => {
    deletePlan(planId, navLocation)

    const data = await getAllMealPlans();
    setPlans(data);
  }


  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={"https://www.bhf.org.uk/-/media/images/information-support/heart-matters/2022/january-2022/nutrition/meal_plan_620x400-ss-no-exp.png?rev=d0c796f2ba954a8ea01049dea62bf6ad"} alt={title} height={180} />
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
        <ActionIcon variant="default" radius="md" size={36}>
          <IconHeart className={classes.like} stroke={1.5} />
        </ActionIcon>
      </Group>
    </Card>
  );
}