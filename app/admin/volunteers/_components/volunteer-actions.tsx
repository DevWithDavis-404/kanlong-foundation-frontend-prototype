"use client";

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
import { Volunteer } from "@/types/models";
import {
  IconArchive,
  IconDotsVertical,
  IconEdit,
  IconEye,
} from "@tabler/icons-react";
import { useState } from "react";
import { Fragment } from "react/jsx-runtime";
import { ViewVolunteerDialog } from "./view-volunteer-dialog";
import { ActionDialog } from "@/components/action-dialog";
import { toast } from "sonner";
import { EditVolunteerDialog } from "./edit-volunteer-dialog";

export function VolunteerActions({ volunteer }: { volunteer: Volunteer }) {
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
              View
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setEditOpen(true)}>
              <IconEdit />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setArchiveOpen(true)}>
              <IconArchive />
              Archive
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      {/* View Volunteer Dialog */}
      <ViewVolunteerDialog
        open={viewOpen}
        setOpen={setViewOpen}
        volunteer={volunteer}
      />
      {/* Edit Volunteer Dialog */}
      <EditVolunteerDialog
        open={editOpen}
        setOpen={setEditOpen}
        volunteer={volunteer}
      />
      {/* Archive Volunteer Dialog */}
      <ActionDialog
        open={archiveOpen}
        setOpen={setArchiveOpen}
        size={"sm"}
        title={`Archive Volunteer ${volunteer.name}?`}
        description="This action will move the volunteer to archives. You can restore it back later."
        icon={IconArchive}
        action="Archive"
        onAction={() => {
          toast.info(
            `(Test) Volunteer ${volunteer.name} was moved to the archives.`,
          );
          setArchiveOpen(false);
        }}
      />
    </Fragment>
  );
}
