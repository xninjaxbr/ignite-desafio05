import type { StoryObj, Meta } from '@storybook/react'
import { AvatarComp, AvatarProps} from '@mll-ui/react'

export default {
  title: 'Data display/Avatar',
  component: AvatarComp,
  args: {
    
  }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {
    args:{
        src: 'https://github.com/xninjaxbr.png'
    }
}
export const Fallback: StoryObj<AvatarProps> = {
    args:{
        src: undefined
    }
}

