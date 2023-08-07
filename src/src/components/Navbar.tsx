import SigninButton from "./SigninButton"
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  return (
    <div className="flex justify-between mb-24 gap-4 font-poppins">
      <Link href="/" className="flex gap-8">
        <Image alt="Logo" src="/assets/Logo.svg" width={64} height={64} />
        <p className="text-2xl hidden sm:block self-center">
          Medals And Trophies
        </p>
      </Link>
      <SigninButton />
    </div>
  )
}
