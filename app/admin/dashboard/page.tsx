import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CardItem } from "@/types/global";
import {
  IconHeartHandshake,
  IconUserHeart,
  IconUsers,
} from "@tabler/icons-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { donations } from "@/data/donations";
import { volunteers } from "@/data/volunteers";

const cardItems: CardItem[] = [
  {
    label: "Donations",
    value: "$10,000",
    icon: IconHeartHandshake,
    color: "info",
  },
  {
    label: "Donors",
    value: "1000",
    icon: IconUserHeart,
    color: "success",
  },
  {
    label: "Volunteers",
    value: "1000",
    icon: IconUsers,
    color: "warning",
  },
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-3">
        {cardItems.map((item) => (
          <Card key={item.label}>
            <CardHeader>
              <CardTitle>{item.label}</CardTitle>
              <CardDescription>{item.value}</CardDescription>
              <CardAction>{item.icon && <item.icon />}</CardAction>
            </CardHeader>
          </Card>
        ))}
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Donations</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Donor</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Date Donated</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {donations.slice(0, 5).map((data) => (
                  <TableRow key={data.id}>
                    <TableCell>{data.id}</TableCell>
                    <TableCell>{data.donor.name}</TableCell>
                    <TableCell>{data.amount}</TableCell>
                    <TableCell>{data.date_donated}</TableCell>
                    <TableCell>
                      <Button>View</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Volunteers</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Volunteer</TableHead>
                  <TableHead>Date Registered</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {volunteers.slice(0, 5).map((data) => (
                  <TableRow key={data.id}>
                    <TableCell>{data.id}</TableCell>
                    <TableCell>{data.name}</TableCell>
                    <TableCell>
                      {new Date(data.created_at).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <Button>View</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
