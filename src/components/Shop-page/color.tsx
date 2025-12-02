import React, { useState } from 'react';
import classNames from 'classnames';
import { productColor } from './data';
function Color() {

  const [selectedColor, setSelectedColor] = useState(productColor.colors[0].id);

  return (
    <fieldset aria-label="Choose a color" className="mt-2 w-[250px]">
      <div className="flex items-center gap-x-3">
        {productColor.colors.map((color) => (
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
        <span className="text-gray-700  font-medium">Selected:</span>
        <span
          className={classNames(
            'h-5 w-5 rounded-full border  transition-all',
            productColor.colors.find(c => c.id === selectedColor)?.classes
          )}
        />
      </div>
    </fieldset>
  );
}

export default Color;
