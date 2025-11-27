'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]

const subCategories = [
  { name: 'Totes', href: '#' },
  { name: 'Backpacks', href: '#' },
  { name: 'Travel Bags', href: '#' },
  { name: 'Hip Bags', href: '#' },
  { name: 'Laptop Sleeves', href: '#' },
]

const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: true },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
    ],
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'New Arrivals', checked: false },
      { value: 'sale', label: 'Sale', checked: false },
      { value: 'travel', label: 'Travel', checked: true },
      { value: 'organization', label: 'Organization', checked: false },
      { value: 'accessories', label: 'Accessories', checked: false },
    ],
  },
  {
    id: 'size',
    name: 'Size',
    options: [
      { value: '2l', label: '2L', checked: false },
      { value: '6l', label: '6L', checked: false },
      { value: '12l', label: '12L', checked: false },
      { value: '18l', label: '18L', checked: false },
      { value: '20l', label: '20L', checked: false },
      { value: '40l', label: '40L', checked: true },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  return (
    <div className="bg-white">
      {/* Mobile Filters */}
      <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop className="fixed inset-0 bg-black/25 transition-opacity" />
        <div className="fixed inset-0 flex">
          <DialogPanel className="ml-auto max-w-xs w-full flex flex-col bg-white pt-4 pb-6 shadow-xl">
            <div className="flex items-center justify-between px-4">
              <h2 className="text-lg font-medium text-gray-900">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            <form className="mt-4 border-t border-gray-200">
              <ul className="px-2 py-3 font-medium text-gray-900">
                {subCategories.map((category) => (
                  <li key={category.name}>
                    <a href={category.href} className="block px-2 py-3">
                      {category.name}
                    </a>
                  </li>
                ))}
              </ul>

              {filters.map((section) => (
                <Disclosure key={section.id} as="div" className="border-t border-gray-200 px-4 py-6">
                  <h3>
                    <DisclosureButton className="flex w-full justify-between text-gray-900 font-medium py-3 hover:text-gray-500">
                      {section.name}
                      <span className="ml-6 flex items-center">
                        <PlusIcon className="w-5 h-5 group-data-open:hidden" />
                        <MinusIcon className="w-5 h-5 group-not-data-open:hidden" />
                      </span>
                    </DisclosureButton>
                  </h3>

                  <DisclosurePanel className="pt-6 flex flex-wrap gap-3">
                    {section.id === 'color'
                      ? section.options.map((option) => (
                          <span
                            key={option.value}
                            className={`h-6 w-6 rounded-full border cursor-pointer`}
                            style={{ backgroundColor: option.value }}
                          />
                        ))
                      : section.options.map((option, idx) => (
                          <label key={option.value} className="flex items-center gap-2 text-gray-600">
                            <input
                              type="checkbox"
                              defaultValue={option.value}
                              defaultChecked={option.checked}
                              className="h-4 w-4 border-gray-300 rounded"
                            />
                            {option.label}
                          </label>
                        ))}
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </form>
          </DialogPanel>
        </div>
      </Dialog>

      {/* Main content */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
          <h1 className="text-4xl font-bold text-gray-900">New Arrivals</h1>

          <div className="flex items-center">
            {/* Sort Menu */}
            <Menu as="div" className="relative inline-block text-left">
              <MenuButton className="inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                Sort
                <ChevronDownIcon className="-mr-1 ml-1 w-5 h-5 text-gray-400 group-hover:text-gray-500" />
              </MenuButton>

              <MenuItems className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg ring-1 ring-black/5">
                {sortOptions.map((option) => (
                  <MenuItem key={option.name}>
                    <a
                      href={option.href}
                      className={classNames(
                        option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      {option.name}
                    </a>
                  </MenuItem>
                ))}
              </MenuItems>
            </Menu>

            {/* View and Filter buttons */}
            <button className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
              <span className="sr-only">View grid</span>
              <Squares2X2Icon className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
            >
              <span className="sr-only">Filters</span>
              <FunnelIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Products Section */}
        <section className="pt-6 pb-24">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            {/* Desktop Filters */}
            <form className="hidden lg:block">
              <ul className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                {subCategories.map((category) => (
                  <li key={category.name}>
                    <a href={category.href}>{category.name}</a>
                  </li>
                ))}
              </ul>

              {filters.map((section) => (
                <Disclosure key={section.id} className="border-b border-gray-200 py-6">
                  <DisclosureButton className="flex w-full justify-between text-gray-900 font-medium py-3 text-sm hover:text-gray-500">
                    {section.name}
                    <span className="ml-6 flex items-center">
                      <PlusIcon className="w-5 h-5 group-data-open:hidden" />
                      <MinusIcon className="w-5 h-5 group-not-data-open:hidden" />
                    </span>
                  </DisclosureButton>

                  <DisclosurePanel className="pt-4 flex flex-wrap gap-3">
                    {section.id === 'color'
                      ? section.options.map((option) => (
                          <span
                            key={option.value}
                            className={`h-6 w-6 rounded-full border cursor-pointer`}
                            style={{ backgroundColor: option.value }}
                          />
                        ))
                      : section.options.map((option, idx) => (
                          <label key={option.value} className="flex items-center gap-2 text-gray-600">
                            <input
                              type="checkbox"
                              defaultValue={option.value}
                              defaultChecked={option.checked}
                              className="h-4 w-4 border-gray-300 rounded"
                            />
                            {option.label}
                          </label>
                        ))}
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </form>

            {/* Product Grid */}
            <div className="lg:col-span-3">{/* Your product content goes here */}</div>
          </div>
        </section>
      </main>
    </div>
  )
}
