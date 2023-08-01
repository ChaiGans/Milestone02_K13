import SigninButton from "./SigninButton"
import Link from "next/link"

export default function Navbar() {
  return (
    <div className="flex justify-between mb-24 gap-4">
      <Link href="/">
        <p className="text-2xl  sm:text-4xl">SPARTA</p>
      </Link>
      <SigninButton />
    </div>
  )
}
