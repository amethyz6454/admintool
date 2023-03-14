export const assertEqual = (value, expected): boolean => value === expected;

export const formatId = (value: string) => value.toLowerCase().replace(" ", "-");
