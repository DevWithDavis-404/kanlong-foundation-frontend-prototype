import { EmptyState } from "@/components/empty-state";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { messages } from "@/data/messages";
import {
  IconMail,
  IconMailOpened,
  IconStar,
  IconTrash,
} from "@tabler/icons-react";
import MessageDropdownMenu from "./_components/message-dropdown-menu";

export default function AdminInboxPage() {
  const unreadMessagesCount = messages.filter((m) => m.read === false).length;
  const readMessagesCount = messages.filter((m) => m.read === true).length;
  return (
    <Card>
      <CardHeader>
        <CardTitle>Inbox</CardTitle>
        <CardDescription>Manage messages</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue={"unread"} orientation={"horizontal"}>
          <TabsList
            className={
              "no-scrollbar max-w-80 overflow-x-auto ps-4 md:max-w-100 md:p-0"
            }
          >
            <TabsTrigger value={"unread"}>
              <IconMail />
              Unread
              <Badge>{unreadMessagesCount}</Badge>
            </TabsTrigger>
            <TabsTrigger value={"read"}>
              <IconMailOpened />
              Read
              <Badge>{readMessagesCount}</Badge>
            </TabsTrigger>
            <TabsTrigger value={"starred"}>
              <IconStar />
              Starred
            </TabsTrigger>
            <TabsTrigger value={"trash"}>
              <IconTrash />
              Trash
            </TabsTrigger>
          </TabsList>
          <TabsContent value={"unread"}>
            <ItemGroup>
              {messages
                .filter((message) => message.read === false)
                .map((message) => (
                  <Item key={message.id} variant={"outline"}>
                    <ItemMedia variant={"icon"}>
                      <IconMailOpened />
                    </ItemMedia>
                    <ItemContent>
                      <ItemTitle>{message.subject}</ItemTitle>
                      <ItemDescription>
                        {message.date_submitted}
                      </ItemDescription>
                    </ItemContent>
                    <ItemActions>
                      <MessageDropdownMenu message={message} />
                    </ItemActions>
                  </Item>
                ))}
            </ItemGroup>
          </TabsContent>
          <TabsContent value={"read"}>
            <ItemGroup>
              {messages
                .filter((message) => message.read === true)
                .map((message) => (
                  <Item key={message.id} variant={"outline"}>
                    <ItemMedia variant={"icon"}>
                      <IconMailOpened />
                    </ItemMedia>
                    <ItemContent>
                      <ItemTitle>{message.subject}</ItemTitle>
                      <ItemDescription>
                        {message.date_submitted}
                      </ItemDescription>
                    </ItemContent>
                    <ItemActions>
                      <MessageDropdownMenu message={message} />
                    </ItemActions>
                  </Item>
                ))}
            </ItemGroup>
          </TabsContent>
          <TabsContent value={"starred"}>
            {/* Empty State */}
            <EmptyState
              title="No Starred Mail"
              description="Star messages to keep important conversations easy to find. Click the star icon next to any message to add it here."
              icon={<IconStar />}
            />
          </TabsContent>
          <TabsContent value={"trash"}>
            {/* Empty State */}
            <EmptyState
              title="No Trashed Mail"
              description="Deleted messages will appear here. Move a message to Trash to remove it from your inbox."
              icon={<IconTrash />}
            />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
