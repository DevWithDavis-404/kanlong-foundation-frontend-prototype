"use client";

export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  status?: string;
  avatar?: string;
  donor_address_line_1: string;
  donor_address_line_2: string;
  created_at: string;
};

export type Donation = {
  id: number;
  donor: User;
  amount: number;
  payment_method: "GCash" | "Maya" | "GOtyme" | "BDO" | "BPI" | "Other";
  date_donated: Date;
};

export type Volunteer = {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: "Active" | "Inactive";
  created_at: string;
};

export type Message = {
  id: number;
  subject: string;
  message: string;
  sender: {
    name: string;
    email: string;
  };
  read: boolean;
  date_submitted: string;
};
