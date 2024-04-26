import '@mantine/core/styles.css';
import { Grid, MantineProvider, Stack } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
import { NavbarMinimal } from './components/NavBar/NavBar';

export default function App() {
  const checkNav = () => {
    if(window.location.href == 'http://localhost:5173/login' || window.location.href == 'http://localhost:5173/register'){
      return <></>;
    }else{
      return <>
        <Grid.Col span="content" style={{'position': "fixed"}}>
          <NavbarMinimal />
        </Grid.Col>
      </>;
    }
  };

  return (
    <MantineProvider theme={theme}>
      <Grid>
      {checkNav()}
      <Grid.Col span={11} mt={30} mb={50}>
        <Router />
      </Grid.Col>
    </Grid>
    </MantineProvider>
  );
}
