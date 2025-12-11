'use client'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { PlusIcon, MinusIcon } from '@heroicons/react/20/solid'
import Priceslide from './Priceslide'
import Color from './color'
import { subCategories, filters } from './data'
import { motion } from 'framer-motion'

export default function DesktopFilters() {
  return (
    <motion.form
      className="hidden lg:block"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {/* Categories */}
      <h3 className="sr-only">Categories</h3>
      <ul className="space-y-4 border-b border-gray-200 dark:border-gray-700 pb-6 text-sm font-medium text-gray-900 dark:text-gray-200">
        {subCategories.map((category) => (
          <li key={category.name}>
            <a href={category.href} className="hover:text-indigo-600 dark:hover:text-indigo-400">
              {category.name}
            </a>
          </li>
        ))}
      </ul>



 


      {/* Price */}
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

      {/* Color */}
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

      {/* material filters */}
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

                {/* material filters */}
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
                  <label
                    htmlFor={`filter-${section.id}-${optionIdx}`}
                    className="text-sm text-gray-600 dark:text-gray-300"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </DisclosurePanel>
        </Disclosure>
      ))}
    </motion.form>
  )
}
