import { Fragment } from "react/jsx-runtime";
import { GuestNavbar } from "./_components/navbar";

export default function GuestsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Fragment>
      <GuestNavbar />
      {children}
    </Fragment>
  );
}
