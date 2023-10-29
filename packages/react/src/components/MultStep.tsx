import React from 'react'
import { Text } from './Text'

export interface MultStepProps extends React.HTMLProps<HTMLDivElement> {
  sizeMS: number
  currentStep?: number
}

export const MultStep = ({ sizeMS, currentStep = 1 }: MultStepProps) => {
  return (
    <div className="w-full">
      <Text sizeTxt="xs" variant="secondary">
        Passo {currentStep} de {sizeMS}
      </Text>
      <div
        style={{ '--steps-size': sizeMS } as React.CSSProperties}
        className={`mt-1 grid grid-cols-[repeat(var(--steps-size),_minmax(0,_1fr))] gap-2 `}
      >
        {Array.from({ length: sizeMS }, (_, i) => i + 1).map((step) => {
          return (
            <div
              key={step}
              data-active={currentStep >= step}
              className={
                'h-1 rounded-Myll_px bg-Myll_gray600 data-[active=true]:bg-Myll_gray100'
              }
            ></div>
          )
        })}
      </div>
    </div>
  )
}

MultStep.displayName = 'MultStep'
