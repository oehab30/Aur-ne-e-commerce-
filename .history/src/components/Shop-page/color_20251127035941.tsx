import React, { useState } from 'react';
import classNames from 'classnames';

function Color() {
  const product = {
    colors: [
      { id: 'white', name: 'White', classes: 'bg-white checked:outline-gray-400' },
      { id: 'gray', name: 'Gray', classes: 'bg-gray-200 checked:outline-gray-400' },
      { id: 'black', name: 'Black', classes: 'bg-black checked:outline-gray-900' },
      { id: 'purple', name: 'Purple', classes: 'bg-purple-600 checked:outline-gray-900' },
      { id: 'blue', name: 'Blue', classes: 'bg-blue-500 checked:outline-gray-900' },
    ],
  };

  const [selectedColor, setSelectedColor] = useState(product.colors[0].id);

  return (
    <fieldset aria-label="Choose a color" className="mt-2 w-[250px]">
      <div className="flex items-center gap-x-3">
        {product.colors.map((color, index) => (
          <div
            key={color.id}
            className="flex rounded-full outline -outline-offset-1 outline-black/10"
          >
            <input
              value={color.id}
              checked={selectedColor === color.id}
              onChange={() => setSelectedColor(color.id)}
              name="color"
              type="radio"
              aria-label={color.name}
              className={classNames(
                color.classes,
                'h-8 w-8 appearance-none rounded-full forced-color-adjust-none checked:outline-2 checked:outline-offset-2 focus-visible:outline-3 focus-visible:outline-offset-3'
              )}
            />
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2">
        <span className="text-gray-700 dark:text-gray-300 font-medium">Selected:</span>
        <span
          className={classNames(
            'h-5 w-5 rounded-full border transition-all',
            product.colors.find(c => c.id === selectedColor)?.classes
          )}
        />
      </div>
    </fieldset>
  );
}

export default Color;
