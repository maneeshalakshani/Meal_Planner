import {
    Paper,
    TextInput,
    PasswordInput,
    Checkbox,
    Button,
    Title,
    Text,
    Anchor,
  } from '@mantine/core';
  import classes from './Login.module.css';
import { useState } from 'react';
import { login } from '@/Functions/Auth/auth';
  
  export function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
      <div className={classes.wrapper}>
        <Paper className={classes.form} radius={0} p={30}>
          <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
            Welcome back to Meal Prep!
          </Title>
  
          <TextInput label="Email address" placeholder="hello@gmail.com" size="md" value={email} onChange={(event) => setEmail(event.target.value)} />
          <PasswordInput label="Password" placeholder="Your password" mt="md" size="md" value={password} onChange={(event) => setPassword(event.target.value)} />
          
          <Button fullWidth mt="xl" size="md" onClick={() => login(email, password)}>
            Login
          </Button>
  
          <Text ta="center" mt="md">
            Don&apos;t have an account?{' '}
            <Anchor<'a'> href="#" fw={700} onClick={(event) => {
              event.preventDefault();
              window.location.href = "http://localhost:5173/register";
            }}>
              
              Register
            </Anchor>
          </Text>
        </Paper>
      </div>
    );
  }