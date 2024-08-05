"use client"

import Image from "next/image"
import React, { useState } from 'react'

export default function RegisterPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleFormSubmit(ev) {
    ev.preventDefault();
    fetch('/api/register',
      {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type':'application/json'},
      });
  }

  return (
    <section className="mt-8">
      <h1 className="mb-4 text-4xl text-center text-primary">
        Register
      </h1>
      <form className="block max-w-xs mx-auto " onSubmit={handleFormSubmit}>
        <input type="email" placeholder="Email address" value={email}
          onChange={ev => setEmail(ev.target.value)} />
        <input type="password" placeholder="Password" value={password}
          onChange={ev => setPassword(ev.target.value)} />
        <button type="submit">Register</button>
        <div className="my-4 text-center text-gray-500">
          or Login with Social Media
        </div>
        <button className="flex justify-center gap-4">
          <Image src={'/google.png'} alt={'Login with google'} width={24} height={24} />
          Login with Google
        </button>
      </form>
    </section>
  )
}
