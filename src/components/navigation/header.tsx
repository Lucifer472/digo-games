"use client";

import { useEffect, useState } from "react";
import { MenuIcon, SearchIcon, XIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import Logo from "@/components/logo";
import { navLinks } from "@/config";

import ButtonLink from "../button-link";

export const Header = () => {
  const [scroll, setScroll] = useState(0);
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-30 ${
        (scroll > 50 || open) && "bg-[#020c17] border-b border-gray-800"
      }`}
    >
      <nav className="flex items-center justify-between px-4 xl:px-0 w-full max-w-screen-xl mx-auto min-h-[80px]">
        <Logo className="size-[60px]" />
        <div className="flex items-center justify-end gap-x-6">
          <ul className="hidden xl:flex items-center gap-x-4">
            {navLinks.map((nav) => (
              <li key={nav.link}>
                <ButtonLink
                  label={nav.label}
                  link={nav.link}
                  className={`${pathname === nav.link && "text-yellow-300"}`}
                />
              </li>
            ))}
          </ul>
          <Link
            href={"?search-modal=true"}
            className="flex items-center justify-center cursor-pointer"
          >
            <SearchIcon className="size-6 text-gray-50 hover:text-yellow-200 transition" />
          </Link>
          <button
            className="xl:hidden flex items-center justify-center bg-transparent"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>
      {open && (
        <aside className="border-t border-gray-800 p-4 flex items-center justify-center">
          <div className="flex items-center justify-center gap-y-4 flex-col">
            {navLinks.map((nav) => (
              <ButtonLink
                label={nav.label}
                link={nav.link}
                key={nav.link}
                className={`${pathname === nav.link && "text-yellow-300"}`}
              />
            ))}
          </div>
        </aside>
      )}
    </header>
  );
};
