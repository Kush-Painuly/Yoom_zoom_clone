import StreamVideoProvider from "@/providers/StreamClientProvider";
import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "CHIME - An Zoom Alternative",
  description:
    "Connect with Employees | Friends | Family | peoples all over the world with CHIME ",
  icons: {
    icon: "/icons/logo.svg",
  },
};


const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
