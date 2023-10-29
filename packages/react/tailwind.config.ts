import { Config } from 'tailwindcss'
import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from '@mll-ui/tokens'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        Myll_white: colors.white,
        Myll_black: colors.black,

        Myll_gray100: colors.gray100,
        Myll_gray200: colors.gray200,
        Myll_gray400: colors.gray400,
        Myll_gray500: colors.gray500,
        Myll_gray600: colors.gray600,
        Myll_gray700: colors.gray700,
        Myll_gray800: colors.gray800,
        Myll_gray900: colors.gray900,

        Myll_ignite300: colors.ignite300,
        Myll_ignite500: colors.ignite500,
        Myll_ignite700: colors.ignite700,
        Myll_ignite900: colors.ignite900,
      },
      fontSize: {
        Myll_xxs: fontSizes.xxs,
        Myll_xs: fontSizes.xs,
        Myll_sm: fontSizes.sm,
        Myll_md: fontSizes.md,
        Myll_lg: fontSizes.lg,
        Myll_xl: fontSizes.xl,
        Myll_2xl: fontSizes['2xl'],
        Myll_5xl: fontSizes['5xl'],
        Myll_4xl: fontSizes['4xl'],
        Myll_6xl: fontSizes['6xl'],
        Myll_7xl: fontSizes['7xl'],
        Myll_8xl: fontSizes['8xl'],
        Myll_9xl: fontSizes['9xl'],
      },
      fontWeight: {
        Myll_regular: fontWeights.regular,
        Myll_medium: fontWeights.medium,
        Myll_bold: fontWeights.bold,
      },
      fontFamily: {
        Myll_default: fonts.default,
        Myll_mono: fonts.code,
      },
      lineHeight: {
        Myll_shorter: lineHeights.shorter,
        Myll_short: lineHeights.short,
        Myll_base: lineHeights.base,
        Myll_tall: lineHeights.tall,
      },
      borderRadius: {
        Myll_px: radii.px,
        Myll_xs: radii.xs,
        Myll_sm: radii.sm,
        Myll_md: radii.md,
        Myll_lg: radii.lg,
        Myll_full: radii.full,
      },
      space: {
        Myll_1: space[1],
        Myll_2: space[2],
        Myll_3: space[3],
        Myll_4: space[4],
        Myll_5: space[5],
        Myll_6: space[6],
        Myll_7: space[7],
        Myll_8: space[8],
        Myll_10: space[10],
        Myll_12: space[12],
        Myll_16: space[16],
        Myll_20: space[20],
        Myll_40: space[40],
        Myll_64: space[64],
        Myll_80: space[80],
      },
      boxShadow: {
        Myll_focus: `0 0 0 2px ${colors.gray100}`,
      },
      keyframes: {
        hide: {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        slideIn: {
          from: {
            transform: 'translateX(calc(100% + var(--viewport-padding)))',
          },
          to: { transform: 'translateX(0)' },
        },
        swipeOut: {
          from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
          to: { transform: 'translateX(calc(100% + var(--viewport-padding)))' },
        },
      },
      animation: {
        hide: 'hide 100ms ease-in',
        slideIn: 'slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        swipeOut: 'swipeOut 100ms ease-out',
      },
    },
  },
  plugins: [],
} satisfies Config
