"use client";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  usePathname,
  useRouter,
  useSelectedLayoutSegment,
} from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import logo from "@/app/favicon.ico";

const links = [
  {
    icon: "H",
    text: "Home",
    href: "/",
  },
  {
    icon: "S",
    text: "Skills",
    href: "/#sk",
  },
  {
    icon: "P",
    text: "Project",
    href: "/#pr",
  },
  {
    icon: "W",
    text: "Writings",
    href: "/writings",
  },
  {
    icon: "S",
    text: "Socials",
    href: "/#footer",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const activeSegment = useSelectedLayoutSegment();

  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const closeMenu = () => {
    setOpen(false);
  };
  return (
    <div>
      <nav className="flex sm:flex-col justify-between w-full md:items-center bg-white p-4 fixed z-10 ">
        <span className="md:hidden mt-1">
          <Link href={"/"}>
            <Image src={logo} alt="logo" width={32} height={32} />
          </Link>
        </span>

        <div className="md:hidden">
          <DropdownMenu
            open={isOpen}
            onOpenChange={setOpen}
            className="md:hidden"
          >
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {links.map((link) => (
                <DropdownMenuItem className="list-item" key={link.text}>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    onHoverStart={(e) => {}}
                    onHoverEnd={(e) => {}}
                    whileTap={{ scale: 0.8 }}
                  >
                    <Link
                      onClick={closeMenu}
                      href={link.href}
                      className={cn(
                        "text-[#161d35] leading-6 font-semibold text-sm p-2 rounded-md gap-x-3 flex decoration-inherit hover:bg-gray-50 px-3 py-2",
                        link.text === activeSegment && "font-bold bg-gray-50",
                      )}
                    >
                      <span className="text-gray-400 font-medium text-[0.625rem] bg-white border-gray-200 border rounded-lg justify-center items-center shrink-0 w-6 h-6 flex">
                        {link.icon}
                      </span>
                      <span className="text-ellipsis overflow-hidden whitespace-nowrap">
                        {link.text}
                      </span>
                    </Link>
                  </motion.div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <ul
          role="list"
          className="md:mt-2 md:-mx-2 md:list-none md:list-inside md:flex hidden"
        >
          {links.map((link) => (
            <li key={link.text}>
              <motion.div
                whileHover={{ scale: 1.2 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
                whileTap={{ scale: 0.8 }}
              >
                <Link
                  className={`${
                    link.href === pathname ? "text-[#161d35] font-bold" : ""
                  }text-[#161d35] leading-6 font-semibold text-sm p-2 rounded-md gap-x-3 flex decoration-inherit hover:text-[#161d35]`}
                  href={link.href}
                >
                  <span className="text-gray-400 font-medium text-[0.625rem] bg-white border-gray-200 border rounded-lg justify-center items-center shrink-0 w-6 h-6 flex">
                    {link.icon}
                  </span>
                  <span className="text-ellipsis overflow-hidden whitespace-nowrap">
                    {link.text}
                  </span>
                </Link>
              </motion.div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
