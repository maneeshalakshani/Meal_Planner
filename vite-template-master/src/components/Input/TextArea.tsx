import { Textarea } from '@mantine/core';

export function TextAreaField({label, description, value, setValue, showVal}: any) {
  return (
    <Textarea
      label={label}
      defaultValue={showVal ? value : null}
      onChange={(event) => setValue(event.target.value)}
      description={description ?? ""}
      placeholder={"Enter " + label}
    />
  );
}