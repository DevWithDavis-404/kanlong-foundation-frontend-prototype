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
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconPlus, IconRestore } from "@tabler/icons-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod/v3";

const paymentMethods = [
  { label: "GCash", value: "GCash" },
  { label: "Maya", value: "Maya" },
  { label: "GOtyme", value: "GOtyme" },
  { label: "BDO", value: "BDO" },
  { label: "BPI", value: "BPI" },
  { label: "Other", value: "Other" },
];

export function CreateDonationDialog() {
  // Dialog State
  const [open, setOpen] = useState<boolean>(false);

  // Form disabled state
  const [disabled, setDisabled] = useState<boolean>(false);

  // Form Schema Definition
  const formSchema = z.object({
    donor_name: z.string().nonempty("Name is required"),
    donor_email: z.string().email("Enter a valid email address"),
    donor_phone: z
      .string()
      .length(11, "Phone number must be exactly 11 digits")
      .startsWith("09", "Phone number must start with '09'")
      .nonempty("Phone number is required"),
    donor_address_line_1: z.string().max(256, "").optional(),
    donor_address_line_2: z.string().max(256, "").optional(),
    amount: z.coerce
      .number()
      .nonnegative("Amount should not be a negative number"),
    payment_method: z.enum(["GCash", "Maya", "GOtyme", "BDO", "BPI", "Other"]),
    date_donated: z.date(),
  });

  // React Hook Form Definition
  const {
    handleSubmit,
    reset,
    control,
    formState: { isSubmitting },
  } = useForm<z.infer<typeof formSchema>>({
    disabled,
    resolver: zodResolver(formSchema),
    defaultValues: {
      donor_name: "",
      donor_email: "",
      donor_phone: "",
      donor_address_line_1: "",
      donor_address_line_2: "",
      amount: 0,
      payment_method: "GCash",
      date_donated: new Date(),
    },
  });

  // Submit Handler
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    setDisabled(true);
    console.log(data);
    toast.success("(Test) Donation added successfully");
    reset();
    setDisabled(false);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button>
            <IconPlus />
            Add new
          </Button>
        }
      />
      <DialogContent className={"md:min-w-lg"}>
        <DialogHeader>
          <DialogTitle>Add New Donation Form</DialogTitle>
          <DialogDescription>
            Fields with <span className='text-red-400'>&#42;</span> are
            required.
          </DialogDescription>
        </DialogHeader>
        {/* Form */}
        <div className={"-mx-4 max-h-[80svh] overflow-y-auto px-4"}>
          <form id='add-donation-form' onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              <FieldSet>
                <FieldLegend>Donor Information</FieldLegend>
                <FieldDescription>
                  Please fill in the informations of the donor.
                </FieldDescription>
                <FieldGroup className='grid md:grid-cols-2'>
                  <Controller
                    name='donor_name'
                    control={control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor='donor_name'>
                          Name
                          <span className='text-red-400'>&#42;</span>
                        </FieldLabel>
                        <Input
                          {...field}
                          id='donor_name'
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
                    name='donor_email'
                    control={control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor='donor_email'>
                          Email
                          <span className='text-red-400'>&#42;</span>
                        </FieldLabel>
                        <Input
                          {...field}
                          id='donor_email'
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
                    name='donor_phone'
                    control={control}
                    render={({ field, fieldState }) => (
                      <Field
                        className='md:col-span-2'
                        data-invalid={fieldState.invalid}
                      >
                        <FieldLabel htmlFor='donor_phone'>
                          Phone
                          <span className='text-red-400'>&#42;</span>
                        </FieldLabel>
                        <Input
                          {...field}
                          id='donor_phone'
                          type={"tel"}
                          aria-invalid={fieldState.invalid}
                          disabled={isSubmitting}
                          placeholder='Format: 09XX-XXX-XXXX'
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
                    name='donor_address_line_1'
                    control={control}
                    render={({ field, fieldState }) => (
                      <Field
                        className='md:col-span-2'
                        data-invalid={fieldState.invalid}
                      >
                        <FieldLabel htmlFor='donor_address_line_1'>
                          Address Line 1
                        </FieldLabel>
                        <Input
                          {...field}
                          id='donor_address_line_1'
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
                    name='donor_address_line_2'
                    control={control}
                    render={({ field, fieldState }) => (
                      <Field
                        className='md:col-span-2'
                        data-invalid={fieldState.invalid}
                      >
                        <FieldLabel htmlFor='donor_address_line_2'>
                          Address Line 2
                        </FieldLabel>
                        <Input
                          {...field}
                          id='donor_address_line_2'
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
                </FieldGroup>
              </FieldSet>
              <FieldSeparator />
              <FieldSet>
                <FieldLegend>Donation Information</FieldLegend>
                <FieldDescription>
                  Please fill in the informations of the donation.
                </FieldDescription>
                <FieldGroup>
                  <div className='grid gap-7 md:grid-cols-2'>
                    <Controller
                      name='amount'
                      control={control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel htmlFor='amount'>
                            Amount
                            <span className='text-red-400'>&#42;</span>
                          </FieldLabel>
                          <Input
                            {...field}
                            id='amount'
                            type={"number"}
                            aria-invalid={fieldState.invalid}
                            onChange={(e) =>
                              field.onChange(Number(e.target.value))
                            }
                            tabIndex={5}
                          />
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />
                    <Controller
                      name='payment_method'
                      control={control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel htmlFor='payment_method'>
                            Payment Method
                            <span className='text-red-400'>&#42;</span>
                          </FieldLabel>
                          <Select
                            name={field.name}
                            value={field.value}
                            onValueChange={field.onChange}
                            items={paymentMethods}
                          >
                            <SelectTrigger
                              id='payment_method'
                              aria-invalid={fieldState.invalid}
                            >
                              <SelectValue placeholder='' />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                {paymentMethods.map((method) => (
                                  <SelectItem
                                    key={method.value}
                                    value={method.value}
                                  >
                                    {method.label}
                                  </SelectItem>
                                ))}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />
                  </div>
                  <Controller
                    name='date_donated'
                    control={control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor='date_donated'>
                          Date Donated
                          <span className='text-red-400'>&#42;</span>
                        </FieldLabel>
                        <DatePicker
                          value={field.value}
                          onChange={field.onChange}
                          placeholder='Set date donated'
                        />
                      </Field>
                    )}
                  />
                </FieldGroup>
              </FieldSet>
              <FieldSeparator />
              <Field orientation={"horizontal"} className='justify-end'>
                <Button
                  variant={"outline"}
                  type={"reset"}
                  form='add-donation-form'
                  onClick={() => reset()}
                >
                  <IconRestore />
                  Reset
                </Button>
                <Button type={"submit"} form='add-donation-form'>
                  <IconPlus />
                  Add donation
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
