'use client'

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { classNames, sortOptions } from './data'

export default function SortMenu() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-200">
        Sort
        <ChevronDownIcon className="-mr-1 ml-1 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-200" aria-hidden="true" />
      </MenuButton>

      <MenuItems className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white dark:bg-gray-800 shadow-2xl ring-1 ring-black/5">
        {sortOptions.map((option) => (
          <MenuItem key={option.name}>
            <a
              href={option.href}
              className={classNames(
                option.current ? 'font-medium text-gray-900 dark:text-gray-200' : 'text-gray-500 dark:text-gray-300',
                'block px-4 py-2 text-sm'
              )}
            >
              {option.name}
            </a>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  )
}
