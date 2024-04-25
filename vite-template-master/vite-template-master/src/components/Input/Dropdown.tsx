import { MultiSelect } from '@mantine/core';

export function Dropdown({label, value, setValue}: any) {
  return (
    <MultiSelect
      label={label}
      placeholder={"Select "+ label}
      defaultValue={value ? [value] : []}
      onChange={(value) => setValue(value)}
      data={['Veg', 'Non-Veg']}
    />
  );
}