"use client";

import Image from "next/image";

export function AppLogoIcon() {
  return (
    <div className="aspect-square size-8">
      <Image
        src="/assets/logo-icon.png"
        alt="Logo"
        width={80}
        height={80}
        // fill
        className="size-8 rounded-md"
      />
    </div>
  );
}
