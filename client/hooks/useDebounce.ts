import { useState, useEffect } from "react";

// Custom hook for debouncing a value
const useDebounce = (
  value: { id: string; usuario: string; estado: string }, // The value to debounce
  delay: number // The delay in milliseconds
) => {
  const [debouncedValue, setDebouncedValue] = useState(value); // State to store the debounced value

  useEffect(() => {
    // Set a timer to update the debounced value after the delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup function to clear the timer if value or delay changes
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Effect re-runs when value or delay changes

  return debouncedValue; // Return debounced value
};

export default useDebounce;
