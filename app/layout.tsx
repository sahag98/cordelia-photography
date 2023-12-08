import type { Metadata } from "next";
import { Crimson_Text } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const crimson = Crimson_Text({
  style: ["normal", "italic"],
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cordelia Faith Photography",
  description: "Making Stories Known",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={crimson.className}>
        <div className="min-h-[100dvh] flex flex-col justify-between">
          <Navbar />
          <div>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
