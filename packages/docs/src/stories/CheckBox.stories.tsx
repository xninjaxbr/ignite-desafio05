import type { StoryObj, Meta } from '@storybook/react'
import { Box,Text, CheckBox, CheckBoxProps } from '@myll-ui/react'

export default {
  title: 'Form/CheckBox',
  component: CheckBox,
  decorators: [
    (Story) => {
        return(
            <Box type='label' style={{display: 'flex', gap: 16}}>
                {Story()}
                <Text sizeTxt='lg' >Accept terms of user</Text>
            </Box>
        )
    }
  ]
  
} as Meta<CheckBoxProps>

export const Primary: StoryObj<CheckBoxProps> = {
  
}
