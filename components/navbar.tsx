import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between lg:px-20 py-0 pr-2 items-center  w-full">
      <Image
        src="/navbar-logo.png"
        width={278}
        className="w-44 md:w-52"
        height={118}
        alt="navbar-logo"
      />
      <ul className="hidden md:flex items-center gap-7">
        <Link
          href="/"
          className="cursor-pointer transition-colors hover:text-accent"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="cursor-pointer transition-colors hover:text-accent"
        >
          About
        </Link>
        <Link
          href="/portfolio"
          className="cursor-pointer transition-colors hover:text-accent"
        >
          Portfolio
        </Link>
        <Link
          href="/investment"
          className="cursor-pointer transition-colors hover:text-accent"
        >
          Investment
        </Link>
      </ul>
      <Button className="font-semibold hidden md:flex">Book Now</Button>
      <Menu className="w-8 h-8 md:hidden text-primary" />
    </nav>
  );
};

export default Navbar;
