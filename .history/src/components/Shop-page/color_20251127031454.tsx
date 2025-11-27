import React from 'react'
import classNames from 'classnames'

function Color() {
  const product = {
    colors: [
      { id: 'white', name: 'White', classes: 'bg-white checked:outline-gray-400' },
      { id: 'gray', name: 'Gray', classes: 'bg-gray-200 checked:outline-gray-400' },
      { id: 'black', name: 'Black', classes: 'bg-[var(--main)] checked:outline-gray-900' },
      { id: 'black', name: 'Black', classes: 'bg-purple-600 checked:outline-gray-900' },
      { id: 'black', name: 'Black', classes: 'bg-blue checked:outline-gray-900' },
    ],
  };

  return (
    <fieldset aria-label="Choose a color" className="mt-4 border-1 p-5 w-[300px] ">
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

{
/*
  <div className="mt-6">
                <h3 className="text-gray-900 font-medium mb-2">Price Range</h3>
                <input
                  type="range"
                  min={0}
                  max={1000}
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </form>



               <DisclosurePanel className="pt-4 flex flex-wrap gap-3">
                                {section.type === 'color'
                                  ? section.options.map((option) => (
                                      <label key={option.id} className="relative">
                                        <input
                                          type="checkbox"
                                          className="sr-only"
                                          name="color[]"
                                          value={option.id}
                                          checked={selectedOptions.color.includes(option.id)}
                                          onChange={() => handleCheckboxChange('color', option.id)}
                                        />
                                        <span
                                          className={classNames(
                                            'w-8 h-8 rounded-full border-2 cursor-pointer',
                                            option.classes,
                                            selectedOptions.color.includes(option.id)
                                              ? 'ring-2 ring-offset-2 ring-indigo-500'
                                              : ''
                                          )}
                                        />
                                      </label>
                                    ))
                                            }