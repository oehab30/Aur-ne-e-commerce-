import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { PlusIcon, MinusIcon } from '@heroicons/react/20/solid'
import CheckboxOption from './CheckboxOption'

export default function FilterSection({ section, mobile = false }) {
  return (
    <Disclosure as="div" className="border-t border-gray-200 px-4 py-6">
      <h3 className="-mx-2 -my-3 flow-root">
        <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
          <span className="font-medium text-gray-900">{section.name}</span>

          <span className="ml-6 flex items-center">
            <PlusIcon className="size-5 group-data-open:hidden" />
            <MinusIcon className="size-5 group-not-data-open:hidden" />
          </span>
        </DisclosureButton>
      </h3>

      <DisclosurePanel className="pt-6">
        <div className="space-y-6">
          {section.options.map((option, idx) => (
            <CheckboxOption
              key={option.value}
              option={option}
              section={section}
              idx={idx}
              mobile={mobile}
            />
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
