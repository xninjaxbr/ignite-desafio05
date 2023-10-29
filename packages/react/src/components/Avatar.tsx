import * as AvatarUI from '@radix-ui/react-avatar'
import { User } from 'phosphor-react'
import { ComponentProps } from 'react'

export type AvatarProps = ComponentProps<typeof AvatarUI.Image>

export function Avatar(props: AvatarProps) {
  return (
    <AvatarUI.Root className="inline-block h-16 w-16 overflow-hidden rounded-Myll_full">
      <AvatarUI.Image
        {...props}
        className="h-full w-full object-cover"
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
