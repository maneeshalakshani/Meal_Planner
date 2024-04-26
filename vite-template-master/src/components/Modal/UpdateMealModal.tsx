import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Stack, Title } from '@mantine/core';
import { TextInputField } from '../Input/TextInput';
import { TextAreaField } from '../Input/TextArea';
import { ImagePicker } from '../ImagePicker/ImagePicker';
import { Dropdown } from '../Input/Dropdown';
import { NormalButton } from '../buttons/Button';
import { useState } from 'react';
import { updateMealPlan } from '@/Functions/Meal/meal';

export function UpdateMealModal({meal}: any) {
  const [opened, { open, close }] = useDisclosure(false);
  const [name, setName] = useState(meal.planName);
  const [preference, setPreference] = useState(meal.preference);
  const [portion, setPortion] = useState(meal.portion);
  const [info, setInfo] = useState(meal.info);
  const [Ingredients, setIngredients] = useState(meal.ingredientName);
  const [instructions, setInstructions] = useState(meal.instructions);
  const [image, setImage] = useState(meal.image);

    const onSubmit = () => {
      const mealPlan = {
        "photo": image,
        "planName": name,
        "preference": preference,
        "ingredientName": Ingredients,
        "instructions": instructions,
        "info": info !== null,
        "portion": portion,
      }
      updateMealPlan(meal.planId, mealPlan)
    }

  return (
    <>
      <Modal opened={opened} onClose={close} title="Update Meal Plan" size="lg">
        <Stack>
            {/* <Title>Update Meal Planner</Title> */}
            <TextInputField label={"Plan Name"} value={meal.planName} showVal={true} setValue={setName} />
            <TextInputField label={"Portion"} value={meal.portion} showVal={true} setValue={setPortion} />
            <TextAreaField label={"Information"} value={meal.info} showVal={true} setValue={setInfo} />
            <TextAreaField label={"Ingredients"} value={meal.ingredientName} showVal={true} setValue={setIngredients} description={"separate with a comma"} />
            <TextAreaField label={"instructions"} value={meal.instructions} showVal={true} setValue={setInstructions} description={"separate with a comma"} />
            <Dropdown label={"Preference"} value={meal.preference} showVal={true} setValue={setPreference} />
            <ImagePicker setValue={setImage} />
            <NormalButton label={"Update"} onClick={onSubmit} bgColor={'green'} />
        </Stack>
      </Modal>

      <Button onClick={open} bg={'green'}>Update</Button>
    </>
  );
}