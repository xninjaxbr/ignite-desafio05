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







// import type { StoryObj, Meta } from '@storybook/react'
// import { Button, ButtonProps } from '@mll-ui/react'

// export default {
//   title: 'Form/Button',
//   component: Button,
//   args: {
//     children: 'Send',
//     size: 'md',
//     disabled: false,
//     variant: 'primary'
//   },
//   argTypes: {
//     size: {
//       options: ['sm', 'md'],
//       control: {
//         type: 'inline-radio',
//       },
//     },
//     variant: {
//       options: ['primary', 'secondary', 'tertiary'],
//       control: {
//         type: 'inline-radio',
//       },
//     },
//     disabled: {
//       control: {
//         type: 'boolean',
//       },
//     },
//     onClick: {
//       action: 'click',
//     },
//   },
// } as Meta<ButtonProps>

// export const Primary: StoryObj<ButtonProps> = {}

// export const Secondary: StoryObj<ButtonProps> = {
//   args: {
//     variant: 'secondary',
//     children: 'Create new',
//   },
// }

// export const Small: StoryObj<ButtonProps> = {
//   args: {
//     size: 'sm',
//   },
// }

// export const Disabled: StoryObj<ButtonProps> = {
//   args: {
//     disabled: true,
//   },
// }



// react


// import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
// import { twMerge } from 'tailwind-merge'

// /**
//  * Primary UI component for user interaction
//  */
// export interface ButtonProps
//   extends DetailedHTMLProps<
//     ButtonHTMLAttributes<HTMLButtonElement>,
//     HTMLButtonElement
//   > {
//   size?: 'sm' | 'md'
//   variant?: 'primary' | 'secondary' | 'tertiary'
// }

// export const Button = ({
//   className,
//   size = 'sm',
//   variant = 'primary',
//   ...rest
// }: ButtonProps) => {
//   console.log(variant)
//   return (
//     <button
//       className={twMerge(
//         'flex items-center justify-center  rounded-full px-4  py-2 text-3xl',
//         className,
//         size === 'sm' ? 'h-9' : 'h-12',
//         variant === 'primary' && 'bg-ignite300 text-slate-100',
//         variant === 'secondary' && 'bg-red-500 text-black',
//         variant === 'tertiary' && 'bg-orange-500 text-green-400',
//       )}
//       {...rest}
//     />
//   )
// }
