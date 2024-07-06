import { StreamVideoProvider } from "@/providers/StreamClientProviders";
import { ClerkProvider } from "@clerk/nextjs";
import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Yotor Zoom",
  description: "This is zoom clone site for yotor bootcamp",
  icons: {
    icon: "/icons/logo.svg",
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <StreamVideoProvider>
      <main>{children}</main>
    </StreamVideoProvider>
  );
};

export default RootLayout;
