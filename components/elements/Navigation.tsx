import { MenuItem } from '@/types'
import { getMenuItems } from '@/sanity/queries/getMenu'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { headers } from 'next/headers'
import LanguageSwitch from './LanguageSwitch'

async function Navigation() {
  const currentRoute = headers().get('next-url')
  const items: MenuItem[] = await getMenuItems()

  return (
    <header className='flex items-center justify-between w-screen px-12 py-3'>
      <Avatar>
        <AvatarImage src='/me.jpg' alt='Mateusz Bykowicz' />
      </Avatar>
      <nav className='px-12 py-3 text-sm border border-gray-200 rounded-full shadow-md h-11'>
        <ul className='flex items-center justify-center gap-12'>
          {items.map((item) => (
            <li key={item._key}>
              <Link
                href={item.path}
                className={cn(
                  'relative transition text-gray-500 hover:text-gray-900 group',
                  currentRoute === item.path && 'text-gray-900 font-medium',
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <LanguageSwitch />
    </header>
  )
}

export default Navigation
