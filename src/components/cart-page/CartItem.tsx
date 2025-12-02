import React from 'react'
import QuantityControls from './QuantityControls'
import ProductActions from './ProductActions'

/**
 * CartItem Component
 * Displays individual cart item with product image, details, quantity controls, and actions
 *
 * @param {Object} props - Component props
 * @param {string} props.id - Unique identifier for the cart item
 * @param {string} props.title - Product title/name
 * @param {string} props.lightImage - Image URL for light mode
 * @param {string} props.darkImage - Image URL for dark mode
 * @param {number} props.quantity - Current quantity
 * @param {string} props.price - Product price
 */

interface CartItemProps {
  id: string
  title: string
  lightImage: string
  darkImage: string
  quantity: number
  price: string
}

const CartItem: React.FC<CartItemProps> = ({ id, title, lightImage, darkImage, quantity, price }) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
      {/* Main content container with flex layout */}
      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
        {/* Product Image - Order 1 on desktop */}
        <a href="#" className="shrink-0 md:order-1">
          <img
            className="h-20 w-20 dark:hidden"
            src={lightImage}
            alt={title}
          />
          <img
            className="hidden h-20 w-20 dark:block"
            src={darkImage}
            alt={title}
          />
        </a>

        {/* Quantity and Price Section - Order 3 on desktop */}
        <div className="flex items-center justify-between md:order-3 md:justify-end">
          {/* Quantity Controls Component */}
          <QuantityControls id={id} quantity={quantity} />

          {/* Price Display */}
          <div className="text-end md:order-4 md:w-32">
            <p className="text-base font-bold text-gray-900 dark:text-white">{price}</p>
          </div>
        </div>

        {/* Product Details Section - Order 2 on desktop */}
        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
          {/* Product Title/Link */}
          <a href="#" className="text-base font-medium text-gray-900 hover:underline dark:text-white">
            {title}
          </a>

          {/* Product Actions Component */}
          <ProductActions />
        </div>
      </div>
    </div>
  )
}

export default CartItem
