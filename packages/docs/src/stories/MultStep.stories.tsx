import type { StoryObj, Meta } from '@storybook/react'
import { Box, MultStep, MultStepProps } from '@mll-ui/react'




export default {
  title: 'Form/MultStep',
  component: MultStep,
  args: {
    sizeMS: 4,
    currentStep: 1

  },
  decorators: [
    (Story) => {
        return(
            <Box style={{display: 'flex', gap: 16}}>
                {Story()}
            </Box>
        )
    }
  ]  
} as Meta<MultStepProps>

export const Primary: StoryObj<MultStepProps> = {

}
export const Full: StoryObj<MultStepProps> = {
  args: {
    currentStep: 4
  }

}

