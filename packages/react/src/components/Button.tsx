import { ReactNode } from 'react'

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  sizeBtn?: 'md' | 'sm'
  variant?: 'primary' | 'secondary' | 'tertiary'
  svg?: ReactNode
}

export function Button({
  className,
  sizeBtn = 'md',
  variant = 'primary',
  type,
  svg,
  children,

  ...rest
}: ButtonProps) {
  return (
    <button
      type="button"
      {...rest}
      className={`box-border flex min-w-[120px] cursor-pointer items-center justify-center gap-2 rounded-Myll_sm px-4 py-0 text-center font-Myll_default text-Myll_sm font-Myll_medium focus:shadow-Myll_focus disabled:cursor-not-allowed
        ${
          variant === 'primary'
            ? 'bg-Myll_ignite500 text-Myll_white hover:bg-Myll_ignite300 disabled:bg-Myll_gray200 '
            : ''
        }
        ${
          variant === 'secondary'
            ? 'border-2 border-solid border-Myll_ignite500 text-Myll_ignite300 hover:bg-Myll_ignite500 hover:text-Myll_white disabled:border-Myll_gray200 disabled:text-Myll_gray200 disabled:hover:bg-transparent'
            : ''
        }
        ${
          variant === 'tertiary'
            ? 'text-Myll_gray100 hover:text-Myll_white disabled:text-Myll_gray400'
            : ''
        }
        ${sizeBtn === 'md' ? 'h-11' : ''}
        ${sizeBtn === 'sm' ? 'h-9' : ''}
        `}
    >
      {!!svg && <svg className="h-4 w-4">{svg}</svg>}
      {children}
    </button>
  )
}

Button.displayName = 'Button'
