import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export interface BoxProps extends ComponentProps<'div'> {
  as: string
}

export const Box = ({ as = 'div', className, ...props }: BoxProps) => {
  return React.createElement(
    as,
    {
      className: twMerge(
        'p-6 rounded-Myll_md bg-Myll_gray800 border border-Myll_gray600 text-Myll_gray100 ',
        className,
      ),
      ...props,
    },
    props.children,
  )
}

Box.displayName = 'Box'
