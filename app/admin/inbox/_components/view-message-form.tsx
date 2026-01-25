"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Message } from "@/types/models";

import { IconCalendarFilled, IconUserFilled } from "@tabler/icons-react";

export function ViewMessageForm({ message }: { message: Message }) {
  return (
    <div className="max-h-[50vh] overflow-y-auto no-scrollbar">
      <ItemGroup>
        <div className="grid gap-4 md:grid-cols-2">
          <Item variant={"muted"}>
            <ItemMedia variant={"icon"}>
              <IconUserFilled />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>{message.sender.name}</ItemTitle>
              <ItemDescription>{message.sender.email}</ItemDescription>
            </ItemContent>
          </Item>
          <Item variant={"muted"}>
            <ItemMedia variant={"icon"}>
              <IconCalendarFilled />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Date Submitted</ItemTitle>
              <ItemDescription>
                {new Date(message.date_submitted).toLocaleDateString()}{" "}
                {new Date(message.date_submitted).toLocaleTimeString()}
              </ItemDescription>
            </ItemContent>
          </Item>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Subject</CardTitle>
            <CardDescription>{message.subject}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-pretty leading-6">{message.message}</p>
          </CardContent>
        </Card>
      </ItemGroup>
    </div>
  );
}
