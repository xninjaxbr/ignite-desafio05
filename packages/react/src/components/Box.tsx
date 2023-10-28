import React, { CSSProperties, ReactNode } from "react"

export interface BoxProps extends React.HTMLProps<HTMLDivElement> {
  type?: "label" | "div"
  children?: ReactNode
  style?: CSSProperties
}

export const Box = ({
  children,
  type = 'div',
  style,
  ...props
}: BoxProps) => {

  const Tag =  type as keyof JSX.IntrinsicElements 

  return React.createElement(
    Tag,
    {
      className: `p-6 rounded-Myll_md bg-Myll_gray800 border border-Myll_gray600 text-Myll_gray100`
       ,
      style,
      ...props,
    },
    children 
  )
}

Box.displayName = 'Box'