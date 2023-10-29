import type { StoryObj, Meta } from '@storybook/react'
import { Button, Toast, ToastProps } from '@mll-ui/react'




export default {
  title: 'Surfaces/Toast',
  component: Toast,
  args: {
    elementBtn: <Button variant='secondary'>Toast</Button>,
    title: 'Agendamento realizado ',
    children: 'Quarta-feira, 23 de Outubro às 16h'
  },
  argTypes: {
    elementBtn: {control: {type: null }}
  }
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
    
}

