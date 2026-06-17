import { useEffect, useRef } from "react";

export const useClickOutside = (
  ref: React.RefObject<HTMLElement | null>,
  callback: () => void,
) => {

  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler = (event: MouseEvent | TouchEvent) => {
      const element = ref.current;


      if (!element || element.contains(event.target as Node)) {
        return;
      }

      savedCallback.current();
    };


    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);


    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [ref]);
};
