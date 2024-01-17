'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import avatarImage from '../public/avatar.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { RiMenuFill, RiFileDownloadFill } from 'react-icons/ri'

const items = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Services',
    href: '/services',
  },
  {
    label: 'Projects',
    href: '/projects',
  },
  {
    label: 'About me',
    href: '/about',
  },
]

function NavBar() {
  const pathname = usePathname()

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (typeof window != 'undefined' && window.document) {
      document.body.style.overflow = isOpen ? 'hidden' : 'unset'
    }
  }, [isOpen])

  return (
    <header className='fixed inset-0 h-[var(--navbar-height)] mt-[var(--navbar-top-margin)]'>
      <div className='flex items-center justify-between container max-w-7xl mx-auto xl:px-0 px-6'>
        <Link href='/'>
          <div className='overflow-hidden border rounded-full w-14 h-14 ring-4 ring-gray-100'>
            <Image src={avatarImage} alt='Picture of myself' />
          </div>
        </Link>
        <nav
          className={`fixed inset-y-0 right-0 z-40 w-4/5 sm:w-3/5 px-12 py-12 bg-white/80 backdrop-blur-lg border shadow-md space-y-12 lg:static lg:py-0 lg:w-auto lg:rounded-full shadow-gray-950/5 transition-all lg:translate-x-0 ${
            isOpen
              ? 'translate-x-0 [--body-scroll:hidden;]'
              : 'translate-x-full'
          }`}
        >
          <ul className='flex flex-col items-center gap-10 lg:flex-row lg:h-12'>
            {items.map((item, index) => (
              <li key={index} className='w-full lg:w-auto'>
                <Link
                  href={item.href}
                  className={`text-sm font-medium text-center py-3 px-2 border-b-2 transition block ${
                    pathname === item.href
                      ? 'text-gray-900 border-transparent lg:border-mountain-meadow-600'
                      : 'text-gray-600 border-transparent'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className='border-t lg:hidden'>
            <li>
              <Link
                href='/'
                className='flex items-center justify-center gap-2 py-10'
              >
                <RiFileDownloadFill className='w-4 h-4 text-mountain-meadow-600' />
                <span className='text-sm font-medium text-gray-600'>
                  Download CV
                </span>
              </Link>
            </li>
          </ul>
        </nav>
        <Link href='/' className='hidden lg:block'>
          <div className='flex items-center justify-center h-10 gap-1 px-6 overflow-hidden border rounded-full shadow-md shadow-gray-100 ring-4 ring-gray-100'>
            <RiFileDownloadFill className='w-4 h-4 text-mountain-meadow-600' />
            <span className='text-[11px] font-semibold text-gray-600'>
              Download CV
            </span>
          </div>
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='relative z-50 grid border border-gray-200 bg-white/80 backdrop-blur-lg rounded-full place-content-center ring-4 ring-gray-100 w-14 h-14 lg:hidden'
        >
          <RiMenuFill className='w-6 h-6 text-gray-600' />
        </button>
      </div>
    </header>
  )
}

export default NavBar
