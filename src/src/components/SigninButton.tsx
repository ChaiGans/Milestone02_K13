"use client"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

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
              className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-yellow-600 hover:cursor-pointer"
            >
              Upload
            </Link>
          </li>
          <li>
            <Popover>
              <PopoverTrigger className="hover:text-slate-300">
                <CgProfile size={38} />
              </PopoverTrigger>
              <PopoverContent className="w-32">
                <div className="text-center flex flex-col">
                  <Link
                    href={`/profile/${session.user.id}`}
                    className="hover:bg-background hover:text-foreground p-2"
                  >
                    Profile
                  </Link>
                  <hr />
                  <button
                    onClick={() => signOut()}
                    className="hover:bg-background hover:text-foreground p-2"
                  >
                    Sign Out
                  </button>
                </div>
              </PopoverContent>
            </Popover>
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
