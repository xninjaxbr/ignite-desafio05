import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text} from '@mll-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
    <>
      <Text>Teste do Box</Text>
    </>)
  }
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {
}
