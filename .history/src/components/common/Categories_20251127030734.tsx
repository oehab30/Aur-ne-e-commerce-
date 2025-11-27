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

// Sub-categories
const subCategories = [
  { name: 'Watches', value: 'watches', checked: false },
  { name: 'Bags', value: 'bags', checked: false },
  { name: 'Bracelet', value: 'bracelet', checked: false },
  { name: 'Rings', value: 'rings', checked: false },
]

// Filters
const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { id: 'white', classes: 'bg-white border-gray-300' },
      { id: 'gray', classes: 'bg-gray-400 border-gray-300' },
      { id: 'black', classes: 'bg-black border-gray-300' },
      { id: 'purple', classes: 'bg-purple-600 border-gray-300' },
      { id: 'blue',  classes: 'bg-blue-500 border-gray-300' },
    ],
  },
  {
    id: 'category',
    name: 'Category',
    options: subCategories,
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
  const [priceRange, setPriceRange] = useState([0, 500])

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

              <form className="mt-4 border-t border-gray-200 px-4">
                {filters.map((section) => (
                  <Disclosure key={section.id} as="div" className="border-t border-gray-200 py-6">
                    <h3 className="-mx-2 -my-3 flow-root">
                      <DisclosureButton className="flex w-full items-center justify-between px-2 py-3 text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">{section.name}</span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon className="w-5 h-5" />
                          <MinusIcon className="w-5 h-5" />
                        </span>
                      </DisclosureButton>
                    </h3>

                    <DisclosurePanel className="pt-4">
                      <div className="flex flex-wrap gap-3">
                        {section.id === 'color'
                          ? section.options.map((option, idx) => (
                              <label key={option.id} className="relative">
                                <input
                                  type="checkbox"
                                  className="sr-only"
                                  name="color[]"
                                  value={option.id}
                                />
                                <span
                                  className={classNames(
                                    'w-8 h-8 rounded-full border-2 cursor-pointer',
                                    option.classes
                                  )}
                                />
                              </label>
                            ))
                          : section.options.map((option, idx) => (
                              <label key={option.value || option.id} className="flex items-center gap-2 cursor-pointer">
                                <input
                                  type="checkbox"
                                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                  name={`${section.id}[]`}
                                  value={option.value || option.id}
                                  defaultChecked={option.checked}
                                />
                                <span className="text-gray-600">{option.label || option.name}</span>
                              </label>
                            ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}

                {/* Price Range Slider */}
                <div className="mt-6">
                  <h3 className="text-gray-900 font-medium mb-2">Price Range</h3>
                  <input
                    type="range"
                    min={0}
                    max={1000}
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </form>
            </DialogPanel>
          </div>
        </Dialog>

        {/* DESKTOP FILTER */}
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

                    <DisclosurePanel className="pt-4">
                      <div className="flex flex-wrap gap-3">
                        {section.id === 'color'
                          ? section.options.map((option) => (
                              <label key={option.id} className="relative">
                                <input type="checkbox" className="sr-only" name="color[]" value={option.id} />
                                <span
                                  className={classNames(
                                    'w-15 h-8 rounded-full border-2 cursor-pointer',
                                    option.classes
                                  )}
                                />
                              </label>
                            ))
                          : section.options.map((option) => (
                              <label
                                key={option.value || option.id}
                                className="flex items-center gap-2 cursor-pointer"
                              >
                                <input
                                  type="checkbox"
                                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                  name={`${section.id}[]`}
                                  value={option.value || option.id}
                                  defaultChecked={option.checked}
                                />
                                <span className="text-gray-600">{option.label || option.name}</span>
                              </label>
                            ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}

                {/* Desktop price range */}
                <div className="mt-6">
                  <h3 className="text-gray-900 font-medium mb-2">Price Range</h3>
                  <input
                    type="range"
                    min={0}
                    max={1000}
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
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
