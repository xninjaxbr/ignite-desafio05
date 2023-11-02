import * as CheckBoxComp from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'
import { ComponentProps } from 'react'

export type CheckBoxProps = ComponentProps<typeof CheckBoxComp.Root>

export function CheckBox(props: CheckBoxProps) {
  return (
    <CheckBoxComp.Root
      {...props}
      className={`box-border flex h-6 w-6 cursor-pointer items-center justify-center 
    overflow-hidden rounded-Myll_xs border-2 border-solid border-Myll_gray900 bg-Myll_gray900 leading-none 
 focus:border-Myll_ignite300  data-[state=checked]:border-Myll_ignite300 data-[state=checked]:bg-Myll_ignite300  
     `}
    >
      <CheckBoxComp.Indicator
        asChild
        className={`h-4 w-4 text-Myll_white data-[state=checked]:animate-slideIn data-[state=unchecked]:animate-swipeOut `}
      >
        <Check weight="bold" />
      </CheckBoxComp.Indicator>
    </CheckBoxComp.Root>
  )
}

CheckBox.displayName = 'CheckBox'
