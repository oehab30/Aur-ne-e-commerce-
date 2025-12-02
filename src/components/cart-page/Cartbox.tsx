import React from 'react'
import CartItem from './CartItem'
import RelatedProducts from './RelatedProducts'
import OrderSummary from './OrderSummary'
import VoucherForm from './VoucherForm'

/**
 * Cartbox Component
 * Main shopping cart page component that displays:
 * - List of cart items with product details and quantity controls
 * - Related products section (People also bought)
 * - Order summary with pricing breakdown
 * - Voucher/gift card form
 */

function Cartbox() {
  // Sample cart items data - replace with actual data from context/props
  const cartItems = [
    {
      id: 'counter-input',
      title: 'PC system All in One APPLE iMac (2023) mqrq3ro/a, Apple M3, 24" Retina 4.5K, 8GB, SSD 256GB, 10-core GPU, Keyboard layout INT',
      lightImage: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg',
      darkImage: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg',
      quantity: 2,
      price: '$1,499',
    },
    {
      id: 'counter-input-2',
      title: 'Restored Apple Watch Series 8 (GPS) 41mm Midnight Aluminum Case with Midnight Sport Band',
      lightImage: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg',
      darkImage: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg',
      quantity: 1,
      price: '$598',
    },
    {
      id: 'counter-input-3',
      title: 'Apple - MacBook Pro 16" Laptop, M3 Pro chip, 36GB Memory, 18-core GPU, 512GB SSD, Space Black',
      lightImage: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-light.svg',
      darkImage: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-dark.svg',
      quantity: 1,
      price: '$1,799',
    },
    {
      id: 'counter-input-4',
      title: 'Tablet APPLE iPad Pro 12.9" 6th Gen, 128GB, Wi-Fi, Gold',
      lightImage: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-light.svg',
      darkImage: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-dark.svg',
      quantity: 1,
      price: '$699',
    },
    {
      id: 'counter-input-5',
      title: 'APPLE iPhone 15 5G phone, 256GB, Gold',
      lightImage: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg',
      darkImage: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg',
      quantity: 3,
      price: '$2,997',
    },
  ]

  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        {/* Page Title */}
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Your Shopping Bag</h2>

        {/* Main Layout Container - Flex layout with cart items on left, summary on right */}
        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          {/* Left Column - Cart Items and Related Products */}
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            {/* Cart Items Container */}
            <div className="space-y-6">
              {/* Map through cart items and render CartItem component for each */}
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  lightImage={item.lightImage}
                  darkImage={item.darkImage}
                  quantity={item.quantity}
                  price={item.price}
                />
              ))}
            </div>

            {/* Related Products Component - People also bought section */}
            <RelatedProducts />
          </div>

          {/* Right Column - Order Summary and Voucher Form */}
          <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            {/* Order Summary Component */}
            <OrderSummary />

            {/* Voucher Form Component */}
            <VoucherForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cartbox
