import * as CheckBoxComp from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react';
import { ComponentProps } from 'react';

export interface CheckBoxProps extends ComponentProps<typeof CheckBoxComp.Root> {
}

export function CheckBox(
props: CheckBoxProps) {
  return(
    <CheckBoxComp.Root {...props} className={`w-6 h-6 bg-Myll_gray900 rounded-Myll_xs leading-none cursor-pointer overflow-hidden box-border 
    flex justify-center items-center border-solid border-2 border-Myll_gray900 focus:border-Myll_ignite300  data-[state=checked]:bg-Myll_ignite300 
    transition-all ease-in-out delay-150 data-[state=checked]:translate-y-0 duration-700  
     `}>
        <CheckBoxComp.Indicator asChild className={`text-Myll_white w-4 h-4 `}>
          <Check weight='bold'/>
        </CheckBoxComp.Indicator>
    </CheckBoxComp.Root>
  )
}

CheckBox.displayName = 'CheckBox'