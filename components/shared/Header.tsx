import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import NavItems from "@/components/shared/NavItems"
import MobileNav from "@/components/shared/MobileNav"

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image src="/assets/images/logo.svg" alt="logo" width={128} height={38} />
        </Link>

        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-sm">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex w-32 justify-end gap3 "> 
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          
          <SignedOut>
            <Button asChild className="rounded-full" size={'lg'}>
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>

      </div>


    </header>
  )
}

export default Header