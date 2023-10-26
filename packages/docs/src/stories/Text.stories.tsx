import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@mll-ui/react'




export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adip',
    variant: "primary",
    sizeTxt: "md"
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary", "tertiary"],
      control:{ type: 'inline-radio'}
    },
    sizeTxt: {
      options: ["xxs","xs","sm","md","lg","xl","2xl","4xl","5xl","6xl","7xl","8xl","9xl"],
      control:{ type: 'inline-radio'}
    },
  }
  
} as Meta<TextProps>

export const P: StoryObj<TextProps> = {}
export const Strong: StoryObj<TextProps> = {
    args:{
    
        type: "strong"
    }
}
export const CustomTag: StoryObj<TextProps> = {
    args:{
        sizeTxt: "xl", 
        type: "span",
        variant: 'secondary'
    }
}


