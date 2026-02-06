"use client";

import { ActionDialog } from "@/components/action-dialog";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Donation } from "@/types/models";
import {
  IconArchive,
  IconDotsVertical,
  IconEdit,
  IconEye,
} from "@tabler/icons-react";
import { useState } from "react";
import { Fragment } from "react/jsx-runtime";
import { toast } from "sonner";
import { EditDonationDialog } from "./edit-donation-dialog";
import { ViewDonationDialog } from "./view-donation-dialog";

export function DonationActions({ donation }: { donation: Donation }) {
  const [viewOpen, setViewOpen] = useState<boolean>(false);
  const [editOpen, setEditOpen] = useState<boolean>(false);
  const [archiveOpen, setArchiveOpen] = useState<boolean>(false);
  return (
    <Fragment>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger
          render={
            <Button variant={"ghost"}>
              <IconDotsVertical />
            </Button>
          }
        />
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setViewOpen(true)}>
              <IconEye />
              View donation
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setEditOpen(true)}>
              <IconEdit />
              Edit donation
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setArchiveOpen(true)}>
              <IconArchive />
              Archive donation
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      {/* View Donation Dialog */}
      <ViewDonationDialog
        open={viewOpen}
        setOpen={setViewOpen}
        donation={donation}
      />
      <EditDonationDialog
        donation={donation}
        open={editOpen}
        setOpen={setEditOpen}
      />
      {/* Archive Donation Dialog */}
      <ActionDialog
        open={archiveOpen}
        setOpen={setArchiveOpen}
        size={"sm"}
        title={`Archive Donation ID ${donation.id}?`}
        description='This action will move the donation to archives. You can restore it back later.'
        icon={IconArchive}
        action='Archive'
        onAction={() => {
          toast.info(
            `(Test) Donation ID ${donation.id} was moved to the archives.`,
          );
          setArchiveOpen(false);
        }}
      />
    </Fragment>
  );
}
