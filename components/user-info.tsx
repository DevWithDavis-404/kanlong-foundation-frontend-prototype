"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useInitials } from "@/hooks/use-initials";
import { User } from "@/types/models";

export function UserInfo({
  user,
  showEmail = true,
}: {
  user: User;
  showEmail?: boolean;
}) {
  const getInitials = useInitials();
  return (
    <div className="flex items-center gap-2">
      <Avatar className="h-8 w-8 overflow-hidden rounded-full">
        <AvatarImage src={user.avatar} alt={getInitials(user.name)} />
        <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
      </Avatar>
      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="font-medium">{user.name}</span>
        {showEmail && (
          <span className="text-xs text-muted-foreground">
            {user.email}
          </span>
        )}
      </div>
    </div>
  );
}
