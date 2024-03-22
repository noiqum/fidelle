import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation/Navigation";

export const metadata: Metadata = {
  title: "Fidelle",
  description: "Fashion Persona",
};
const nunito = Nunito({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`main-layout ${nunito.className}`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
