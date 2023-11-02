import { ButtonHTMLAttributes, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { Slot } from '@radix-ui/react-slot'

const button = tv({
  base: [
    'box-border flex min-w-[120px] cursor-pointer items-center justify-center gap-2 rounded-Myll_sm px-4 py-0 text-center font-Myll_default text-Myll_sm font-Myll_medium focus:shadow-Myll_focus disabled:cursor-not-allowed',
  ],
  variants: {
    variant: {
      primary:
        'bg-Myll_ignite500 text-Myll_white hover:bg-Myll_ignite300 disabled:bg-Myll_gray200 ',
      secondary:
        'border-2 border-solid border-Myll_ignite500 text-Myll_ignite300 hover:bg-Myll_ignite500 hover:text-Myll_white disabled:border-Myll_gray200 disabled:text-Myll_gray200 disabled:hover:bg-transparent',
      tertiary:
        'text-Myll_gray100 hover:text-Myll_white disabled:text-Myll_gray400',
    },
    sizeBtn: {
      md: 'h-11',
      sm: 'h-9',
    },
  },
  defaultVariants: {
    variant: 'primary',
    sizeBtn: 'md',
  },
})

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  asChild?: boolean
  svg?: ReactNode
}

export function Button({
  asChild,
  variant,
  sizeBtn,
  className,
  svg,
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : 'button'

  return (
    <Component {...props} className={button({ variant, sizeBtn, className })}>
      {!!svg && <svg className="h-4 w-4">{svg}</svg>}
      {props.children}
    </Component>
  )
}

Button.displayName = 'Button'
