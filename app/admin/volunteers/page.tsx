import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { VolunteersDataTable } from "./_components/volunteers-data-table";
import { AddVolunteerDialog } from "./_components/add-volunteer-dialog";
import { volunteers } from "@/data/volunteers";

export default function AdminVolunteersPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>All Volunteers</CardTitle>
        <CardDescription>Manage volunteer&apos;s informations</CardDescription>
        <CardAction>
          <AddVolunteerDialog />
        </CardAction>
      </CardHeader>
      <CardContent>
        <VolunteersDataTable data={volunteers} />
      </CardContent>
    </Card>
  );
}
