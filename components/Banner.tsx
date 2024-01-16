import React from 'react'
import { IconType } from 'react-icons'
import {
  RiShakeHandsFill,
  RiLightbulbFill,
  RiCodeBoxFill,
  RiShieldCheckFill,
} from 'react-icons/ri'

const features = [
  {
    icon: RiShakeHandsFill,
    text: 'Understanding your vision',
  },
  {
    icon: RiLightbulbFill,
    text: 'Getting the ideas and planning',
  },
  {
    icon: RiCodeBoxFill,
    text: 'Building the product ',
  },
  {
    icon: RiShieldCheckFill,
    text: 'Delivering the solution you need',
  },
]
type IType = {
  is: IconType
  className: string
}
function Icon({ is, className }: IType) {
  const I = is
  return (
    <>
      <I className={className} />
    </>
  )
}

function Banner() {
  return (
    <div className='relative w-full my-32'>
      <div className='absolute inset-y-0 -z-10 min-w-screen -left-full -right-full bg-gradient-to-b from-mountain-meadow-50 to-transparent'></div>
      <div className='flex flex-col items-center justify-center py-12'>
        <div className='max-w-lg space-y-1 text-center sm:max-w-xl'>
          <h3 className='text-xs font-semibold tracking-wide uppercase sm:text-sm text-mountain-meadow-700'>
            creativity meets code
          </h3>
          <h2 className='text-2xl font-semibold sm:text-4xl text-gray-950'>
            Let&apos;s turn ideas into captivating web experiences
          </h2>
        </div>

        <ul className='grid content-between max-w-5xl grid-cols-2 gap-12 mt-16 lg:gap-0 lg:grid-cols-4'>
          {features.map((feature, index) => (
            <li
              key={index}
              className='flex flex-col items-center justify-start max-w-[200px]'
            >
              <Icon
                is={feature.icon}
                className='w-12 h-12 sm:w-16 sm:h-16 text-mountain-meadow-600'
              />
              <p className='text-sm font-medium text-center text-gray-600 sm:text-base'>
                {feature.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Banner
