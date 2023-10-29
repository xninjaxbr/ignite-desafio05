import { ComponentProps } from 'react'
import * as TooltipUI from '@radix-ui/react-tooltip'

export type TooltipProps = ComponentProps<typeof TooltipUI.Content>

export const Tooltip = ({ children, content, ...props }: TooltipProps) => {
  return (
    <TooltipUI.Provider>
      <TooltipUI.Root>
        <TooltipUI.Trigger asChild>
          <button>{children}</button>
        </TooltipUI.Trigger>
        <TooltipUI.Portal>
          <TooltipUI.Content
            className="flex items-center justify-center rounded-md bg-Myll_gray900 px-4 py-3 text-Myll_sm font-Myll_medium leading-Myll_short text-Myll_gray100"
            sideOffset={5}
            {...props}
          >
            {content}
            <TooltipUI.Arrow className="TooltipArrow" />
          </TooltipUI.Content>
        </TooltipUI.Portal>
      </TooltipUI.Root>
    </TooltipUI.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
