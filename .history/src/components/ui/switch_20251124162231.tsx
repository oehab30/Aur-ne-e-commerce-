import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        // Base styling
        "peer inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px]",
        // Enabled / Checked ON
        "data-[state=checked]:bg-black data-[state=checked]:text-white",
        // Disabled state
        "disabled:bg-amber-500 disabled:cursor-not-allowed disabled:opacity-80",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "block h-4 w-4 rounded-full transition-transform",
          // Move thumb when checked
          "data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0",
          // Thumb colors
          "data-[state=checked]:bg-white data-[state=unchecked]:bg-black",
          // Disabled thumb
          "disabled:bg-black"
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
