import React, { useState } from 'react'
import classNames from 'classnames'

const Color = () => {
  const colors = [
    { id: 'white', name: 'White', classes: 'bg-white border border-gray-300' },
    { id: 'gray', name: 'Gray', classes: 'bg-gray-400 border border-gray-300' },
    { id: 'black', name: 'Black', classes: 'bg-black border border-gray-800' },
    { id: 'purple', name: 'Purple', classes: 'bg-purple-600 border border-purple-700' },
    { id: 'blue', name: 'Blue', classes: 'bg-blue-600 border border-blue-700' },
  ]

  const [selectedColor, setSelectedColor] = useState(colors[0].id)

  return (
    <div className="p-5 w-[300px] border rounded-md">
      <h1 className="text-lg font-semibold mb-3">Choose a color</h1>
      <div className="flex items-center gap-3 mb-4">
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
                'h-8 w-8 rounded-full border transition-transform duration-200 ease-in-out',
                color.classes,
                selectedColor === color.id
                  ? 'outline outline-2 outline-offset-2 outline-indigo-500 scale-110'
                  : ''
              )}
            />
          </label>
        ))}
      </div>

      {/* Display selected color */}
      <p className="text-gray-700">
        Selected Color: <span className="font-medium">{colors.find(c => c.id === selectedColor)?.name}</span>
      </p>
    </div>
  )
}

export default Color
