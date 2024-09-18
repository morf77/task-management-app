import { useEffect, useRef, useCallback } from "react";
import { IUseClickOutsideOptions } from "./types";

const useClickOutside = ({
  isOpen,
  eventType = "mousedown",
  triggeringElementId = "",
  onClose,
}: IUseClickOutsideOptions) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (triggeringElementId) {
        const triggeringElement = document.getElementById(triggeringElementId);

        if (
          triggeringElement &&
          triggeringElement.contains(event.target as Node)
        ) {
          return;
        }
      }

      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    },
    [onClose, triggeringElementId]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener(eventType, handleClickOutside);
    } else {
      document.removeEventListener(eventType, handleClickOutside);
    }

    return () => {
      document.removeEventListener(eventType, handleClickOutside);
    };
  }, [isOpen, handleClickOutside, eventType]);

  return ref;
};

export default useClickOutside;
