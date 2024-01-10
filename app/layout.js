import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionWrapper from "@/components/SessionWrapper";
import ReduxProvider from "@/components/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <SessionWrapper>
      <ReduxProvider>

      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
      </ReduxProvider>
    </SessionWrapper>
  );
}
