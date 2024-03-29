import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer>
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href={'/'}>
          <Image src={'/assets/images/logo.svg'} alt="logo" width={128} height={38} />
        </Link>
        <p className="text-gray-400 text-xs">© 2024 lapinragnar@ All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer