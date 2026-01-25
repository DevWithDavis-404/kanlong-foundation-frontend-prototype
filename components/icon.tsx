'use client';

import { TablerIcon } from "@tabler/icons-react";

interface IconProps {
  iconNode?: TablerIcon;
  className?: string;
}

export function Icon({ iconNode: IconComponent, className }: IconProps) {
  if (!IconComponent) {
    return null;
  }

  return <IconComponent className={className} />;
}
