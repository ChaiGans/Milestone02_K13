"use client"

import { signIn, signOut, useSession } from "next-auth/react"

function SigninButton() {
  const { data: session } = useSession()
  if (session && session.user){
    return (
      <div>
        <p>{session.user.name}</p>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    )
  }
  return (
    <button onClick={() => signIn()}>Login</button>
  )
}

export default SigninButton