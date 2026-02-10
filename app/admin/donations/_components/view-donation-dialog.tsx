"use client";

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
import { Donation } from "@/types/models";

export function ViewDonationDialog({
  open,
  setOpen,
  donation,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  donation: Donation;
}) {
  const donationDetails = [
    {
      title: "Donation ID",
      description: donation.id,
      className: "md:col-span-2",
    },
    {
      title: "Donor Name",
      description: donation.donor.name,
    },
    {
      title: "Donor Email",
      description: (
        <a href={`mailto:${donation.donor.email}`}>{donation.donor.email}</a>
      ),
    },
    {
      title: "Donor Phone",
      description: (
        <a href={`tel:${donation.donor.phone}`}>{donation.donor.phone}</a>
      ),
    },
    {
      title: "Payment Method",
      description: donation.payment_method,
    },
    {
      title: "Amount",
      description: donation.amount,
    },
    {
      title: "Date Donated",
      description: new Date(donation.date_donated).toDateString(),
    },
  ];
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className={"md:min-w-lg"}>
        <DialogHeader>
          <DialogTitle>View Donation</DialogTitle>
          <DialogDescription>View the informations below.</DialogDescription>
        </DialogHeader>
        <div className='no-scrollbar -mx-4 max-h-[50vh] overflow-y-auto'>
          {/*  */}
          <ItemGroup>
            <div className='grid gap-2.5 md:grid-cols-2'>
              {donationDetails.map((item) => (
                <Item key={item.title} className={item.className}>
                  <ItemContent>
                    <ItemTitle>{item.title}</ItemTitle>
                    <ItemDescription>{item.description}</ItemDescription>
                  </ItemContent>
                </Item>
              ))}
            </div>
          </ItemGroup>
        </div>
      </DialogContent>
    </Dialog>
  );
}
