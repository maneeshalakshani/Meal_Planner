import { ActionIcon } from '@mantine/core';
import {  IconEdit, IconTrash } from '@tabler/icons-react';
import classes from './DeleteUpdate.module.css';

export function UpdateBtn() {
  return (
    <ActionIcon size="xl" className={classes.update_button} aria-label="Disabled with styles">
      <IconEdit />
    </ActionIcon>
  );
}