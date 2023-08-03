const Signup = () => {
  return (
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
          placeholder="Nama Depan"
        />
        <input
          type="text"
          className="my-4 mx-7 border-2"
          placeholder="Nama Belakang"
        />
        <input
          type="email"
          className="my-4 mx-7 border-2"
          placeholder="Nama Email"
        />
        <input
          type="password"
          className="my-4 mx-7 border-2"
          placeholder="Password"
        />
        <input
          type="password"
          className="mb-20 mt-4 mx-7 border-2"
          placeholder="Konfirmasi Password"
        />
        <button className="bg-amber-300 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-lg mx-auto px-20 py-4 font-poppinsbold  ">
          Save changes
        </button>
        <div className="text-center mb-10">
          <p>
            Sudah punya akun? Masuk{" "}
            <a href="" className="hover:bg-sky-500">
              {" "}
              di sini
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup
