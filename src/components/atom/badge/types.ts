export interface IBadgeProps {
  title?: ReactNode;
  theme?: TBadgeThemes;
  className?: string;
}

type TBadgeThemes = "blue" | "green";
