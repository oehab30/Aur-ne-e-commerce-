
'use client'

import { useState } from 'react'
import { FunnelIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import MobileFilters from './MobileFilters'
import DesktopFilters from './DesktopFilters'
import SortMenu from './SortMenu'

export default function Categories() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  return (
    <div className="bg-white dark:bg-gray-900">
      <MobileFilters mobileFiltersOpen={mobileFiltersOpen} setMobileFiltersOpen={setMobileFiltersOpen} />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-baseline justify-between border-b border-gray-200 dark:border-gray-700 pt-24 pb-6">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-200">New Arrivals</h1>

          <div className="flex items-center">
            <SortMenu />

            <button type="button" className="-m-2 ml-5 p-2 text-gray-400 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-200 sm:ml-7">
              <span className="sr-only">View grid</span>
              <Squares2X2Icon className="w-5 h-5" aria-hidden="true" />
            </button>

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
            <DesktopFilters />

            <div className="lg:col-span-3">{/* Render your products here */}</div>
          </div>
        </section>
      </main>
    </div>
  )
}
