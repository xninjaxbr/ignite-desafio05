import { ReactNode} from 'react';

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  sizeBtn?:"md" | "sm"
  variant?: "primary" | "secondary" | "tertiary"
  svg?: ReactNode
  }

export function Button({
  className,
  sizeBtn = "md",
  variant = "primary",
  type,
  svg,
  children,

  ...rest
}: ButtonProps) {
    return(
        <button type='button' {...rest} className={`rounded-Myll_sm text-Myll_sm font-Myll_medium font-Myll_default text-center min-w-[120px] box-border py-0 px-4 flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed focus:shadow-Myll_focus
        ${variant === 'primary' ? 'text-Myll_white bg-Myll_ignite500 hover:bg-Myll_ignite300 disabled:bg-Myll_gray200 ': ''}
        ${variant === 'secondary' ? 'text-Myll_ignite300 border-solid border-2 border-Myll_ignite500 hover:bg-Myll_ignite500 hover:text-Myll_white disabled:text-Myll_gray200 disabled:border-Myll_gray200 disabled:hover:bg-transparent': ''}
        ${variant === 'tertiary' ? 'text-Myll_gray100 hover:text-Myll_white disabled:text-Myll_gray400': ''}
        ${sizeBtn === 'md' ? 'h-11': ''}
        ${sizeBtn === 'sm' ? 'h-9': ''}
        `}>
          {!!svg && <svg className='w-4 h-4'>{svg}</svg>}
            {children}
        </button>
    )

}

Button.displayName = 'Button'