"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";

import { AnimatePresence, motion, useCycle } from "framer-motion";
import MobileNav from "./mobileNav";

const links = [
  { name: "Home", to: "#", id: 1 },
  { name: "About", to: "#", id: 2 },
  { name: "Blog", to: "#", id: 3 },
  { name: "Contact", to: "#", id: 4 },
];

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const Navbar = () => {
  const [open, cycleOpen] = useCycle(false, true);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // const toggleNav = () => {
  //   setNavOpen(!isNavOpen);
  // };

  // const closeNav = () => {
  //   setNavOpen(false);
  // };

  return (
    <nav className="flex justify-between relative lg:px-20 pr-2 py-0 items-center  w-full">
      <Link href="/">
        <Image
          src="/navbar-logo.png"
          width={278}
          className="w-44 md:w-52"
          height={118}
          alt="navbar-logo"
        />
      </Link>
      <ul className="hidden md:flex items-center gap-7">
        <Link
          href="/"
          className="cursor-pointer text-lg transition-colors hover:text-accent"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="cursor-pointer text-lg transition-colors hover:text-accent"
        >
          About
        </Link>
        <Link
          href="/portfolio"
          className="cursor-pointer text-lg transition-colors hover:text-accent"
        >
          Portfolio
        </Link>
        <Link
          href="/investment"
          className="cursor-pointer text-lg transition-colors hover:text-accent"
        >
          Investment
        </Link>
      </ul>
      <div className="lg:hidden">
        <MobileNav
          mobileNavOpen={mobileNavOpen}
          setMobileNavOpen={setMobileNavOpen}
        />
        <Menu
          onClick={() => setMobileNavOpen(true)}
          className="w-8 h-8 md:hidden text-primary"
        />
      </div>
      {/* <AnimatePresence>
        {open && (
          <motion.aside
            className=" bg-white fixed left-0 z-10 h-52 w-32"
            initial={{ width: 0 }}
            animate={{
              width: 300,
            }}
            exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.3 },
            }}
          >
            <motion.div
              className="bg-blue-400 w-10 h-10"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              {links.map(({ name, to, id }) => (
                <motion.a
                  className="text-green-400 z-20 relative"
                  key={id}
                  href={to}
                  whileHover={{ scale: 1.1 }}
                  variants={itemVariants}
                >
                  {name}
                </motion.a>
              ))}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence> */}
      <Link href="/contact">
        <Button className="font-semibold hidden md:flex">Get In Touch</Button>
      </Link>
    </nav>
  );
};

export default Navbar;
