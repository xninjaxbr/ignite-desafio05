import React, { HTMLProps, ReactNode } from 'react'

export interface HeadingProps extends HTMLProps<HTMLHeadingElement> {
  sizeH?: 'lg' | '2xl' | '4xl' | '6xl' | '8xl' | '9xl'
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: ReactNode
}

export function Heading({
  sizeH = 'lg',
  type = 'h2',
  children,
  ...rest
}: HeadingProps) {
  const Tag = type as keyof JSX.IntrinsicElements

  return React.createElement(
    Tag,
    {
      className: `text-Myll_gray100 font-Myll_bold leading-Myll_shorter m-0
      ${sizeH === 'lg' ? 'text-Myll_lg' : ''}
      ${sizeH === '2xl' ? 'text-Myll_2xl' : ''}
      ${sizeH === '4xl' ? 'text-Myll_4xl' : ''}
      ${sizeH === '6xl' ? 'text-Myll_6xl' : ''}
      ${sizeH === '8xl' ? 'text-Myll_8xl' : ''}
      ${sizeH === '9xl' ? 'text-Myll_9xl' : ''}`,
      ...rest,
    },
    children,
  )
}

Heading.displayName = 'Heading'
