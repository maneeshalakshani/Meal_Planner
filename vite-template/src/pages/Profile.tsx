// import { Center, Grid, Group, Stack, Text, Title } from '@mantine/core';
// import { useEffect, useState } from 'react';
// import { ImagePicker } from '@/components/ImagePicker/ImagePicker';
// import { TextInputField } from '@/components/Input/TextInput';
// import { Dropdown } from '@/components/Input/Dropdown';
// import { TextAreaField } from '@/components/Input/TextArea';
// import { NormalButton } from '@/components/buttons/Button';
// import { addMealPlan, getAllMealPlansByUser } from '@/Functions/Meal/meal';
// import { getUserWithId } from '@/Functions/User/user';
// import { BadgeCard } from '@/components/Card/Card';

// export function Profile() {
//   const [user, setUser] = useState([]);
//   const [name, setName] = useState(null);
//   const [followers, setFollowers] = useState([]);
//   const [plans, setPlans] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []); 

//   const fetchData = async () => {
//     try {
//       const data = await getUserWithId(localStorage.getItem('userId'));
//       setUser(data);
//       setName(data.name)
//       setFollowers(data.follower)

//       const plan = await getAllMealPlansByUser(localStorage.getItem('userId'));
//       setPlans(plan);
//     } catch (error) {
//       console.error('Error fetching :', error);
//     }
//   };
  
//   return (
//     <Center mt={50} mb={100}>
//         <Stack>
//             <Group>
//               <Title>{name}</Title>
//               <Text color='grey'>{`${followers.length} Followers`}</Text>
//               <NormalButton label={'Follow'} bgColor={'pink'} />
//             </Group>
//             <Group style={{'position': 'absolute', 'left': '200px', 'top': '150px'}}>
//             {plans.map((item:any, index) => (
//                     <BadgeCard 
//                       key={index}
//                         image={item.image} 
//                         title={item.planName} 
//                         instructions={item.instructions} 
//                         ingredients={item.ingredientName} 
//                         preference={item.preference} 
//                         planId={item.planId}
//                         setPlans={setPlans}
//                         mealPlan={item}
//                         navLocation={'profile'}
//                         ownerId={item.ownerId}
//                     />
//             ))}
//             </Group>
//         </Stack>
//     </Center>
//   );
// }
