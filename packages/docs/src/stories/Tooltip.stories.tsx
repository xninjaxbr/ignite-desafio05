import type { StoryObj, Meta } from '@storybook/react'
import { Button, Tooltip, TooltipProps } from '@mll-ui/react'




export default {
  title: 'Surfaces/Tooltip',
  component: Tooltip,
  args: {
    children: <Button>Tooltip</Button>,
    content: 'Tooltip test'
  },
  argTypes: {
    children: {
      control: {
        type: null
      }
    }
  } 
  
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
    
}

