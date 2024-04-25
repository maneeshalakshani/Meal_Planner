import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { NavbarMinimal } from '@/components/NavBar/NavBar';
import { BadgeCard } from '@/components/Card/Card';

import { Center, Grid, Stack } from '@mantine/core';
import { useState } from 'react';
import { ShowAllMeals } from '@/components/ShowAllMeals/showAlMeals';

export function HomePage() {
  const [items, setItems] = useState([1,2]);
  
  const moveToLogin = () => {
    window.location.href = "http://localhost:5173/login"; // Change the URL using window.location.href
  };

  return (
    <>
    {
      localStorage.getItem('isLogged') == 'true' 
        ? <Grid>
        <Grid.Col span={7} >
          <ShowAllMeals />
        </Grid.Col>
      </Grid>
      : moveToLogin()
    }
    </>
  );
}
