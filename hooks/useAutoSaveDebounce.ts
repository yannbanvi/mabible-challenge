import { NoteInterface } from '@/interfaces/UiProps';
import { useEffect, useState } from 'react';

// This custom hook will debounce the provided note value,
const useAutoSaveDebounce = (value: NoteInterface, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState<NoteInterface>(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value?.title, value?.body, delay]);

  return debouncedValue;
};
export default useAutoSaveDebounce;