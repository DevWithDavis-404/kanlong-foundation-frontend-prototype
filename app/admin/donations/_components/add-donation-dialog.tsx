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
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IconPlus, IconRestore } from "@tabler/icons-react";
import z from "zod/v3";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useState } from "react";

const paymentMethods = [
  { label: "GCash", value: "GCash" },
  { label: "Maya", value: "Maya" },
  { label: "GOtyme", value: "GOtyme" },
  { label: "BDO", value: "BDO" },
  { label: "BPI", value: "BPI" },
];

export function CreateDonationDialog() {
  // Dialog State
  const [open, setOpen] = useState<boolean>(false);

  // Form Schema Definition
  const formSchema = z.object({
    donor_name: z.string().nonempty(),
    donor_email: z.string().email(),
    donor_phone: z.string().max(11, "").nonempty(),
    donor_address: z.string().max(256, "").nullable(),
    amount: z.coerce.number(),
    payment_method: z.enum(["GCash", "Maya", "GOtyme", "BDO", "BPI"]),
    date_donated: z.date(),
  });

  // React Hook Form Definition
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      donor_name: "",
      donor_email: "",
      donor_phone: "",
      donor_address: null,
      amount: 0,
      payment_method: "GCash",
      date_donated: new Date(),
    },
  });

  // Submit Handler
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    toast.success("(Test) Donation added successfully");
    form.reset();
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
            Fields with <span className="text-red-400">&#42;</span> are
            required.
          </DialogDescription>
        </DialogHeader>
        {/* Form */}
        <div className={"max-h-[60svh] overflow-y-auto -mx-4 px-4"}>
          <form id="add-donation-form" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              <FieldSet>
                <FieldLegend>Donor Information</FieldLegend>
                <FieldDescription>
                  Please fill in the informations of the donor.
                </FieldDescription>
                <FieldGroup className="grid md:grid-cols-2">
                  <Controller
                    name="donor_name"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="donor_name">
                          Name
                          <span className="text-red-400">&#42;</span>
                        </FieldLabel>
                        <Input
                          {...field}
                          id="donor_name"
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
                    name="donor_email"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field>
                        <FieldLabel htmlFor="donor_email">
                          Email
                          <span className="text-red-400">&#42;</span>
                        </FieldLabel>
                        <Input
                          {...field}
                          id="donor_email"
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
                    name="donor_phone"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field
                        className="md:col-span-2"
                        data-invalid={fieldState.invalid}
                      >
                        <FieldLabel htmlFor="donor_phone">
                          Phone
                          <span className="text-red-400">&#42;</span>
                        </FieldLabel>
                        <Input
                          {...field}
                          id="donor_phone"
                          type={"tel"}
                          aria-invalid={fieldState.invalid}
                          disabled={form.formState.isSubmitting}
                          tabIndex={3}
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                  <Controller
                    name="donor_address"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field
                        className="md:col-span-2"
                        data-invalid={fieldState.invalid}
                      >
                        <FieldLabel htmlFor="donor_address">
                          Address
                          <span className="text-red-400">&#42;</span>
                        </FieldLabel>
                        <InputGroup>
                          <InputGroupTextarea
                            id="donor_address"
                            name="donor_address"
                            rows={3}
                            maxLength={256}
                            value={field.value || ""}
                            onChange={field.onChange}
                            ref={field.ref}
                            aria-invalid={fieldState.invalid}
                            disabled={form.formState.isSubmitting}
                            tabIndex={4}
                          />
                          <InputGroupAddon align={"block-end"}>
                            <InputGroupText>
                              {field.value?.length} / 256 characters
                            </InputGroupText>
                          </InputGroupAddon>
                        </InputGroup>
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
                  <div className="grid md:grid-cols-2 gap-7">
                    <Controller
                      name="amount"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel htmlFor="amount">
                            Amount
                            <span className="text-red-400">&#42;</span>
                          </FieldLabel>
                          <Input
                            {...field}
                            id="amount"
                            type={"number"}
                            aria-invalid={fieldState.invalid}
                            disabled={form.formState.isSubmitting}
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
                      name="payment_method"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel htmlFor="payment_method">
                            Payment Method
                            <span className="text-red-400">&#42;</span>
                          </FieldLabel>
                          <Select
                            name={field.name}
                            value={field.value}
                            onValueChange={field.onChange}
                            items={paymentMethods}
                          >
                            <SelectTrigger
                              id="payment_method"
                              aria-invalid={fieldState.invalid}
                            >
                              <SelectValue placeholder="" />
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
                    name="date_donated"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="date_donated">
                          Date Donated
                          <span className="text-red-400">&#42;</span>
                        </FieldLabel>
                        <DatePicker
                          value={field.value}
                          onChange={field.onChange}
                          placeholder="Set date donated"
                        />
                      </Field>
                    )}
                  />
                </FieldGroup>
              </FieldSet>
              <FieldSeparator />
              <Field orientation={"horizontal"} className="justify-end">
                <Button
                  variant={"outline"}
                  type={"reset"}
                  form="add-donation-form"
                  onClick={() => form.reset()}
                >
                  <IconRestore />
                  Reset
                </Button>
                <Button type={"submit"} form="add-donation-form">
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
