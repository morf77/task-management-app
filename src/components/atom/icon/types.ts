export interface IIcon {
  name: TIconName;
  size?: TSize;
  className?: string;
}

type TIconName =
  | "task"
  | "star"
  | "paperClip"
  | "document-filter"
  | "spinner"
  | "trash"
  | "edit";

type TSize = 24 | 18 | 16 | 14 | 12 | 10 | 28;
