"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"

function SigninButton() {
  const { data: session } = useSession()
  if (session && session.user) {
    return (
      <div>
        <ul className="flex gap-2 sm:gap-8 md:gap-16 lg:gap-24 items-center">
          <li>{session.user.name}</li>
          <li>
            <button onClick={() => signOut()}>Sign Out</button>
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
            href="#"
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
