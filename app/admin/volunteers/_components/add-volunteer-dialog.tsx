"use client";

import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/date-picker";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconRestore, IconUserPlus } from "@tabler/icons-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod/v3";

export function AddVolunteerDialog() {
  // Dialog State
  const [open, setOpen] = useState<boolean>(false);

  // Form Schema Definition
  const formSchema = z.object({
    name: z.string().nonempty("Name is required"),
    email: z.string().email("Enter a valid email address"),
    phone: z.string().nonempty("Phone is required"),
    status: z.enum(["Active", "Inactive"]),
    date_registered: z.date(),
  });

  // React Hook Form Definition
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      status: "Active",
      date_registered: new Date(),
    },
  });

  // Submit Handler
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    toast.success("(Test) Volunteer added successfully");
    form.reset();
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button>
            <IconUserPlus />
            Add new
          </Button>
        }
      />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Volunteer Form</DialogTitle>
          <DialogDescription>
            Fields with <span className="text-red-400">&#42;</span> are
            required.
          </DialogDescription>
        </DialogHeader>
        <div className={"max-h-[60svh] overflow-y-auto -mx-4 px-4"}>
          <form id="edit-volunteer-form" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              <Controller
                name="name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="name">
                      Name
                      <span className="text-red-400">&#42;</span>
                    </FieldLabel>
                    <Input
                      {...field}
                      id="name"
                      type={"text"}
                      aria-invalid={fieldState.invalid}
                      disabled={form.formState.isSubmitting}
                      tabIndex={1}
                      autoFocus
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="email">
                      Email
                      <span className="text-red-400">&#42;</span>
                    </FieldLabel>
                    <Input
                      {...field}
                      id="email"
                      type={"email"}
                      aria-invalid={fieldState.invalid}
                      disabled={form.formState.isSubmitting}
                      tabIndex={2}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="phone"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="phone">
                      Phone
                      <span className="text-red-400">&#42;</span>
                    </FieldLabel>
                    <Input
                      {...field}
                      id="phone"
                      type={"tel"}
                      aria-invalid={fieldState.invalid}
                      disabled={form.formState.isSubmitting}
                      maxLength={11}
                      tabIndex={3}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="status"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="status">
                      Status
                      <span className="text-red-400">&#42;</span>
                    </FieldLabel>
                    <Select
                      name={field.name}
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent
                        id="status"
                        aria-invalid={fieldState.invalid}
                      >
                        <SelectItem value={"Active"}>Active</SelectItem>
                        <SelectItem value={"Inactive"}>Inactive</SelectItem>
                      </SelectContent>
                    </Select>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="date_registered"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="date_registered">
                      Date Registered
                      <span className="text-red-400">&#42;</span>
                    </FieldLabel>
                    <DatePicker
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="Set date registered"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <FieldSeparator />
              <Field orientation={"horizontal"} className="justify-end">
                <Button
                  variant={"outline"}
                  type={"reset"}
                  form="edit-volunteer-form"
                  onClick={() => form.reset()}
                >
                  <IconRestore />
                  Reset
                </Button>
                <Button type={"submit"} form="edit-volunteer-form">
                  <IconUserPlus />
                  Add Volunteer
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
