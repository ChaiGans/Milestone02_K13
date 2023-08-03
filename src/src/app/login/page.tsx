"use client"
import React, { useState } from "react"
import { signIn } from "next-auth/react"

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  })

  const onLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    await signIn("credentials", {
      username: loginData.username,
      password: loginData.password,
      redirect: true,
      callbackUrl: "/",
    })
  }

  return (
    <div className="bg-[url('/assets/backgroundLogin.svg')] bg-no-repeat bg-cover bg-center fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center">
      <div className="bg-[rgba(0,0,0,0.8)] w-full relative top-0 right-0 left-0 bottom-0 min-h-screen flex justify-center items-center"></div>
      <div className="bg-white rounded-lg xl:rounded-2xl w-[300px] h-[70%] md:w-[400px] xl:w-[30%] flex flex-col absolute py-10 px-10 md:py-16 md:px-16 justify-around">
        <form onSubmit={onLogin}>
          <div>
            <p className="text-black font-poppinsmedium text-2xl text-center mt-7 mb-10 md:mt-0 xl:mb-16 xl:font-poppinssb xl:text-4xl">
              Login
            </p>

            <div className="h-[50px] xl:h-[80px]">
              <input
                type="text"
                placeholder="Username"
                className="text-[13px] leading-6 xl:text-xl px-3 py-1 border-solid border-black border rounded-sm w-full text-black xl:h-[50px]"
                required
                onChange={(e) =>
                  setLoginData((prevData) => ({
                    ...prevData,
                    username: e.target.value,
                  }))
                }
              />
            </div>
            <div className="h-[70px]">
              <input
                type="password"
                placeholder="Password"
                className="text-[13px] leading-6 xl:text-xl px-3 py-1 border-solid border-black border rounded-sm w-full text-black xl:h-[50px]"
                required
                onChange={(e) =>
                  setLoginData((prevData) => ({
                    ...prevData,
                    password: e.target.value,
                  }))
                }
              />
              <p className="font-latobold text-black text-end text-[9px] font-normal mt-2 xl:text-lg">
                <a href="/" target="_blank" className="hover:text-blue-700">
                  Lupa password?
                </a>
              </p>
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="font-latoregular font-normal bg-yellow-400 px-16 py-2 rounded-lg text-black text-xs mb-2 hover:cursor-pointer hover:bg-yellow-500 xl:text-xl xl:px-36 xl:py-5 xl:rounded-2xl shadow-md shadow-gray-400 xl:mb-10 xl:font-medium"
              >
                Login
              </button>
            </div>
            <p className="font-latoregular text-black text-[8px] text-center xl:text-lg">
              Belum punya akun?
              <span className="font-bold hover:text-blue-700 ml-1">
                <a href="/" target="_blank">
                  Daftar di sini
                </a>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
