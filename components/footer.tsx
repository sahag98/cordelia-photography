import { Instagram } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="h-16 px-2 w-full bg-background lg:px-20 py-5 flex items-center justify-between">
      <span className="font-normal text-sm md:text-base">
        © 2023 ALL RIGHTS RESERVED.
      </span>
      <section className="flex cursor-pointer items-center gap-3">
        <Link
          href="https://www.instagram.com/cordelia.faith.photography/"
          target="blank"
          className="bg-secondary rounded-full p-2"
        >
          <Instagram className="text-accent" />
        </Link>
        {/* <span className="italic text-xs md:text-base">
          cordelia.faith.photography
        </span> */}
      </section>
      {/* <span></span> */}
    </footer>
  );
};

export default Footer;
