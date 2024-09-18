export interface IUseClickOutsideOptions {
  isOpen: boolean; // Indicates whether the component is in an open state.
  eventType?: "mousedown" | "mouseup" | "click"; // Optional. Specifies the type of event to listen for (default is 'mousedown').
  triggeringElementId?: string; // Optional. Represents the id property of an HTML element (if any) that triggered the event.
  onClose: () => void; // Callback function to be executed when a click occurs outside the component.
}
