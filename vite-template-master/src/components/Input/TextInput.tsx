import { TextInput } from '@mantine/core';
import { ChangeEvent, JSXElementConstructor, ReactElement, ReactNode } from 'react';

export function TextInputField({label, value, setValue, showVal}: any) {

  return (
    <TextInput
      label={label}
      placeholder={"Enter " + label}
      defaultValue={showVal ? value: null}
      onChange={(value) => setValue(value.target.value)}
    />
  );
}