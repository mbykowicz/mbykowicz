import React from 'react'
import Image from 'next/image'
import reactLogo from '@/public/react.svg'
import nextLogo from '@/public/next.svg'
import laravelLogo from '@/public/laravel.svg'
import tailwindLogo from '@/public/tailwind.svg'
import Button from './ui/Button'
import ArrowDownRightIcon from './icons/ArrowDownRightIcon'

function Hero() {
  return (
    <div className='flex items-center h-[calc(100vh-var(--navbar-height)-var(--navbar-top-margin))] bg-hero-bg-image bg-cover'>
      <div className='flex items-end w-full'>
        <div className='flex-1'>
          <h3 className='uppercase font-semibold text-[28px] tracking-wide bg-hero-text-gradient inline-block text-transparent bg-clip-text'>
            Fullstack Developer and UI Designer
          </h3>
          <h1 className='font-bold tracking-tight text-gray-900 text-8xl'>
            Crafting
            <br />
            Digital
            <br />
            Experiences
          </h1>
          <div className='flex items-center gap-10 mt-16'>
            <Image src={reactLogo} alt='ReactJS logo' />
            <Image src={nextLogo} alt='NextJS logo' />
            <Image src={laravelLogo} alt='Laravel logo' />
            <Image src={tailwindLogo} alt='TailwindCSS logo' />
          </div>
        </div>
        <div className='flex justify-end flex-1 gap-20'>
          <div className='space-y-20'>
            <div className='space-y-4 max-w-fit'>
              <p className='flex items-center gap-4 text-2xl text-gray-500'>
                <ArrowDownRightIcon className='w-6 h-6 text-mountain-meadow-600' />
                See how I work on projects
              </p>
              <Button variant='secondary'>Learn more</Button>
            </div>
            <div className='space-y-4 max-w-fit'>
              <p className='flex items-center gap-4 text-2xl text-gray-500'>
                <ArrowDownRightIcon className='w-6 h-6 text-mountain-meadow-600' />
                Let&apos;s start your new project together
              </p>
              <Button>Contact me</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
