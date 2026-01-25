"use client";

export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  status?: string;
  avatar?: string;
  created_at: string;
};

export type Donation = {
  id: number;
  donor: User;
  amount: string;
  payment_method: string;
  date_donated: string;
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
