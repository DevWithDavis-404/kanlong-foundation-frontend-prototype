"use client";

import { Volunteer } from "@/types/models";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemTitle,
} from "@/components/ui/item";

export function ViewVolunteerDialog({
  open,
  setOpen,
  volunteer,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  volunteer: Volunteer;
}) {
  const volunteerDetails = [
    {
      title: "ID",
      description: volunteer.id,
      className: 'md:col-span-2',
    },
    {
      title: "Name",
      description: volunteer.name,
    },
    {
      title: "Email",
      description: volunteer.email,
    },
    {
      title: "Phone",
      description: volunteer.phone,
    },
    {
      title: "Status",
      description: volunteer.status,
    },
    {
      title: "Date Registered",
      description: new Date(volunteer.created_at).toLocaleDateString(),
    },
  ];
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className={"md:min-w-lg"}>
        <DialogHeader>
          <DialogTitle>View Donation</DialogTitle>
          <DialogDescription>View the informations below.</DialogDescription>
        </DialogHeader>
        {/*  */}
        <ItemGroup>
          <div className="grid md:grid-cols-2 md:gap-2.5">
            {volunteerDetails.map((item) => (
              <Item key={item.title} className={item.className}>
                <ItemContent>
                  <ItemTitle>{item.title}</ItemTitle>
                  <ItemDescription>{item.description}</ItemDescription>
                </ItemContent>
              </Item>
            ))}
          </div>
        </ItemGroup>
      </DialogContent>
    </Dialog>
  );
}
