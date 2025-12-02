'use client'

// Shared data and helpers for Categories components
export const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]

export const subCategories = [
  { name: 'Totes', href: '#' },
  { name: 'Backpacks', href: '#' },
  { name: 'Travel Bags', href: '#' },
  { name: 'Hip Bags', href: '#' },
  { name: 'Laptop Sleeves', href: '#' },
]

export const filters = [
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


 export const product = {
    colors: [
      { id: 'white', name: 'White', classes: 'bg-white checked:outline-gray-400' },
      { id: 'gray', name: 'Gray', classes: 'bg-gray-200 checked:outline-gray-400' },
      { id: 'black', name: 'Black', classes: 'bg-black checked:outline-gray-900' },
      { id: 'purple', name: 'Purple', classes: 'bg-purple-600 checked:outline-gray-900' },
      { id: 'blue', name: 'Blue', classes: 'bg-blue-500 checked:outline-gray-900' },
    ],
  };

export function classNames(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}
