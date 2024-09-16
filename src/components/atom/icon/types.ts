export interface IIcon {
    name: TIconName
    size?: TSize
    className?: string
  }

  type TIconName = 'task' | 'star' | 'paperClip' | 'document-filter'

  type TSize = 24 | 18