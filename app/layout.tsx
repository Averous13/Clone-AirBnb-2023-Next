import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ToasterProvider from "./providers/ToasterProvider";

import RegisterModal from "./components/modal/RegisterModal";
import LoginModal from "./components/modal/LoginModal";
import RentModal from "./components/modal/RentModal";

import getCurrentUser from "./actions/getCurrentUser";


const font = Nunito(
  {subsets: ['latin']}
)

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Clone simple airbnb",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const currentUser = await getCurrentUser();
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className={`${font.className} min-h-full flex flex-col`}>
        <ToasterProvider />
        <RentModal />
        <LoginModal />
        <RegisterModal/>
        <Navbar currentUser={currentUser}/>

        <div className="pb-20 pt-28">
          {children}
        </div>
      </body>
    </html>
  );
}
