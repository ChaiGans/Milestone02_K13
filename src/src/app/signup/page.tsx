"use client"

import Link from "next/link"
import { useState } from "react"

import { signIn } from "next-auth/react"

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (data.password === data.confirmPassword) {
      const { confirmPassword, ...postBody } = data
      await fetch("/api/user", {
        method: "POST",
        body: JSON.stringify(postBody),
      })
      await signIn("credentials", {
        username: data.username,
        password: data.password,
        redirect: true,
        callbackUrl: "/",
      })
    } else {
      alert("Passwords do not match")
    }
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <div className="container mx-auto p-4 max-w-lg rounded-lg bg-white min-h-fit text-black">
        <div className="container mx auto p-0 my-5 text-center">
          <h1 className="text-center font-poppinsbold text-4xl sm:text-5xl xl:text-[50px]  ">
            Sign Up
          </h1>
        </div>
        <div className="flex flex-col ">
          <input
            type="text"
            className="mt-8 mb-4 mx-7 border-2"
            placeholder="Nama"
            onChange={(e) =>
              setData((prevData) => ({ ...prevData, name: e.target.value }))
            }
            required
          />
          <input
            type="email"
            className="my-4 mx-7 border-2"
            placeholder="Email"
            onChange={(e) =>
              setData((prevData) => ({ ...prevData, username: e.target.value }))
            }
            required
          />
          <input
            type="password"
            className="my-4 mx-7 border-2"
            placeholder="Password"
            onChange={(e) =>
              setData((prevData) => ({ ...prevData, password: e.target.value }))
            }
            required
          />
          <input
            type="password"
            className="mb-20 mt-4 mx-7 border-2"
            placeholder="Konfirmasi Password"
            onChange={(e) =>
              setData((prevData) => ({
                ...prevData,
                confirmPassword: e.target.value,
              }))
            }
            required
          />

          <button
            type="submit"
            className="bg-amber-300 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-lg mx-auto px-20 py-4 font-poppinsbold  "
          >
            Sign Up
          </button>

          <div className="text-center mb-10">
            <p>
              Sudah punya akun?{" "}
              <Link href="/login" className="hover:bg-sky-500">
                Masuk di sini
              </Link>
            </p>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Signup
