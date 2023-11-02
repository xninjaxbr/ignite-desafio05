import type { StoryObj, Meta } from '@storybook/react'
import {Button , ButtonProps } from '@mll-ui/react'
import {  ArrowRight } from 'phosphor-react'


export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
    variant: "primary",
    sizeBtn: "md",
    disabled: false
  },
  argTypes: {
    variant: {
      options: ["primary" , "secondary" , "tertiary"],
      control:{ type: 'inline-radio'}
    },
    sizeBtn: {
      options: ["md", "sm"],
      control:{ type: 'inline-radio'}
    },
    disabled: {
      control:{ type: 'boolean'}
    },
    svg: {
      control:{ type: null}
    }
  }
  
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}
export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true
  }
}
export const Secondary: StoryObj<ButtonProps> = {
args: {
    variant: 'secondary',
    children: 'Create new',
    
}
}
export const Tertiary: StoryObj<ButtonProps> = {
args: {
    variant: 'tertiary',
    children: 'Cancel',
   
}
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    sizeBtn: 'md',
  }
}

export const WithSVGPrimary: StoryObj<ButtonProps> = {
  args: {
    children: 'Próximo passo',
    svg: <ArrowRight />,   
  }
}