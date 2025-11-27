// Full rewrite with detailed comments, integrated Color component, and Category slider

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
import Color from './' // New color picker component

// Sort options for dropdown
const sortOptions = [
  { name: 'Most Popular', current: true },
  { name: 'Best Rating', current: false },
  { name: 'Newest', current: false },
  { name: 'Price: Low to High', current: false },
  { name: 'Price: High to Low', current: false },
]

// Subcategories turned into SLIDER data
const subCategories = [
  { name: 'Watches' },
  { name: 'Bags' },
  { name: 'Bracelet' },
  { name: 'Rings' },
]

// Filters for sidebar & mobile drawer
const filters = [
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

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  return (
    <div className="bg-white">
      {/* Mobile filter dialog */}
      <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop className="fixed inset-0 bg-black/25" />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel className="ml-auto h-full w-full max-w-xs overflow-y-auto bg-white p-6 shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <XMarkIcon className="size-6 text-gray-600" />
              </button>
            </div>

            {/* Category slider */}
            <div className="mt-6 overflow-x-auto whitespace-nowrap flex gap-4">
              {subCategories.map((cat) => (
                <span key={cat.name} className="px-4 py-2 bg-gray-100 rounded-full text-sm">
                  {cat.name}
                </span>
              ))}
            </div>

            {/* Filters */}
            {filters.map((section) => (
              <Disclosure key={section.id} className="border-t pt-4 mt-4">
                <DisclosureButton className="flex justify-between w-full">
                  <span className="font-medium">{section.name}</span>
                  <PlusIcon className="size-5 group-data-open:hidden" />
                  <MinusIcon className="size-5 group-not-data-open:hidden" />
                </DisclosureButton>
                <DisclosurePanel className="mt-3 space-y-3">
                  {section.options.map((option, i) => (
                    <label key={i} className="flex gap-2 text-gray-600">
                      <input type="checkbox" defaultChecked={option.checked} />
                      {option.label}
                    </label>
                  ))}
                </DisclosurePanel>
              </Disclosure>
            ))}

            {/* Color component */}
            <Color />
          </DialogPanel>
        </div>
      </Dialog>

      {/* MAIN PAGE */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between border-b pt-24 pb-6">
          <h1 className="text-4xl font-bold">New Arrivals</h1>

          {/* Sort dropdown */}
          <Menu as="div" className="relative inline-block text-left">
            <MenuButton className="inline-flex text-sm">
              Sort
              <ChevronDownIcon className="ml-1 size-5 text-gray-500" />
            </MenuButton>
            <MenuItems className="absolute right-0 mt-2 w-40 bg-white shadow-xl p-2 rounded-md">
              {sortOptions.map((option) => (
                <MenuItem key={option.name}>
                  <button className="block w-full text-left px-2 py-1 text-sm text-gray-700">
                    {option.name}
                  </button>
                </MenuItem>
              ))}
            </MenuItems>
          </Menu>

          {/* Mobile Filters Button */}
          <button onClick={() => setMobileFiltersOpen(true)} className="lg:hidden ml-4 text-gray-500">
            <FunnelIcon className="size-5" />
          </button>
        </div>

        <section className="pt-6 pb-24 grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block">
            <div className="flex gap-3 overflow-x-auto px-1 py-3 whitespace-nowrap">
              {subCategories.map((cat) => (
                <span key={cat.name} className="px-4 py-2 bg-gray-100 rounded-full text-sm">
                  {cat.name}
                </span>
              ))}
            </div>

            {filters.map((section) => (
              <Disclosure key={section.id} className="border-t py-4">
                <DisclosureButton className="flex justify-between w-full">
                  <span className="font-medium">{section.name}</span>
                  <PlusIcon className="size-5 group-data-open:hidden" />
                  <MinusIcon className="size-5 group-not-data-open:hidden" />
                </DisclosureButton>
                <DisclosurePanel className="mt-3 space-y-3">
                  {section.options.map((option, i) => (
                    <label key={i} className="flex gap-2 text-gray-700 text-sm">
                      <input type="checkbox" defaultChecked={option.checked} />
                      {option.label}
                    </label>
                  ))}
                </DisclosurePanel>
              </Disclosure>
            ))}

            {/* Color selector desktop */}
            <Color />
          </aside>

          {/* Product grid placeholder */}
          <div className="lg:col-span-3">Products...</div>
        </section>
      </main>
    </div>
  )
}
