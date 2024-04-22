"use client"

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { MdMenuOpen } from "react-icons/md";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Sidebar() {
  const pathname = usePathname()

  const links = [
    { name: "Account Info", check: "/profile"},
    { name: "Change Email", check: "/profile/reset-email"},
    { name: "Password", check: "/profile/reset-password"}
  ]
  return (
     <Sheet>
      <SheetTrigger className="m-4">
       <div />
       <div>
        <MdMenuOpen fontSize={24} />
       </div>
      </SheetTrigger>
      <SheetContent className="bg-[#EEEEEE]">
       <SheetHeader>
        <SheetTitle>Account Settings</SheetTitle>
        <ul className="flex flex-col gap-5 mt-5">
         {links.map(link => (
          <Link
           key={link.check}
           className={`${pathname == link.check && "font-extrabold"}`}
           href={`${link.check}`}
          >
           {link.name}
          </Link>
         ))}
        </ul>
       </SheetHeader>
      </SheetContent>
     </Sheet>
  )
}
