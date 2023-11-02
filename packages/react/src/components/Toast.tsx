import * as React from 'react'
import * as ToastUI from '@radix-ui/react-toast'
import { ComponentProps } from 'react'
import { X } from 'phosphor-react'

export interface ToastProps extends ComponentProps<typeof ToastUI.Root> {
  elementBtn: React.ReactNode
}

export const Toast = ({
  title,
  children,
  elementBtn,
  ...props
}: ToastProps) => {
  const [open, setOpen] = React.useState(false)
  const timerRef = React.useRef(0)

  return (
    <ToastUI.Provider swipeDirection="right" duration={5000}>
      <button
        onClick={() => {
          setOpen(false)
          window.clearTimeout(timerRef.current)
          timerRef.current = window.setTimeout(() => {
            setOpen(true)
          }, 100)
        }}
      >
        {elementBtn}
      </button>

      <ToastUI.Root
        {...props}
        className="absolute bottom-0 right-0 m-2 items-center gap-x-4 rounded-md bg-Myll_gray800 p-4 px-5 py-3 data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=closed]:animate-hide data-[state=open]:animate-slideInToast data-[swipe=end]:animate-swipeOutToast data-[swipe=cancel]:transition-[transform_200ms_ease-out]"
        open={open}
        onOpenChange={setOpen}
      >
        <ToastUI.Title className="min-w-[320px] font-Myll_default text-Myll_xl font-Myll_bold leading-Myll_base text-Myll_white">
          {title}
        </ToastUI.Title>
        <ToastUI.Description className="min-w-[320px] font-Myll_default text-Myll_sm font-Myll_regular leading-Myll_base text-Myll_gray200">
          {children}
        </ToastUI.Description>
        <ToastUI.Action
          className="absolute right-0 top-0"
          asChild
          altText="Click to close"
        >
          <button className="m-4 rounded bg-transparent p-1 text-Myll_gray400 hover:shadow-[inset_0_0_0_1px] focus:shadow-[inset_0_0_0_2px]">
            <X size={24} weight="bold" />
          </button>
        </ToastUI.Action>
      </ToastUI.Root>
      <ToastUI.Viewport className="fixed bottom-0 right-0 z-[2147483647] m-0 flex w-[390px] max-w-[100vw] list-none flex-col gap-[10px] p-[var(--viewport-padding)] outline-none [--viewport-padding:_25px]" />
    </ToastUI.Provider>
  )
}

Toast.displayName = 'Toast'
