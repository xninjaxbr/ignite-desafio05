import * as CheckBoxComp from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'
import { ComponentProps } from 'react'

export type CheckBoxProps = ComponentProps<typeof CheckBoxComp.Root>

export function CheckBox(props: CheckBoxProps) {
  return (
    <CheckBoxComp.Root
      {...props}
      className={`box-border flex h-6 w-6 cursor-pointer items-center justify-center overflow-hidden 
    rounded-Myll_xs border-2 border-solid border-Myll_gray900 bg-Myll_gray900 leading-none transition-all delay-150 duration-700 
    ease-in-out focus:border-Myll_ignite300 data-[state=checked]:translate-y-0 data-[state=checked]:border-Myll_ignite300 data-[state=checked]:bg-Myll_ignite300  
     `}
    >
      <CheckBoxComp.Indicator asChild className={`h-4 w-4 text-Myll_white `}>
        <Check weight="bold" />
      </CheckBoxComp.Indicator>
    </CheckBoxComp.Root>
  )
}

CheckBox.displayName = 'CheckBox'
