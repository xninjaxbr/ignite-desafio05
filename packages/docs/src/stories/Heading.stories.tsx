import type { StoryObj, Meta } from '@storybook/react'
import {Heading , HeadingProps } from '@mll-ui/react'


export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    sizeH: "lg",
    type: "h2"
  },
  argTypes: {
    type: {
      options: ["h1","h2","h3","h4","h5","h6"],
      control:{ type: 'inline-radio'}
    },
    sizeH: {
      options: ["lg","2xl","4xl","6xl","8xl","9xl"],
      control:{ type: 'inline-radio'}
    },
  }
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {
  args: {
    children: 'Title H2',
  },
}
export const DinamicTag: StoryObj<HeadingProps> = {
    args:{
        sizeH: "8xl", 
        type: 'h1',
        children: 'Title H1',	
    }
}
