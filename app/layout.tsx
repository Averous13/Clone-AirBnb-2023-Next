import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import RegisterModal from "./components/modal/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";

const font = Inter(
  {subsets: ['latin']}
)

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Clone simple airbnb",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className={`${font.className} min-h-full flex flex-col`}>
        <ToasterProvider />
        <RegisterModal/>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
