import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { donations } from "@/data/donations";
import { DonationsDataTable } from "./_components/donations-data-table";
import { CreateDonationDialog } from "./_components/add-donation-dialog";

export default function AdminDonationsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>All Donations</CardTitle>
        <CardDescription>Manage donation informations</CardDescription>
        <CardAction>
          <CreateDonationDialog />
        </CardAction>
      </CardHeader>
      <CardContent>
        <DonationsDataTable data={donations} />
      </CardContent>
    </Card>
  );
}
