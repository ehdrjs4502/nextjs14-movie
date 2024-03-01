import "./_styles/globals.css";
import { Metadata } from "next";
import Navigation from "./_components/navigation";
import { NextAuthProvider } from "./provider";

export const metadata: Metadata = {
  title: {
    template: "%s | Next.js 14 Learn",
    default: "Next.js 14 Learn",
  },
  description: "Generated by Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          <Navigation />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
