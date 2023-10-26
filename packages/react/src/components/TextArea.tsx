export interface TextAreaProps extends React.HTMLProps<HTMLTextAreaElement> {
 
}


export const TextArea = ({
  children,
  className,
  ...props
}: TextAreaProps) => {
  return (
    <textarea
      className={`
        bg-Myll_gray900 py-3 px-4 rounded-Myll_sm box-border border-solid border-2 border-Myll_gray900
        font-Myll_default text-Myll_sm text-Myll_white font-Myll_regular resize-y min-h-[80] focus:outline-0 focus:border-Myll_ignite300
        disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-Myll_gray400 
        `}
        {...props}
    >
        {children}
    </textarea>
  )
}
   
TextArea.displayName = 'TextArea'