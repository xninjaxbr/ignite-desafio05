import React, { HTMLProps } from 'react'
import {tv, VariantProps} from 'tailwind-variants'



const heading = tv({
  base: ['font-sans font-Myll_bold leading-Myll_shorter m-0 text-Myll_gray100'],
  variants: {
    sizeHead: {
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '4xl': 'text-4xl',
      '6xl': 'text-6xl',
      '8xl': 'text-8xl',
      '9xl': 'text-9xl'
    },
  },
  defaultVariants: {
    sizeHead: 'xl',

  }
})

export interface HeadingProps extends HTMLProps<HTMLHeadingElement>,VariantProps<typeof heading>  {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export function Heading({
  children,
  sizeHead,
  className,
  as = 'h2',
  ...props
}: HeadingProps) {
  const Tag = as as keyof JSX.IntrinsicElements

  return React.createElement(
    Tag,
    {
      className: heading({sizeHead, className}),
      ...props,

    },
    children,
  )
}

Heading.displayName = 'Heading'
