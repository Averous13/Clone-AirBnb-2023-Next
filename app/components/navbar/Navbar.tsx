'use client'

import Container from "@/app/Container"
import Logo from "./Logo"
import Search from "./Search"
import UserMenu from "./UserMenu"

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <Container>
        <div className="flex justify-between items-center flex-row py-4 gap-3 md:gap-0">
          <Logo />
          <Search />
          <UserMenu />
        </div>
      </Container>
    </div>
  )
}

export default Navbar
