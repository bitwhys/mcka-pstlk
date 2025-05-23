'use client'
import { useState } from 'react'
import { ChevronDownIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const options = [
  {
    label: 'Copy Link',
    description:
      'All commits from this branch will be added to the base branch via a commit version.',
  },
  {
    label: 'Add collaborators',
    description:
      'The 6 commits from this branch will be combined into one commit in the base branch.',
  },
  {
    label: 'Export PDF',
    description: 'The 6 commits from this branch will be rebased and added to the base branch.',
  },
]

export default function ShareButton() {
  const [selectedIndex, setSelectedIndex] = useState('0')

  return (
    <div className="inline-flex rounded-md shadow-xs rtl:space-x-reverse">
      <Button
        className="rounded-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
        variant="outline"
      >
        {options[Number(selectedIndex)].label}
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="rounded-none border-l-0 shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
            size="icon"
            aria-label="Options"
            variant="outline"
          >
            <ChevronDownIcon size={16} aria-hidden="true" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="max-w-64 md:max-w-xs"
          side="bottom"
          sideOffset={4}
          align="end"
        >
          <DropdownMenuRadioGroup value={selectedIndex} onValueChange={setSelectedIndex}>
            {options.map((option, index) => (
              <DropdownMenuRadioItem
                key={option.label}
                value={String(index)}
                className="items-start [&>span]:pt-1.5"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium">{option.label}</span>
                  <span className="text-muted-foreground text-xs">{option.description}</span>
                </div>
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export { ShareButton }
