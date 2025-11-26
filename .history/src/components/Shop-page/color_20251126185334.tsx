import React from 'react'
import classNames from 'classnames'

function Color() {
  const product = {
    colors: [
      { id: 'white', name: 'White', classes: 'bg-white checked:outline-gray-400' },
      { id: 'gray', name: 'Gray', classes: 'bg-gray-200 checked:outline-gray-400' },
      { id: 'black', name: 'Black', classes: 'bg-gray-900 checked:outline-gray-900' },
    ],
  };

  return (
    <fieldset aria-label="Choose a color" className="mt-4 ">
        <h1 className='mb-3'>Choose a color</h1>
      <div className="flex items-center gap-x-3">
        {product.colors.map((color, index) => (
          <div
            key={color.id}
            className="flex rounded-full outline -outline-offset-1 outline-black/10"
          >
            <input
              value={color.id}
              defaultChecked={index === 0}
              name="color"
              type="radio"
              aria-label={color.name}
              className={classNames(
                color.classes,
                'size-8 appearance-none rounded-full forced-color-adjust-none checked:outline-2 checked:outline-offset-2 focus-visible:outline-3 focus-visible:outline-offset-3'
              )}
            />
          </div>
        ))}
      </div>
    </fieldset>
  );
}

export default Color;
