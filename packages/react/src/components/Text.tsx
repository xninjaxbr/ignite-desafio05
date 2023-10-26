import React, { ReactNode } from "react"

export interface TextProps extends React.HTMLProps<HTMLElement> {
  sizeTxt?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "5xl" | "4xl" | "6xl" | "7xl" | "8xl" | "9xl"
  type?: "p" | "strong" | "span" 
  children?: ReactNode
  variant? : "primary" | "secondary" | "tertiary"  
  
}

export function Text({
  sizeTxt = "md",
  type = "p",
  variant = "primary",
  children,
  ...rest
}: TextProps) {

  const Tag =  type as keyof JSX.IntrinsicElements 

  return React.createElement(
    Tag,
    {
      className: `font-Myll_default leading-Myll_base m-0
      ${variant ===  'primary' ? 'text-Myll_gray100' : ''}
      ${variant ===  'secondary' ? 'text-Myll_gray200' : ''}
      ${variant ===  'tertiary' ? 'text-Myll_ignite300' : ''}
      ${sizeTxt ===  'xxs' ? 'text-Myll_xxs' : ''}
      ${sizeTxt ===  'xs' ? 'text-Myll_xs' : ''}
      ${sizeTxt ===  'sm' ? 'text-Myll_sm' : ''}
      ${sizeTxt ===  'md' ? 'text-Myll_md' : ''}
      ${sizeTxt ===  'lg' ? 'text-Myll_lg' : ''}
      ${sizeTxt ===  'xl' ? 'text-Myll_xl' : ''}
      ${sizeTxt ===  '2xl' ? 'text-Myll_2xl' : ''}
      ${sizeTxt ===  '4xl' ? 'text-Myll_4xl' : ''}
      ${sizeTxt ===  '5xl' ? 'text-Myll_5xl' : ''}
      ${sizeTxt ===  '6xl' ? 'text-Myll_6xl' : ''}
      ${sizeTxt ===  '7xl' ? 'text-Myll_7xl' : ''}
      ${sizeTxt ===  '8xl' ? 'text-Myll_8xl' : ''}
      ${sizeTxt ===  '9xl' ? 'text-Myll_9xl' : ''}
      ` ,
      ...rest,
    },
    children 
  )
}

Text.displayName = 'Text'