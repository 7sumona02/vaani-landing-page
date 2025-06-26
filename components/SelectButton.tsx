import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectButton() {
  return (
    <Select>
      <SelectTrigger className="text-white border border-white/40">
        <SelectValue placeholder="English" />
      </SelectTrigger>
      <SelectContent className="bg-neutral-900 border border-white/30">
        <SelectGroup className="text-white">
          <SelectItem value="apple">Spanish</SelectItem>
          <SelectItem value="banana">Japanese</SelectItem>
          <SelectItem value="blueberry">Korean</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
