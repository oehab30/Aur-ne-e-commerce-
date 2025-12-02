'use client'

import { Dialog, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { PlusIcon, MinusIcon } from '@heroicons/react/20/solid'
import Priceslide from './priceslide'
import Color from './color'
import { subCategories, filters } from './data'

export default function MobileFilters({ mobileFiltersOpen, setMobileFiltersOpen }: { mobileFiltersOpen: boolean; setMobileFiltersOpen: (v: boolean) => void }) {
  return (
    <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
      <div className="fixed inset-0 bg-black/25 dark:bg-black/50" aria-hidden="true" />

      <div className="fixed inset-0 z-40 flex">
        <Dialog.Panel className="ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white dark:bg-gray-800 pt-4 pb-6 shadow-xl">
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

          <form className="mt-4 border-t border-gray-200 dark:border-gray-700">
            <h3 className="sr-only">Categories</h3>
            <ul role="list" className="px-2 py-3 font-medium text-gray-900 dark:text-gray-200">
              {subCategories.map((category) => (
                <li key={category.name}>
                  <a href={category.href} className="block px-2 py-3 hover:text-indigo-600 dark:hover:text-indigo-400">{category.name}</a>
                </li>
              ))}
            </ul>

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
