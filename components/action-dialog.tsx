"use client";

import { TablerIcon } from "@tabler/icons-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Icon } from "@/components/icon";

type ActionDialogProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  size?: "default" | "sm";
  title: string;
  description: string;
  icon: TablerIcon;
  action: string;
  onAction: () => void | string | number;
};

export function ActionDialog({
  open,
  setOpen,
  size = "default",
  title,
  description,
  icon,
  action,
  onAction,
}: ActionDialogProps) {
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent size={size}>
        <AlertDialogHeader>
          <AlertDialogMedia>
            {icon && <Icon iconNode={icon} />}
          </AlertDialogMedia>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onAction}>{action}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
