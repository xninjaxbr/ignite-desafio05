export type TextAreaProps = React.HTMLProps<HTMLTextAreaElement>

export const TextArea = ({ children, className, ...props }: TextAreaProps) => {
  return (
    <textarea
      className={`
        box-border min-h-[80] resize-y rounded-Myll_sm border-2 border-solid border-Myll_gray900 bg-Myll_gray900
        px-4 py-3 font-Myll_default text-Myll_sm font-Myll_regular text-Myll_white placeholder:text-Myll_gray400 focus:border-Myll_ignite300
        focus:outline-0 disabled:cursor-not-allowed disabled:opacity-50 
        `}
      {...props}
    >
      {children}
    </textarea>
  )
}

TextArea.displayName = 'TextArea'
