import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.js";

import { classNames, sortOptions } from "./data";

export function SortMenu() {
      const [value, setValue] = React.useState("");

  return (
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger className="w-[150px]">
        <SelectValue placeholder="Select a filter" />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectLabel>Filters</SelectLabel>

          {sortOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
export default SortMenu
