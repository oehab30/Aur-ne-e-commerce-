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

// Sort options for dropdown menu
const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]

// Subcategories for product types
const subCategories = [
  { name: 'Watches', href: '#' },
  { name: 'Bags', href: '#' },
  { name: 'Bracelet', href: '#' },
  { name: 'Rings', href: '#' },
]

// Filters: color, category, and material
const filters = [
  {
    id: 'color',
    name: 'Color',
    // Color options rendered as swatches
    options: [
      { id: 'white', name: 'White', classes: 'bg-white checked:outline-gray-400' },
      { id: 'gray', name: 'Gray', classes: 'bg-gray-200 checked:outline-gray-400' },
      { id: 'black', name: 'Black', classes: 'bg-[var(--main)] checked:outline-gray-900' },
      { id: 'purple', name: 'Purple', classes: 'bg-purple-600 checked:outline-gray-900' },
      { id: 'blue', name: 'Blue', classes: 'bg-blue checked:outline-gray-900' },
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

// Helper function to combine class names
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  return (
    <div className="bg-white">
      {/* MOBILE FILTER DIALOG */}
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

            {/* Subcategories as links */}
            <ul className="mt-4 px-2 py-3 font-medium text-gray-900">
              {subCategories.map((category) => (
                <li key={category.name}>
                  <a href={category.href} className="block px-2 py-3">{category.name}</a>
                </li>
              ))}
            </ul>

            {/* Filters rendered as Disclosure panels */}
            {filters.map((section) => (
              <Disclosure key={section.id} as="div" className="border-t border-gray-200 px-4 py-6">
                <DisclosureButton className="flex w-full justify-between text-gray-400 hover:text-gray-500">
                  <span className="font-medium text-gray-900">{section.name}</span>
                  <span className="ml-6 flex items-center">
                    <PlusIcon className="size-5 group-data-open:hidden" />
                    <MinusIcon className="size-5 group-not-data-open:hidden" />
                  </span>
                </DisclosureButton>

                <DisclosurePanel className="pt-6">
                  <div className="space-y-4">
                    {/* Render color swatches if this is the color filter */}
                    {section.id === 'color' ? (
                      <div className="flex gap-2 flex-wrap">
                        {section.options.map((color) => (
                          <label key={color.id} className="relative cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only"
                              name="color[]"
                              value={color.id}
                            />
                            <span
                              className={`${color.classes} h-6 w-6 inline-block rounded-full border border-gray-300`}
                              title={color.name}
                            />
                          </label>
                        ))}
                      </div>
                    ) : (
                      // Normal checkbox options for other filters
                      section.options.map((option, optionIdx) => (
                        <div key={option.value} className="flex gap-3 items-center">
                          <input
                            type="checkbox"
                            defaultChecked={option.checked}
                            id={`filter-${section.id}-${optionIdx}`}
                            name={`${section.id}[]`}
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label htmlFor={`filter-${section.id}-${optionIdx}`} className="text-sm text-gray-600">
                            {option.label}
                          </label>
                        </div>
                      ))
                    )}
                  </div>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </DialogPanel>
        </div>
      </Dialog>

      {/* MAIN PAGE */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header and sort/filter controls */}
        <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
          <h1 className="text-4xl font-bold text-gray-900">New Arrivals</h1>

          {/* Sort dropdown */}
          <Menu as="div" className="relative inline-block text-left">
            <MenuButton className="inline-flex text-sm">
              Sort
              <ChevronDownIcon className="ml-1 size-5 text-gray-500" />
            </MenuButton>
            <MenuItems className="absolute right-0 mt-2 w-40 bg-white shadow-xl p-2 rounded-md">
              {sortOptions.map((option) => (
                <MenuItem key={option.name}>
                  <button className="block w-full text-left px-2 py-1 text-sm text-gray-700">{option.name}</button>
                </MenuItem>
              ))}
            </MenuItems>
          </Menu>

          {/* Mobile filters button */}
          <button onClick={() => setMobileFiltersOpen(true)} className="lg:hidden ml-4 text-gray-500">
            <FunnelIcon className="size-5" />
          </button>
        </div>

        {/* Products section */}
        <section className="pt-6 pb-24 grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* DESKTOP FILTERS */}
          <aside className="hidden lg:block">
            {/* Subcategories */}
            <div className="flex gap-3 overflow-x-auto px-1 py-3 whitespace-nowrap">
              {subCategories.map((cat) => (
                <span key={cat.name} className="px-4 py-2 bg-gray-100 rounded-full text-sm">
                  {cat.name}
                </span>
              ))}
            </div>

            {/* Filters as Disclosure panels */}
            {filters.map((section) => (
              <Disclosure key={section.id} as="div" className="border-t py-4">
                <DisclosureButton className="flex justify-between w-full text-sm text-gray-400 hover:text-gray-500">
                  <span className="font-medium text-gray-900">{section.name}</span>
                  <span className="ml-6 flex items-center">
                    <PlusIcon className="size-5 group-data-open:hidden" />
                    <MinusIcon className="size-5 group-not-data-open:hidden" />
                  </span>
                </DisclosureButton>

                <DisclosurePanel className="mt-3 space-y-3">
                  {section.id === 'color' ? (
                    <div className="flex gap-2 flex-wrap">
                      {section.options.map((color) => (
                        <label key={color.id} className="relative cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only"
                            name="color[]"
                            value={color.id}
                          />
                          <span
                            className={`${color.classes} h-6 w-6 inline-block rounded-full border border-gray-300`}
                            title={color.name}
                          />
                        </label>
                      ))}
                    </div>
                  ) : (
                    section.options.map((option, optionIdx) => (
                      <div key={option.value} className="flex gap-3 items-center">
                        <input
                          type="checkbox"
                          defaultChecked={option.checked}
                          id={`filter-${section.id}-${optionIdx}`}
                          name={`${section.id}[]`}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label htmlFor={`filter-${section.id}-${optionIdx}`} className="text-sm text-gray-600">
                          {option.label}
                        </label>
                      </div>
                    ))
                  )}
                </DisclosurePanel>
              </Disclosure>
            ))}
          </aside>

          {/* Product grid placeholder */}
          <div className="lg:col-span-3">Products...</div>
        </section>
      </main>
    </div>
  )
}
