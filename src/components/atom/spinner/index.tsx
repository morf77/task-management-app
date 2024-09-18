import Icon from "../icon";
import { IIcon } from "../icon/types";
import type { ISpinner } from "./interface";
import styles from "./styles";

const Spinner = ({ color, size }: ISpinner) => {
  const style = styles({ size, color });

  const iconSize: IIcon["size"] =
    ({
      xSmall: 12,
      small: 14,
      medium: 16,
      large: 18,
      xLarge: 24,
    }[size || "large"] as IIcon["size"]) || 18;

  return (
    <div className={style.wrapper}>
      <Icon name="spinner" className={style.spinner} size={iconSize} />
    </div>
  );
};

export default Spinner;

Spinner.defaultProps = {
  size: "medium",
  color: "primary",
};
