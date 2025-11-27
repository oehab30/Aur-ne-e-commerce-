import React, { useState } from 'react'
import classNames from 'classnames'

const Color = () => {
  const colors = [
    { id: 'white', name: 'White', classes: 'bg-white border border-gray-300 dark:border-gray-600' },
    { id: 'gray', name: 'Gray', classes: 'bg-gray-400 border border-gray-300 dark:border-gray-600' },
    { id: 'black', name: 'Black', classes: 'bg-black border border-gray-800' },
    { id: 'purple', name: 'Purple', classes: 'bg-purple-600 border border-purple-700' },
    { id: 'blue', name: 'Blue', classes: 'bg-blue-600 border border-blue-700' },
  ]

  const [selectedColor, setSelectedColor] = useState(colors[0].id)

  return (
    <fieldset className="mt-2 w-[250px]">
      <legend className="sr-only">Choose a color</legend>

      {/* Color options */}
      <div className="flex items-center gap-4 mb-4">
        {colors.map((color) => (
          <label key={color.id} className="relative cursor-pointer">
            <input
              type="radio"
              name="color"
              value={color.id}
              checked={selectedColor === color.id}
              onChange={() => setSelectedColor(color.id)}
              className="hidden"
            />
            <span
              className={classNames(
                'h-12 w-12 rounded-full border transition-transform duration-200 ease-in-out',
                color.classes,
                selectedColor === color.id
                  ? 'outline outline-2 outline-offset-2 outline-indigo-500 scale-110 dark:outline-indigo-400'
                  : ''
              )}
            />
          </label>
        ))}
      </div>

      {/* Selected color preview */}
      <div className="mt-3 flex items-center gap-2">
        <span className="text-gray-700 dark:text-gray-300 font-medium">Selected:</span>
        <span
          className={classNames(
            'h-14 w-14 rounded-full border transition-all',
            colors.find(c => c.id === selectedColor)?.classes
          )}
        />
      </div>
    </fieldset>
  )
}

export default Color
