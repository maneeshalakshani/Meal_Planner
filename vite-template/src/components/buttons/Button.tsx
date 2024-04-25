import { Button } from '@mantine/core';

export function NormalButton({label, bgColor, onClick}: any) {
  return <Button variant="filled" bg={bgColor} onClick={onClick}>{label}</Button>;
}