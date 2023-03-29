import { useRef } from 'react';

type DebouncedFn<T extends any[]> = (...args: T) => void;

export default function useDebounce<T extends any[]>(
  fn: (...args: T) => void,
  delay: number
): DebouncedFn<T> {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  function debouncedFn(...args: T) {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      fn(...args);
    }, delay);
  }

  return debouncedFn;
}
