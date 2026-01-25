"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { IconCalendar } from "@tabler/icons-react";
import { useState } from "react";

export function DatePicker({
  value,
  onChange,
  placeholder = "Select date",
  disabled = false,
}: {
  value: Date | null;
  onChange: (date: Date | null) => void;
  placeholder?: string;
  disabled?: boolean;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger
        render={
          <Button
            variant={"outline"}
            id="date"
            disabled={disabled}
            className="w-full justify-between font-normal"
          >
            {value ? (
              value.toLocaleDateString()
            ) : (
              <span className="text-muted-foreground">{placeholder}</span>
            )}
            <IconCalendar />
          </Button>
        }
      />
      <PopoverContent
        className="w-full overflow-hidden p-0"
        align="center"
        side={"bottom"}
      >
        <Calendar
          mode={"single"}
          selected={value ?? undefined}
          ISOWeek
          onSelect={(selectedDate) => {
            if (!selectedDate) {
              onChange(null);
              setIsOpen(false);
              return;
            }

            const safeDate = new Date(
              selectedDate.getFullYear(),
              selectedDate.getMonth(),
              selectedDate.getDate(),
              12, // noon — cannot roll back across timezone
            );

            onChange(safeDate);
            setIsOpen(false);
          }}
          disabled={{
            before: new Date(),
          }}
          captionLayout={"dropdown-months"}
          footer={
            <h4 className="pt-4 text-sm font-extralight text-muted-foreground">
              {value
                ? `Deadline will be set at: ${value.toDateString()}`
                : placeholder}
            </h4>
          }
        />
      </PopoverContent>
    </Popover>
  );
}
