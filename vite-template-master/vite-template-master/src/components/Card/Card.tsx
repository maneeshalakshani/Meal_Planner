import { IconHeart } from '@tabler/icons-react';
import { Card, Image, Text, Group, Badge, Button, ActionIcon } from '@mantine/core';
import classes from './Card.module.css';
import { NormalButton } from '../buttons/Button';
import { deletePlan, getAllMealPlans } from '@/Functions/Meal/meal';
import { UpdateMealModal } from '../Modal/UpdateMealModal';
import { CommentModal } from '../Modal/commentModal';

// const mockdata = {
//   image:
//     'https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
//   title: 'Verudela Beach',
//   country: 'Croatia',
//   description:
//     'Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.',
//   badges: [
//     { emoji: '☀️', label: 'Sunny weather' },
//     { emoji: '🦓', label: 'Onsite zoo' },
//     { emoji: '🌊', label: 'Sea' },
//     { emoji: '🌲', label: 'Nature' },
//     { emoji: '🤽', label: 'Water sports' },
//   ],
// };

export function BadgeCard({image, title, instructions, ingredients, preference, planId, setPlans, mealPlan}: any) {
  // const { image, title, description, country, badges } = mockdata;
  // const features = badges.map((badge) => (
  //   <Badge variant="light" key={badge.label} leftSection={badge.emoji}>
  //     {badge.label}
  //   </Badge>
  // ));

  const deleteMealPlan = async () => {
    deletePlan(planId)

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

      {/* <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} c="dimmed">
          Perfect for you, if you enjoy
        </Text>
      </Card.Section> */}

      <Group mt="xs">
        {/* <Button radius="md" style={{ flex: 1 }}>
          Show Comments
        </Button> */}
        <CommentModal />
        <NormalButton label={"Delete"} bgColor={'red'} onClick={() => deleteMealPlan()}/>
        <UpdateMealModal meal={mealPlan} />
        <ActionIcon variant="default" radius="md" size={36}>
          <IconHeart className={classes.like} stroke={1.5} />
        </ActionIcon>
      </Group>
    </Card>
  );
}