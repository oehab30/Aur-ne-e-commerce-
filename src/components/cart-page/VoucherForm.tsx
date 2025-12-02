import React from 'react'

/**
 * VoucherForm Component
 * Displays form for entering voucher or gift card codes
 * Includes input field and apply button
 */

const VoucherForm: React.FC = () => {
  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Add voucher application logic here
    console.log('Apply voucher code')
  }

  return (
    <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
      {/* Voucher Form */}
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Form Input Section */}
        <div>
          {/* Form Label */}
          <label
            htmlFor="voucher"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Do you have a voucher or gift card?
          </label>

          {/* Voucher Code Input */}
          <input
            type="text"
            id="voucher"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
            placeholder="Enter voucher code"
            required
          />
        </div>

        {/* Apply Code Button */}
        <button
          type="submit"
          className=" bg-[var(--main)] flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Apply Code
        </button>
      </form>
    </div>
  )
}

export default VoucherForm
