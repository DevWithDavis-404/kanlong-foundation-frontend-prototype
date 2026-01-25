import { TablerIcon } from "@tabler/icons-react";
import { LinkProps } from "next/link";

export type NavItem = {
  title: string;
  url: NonNullable<LinkProps["href"]>;
  icon?: TablerIcon | null;
};

type NavGroup = {
  label: string;
  items: NavItem[];
};

export type BreadcrumbItem = {
  title: string;
  href: NonNullable<LinkProps["href"]>;
};

export type CardItem = {
  label: string;
  value: string;
  icon: TablerIcon;
  color: "default" | "success" | "info" | "warning" | "error";
};

export type DataTable = {
  title: string;
  header: string[];
  // data
};

export type FormFieldGroup = {
  legend: string;
  description: string;
  items: {
    label: string;
    input: React.ReactElement;
    required?: boolean;
  }[];
};
