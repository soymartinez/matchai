'use client'

import * as React from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/ui/popover'

const reasons = [
  {
    value: 'flirt + funny',
    label: 'Flirt + Funny',
  },
  {
    value: 'flirt + sweet',
    label: 'Flirt + Sweet',
  },
  {
    value: 'flirt + sarcastic',
    label: 'Flirt + Sarcastic',
  },
  {
    value: 'compliment + funny',
    label: 'Compliment + Funny',
  },
  {
    value: 'compliment + sweet',
    label: 'Compliment + Sweet',
  },
  {
    value: 'compliment + sarcastic',
    label: 'Compliment + Sarcastic',
  },
  {
    value: 'insult + funny',
    label: 'Insult + Funny',
  },
  {
    value: 'insult + sweet',
    label: 'Insult + Sweet',
  },
  {
    value: 'insult + sarcastic',
    label: 'Insult + Sarcastic',
  },
  {
    value: 'other + funny',
    label: 'Other + Funny',
  },
  {
    value: 'other + sweet',
    label: 'Other + Sweet',
  },
  {
    value: 'other + sarcastic',
    label: 'Other + Sarcastic',
  },
]

export function CommandCombobox() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState('')

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger id='reply' asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='w-full justify-between'
        >
          {value
            ? reasons.find((reason) => reason.value === value)?.label
            : 'Select the type of response...'}
          <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-full p-0'>
        <Command>
          <CommandInput placeholder='Search reason...' />
          <CommandEmpty>No reason found.</CommandEmpty>
          <CommandGroup className='h-64 overflow-auto'>
            {reasons.map((reason) => (
              <CommandItem
                key={reason.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? '' : currentValue)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value === reason.value ? 'opacity-100' : 'opacity-0'
                  )}
                />
                {reason.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
