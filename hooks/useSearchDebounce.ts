import { useEffect, useState } from 'react';

// this custom hook will debounce the provided search value,
const useSearchDebounce = (value: string, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState<string>(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};
export default useSearchDebounce;