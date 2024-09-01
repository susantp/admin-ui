"use client"

import React, { ReactElement, useState } from "react"

import { cn } from "@/lib/utils"
import { Check, ChevronsUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Command, CommandGroup, CommandItem } from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export interface Option {
  label: string
  value: string
}

interface ComboboxProps {
  options: Option[]
  selected?: Option
  onSelectedChange: (value: Option) => void
}

export function Combobox({
  selected,
  options,
  onSelectedChange,
}: ComboboxProps): ReactElement {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          role="combobox"
          aria-expanded={open}
          className=""
        >
          {selected?.label}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandGroup>
            {options.map((option) => (
              <CommandItem
                key={option.value}
                onSelect={(): void => {
                  setOpen(false)
                  onSelectedChange(option)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    selected?.value === option.value
                      ? "opacity-100"
                      : "opacity-0"
                  )}
                />
                {option.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
