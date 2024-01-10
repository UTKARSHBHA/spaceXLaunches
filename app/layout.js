import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionWrapper from "@/components/SessionWrapper";
import ReduxProvider from "@/components/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SpaceX Launch",
  description: "Launch Dashboard for SpaceX",
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
