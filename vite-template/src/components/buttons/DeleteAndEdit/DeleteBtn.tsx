import { ActionIcon } from '@mantine/core';
import {  IconTrash } from '@tabler/icons-react';
import classes from './DeleteUpdate.module.css';

export function DeleteBtn({onClick}:any) {
  return (
    <ActionIcon size="xl" className={classes.button} aria-label="Disabled with styles" onClick={onClick}>
      <IconTrash />
    </ActionIcon>
  );
}