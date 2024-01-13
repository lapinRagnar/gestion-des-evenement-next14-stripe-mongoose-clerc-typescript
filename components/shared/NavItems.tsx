'use client'


import { headerLinks } from "@/constants"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavItems = () => {

  const pathname = usePathname()
  
  return ( 
    <ul className="md:flex-between flex w-full flex-col items-start gap-11 md:flex-row">
      {headerLinks.map((link, index) => {

        const isActive = pathname === link.route

        return (
          <li 
            key={index}
            className={`${isActive && "scale-125 text-bold uppercase bg-emerald-700 px-12 rounded-sm text-gray-300"} flex-center p-medium-16 whitespace-nowrap `}
          >
            <Link className="text-gray-300" href={link.route}>{link.label}</Link>
          </li>
        )
      } )}
    </ul>
  )
}

export default NavItems