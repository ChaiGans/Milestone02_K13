"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"

function SigninButton() {
  const { data: session } = useSession()
  if (session && session.user) {
    return (
      <>
        <li>{session.user.name}</li>
        <li>
          <button onClick={() => signOut()}>Sign Out</button>
        </li>
      </>
    )
  }
  return (
    <>
      <li>
        <button onClick={() => signIn()} className="hover:underline">
          Login
        </button>
      </li>
      <li>
        <Link
          href="/"
          className="hover:opacity-90 bg-primary text-primary-foreground px-8 py-3 rounded-lg"
        >
          Signup
        </Link>
      </li>
    </>
  )
}

export default SigninButton
