import React, { ComponentProps, HTMLProps } from 'react'
import {tv, VariantProps} from 'tailwind-variants'
import { twMerge } from 'tailwind-merge'



const text = tv({
  base: ['font-sans font-Myll_bold leading-Myll_shorter m-0 text-Myll_gray100'],
  variants: {
    sizeTxt: {
      xxs  : 'text-xxs',
      xs   : 'text-xs',
      sm   : 'text-sm',
      md   : 'text-md',
      lg   : 'text-lg',
      xl   : 'text-xl',
      '2xl': 'text-2xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
      '7xl': 'text-7xl',
      '8xl': 'text-8xl',
      '9xl': 'text-9xl',
    },
    variant: {
      primary: 'text-Myll_gray100',
      secondary: 'text-Myll_gray200',
      tertiary:  'text-Myll_ignite300',

    }
  },
  defaultVariants: {
    sizeTxt: 'md',
    variant: 'primary',

  }
})

export interface TextProps extends ComponentProps<'p'>,VariantProps<typeof text>  {
  as?: 'p' | 'strong' | 'span' 
  className?: string
}

export function Text({
  children,
  sizeTxt,
  className,
  variant,
  as = 'p',
  ...props
}: TextProps) {
  const Tag = as as keyof JSX.IntrinsicElements

  return React.createElement(
    Tag,
    {
      className: twMerge(text({sizeTxt, variant, className}), className),
      ...props,

    },
    children,
  )
}

Text.displayName = 'Text'




// import React, { ReactNode } from 'react'

// export interface TextProps extends React.HTMLProps<HTMLElement> {
//   sizeTxt?:
//     | 'xxs'
//     | 'xs'
//     | 'sm'
//     | 'md'
//     | 'lg'
//     | 'xl'
//     | '2xl'
//     | '5xl'
//     | '4xl'
//     | '6xl'
//     | '7xl'
//     | '8xl'
//     | '9xl'
//   type?: 'p' | 'strong' | 'span'
//   children?: ReactNode
//   variant?: 'primary' | 'secondary' | 'tertiary'
// }

// export function Text({
//   sizeTxt = 'md',
//   type = 'p',
//   variant = 'primary',
//   children,
//   ...rest
// }: TextProps) {
//   const Tag = type as keyof JSX.IntrinsicElements

//   return React.createElement(
//     Tag,
//     {
//       className: `font-Myll_default leading-Myll_base m-0
//       ${variant === 'primary' ? 'text-Myll_gray100' : ''}
//       ${variant === 'secondary' ? 'text-Myll_gray200' : ''}
//       ${variant === 'tertiary' ? 'text-Myll_ignite300' : ''}
//       ${sizeTxt === 'xxs' ? 'text-Myll_xxs' : ''}
//       ${sizeTxt === 'xs' ? 'text-Myll_xs' : ''}
//       ${sizeTxt === 'sm' ? 'text-Myll_sm' : ''}
//       ${sizeTxt === 'md' ? 'text-Myll_md' : ''}
//       ${sizeTxt === 'lg' ? 'text-Myll_lg' : ''}
//       ${sizeTxt === 'xl' ? 'text-Myll_xl' : ''}
//       ${sizeTxt === '2xl' ? 'text-Myll_2xl' : ''}
//       ${sizeTxt === '4xl' ? 'text-Myll_4xl' : ''}
//       ${sizeTxt === '5xl' ? 'text-Myll_5xl' : ''}
//       ${sizeTxt === '6xl' ? 'text-Myll_6xl' : ''}
//       ${sizeTxt === '7xl' ? 'text-Myll_7xl' : ''}
//       ${sizeTxt === '8xl' ? 'text-Myll_8xl' : ''}
//       ${sizeTxt === '9xl' ? 'text-Myll_9xl' : ''}
//       `,
//       ...rest,
//     },
//     children,
//   )
// }

// Text.displayName = 'Text'
