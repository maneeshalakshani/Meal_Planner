import { Center, Group, Stack, Text, Title } from '@mantine/core';
import { useEffect, useState } from 'react';
import { getAllMealPlansByUser } from '@/Functions/Meal/meal';
import { getUserWithId, updateFollowers } from '@/Functions/User/user';
import { BadgeCard } from '@/components/Card/Card';
import { useParams } from 'react-router-dom';
import { NormalButton } from '@/components/buttons/Button';

export function User() {
  const [user, setUser] = useState(null);
  const [name, setName] = useState(null);
  const [plans, setPlans] = useState([]);
  const [followers, setFollowers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []); 

  const fetchData = async () => {
    try {
      const data = await getUserWithId(id);
      setUser(data);
      setName(data.name)
      setFollowers(data.follower)

      const plan = await getAllMealPlansByUser(id);
      setPlans(plan);
    } catch (error) {
      console.error('Error fetching :', error);
    }
  };

  const followUser = async () => {
    try {
      const followerDetails = { 'follower': localStorage.getItem('userId') }
      const updateStatus = await updateFollowers(id, followerDetails)
    } catch (error) {
      console.error('Error fetching :', error);
    }
  }
  
  return (
    <Center mt={50} mb={100}>
        <Stack>
        <Group>
              <Title>{name}</Title>
              <Text color='grey'>{`${followers.length} Followers`}</Text>
              {id != localStorage.getItem('userId') ? <NormalButton label={'Follow'} bgColor={'pink'} onClick={() => followUser()} /> : null}
            </Group>
            <Group style={{'position': 'absolute', 'left': '200px', 'top': '150px'}}>
            {plans.map((item:any, index) => (
                    <BadgeCard 
                      key={index}
                        image={item.image} 
                        title={item.planName} 
                        instructions={item.instructions} 
                        ingredients={item.ingredientName} 
                        preference={item.preference} 
                        planId={item.planId}
                        setPlans={setPlans}
                        mealPlan={item}
                        navLocation={'profile'}
                        ownerId={item.ownerId}
                    />
            ))}
            </Group>
        </Stack>
    </Center>
  );
}
