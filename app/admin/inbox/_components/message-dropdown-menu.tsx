"use client";

import { ActionDialog } from "@/components/action-dialog";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Message } from "@/types/models";
import {
  IconArchive,
  IconArrowBackUp,
  IconDots,
  IconEye,
  IconStar,
  IconTrash,
} from "@tabler/icons-react";
import { Fragment, useState } from "react";
import { ViewMessageForm } from "./view-message-form";
import { ReplyMessageForm } from "./reply-message-form";

export default function MessageDropdownMenu({ message }: { message: Message }) {
  const [viewOpen, setViewOpen] = useState<boolean>(false);
  const [replyOpen, setReplyOpen] = useState<boolean>(false);
  const [deleteOpen, setDeleteOpen] = useState<boolean>(false);
  return (
    <Fragment>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger
          render={
            <Button variant={"outline"}>
              <IconDots />
            </Button>
          }
        />
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => setViewOpen(true)}
              className={"hover:cursor-pointer"}
            >
              <IconEye />
              View
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setReplyOpen(true)}
              className={"hover:cursor-pointer"}
            >
              <IconArrowBackUp />
              Reply
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {}}
              className={"hover:cursor-pointer"}
            >
              <IconStar />
              Star
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setDeleteOpen(true)}>
              <IconTrash />
              Delete
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      {/* View message dialog */}
      <Dialog open={viewOpen} onOpenChange={setViewOpen}>
        <DialogContent className={"lg:min-w-xl"}>
          <DialogHeader>
            <DialogTitle>View Message</DialogTitle>
            <DialogDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </DialogDescription>
          </DialogHeader>
          <ViewMessageForm message={message} />
          <DialogFooter>
            <DialogClose render={<Button variant={"outline"}>Close</Button>} />
            <Button
              onClick={() => {
                setViewOpen(false);
                setReplyOpen(true);
              }}
            >
              <IconArrowBackUp />
              Reply
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      {/* Reply to message dialog */}
      <Dialog open={replyOpen} onOpenChange={setReplyOpen}>
        <DialogContent className={"max-h-[80svh]"}>
          <DialogHeader>
            <DialogTitle>Reply to</DialogTitle>
            <DialogDescription>{message.sender.email}</DialogDescription>
          </DialogHeader>
          <ReplyMessageForm message={message} setIsOpen={setReplyOpen} />
        </DialogContent>
      </Dialog>
      {/* Delete message dialog */}
      <ActionDialog
        title="Delete Message?"
        description="This will message will be moved to trash. You can restore it back later if you want."
        open={deleteOpen}
        setOpen={setDeleteOpen}
        action="Delete"
        onAction={() => {}}
        icon={IconArchive}
      />
    </Fragment>
  );
}
