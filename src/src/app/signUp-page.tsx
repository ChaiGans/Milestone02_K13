'use client';
import React, { useState } from 'react';

export const Signup = () => {
  const [namaDepan, setNamaDpn] = useState('');
  const [namaBlkg, setNamaBlkg] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNamaDpnChange = (e) => {
    setNamaDpn(e.target.value);
  };
  const handleNamaBlkgChange = (e) => {
    setNamaBlkg(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmChange = (e) => {
    setConfirm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nama Depan:', namaDepan);
    console.log('Nama Belakang:', namaBlkg);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm passowrd:', confirm);
    setNamaBlkg('');
    setNamaDpn('');
    setEmail('');
    setPassword('');
    setConfirm('');
    setIsSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit}>
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
            value={namaDepan}
            onChange={handleNamaDpnChange}
            required
          />
          <input
            type="text"
            className="my-4 mx-7 border-2"
            placeholder="Nama Belakang"
            value={namaBlkg}
            onChange={handleNamaBlkgChange}
            required
          />
          <input
            type="email"
            className="my-4 mx-7 border-2"
            placeholder="Nama Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <input
            type="password"
            className="my-4 mx-7 border-2"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <input
            type="password"
            className="mb-20 mt-4 mx-7 border-2"
            placeholder="Konfirmasi Password"
            value={confirm}
            onChange={handleConfirmChange}
            required
          />
          {isSubmitted && (
            <p className="text-center text-lime-500">Submitted</p>
          )}
          <button
            type="submit"
            className="bg-amber-300 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-lg mx-auto px-20 py-4 font-poppinsbold  "
          >
            Sign Up
          </button>

          <div className="text-center mb-10">
            <p>
              Sudah punya akun? Masuk{' '}
              <a href="" className="hover:bg-sky-500">
                {' '}
                di sini
              </a>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};
