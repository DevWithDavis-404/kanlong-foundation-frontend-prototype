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
    phone: z
      .string()
      .length(11, "Phone number must be exactly 11 digits")
      .startsWith("09", "Phone number must start with '09'")
      .nonempty("Phone number is required"),
    address_line_1: z.string().max(256, "").optional(),
    address_line_2: z.string().max(256, "").optional(),
    status: z.enum(["Active", "Inactive"]),
    date_registered: z.date(),
  });

  // React Hook Form Definition
  const {
    handleSubmit,
    reset,
    control,
    formState: { isSubmitting },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address_line_1: "",
      address_line_2: "",
      status: "Active",
      date_registered: new Date(),
    },
  });

  // Submit Handler
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    toast.success("(Test) Volunteer added successfully");
    reset();
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
            Fields with <span className='text-red-400'>&#42;</span> are
            required.
          </DialogDescription>
        </DialogHeader>
        <div className={"-mx-4 max-h-[60svh] overflow-y-auto px-4"}>
          <form id='edit-volunteer-form' onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              <Controller
                name='name'
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor='name'>
                      Name
                      <span className='text-red-400'>&#42;</span>
                    </FieldLabel>
                    <Input
                      {...field}
                      id='name'
                      type={"text"}
                      aria-invalid={fieldState.invalid}
                      disabled={isSubmitting}
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
                name='email'
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor='email'>
                      Email
                      <span className='text-red-400'>&#42;</span>
                    </FieldLabel>
                    <Input
                      {...field}
                      id='email'
                      type={"email"}
                      aria-invalid={fieldState.invalid}
                      disabled={isSubmitting}
                      tabIndex={2}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name='phone'
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor='phone'>
                      Phone
                      <span className='text-red-400'>&#42;</span>
                    </FieldLabel>
                    <Input
                      {...field}
                      id='phone'
                      type={"tel"}
                      aria-invalid={fieldState.invalid}
                      disabled={isSubmitting}
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
                name='address_line_1'
                control={control}
                render={({ field, fieldState }) => (
                  <Field
                    className='md:col-span-2'
                    data-invalid={fieldState.invalid}
                  >
                    <FieldLabel htmlFor='address_line_1'>
                      Address Line 1
                    </FieldLabel>
                    <Input
                      {...field}
                      id='address_line_1'
                      maxLength={256}
                      aria-invalid={fieldState.invalid}
                      disabled={isSubmitting}
                      tabIndex={4}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name='address_line_2'
                control={control}
                render={({ field, fieldState }) => (
                  <Field
                    className='md:col-span-2'
                    data-invalid={fieldState.invalid}
                  >
                    <FieldLabel htmlFor='address_line_2'>
                      Address Line 2
                    </FieldLabel>
                    <Input
                      {...field}
                      id='address_line_2'
                      maxLength={256}
                      aria-invalid={fieldState.invalid}
                      tabIndex={4}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name='status'
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor='status'>
                      Status
                      <span className='text-red-400'>&#42;</span>
                    </FieldLabel>
                    <Select
                      name={field.name}
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder='Select status' />
                      </SelectTrigger>
                      <SelectContent
                        id='status'
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
                name='date_registered'
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor='date_registered'>
                      Date Registered
                      <span className='text-red-400'>&#42;</span>
                    </FieldLabel>
                    <DatePicker
                      value={field.value}
                      onChange={field.onChange}
                      placeholder='Set date registered'
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <FieldSeparator />
              <Field orientation={"horizontal"} className='justify-end'>
                <Button
                  variant={"outline"}
                  type={"reset"}
                  form='edit-volunteer-form'
                  onClick={() => reset()}
                >
                  <IconRestore />
                  Reset
                </Button>
                <Button type={"submit"} form='edit-volunteer-form'>
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
