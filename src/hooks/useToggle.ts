import { useState, useCallback } from "react";

/**
 * A custom hook to manage a boolean toggle state.
 * Uses a const tuple assertion to lock in exactly [boolean, () => void] array types.
 */
export const useToggle = (initialValue: boolean = false) => {
  const [state, setState] = useState<boolean>(initialValue);

  const toggle = useCallback(() => {
    setState((prev) => !prev);
  }, []);

  return [state, toggle] as const;
};
