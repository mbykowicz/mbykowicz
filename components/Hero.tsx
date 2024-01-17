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
    <div className='flex items-center mt-[calc(var(--navbar-height))] py-16 lg:py-32 '>
      <div className='grid w-full grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-0'>
        <div className='text-center lg:text-left'>
          <h3 className='uppercase font-semibold text-xs xs:text-sm sm:text-lg xl:text-[28px] tracking-wide bg-hero-text-gradient inline-block text-transparent bg-clip-text'>
            Fullstack Developer and UI Designer
          </h3>
          <h1 className='text-5xl font-bold tracking-tight text-gray-900 xs:text-6xl sm:text-8xl'>
            Crafting
            <br />
            Digital
            <br />
            Experiences
          </h1>
          <div className='items-center hidden gap-4 mt-8 lg:flex lg:mt-16'>
            <Image src={reactLogo} alt='ReactJS logo' className='' />
            <Image src={nextLogo} alt='NextJS logo' className='' />
            <Image src={laravelLogo} alt='Laravel logo' className='' />
            <Image src={tailwindLogo} alt='TailwindCSS logo' className='' />
          </div>
        </div>
        <div className='flex justify-center gap-20 mt-10 lg:justify-end lg:place-self-end'>
          <div className='space-y-20 '>
            <div className='space-y-4 lg:max-w-fit'>
              <p className='flex items-center justify-center gap-4 text-lg text-center text-gray-500 lg:text-left lg:justify-normal xl:text-2xl'>
                <ArrowDownRightIcon className='hidden w-6 h-6 lg:inline text-mountain-meadow-600' />
                See how I work on projects
              </p>
              <Button variant='secondary' className='block mx-auto lg:mx-0'>
                Learn more
              </Button>
            </div>
            <div className='space-y-4 lg:max-w-fit'>
              <p className='flex items-center justify-center gap-4 text-lg text-center text-gray-500 lg:text-left lg:justify-normal xl:text-2xl'>
                <ArrowDownRightIcon className='hidden w-6 h-6 lg:inline text-mountain-meadow-600' />
                Let&apos;s start your new project together
              </p>
              <Button className='block mx-auto lg:mx-0'>Contact me</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
