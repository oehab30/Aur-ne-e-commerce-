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

// Sorting dropdown options
const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]

// Sub-category links for sidebar + mobile
const subCategories = [
  { name: 'Watches', href: '#' },
  { name: 'Bags', href: '#' },
  { name: 'Bracelet', href: '#' },
  { name: 'Rings', href: '#' },
]

// Filters for sidebar
const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { id: 'white', name: 'White', classes: 'bg-white border-gray-300' },
      { id: 'gray', name: 'Gray', classes: 'bg-gray-400 border-gray-300' },
      { id: 'black', name: 'Black', classes: 'bg-black border-gray-300' },
      { id: 'purple', name: 'Purple', classes: 'bg-purple-600 border-gray-300' },
      { id: 'blue', name: 'Blue', classes: 'bg-blue-500 border-gray-300' },
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
    id: 'material',
    name: 'Material',
    options: [
      { value: 'Leather', label: 'Leather', checked: false },
      { value: 'Canvas', label: 'Canvas', checked: false },
      { value: 'Suede', label: 'Suede', checked: false },
    ],
  },
]

// Utility for conditional classes
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  return (
    <div className="bg-white">
      <div>
        {/* MOBILE FILTER DRAWER */}
        <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
          <DialogBackdrop className="fixed inset-0 bg-black/25" />
          <div className="fixed inset-0 z-40 flex">
            <DialogPanel className="ml-auto flex w-full max-w-xs flex-col overflow-y-auto bg-white pt-4 pb-6 shadow-xl">
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="p-2 text-gray-400 hover:bg-gray-50 rounded-md"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>

              <form className="mt-4 border-t border-gray-200">
                {/* Subcategories */}
                <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href} className="block px-2 py-3">
                        {category.name}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Filters */}
                {filters.map((section) => (
                  <Disclosure key={section.id} as="div" className="border-t border-gray-200 px-4 py-6">
                    <h3 className="-mx-2 -my-3 flow-root">
                      <DisclosureButton className="flex w-full items-center justify-between px-2 py-3 text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">{section.name}</span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon className="w-5 h-5" />
                          <MinusIcon className="w-5 h-5" />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="flex flex-wrap gap-3">
                        {section.options.map((option, idx) => (
                          <label key={option.id || option.value} className="flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only"
                              name={`${section.id}[]`}
                              defaultValue={option.id || option.value}
                              defaultChecked={option.checked}
                            />
                            <span
                              className={classNames(
                                'w-6 h-6 rounded-full border-2 flex-shrink-0',
                                option.classes
                              )}
                            />
                            {option.name || option.label ? (
                              <span className="ml-2 text-gray-500">{option.name || option.label}</span>
                            ) : null}
                          </label>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>
            </DialogPanel>
          </div>
        </Dialog>

        {/* MAIN DESKTOP LAYOUT */}
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b pt-24 pb-6">
            <h1 className="text-4xl font-bold text-gray-900">New Arrivals</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <MenuButton className="inline-flex text-sm text-gray-700 hover:text-gray-900">
                  Sort
                  <ChevronDownIcon className="ml-1 w-5 h-5 text-gray-400 group-hover:text-gray-500" />
                </MenuButton>
                <MenuItems className="absolute right-0 mt-2 w-40 rounded-md bg-white shadow-2xl ring-1 ring-black/5">
                  <div className="py-1">
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
                  </div>
                </MenuItems>
              </Menu>

              <button className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500">
                <Squares2X2Icon className="w-5 h-5" />
              </button>

              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 lg:hidden"
              >
                <FunnelIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          <section className="pt-6 pb-24">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* DESKTOP FILTER SIDEBAR */}
              <form className="hidden lg:block">
                <ul className="space-y-4 border-b pb-6 text-sm font-medium text-gray-900">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href}>{category.name}</a>
                    </li>
                  ))}
                </ul>

                {filters.map((section) => (
                  <Disclosure key={section.id} as="div" className="border-b py-6">
                    <h3 className="-my-3 flow-root">
                      <DisclosureButton className="flex w-full items-center justify-between py-3 text-sm text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">{section.name}</span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon className="w-5 h-5" />
                          <MinusIcon className="w-5 h-5" />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="flex flex-wrap gap-3">
                        {section.options.map((option, idx) => (
                          <label key={option.id || option.value} className="flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only"
                              name={`${section.id}[]`}
                              defaultValue={option.id || option.value}
                              defaultChecked={option.checked}
                            />
                            <span
                              className={classNames(
                                'w-6 h-6 rounded-full border-2 flex-shrink-0',
                                option.classes
                              )}
                            />
                            {option.name || option.label ? (
                              <span className="ml-2 text-gray-600">{option.name || option.label}</span>
                            ) : null}
                          </label>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>

              {/* PRODUCT GRID */}
              <div className="lg:col-span-3">{/* Product content here */}</div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
