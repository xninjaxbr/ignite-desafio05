import * as Avatar from '@radix-ui/react-avatar'
import { User } from 'phosphor-react';
import { ComponentProps } from 'react';

export interface AvatarProps extends ComponentProps<typeof Avatar.Image> {
  
}

export function AvatarComp(
props: AvatarProps) {
  return(
    <Avatar.Root className='rounded-Myll_full inline-block w-16 h-16 overflow-hidden'>
        <Avatar.Image {...props} className='w-full h-full object-cover'>

        </Avatar.Image>
        <Avatar.Fallback delayMs={600} className='w-full h-full flex items-center justify-center bg-Myll_gray600 text-gray-800'>
            <svg className='w-5 h-5 flex justify-center items-center' >
                <User className='text-Myll_gray200' size={20} />
            </svg>

        </Avatar.Fallback>
    </Avatar.Root>
  )
}


AvatarComp.displayName = 'Avatar'
