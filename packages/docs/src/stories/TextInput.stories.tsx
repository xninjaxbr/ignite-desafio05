import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps} from '@mll-ui/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  decorators: [
    (Story) => {
        return(
            <Box type='label'style={{display: 'flex', flexDirection: 'column', gap: 8}}>
                <Text sizeTxt='sm' >Email Address</Text>
                {Story()}
            </Box>
        )
    }
  ]
  
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
    args: {
        placeholder: 'Type your name'
    }
}
export const WithPrefix: StoryObj<TextInputProps> = {
    args: {
        prefix: 'cal.com/',
        placeholder: 'your-username'
    }
}
export const Disabled: StoryObj<TextInputProps> = {
    args: {
        disabled: true
    }
}


