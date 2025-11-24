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
        "peer " +
        // Background colors
        "data-[state=checked]:bg-black " +      // ON background black
        "data-[state=unchecked]:bg-input " +   // OFF background stays same
        "disabled:bg-amber-500 " +             // Disabled background golden
        "focus-visible:border-ring focus-visible:ring-ring/50 " +
        "dark:data-[state=unchecked]:bg-input/80 " +
        "inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] " +
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "bg-background " +                          // Default thumb
          "dark:data-[state=unchecked]:bg-foreground " +
          "dark:data-[state=checked]:bg-primary-foreground " +
          "pointer-events-none block size-4 rounded-full ring-0 transition-transform " +
          "data-[state=checked]:translate-x-[calc(100%-2px)] " +
          "data-[state=unchecked]:translate-x-0 " +
          // Thumb colors
          "data-[state=checked]:bg-white " +        // ON thumb white
          "data-[state=unchecked]:bg-black " +      // OFF thumb black
          "disabled:bg-black"                        // Disabled thumb black
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
