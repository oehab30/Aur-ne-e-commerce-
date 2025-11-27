import React, { useState } from 'react'
import classNames from 'classnames'

const Color = ({ colors = [], onChange }) => {
  // State to track selected color
  const [selectedColor, setSelectedColor] = useState(colors[0]?.id || '')

  const handleChange = (colorId) => {
    setSelectedColor(colorId)
    if (onChange) onChange(colorId)
  }

  return (
    <fieldset aria-label="Choose a color" className="mt-4 p-5 w-[300px] border rounded-md">
      <legend className="text-lg font-semibold mb-3">Choose a color</legend>
      <div className="flex items-center gap-3">
        {colors.map((color, index) => (
          <label
            key={color.id}
            className="relative cursor-pointer flex items-center justify-center rounded-full"
            aria-label={color.name}
          >
            <input
              type="radio"
              name="color"
              value={color.id}
              checked={selectedColor === color.id}
              onChange={() => handleChange(color.id)}
              className="peer absolute w-0 h-0 appearance-none"
            />
            <span
              className={classNames(
                'h-8 w-8 rounded-full border transition-transform duration-200 ease-in-out',
                color.classes,
                selectedColor === color.id
                  ? 'outline outline-2 outline-offset-2 outline-indigo-500 scale-110'
                  : 'outline-none scale-100'
              )}
            />
          </label>
        ))}
      </div>
    </fieldset>
  )
}

// Example usage
const productColors = [
  { id: 'white', name: 'White', classes: 'bg-white border-gray-300' },
  { id: 'gray', name: 'Gray', classes: 'bg-gray-400 border-gray-300' },
  { id: 'black', name: 'Black', classes: 'bg-black border-gray-800' },
  { id: 'purple', name: 'Purple', classes: 'bg-purple-600 border-purple-700' },
  { id: 'blue', name: 'Blue', classes: 'bg-blue-600 border-blue-700' },
]

export default function App() {
  return <Color colors={productColors} onChange={(color) => console.log('Selected color:', color)} />
}
