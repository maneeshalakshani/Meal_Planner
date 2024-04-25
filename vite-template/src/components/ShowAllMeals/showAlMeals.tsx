
import { getAllMealPlans } from '@/Functions/Meal/meal';
import { BadgeCard } from '@/components/Card/Card';

import { Stack } from '@mantine/core';
import { useEffect, useState } from 'react';

export function ShowAllMeals() {
  const [items, setItems] = useState([1]);
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetchData();
  }, []); 

  const fetchData = async () => {
    try {
      const data = await getAllMealPlans();
      setPlans(data);
    } catch (error) {
      console.error('Error fetching meal plans:', error);
    }
  };

  return (
    <Stack>
        {plans.map((item:any, index) => (
            <div key={index}>
                <BadgeCard 
                    image={item.image} 
                    title={item.planName} 
                    instructions={item.instructions} 
                    ingredients={item.ingredientName} 
                    preference={item.preference} 
                    planId={item.planId}
                    setPlans={setPlans}
                    mealPlan={item}
                />
            </div>
        ))}
    </Stack>
  );
}
