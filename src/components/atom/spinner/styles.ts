import type { ISpinner } from "./interface";

const sizes = {
  xSmall: "w-4 h-4",
  small: "w-6 h-6",
  medium: "w-8 h-8",
  large: "w-10 h-10",
  xLarge: "w-[6.25rem] h-10-[6.25rem]",
};

const colors = {
  primary: "fill-blue-600",
  gray: "fill-gray-600",
  green: "fill-green-500",
  red: "fill-red-600",
  yellow: "fill-yellow-400",
  pink: "fill-pink-600",
  purple: "fill-purple-600",
  white: "fill-white",
  darkYellow: "fill-yellow-700",
};

const styles = ({ size, color }: ISpinner) => ({
  wrapper: `flex items-center justify-center ${sizes[size!]}`,
  spinner: `text-gray-200 animate-spin ${colors[color!]}`,
});

export default styles;
