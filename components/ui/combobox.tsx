"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export interface ComboboxOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface ComboboxProps {
  options: ComboboxOption[];
  value?: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyText?: string;
  className?: string;
  size?: "default" | "sm" | "lg";
}

export function Combobox({
  options,
  value,
  onValueChange,
  placeholder = "Select an option...",
  searchPlaceholder = "Search...",
  emptyText = "No results found.",
  className,
  size = "default",
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false);

  const heights = {
    default: "h-10",
    sm: "h-9",
    lg: "h-[48px]",
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "w-full justify-between px-3 font-normal",
            heights[size],
            !value && "text-muted-foreground",
            className
          )}
        >
          <div className="flex items-center gap-2">
            {value && options.find((option) => option.value === value)?.icon}
            {value ? options.find((option) => option.value === value)?.label : placeholder}
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
        <Command>
          <CommandInput
            placeholder={searchPlaceholder}
            className={cn("", size === "lg" ? "h-11" : "h-9")}
          />
          <CommandList>
            <CommandEmpty>{emptyText}</CommandEmpty>
            <CommandGroup className="max-h-[300px] overflow-auto">
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.label}
                  onSelect={() => {
                    onValueChange(option.value);
                    setOpen(false);
                  }}
                  className={cn("flex items-center gap-2", size === "lg" ? "h-11" : "h-9")}
                >
                  <div className="flex items-center gap-2">
                    {option.icon && (
                      <span className="flex h-6 w-6 items-center justify-center text-lg">
                        {option.icon}
                      </span>
                    )}
                    {option.label}
                  </div>
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
