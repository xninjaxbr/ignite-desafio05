import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps} from '@mll-ui/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  decorators: [
    (Story) => {
        return(
            <Box type='label' style={{display: 'flex', flexDirection: 'column', gap: 8}}>
                <Text sizeTxt='sm'>Email Address</Text>
                {Story()}
            </Box>
        )
    }
  ]
  
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
    args: {
        placeholder: 'Type any observation...'
    }
}

export const Disabled: StoryObj<TextAreaProps> = {
    args: {
        disabled: true
    }
}


