import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Stack, Title } from '@mantine/core';
import { TextInputField } from '../Input/TextInput';
import { TextAreaField } from '../Input/TextArea';
import { ImagePicker } from '../ImagePicker/ImagePicker';
import { Dropdown } from '../Input/Dropdown';
import { NormalButton } from '../buttons/Button';
import { useEffect, useState } from 'react';
import { getCommentsWithPlan, updateMealPlan } from '@/Functions/Meal/meal';

export function CommentModal({meal}: any) {
  const [opened, { open, close }] = useDisclosure(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchData();
  }, []); 

  const fetchData = async () => {
    try {
      const data = await getCommentsWithPlan(meal.planId);
      setComments(data);
    } catch (error) {
      console.error('Error fetching meal plans:', error);
    }
  };

  return (
    <>
      <Modal opened={opened} onClose={close} title="Comments" size="lg">
        <Stack>
            {/* <Title>Update Meal Planner</Title> */}
            {/* <TextInputField label={"Plan Name"} value={meal.planName} showVal={true} setValue={setName} />
            <TextInputField label={"Portion"} value={meal.portion} showVal={true} setValue={setPortion} />
            <TextAreaField label={"Information"} value={meal.info} showVal={true} setValue={setInfo} />
            <TextAreaField label={"Ingredients"} value={meal.ingredientName} showVal={true} setValue={setIngredients} description={"separate with a comma"} />
            <TextAreaField label={"instructions"} value={meal.instructions} showVal={true} setValue={setInstructions} description={"separate with a comma"} />
            <Dropdown label={"Preference"} value={meal.preference} showVal={true} setValue={setPreference} />
            <ImagePicker setValue={setImage} />
            <NormalButton label={"Update"} onClick={onSubmit} bgColor={'green'} /> */}
        </Stack>
      </Modal>

      <Button onClick={open} style={{ flex: 1 }}>Show Comments</Button>
    </>
  );
}