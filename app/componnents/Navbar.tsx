import { MAIN_NAVIGATION } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={97} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {MAIN_NAVIGATION.map((link) => (
          <Link
            href={link.heref}
            key={link.title}
            className="text-gray-50 regular-16 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button type="button" title="Login" icon="/user.svg" variant="btn_dark_green"/>
      </div>
      <Image src="/menu.svg" alt="menu" height={32} width={32}
       className="inline-block cursor-pointer lg:hidden"/>
    </nav>
  );
};

export default Navbar;
