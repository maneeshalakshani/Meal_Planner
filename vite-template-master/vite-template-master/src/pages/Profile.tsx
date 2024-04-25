import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { NavbarMinimal } from '@/components/NavBar/NavBar';
import { BadgeCard } from '@/components/Card/Card';

import { Center, Grid, Stack, Title } from '@mantine/core';
import { useState } from 'react';
import { ImagePicker } from '@/components/ImagePicker/ImagePicker';
import { TextInputField } from '@/components/Input/TextInput';
import { Dropdown } from '@/components/Input/Dropdown';
import { TextAreaField } from '@/components/Input/TextArea';
import { NormalButton } from '@/components/buttons/Button';
import { addMealPlan } from '@/Functions/Meal/meal';

export function Profile() {
  const [items, setItems] = useState([1,2]);
  const [name, setName] = useState();
  const [preference, setPreference] = useState();
  const [portion, setPortion] = useState();
  const [info, setInfo] = useState();
  const [Ingredients, setIngredients] = useState();
  const [instructions, setInstructions] = useState();
  const [image, setImage] = useState();

  const onSubmit = () => {
    const mealPlan = {
        "photo": image,
        "planName": name,
        "preference": preference,
        "ingredientName": "[" + Ingredients + "]",
        "instructions": "[" + instructions + "]",
        "info": info,
        "portion": portion,
    }

    addMealPlan(mealPlan);
  }
  
  return (
    <Center mt={70} mb={100}>
        <Stack>
            <Title>Add Meal Planner</Title>
            <TextInputField label={"Plan Name"} value={name} setValue={setName} />
            <TextInputField label={"Portion"} value={portion} setValue={setPortion} />
            <TextAreaField label={"Information"} value={info} setValue={setInfo} />
            <TextAreaField label={"Ingredients"} value={Ingredients} setValue={setIngredients} description={"separate with a comma"} />
            <TextAreaField label={"instructions"} value={instructions} setValue={setInstructions} description={"separate with a comma"} />
            <Dropdown label={"Preference"} value={preference} setValue={setPreference} />
            <ImagePicker setValue={setImage} />
            <NormalButton label={"Submit"} onClick={onSubmit} />
        </Stack>
    </Center>
  );
}
