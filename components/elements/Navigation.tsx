import Link from 'next/link'
import React from 'react'

function Navigation() {
  return (
    <header className='flex items-center justify-center w-screen py-3'>
      <nav className='flex items-center justify-center px-12 py-3 text-sm font-medium border border-gray-200 rounded-full shadow-md h-11'>
        <ul>
          <li>
            <Link href='' className='text-gray-700'>
              Menu Item
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation
