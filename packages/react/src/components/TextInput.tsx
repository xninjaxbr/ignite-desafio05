import { forwardRef } from 'react'

export interface TextInputProps extends React.HTMLProps<HTMLInputElement> {
  prefix?: string
  sizeIn: 'md' | 'sm'
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ children, sizeIn = 'md', prefix, ...props }: TextInputProps, ref) => {
    return (
      <div
        className={`align-center box-border flex rounded-Myll_sm border-2 border-solid border-Myll_gray900 bg-Myll_gray900 [&:has(input:disabled)]:cursor-not-allowed [&:has(input:disabled)]:opacity-50 [&:has(input:focus)]:border-Myll_ignite300
      ${sizeIn === 'sm' ? 'px-3 py-2 ' : ''}
      ${sizeIn === 'sm' ? 'px-4 py-3 ' : ''}
      `}
      >
        {!!prefix && (
          <span className="font-Myll_default text-Myll_sm font-Myll_regular text-Myll_gray400">
            {prefix}
          </span>
        )}
        <input
          ref={ref}
          {...props}
          className={
            'w-full border-0 bg-transparent font-Myll_default text-Myll_sm font-Myll_regular text-Myll_white focus:outline-none'
          }
        >
          {children}
        </input>
      </div>
    )
  },
)

TextInput.displayName = 'TextInput'
