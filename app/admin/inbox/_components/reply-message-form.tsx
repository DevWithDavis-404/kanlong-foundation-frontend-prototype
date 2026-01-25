"use client";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Message } from "@/types/models";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconSend } from "@tabler/icons-react";
import { Controller, useForm } from "react-hook-form";
import z from "zod/v3";

export function ReplyMessageForm({
  message,
  setIsOpen,
}: {
  message: Message;
  setIsOpen: (open: boolean) => void;
}) {
  // Form Schema Definition
  const formSchema = z.object({
    message: z.string().max(256),
  });

  type FormValues = z.infer<typeof formSchema>;

  // React useForm definiton
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });
  return (
    <form id="reply-message-form">
      <FieldGroup>
        <Field>
          <FieldContent>
            <FieldLabel htmlFor="subject">Subject</FieldLabel>
            <FieldDescription>{message.subject}</FieldDescription>
          </FieldContent>
        </Field>
        <Field>
          <FieldContent>
            <FieldLabel htmlFor="sender_message">Sender Message</FieldLabel>
            <FieldDescription className="text-pretty">
              {message.message}
            </FieldDescription>
          </FieldContent>
        </Field>
        <Controller
          name="message"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Message</FieldLabel>
              <InputGroup>
                <InputGroupTextarea
                  {...field}
                  id={field.name}
                  rows={6}
                  maxLength={256}
                />
                <InputGroupAddon align={"block-end"}>
                  <InputGroupText>
                    {field.value.length}/256 characters
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </Field>
          )}
        />
        <Field orientation={"horizontal"} className="justify-end">
          <Button variant={"outline"} onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button>
            <IconSend />
            Send
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
