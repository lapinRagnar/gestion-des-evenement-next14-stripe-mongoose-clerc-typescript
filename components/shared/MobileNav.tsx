import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import NavItems from "@/components/shared/NavItems"


const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image 
            src={"/assets/icons/menu.svg"}
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent 
          className="flex flex-col gap-6 md:hidden
          bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-pink-950 via-slate-600 to-black-500
          w-[230px]
          "
        
        >
          <Image 
            src={"/assets/images/logo.svg"}
            alt="logo"
            width={128}
            height={38}
          />

          <Separator className="border border-orange-200 border- " />

          <NavItems />

        </SheetContent>
      </Sheet>

    </nav>
  )
}

export default MobileNav