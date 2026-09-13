'use client'

import Container from "@/app/Container"
import Logo from "./Logo"
import Search from "./Search"
import UserMenu from "./UserMenu"
import { User } from "@/app/generated/prisma/client"

interface NavbarProps {
  currentUser?: User | null;
}

const Navbar: React.FC<NavbarProps> = ({
  currentUser
}) => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <Container>
        <div className="flex justify-between items-center flex-row py-4 gap-3 md:gap-0">
          <Logo />
          <Search />
          <UserMenu currentUser={currentUser}/>
        </div>
      </Container>
    </div>
  )
}

export default Navbar
