import { StreamVideoProvider } from "@/providers/StreamClientProviders";
import { ClerkProvider } from "@clerk/nextjs";
import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ClerkProvider>
      <StreamVideoProvider>
        <main>{children}</main>
      </StreamVideoProvider>
    </ClerkProvider>
  );
};

export default RootLayout;
