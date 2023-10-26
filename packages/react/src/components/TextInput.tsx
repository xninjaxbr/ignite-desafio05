export interface TextInputProps extends React.HTMLProps<HTMLInputElement> {
    prefix?: string;
}


export const TextInput = ({
  children,
  prefix,
  className,
  ...props
}: TextInputProps) => {
  return (
    <div
      className={'bg-Myll_gray900 py-3 px-4 rounded-Myll_sm box-border border-solid border-2 border-Myll_gray900 flex align-baseline [&:has(input:focus)]:border-Myll_ignite300 [&:has(input:disabled)]:opacity-50 [&:has(input:disabled)]:cursor-not-allowed'}
    >
        {!!prefix && <span className="font-Myll_default text-Myll_sm text-Myll_gray400 font-Myll_regular">{prefix}</span>}        
        <input {...props} className={'font-Myll_default text-Myll_sm text-Myll_white font-Myll_regular bg-transparent border-0 w-full focus:outline-none'}>
        {children}
        </input>
    </div>
  )
}
   
TextInput.displayName = 'TextInput'