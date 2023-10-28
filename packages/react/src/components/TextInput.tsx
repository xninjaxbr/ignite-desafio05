import { forwardRef } from "react";

export interface TextInputProps extends React.HTMLProps<HTMLInputElement> {
    prefix?: string;
    sizeIn: 'md' | 'sm'
}


export const TextInput = forwardRef<HTMLInputElement ,TextInputProps>(({
  children,
  sizeIn = 'md',
  prefix,
  className,
  ...props
}: TextInputProps, ref) => {
  return (
    <div
      className={`bg-Myll_gray900 rounded-Myll_sm box-border border-solid border-2 border-Myll_gray900 flex align-center [&:has(input:focus)]:border-Myll_ignite300 [&:has(input:disabled)]:opacity-50 [&:has(input:disabled)]:cursor-not-allowed
      ${sizeIn ===  'sm' ? 'py-2 px-3 ' : ''}
      ${sizeIn ===  'sm' ? 'py-3 px-4 ' : ''}
      `}
    >
        {!!prefix && <span className="font-Myll_default text-Myll_sm text-Myll_gray400 font-Myll_regular">{prefix}</span>}        
        <input ref={ref} {...props} className={'font-Myll_default text-Myll_sm text-Myll_white font-Myll_regular bg-transparent border-0 w-full focus:outline-none'}>
        {children}
        </input>
    </div>
  )
})
   
TextInput.displayName = 'TextInput'