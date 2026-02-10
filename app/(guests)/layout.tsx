import { Fragment } from "react/jsx-runtime";
import { GuestFooter } from "./_components/footer";
import { GuestNavbar } from "./_components/navbar";

export default function GuestsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Fragment>
      <GuestNavbar />
      <main className='bg-green-800 p-4 text-white xl:p-0 dark:bg-green-700/50'>
        {children}
      </main>
      <GuestFooter />
    </Fragment>
  );
}
