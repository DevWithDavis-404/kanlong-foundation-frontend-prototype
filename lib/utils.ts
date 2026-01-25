import { clsx, type ClassValue } from "clsx";
import { LinkProps } from "next/link";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isSameUrl(
  currentPath: string,
  url: NonNullable<LinkProps["href"]>,
): boolean {
  const normalizedCurrent = currentPath.replace(/\/$/, "");
  const normalizedHref = normalizePath(url);

  return (
    normalizedCurrent === normalizedHref ||
    normalizedCurrent.startsWith(normalizedHref + "/")
  );
}

export function normalizePath(href: NonNullable<LinkProps["href"]>): string {
  if (typeof href === "string") {
    return href.split("?")[0].replace(/\/$/, "");
  }

  return (href.pathname ?? "").split("?")[0].replace(/\/$/, "");
}
