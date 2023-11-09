import * as AvatarUI from '@radix-ui/react-avatar'
import { User } from 'phosphor-react'
import { ComponentProps } from 'react'
import {twMerge} from 'tailwind-merge'
 
export interface AvatarProps extends ComponentProps<typeof AvatarUI.Image>{
  src?: string
  className?: string
}

export function Avatar({src, className='' , ...props}: AvatarProps) {
  return (
    <AvatarUI.Root 
    >
      <AvatarUI.Image
        {...props}
        className={twMerge("h-full w-full object-cover ",
        "inline-block h-16 w-16 overflow-hidden rounded-Myll_full"
        , className)}
        src={src}
      ></AvatarUI.Image>
      <AvatarUI.Fallback
        delayMs={600}
        className="flex h-full w-full items-center justify-center bg-Myll_gray600 text-gray-800"
      >
        <svg className="flex h-5 w-5 items-center justify-center">
          <User className="text-Myll_gray200" size={20} />
        </svg>
      </AvatarUI.Fallback>
    </AvatarUI.Root>
  )
}

Avatar.displayName = 'Avatar'
