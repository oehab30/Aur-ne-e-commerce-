import React from 'react'
import RelatedProductCard from './RelatedProductCard'

/**
 * RelatedProducts Component
 * Displays "People also bought" section with grid of related product cards
 * Only visible on XL screen sizes and above
 */

const RelatedProducts: React.FC = () => {
  // Sample data for related products - replace with actual data/props
  const relatedProducts = [
    {
      id: '1',
      name: 'iMac 27"',
      description: 'This generation has some improvements, including a longer continuous battery life.',
      originalPrice: '$399,99',
      salePrice: '$299',
      lightImage: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg',
      darkImage: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg',
    },
    {
      id: '2',
      name: 'Playstation 5',
      description: 'This generation has some improvements, including a longer continuous battery life.',
      originalPrice: '$799,99',
      salePrice: '$499',
      lightImage: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-light.svg',
      darkImage: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-dark.svg',
    },
    {
      id: '3',
      name: 'Apple Watch Series 8',
      description: 'This generation has some improvements, including a longer continuous battery life.',
      originalPrice: '$1799,99',
      salePrice: '$1199',
      lightImage: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg',
      darkImage: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg',
    },
  ]

  return (
    <div className="hidden xl:mt-8 xl:block">
      {/* Section Title */}
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">People also bought</h3>

      {/* Related Products Grid - 3 columns on large screens */}
      <div className="mt-6 grid grid-cols-3 gap-4 sm:mt-8">
        {relatedProducts.map((product) => (
          <RelatedProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            originalPrice={product.originalPrice}
            salePrice={product.salePrice}
            lightImage={product.lightImage}
            darkImage={product.darkImage}
          />
        ))}
      </div>
    </div>
  )
}

export default RelatedProducts
