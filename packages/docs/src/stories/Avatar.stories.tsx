import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps} from '@mll-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
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

