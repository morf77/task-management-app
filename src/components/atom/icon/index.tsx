import { IIcon } from "./types"

const Icon = ({
    size = 18,
    className = 'stroke-black fill-black',
    name,
  }: IIcon) => {
    return (
      <svg
        width={size}
        height={size}
        className={className}
      >
        <use xlinkHref={`/svg/sprites.svg#${name}`} />
      </svg>
    )
  }

  export default Icon