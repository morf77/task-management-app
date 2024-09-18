export type SpinnerSizes = 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge'

export type SpinnerColors =
  | 'primary'
  | 'gray'
  | 'green'
  | 'red'
  | 'yellow'
  | 'pink'
  | 'purple'
  | 'white'
  | 'darkYellow'

export interface ISpinner {
  size?: SpinnerSizes
  color?: SpinnerColors
}
