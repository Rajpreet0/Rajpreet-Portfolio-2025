import type { Metadata } from "next";
import { Judson } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const judson = Judson({
  weight: '400',
  subsets: ["latin"]
});


export const metadata: Metadata = {
  title: "Rajpreet Singh",
  description: "Portfolio for Rajpreet Singh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${judson.className} antialiased`}
      >
        <main>{children}</main>
        <Toaster
          richColors />
      </body>
    </html>
  );
}
