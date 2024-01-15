'use client'

import React from 'react'
import Image from 'next/image'

import avatarImage from '../public/avatar.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import HomeIcon from './icons/HomeIcon'
import FileDownloadIcon from './icons/FileDownloadIcon'

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

  return (
    <header className='flex items-center justify-between w-full h-[var(--navbar-height)] mt-[var(--navbar-top-margin)]'>
      <Link href='/'>
        <div className='overflow-hidden border rounded-full shadow-md shadow-gray-100 w-14 h-14 ring-4 ring-gray-100'>
          <Image src={avatarImage} alt='Picture of myself' />
        </div>
      </Link>

      <nav>
        <ul className='flex items-center h-12 gap-10 px-12 border rounded-full shadow-md shadow-gray-100'>
          {items.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className={`text-sm font-medium py-3 px-2 border-b-2 transition ${
                  pathname === item.href
                    ? 'text-gray-900  border-mountain-meadow-600'
                    : 'text-gray-600 border-transparent'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Link href='/'>
        <div className='flex items-center justify-center h-10 gap-1 px-6 overflow-hidden border rounded-full shadow-md shadow-gray-100 ring-4 ring-gray-100'>
          <FileDownloadIcon className='w-4 h-4 text-mountain-meadow-600' />
          <span className='text-[11px] font-semibold text-gray-600'>
            Download CV
          </span>
        </div>
      </Link>
    </header>
  )
}

export default NavBar
