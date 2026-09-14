'use client'

import Container from "@/app/Container"
import Logo from "./Logo"
import Search from "./Search"
import UserMenu from "./UserMenu"
import { safeUser } from "@/app/types"
import Categories from "./Categories"


interface NavbarProps {
  currentUser?: safeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({
  currentUser
}) => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px] border-neutral-200">
      <Container>
        <div className="flex justify-between items-center flex-row gap-3 md:gap-0">
          <Logo />
          <Search />
          <UserMenu currentUser={currentUser}/>
        </div>
      </Container>
      </div>
      <Categories />
    </div>
  )
}

export default Navbar
