'use client'

import { useState } from 'react'
import {
  Dialog,
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

import Color from './color'
import Priceslide from './priceslide'

// Sorting and filter options
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
    id: 'Material',
    name: 'Material',
    options: [
      { value: 'Gold', label: 'Gold', checked: false },
      { value: 'Silver', label: 'Silver', checked: false },
      { value: 'Stainless Steel', label: 'Stainless Steel', checked: true },
    ],
  },
]

// Helper function to join class names
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

// Mobile Filters component
function MobileFilters({ mobileFiltersOpen, setMobileFiltersOpen }) {
  return (
    <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/25 dark:bg-black/50" aria-hidden="true" />

      <div className="fixed inset-0 z-40 flex">
        <Dialog.Panel className="ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white dark:bg-gray-800 pt-4 pb-6 shadow-xl">
          {/* Header */}
          <div className="flex items-center justify-between px-4">
            <h2 className="text-lg font-medium text-gray-900 dark:text-gray-200">Filters</h2>
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              className="relative -mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white dark:bg-gray-800 p-2 text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile Filter Form */}
          <form className="mt-4 border-t border-gray-200 dark:border-gray-700">
            {/* Categories */}
            <h3 className="sr-only">Categories</h3>
            <ul role="list" className="px-2 py-3 font-medium text-gray-900 dark:text-gray-200">
              {subCategories.map((category) => (
                <li key={category.name}>
                  <a href={category.href} className="block px-2 py-3 hover:text-indigo-600 dark:hover:text-indigo-400">{category.name}</a>
                </li>
              ))}
            </ul>

            {/* Price Filter */}
            <Disclosure as="div" className="border-t border-gray-200 dark:border-gray-700 px-4 py-6">
              {({ open }) => (
                <>
                  <h3 className="-mx-2 -my-3 flow-root">
                    <DisclosureButton className="group flex w-full items-center justify-between bg-white dark:bg-gray-800 px-2 py-3 text-gray-400 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-200">
                      <span className="font-medium text-gray-900 dark:text-gray-200">Price</span>
                      <span className="ml-6 flex items-center">
                        <PlusIcon className={`w-5 h-5 ${open ? 'hidden' : 'block'}`} />
                        <MinusIcon className={`w-5 h-5 ${open ? 'block' : 'hidden'}`} />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel className="pt-4">
                    <Priceslide />
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>

            {/* Color Filter */}
            <Disclosure as="div" className="border-t border-gray-200 dark:border-gray-700 px-4 py-6">
              {({ open }) => (
                <>
                  <h3 className="-mx-2 -my-3 flow-root">
                    <DisclosureButton className="group flex w-full items-center justify-between bg-white dark:bg-gray-800 px-2 py-3 text-gray-400 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-200">
                      <span className="font-medium text-gray-900 dark:text-gray-200">Color</span>
                      <span className="ml-6 flex items-center">
                        <PlusIcon className={`w-5 h-5 ${open ? 'hidden' : 'block'}`} />
                        <MinusIcon className={`w-5 h-5 ${open ? 'block' : 'hidden'}`} />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel className="pt-4">
                    <Color />
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>

            {/* Other Filters */}
            {filters.map((section) => (
              <Disclosure key={section.id} as="div" className="border-t border-gray-200 dark:border-gray-700 px-4 py-6">
                <h3 className="-mx-2 -my-3 flow-root">
                  <DisclosureButton className="group flex w-full items-center justify-between bg-white dark:bg-gray-800 px-2 py-3 text-gray-400 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-200">
                    <span className="font-medium text-gray-900 dark:text-gray-200">{section.name}</span>
                    <span className="ml-6 flex items-center">
                      <PlusIcon className="w-5 h-5 group-data-open:hidden" />
                      <MinusIcon className="w-5 h-5 group-not-data-open:hidden" />
                    </span>
                  </DisclosureButton>
                </h3>
                <DisclosurePanel className="pt-6">
                  <div className="space-y-6">
                    {section.options.map((option, optionIdx) => (
                      <div key={option.value} className="flex gap-3">
                        <input
                          defaultValue={option.value}
                          defaultChecked={option.checked}
                          id={`filter-mobile-${section.id}-${optionIdx}`}
                          name={`${section.id}[]`}
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-500 dark:checked:bg-indigo-500"
                        />
                        <label htmlFor={`filter-mobile-${section.id}-${optionIdx}`} className="text-gray-500 dark:text-gray-300">
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

// Main Component
export default function Example() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Mobile Filters */}
      <MobileFilters mobileFiltersOpen={mobileFiltersOpen} setMobileFiltersOpen={setMobileFiltersOpen} />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-baseline justify-between border-b border-gray-200 dark:border-gray-700 pt-24 pb-6">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-200">New Arrivals</h1>

          <div className="flex items-center">
            {/* Sort Menu */}
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

            {/* Grid Button */}
            <button type="button" className="-m-2 ml-5 p-2 text-gray-400 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-200 sm:ml-7">
              <span className="sr-only">View grid</span>
              <Squares2X2Icon className="w-5 h-5" aria-hidden="true" />
            </button>

            {/* Mobile Filters Button */}
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="-m-2 ml-4 p-2 text-gray-400 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-200 lg:hidden"
            >
              <span className="sr-only">Filters</span>
              <FunnelIcon className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Product Section */}
        <section aria-labelledby="products-heading" className="pt-6 pb-24">
          <h2 id="products-heading" className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            {/* Desktop Filters */}
            <form className="hidden lg:block">
              {/* Categories */}
              <h3 className="sr-only">Categories</h3>
              <ul className="space-y-4 border-b border-gray-200 dark:border-gray-700 pb-6 text-sm font-medium text-gray-900 dark:text-gray-200">
                {subCategories.map((category) => (
                  <li key={category.name}>
                    <a href={category.href} className="hover:text-indigo-600 dark:hover:text-indigo-400">{category.name}</a>
                  </li>
                ))}
              </ul>

              {/* Price Filter */}
              <Disclosure as="div" className="border-b border-gray-200 dark:border-gray-700 py-6">
                {({ open }) => (
                  <>
                    <h3 className="-my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white dark:bg-gray-800 py-3 text-sm text-gray-400 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-200">
                        <span className="font-medium text-gray-900 dark:text-gray-200">Price</span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon className={`w-5 h-5 ${open ? 'hidden' : 'block'}`} />
                          <MinusIcon className={`w-5 h-5 ${open ? 'block' : 'hidden'}`} />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-4">
                      <Priceslide />
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>

              {/* Color Filter */}
              <Disclosure as="div" className="border-b border-gray-200 dark:border-gray-700 py-6">
                {({ open }) => (
                  <>
                    <h3 className="-my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white dark:bg-gray-800 py-3 text-sm text-gray-400 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-200">
                        <span className="font-medium text-gray-900 dark:text-gray-200">Color</span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon className={`w-5 h-5 ${open ? 'hidden' : 'block'}`} />
                          <MinusIcon className={`w-5 h-5 ${open ? 'block' : 'hidden'}`} />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-4">
                      <Color />
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>

              {/* Other Filters */}
              {filters.map((section) => (
                <Disclosure key={section.id} as="div" className="border-b border-gray-200 dark:border-gray-700 py-6">
                  <h3 className="-my-3 flow-root">
                    <DisclosureButton className="group flex w-full items-center justify-between bg-white dark:bg-gray-800 py-3 text-sm text-gray-400 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-200">
                      <span className="font-medium text-gray-900 dark:text-gray-200">{section.name}</span>
                      <span className="ml-6 flex items-center">
                        <PlusIcon className="w-5 h-5 group-data-open:hidden" />
                        <MinusIcon className="w-5 h-5 group-not-data-open:hidden" />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel className="pt-6">
                    <div className="space-y-4">
                      {section.options.map((option, optionIdx) => (
                        <div key={option.value} className="flex gap-3">
                          <input
                            defaultValue={option.value}
                            defaultChecked={option.checked}
                            id={`filter-${section.id}-${optionIdx}`}
                            name={`${section.id}[]`}
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-500 dark:checked:bg-indigo-500"
                          />
                          <label htmlFor={`filter-${section.id}-${optionIdx}`} className="text-sm text-gray-600 dark:text-gray-300">
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </form>

            {/* Product Grid */}
            <div className="lg:col-span-3">{/* Render your products here */}</div>
          </div>
        </section>
      </main>
    </div>
  )
}
