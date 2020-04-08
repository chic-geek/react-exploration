import { useState } from 'react';

export default function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  return {
    setValue,
    reset: () => setValue(''),
    bind: {
      value,
      onChange: ({ target: { value } }) => setValue(value),
    }
  };
}
