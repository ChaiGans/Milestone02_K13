"use client"

import { CgProfile } from "react-icons/cg"
import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"

function SigninButton() {
  const { data: session } = useSession()
  if (session && session.user) {
    return (
      <div>
        <ul className="flex gap-2 sm:gap-8 md:gap-16 lg:gap-24 items-center">
          <li>
            <Link
              href="/upload"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-lg"
            >
              Upload
            </Link>
          </li>
          <li>
            <Link href="#" className="w-8 h-8">
              <CgProfile size={38} />
            </Link>
          </li>
        </ul>
      </div>
    )
  }
  return (
    <div>
      <ul className="flex gap-2 sm:gap-8 md:gap-16 lg:gap-24 items-center">
        <li>
          <button onClick={() => signIn()} className="hover:underline">
            Login
          </button>
        </li>
        <li>
          <Link
            href="/signup"
            className="hover:opacity-90 bg-primary text-primary-foreground px-8 py-3 rounded-lg"
          >
            Signup
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SigninButton
