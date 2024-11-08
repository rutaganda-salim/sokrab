'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function SignupPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [department, setDepartment] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle signup logic here
  }

  return (
    <main className="h-screen relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/Section.svg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 h-full flex flex-col md:flex-row">
        <div className="md:w-1/2 flex flex-col justify-between items-center px-6 py-12">
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <Image src="/logo.svg" height={330} width={330} alt="logo" />
          </div>
          <footer className="text-white text-sm">
            <p>© 2024 Sokrab | All Rights Reserved</p>
          </footer>
        </div>

        <div className="md:w-1/2 flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-md">
            <h2 className="text-white text-xl mb-8 max-w-sm">
              Sokrab Group is not only leading IT services and business advisory
              in Rwanda
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Full name"
                  className="w-full px-4 py-3 rounded bg-slate-800/80 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#83B657] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded bg-slate-800/80 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#83B657] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full px-4 py-3 rounded bg-slate-800/80 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-[#83B657] focus:border-transparent"
                  required
                >
                  <option value="" disabled>
                    Department
                  </option>
                  <option value="IT" className='bg-slate-700 text-white'>IT</option>
                  <option value="HR" className='bg-slate-700 text-white'>HR</option>
                  <option value="Finance" className='bg-slate-700 text-white'>Finance</option>
                  <option value="Marketing" className='bg-slate-700 text-white'>Marketing</option>
                  <option value="Operations" className='bg-slate-700 text-white'>Operations</option>
                </select>
              </div>
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded bg-slate-800/80 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#83B657] focus:border-transparent"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-[150px] bg-[#83B657] text-[#29475A] font-semibold py-3 px-4 rounded flex items-center justify-center group transition-colors"
              >
                Sign up
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  width="20"
                  height="20"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.541 4.61621C19.3333 4.40853 19.0879 4.30469 18.8047 4.30469C18.5215 4.30469 18.276 4.40853 18.0684 4.61621C17.8607 4.80501 17.7568 5.04102 17.7568 5.32422C17.7568 5.60742 17.8607 5.85286 18.0684 6.06055L25.4883 13.4805H1.01953C0.736328 13.4805 0.495605 13.5796 0.297363 13.7778C0.0991211 13.9761 0 14.2168 0 14.5C0 14.7832 0.0991211 15.0239 0.297363 15.2222C0.495605 15.4204 0.736328 15.5195 1.01953 15.5195H25.4883L18.0684 22.9395C17.8607 23.1283 17.7568 23.369 17.7568 23.6616C17.7568 23.9543 17.8607 24.195 18.0684 24.3838C18.276 24.5915 18.5215 24.6953 18.8047 24.6953C19.0879 24.6953 19.3333 24.5915 19.541 24.3838L28.6885 15.2363C28.8962 15.0286 29 14.7832 29 14.5C29 14.2168 28.8962 13.9714 28.6885 13.7637L19.541 4.61621Z"
                    fill="#29475A"
                  />
                </svg>
              </button>
              <p className="text-white mt-2">
                Already have an account?{" "}
                <Link
                  href="/auth/signin"
                  className="text-[#83B657] underline ml-2"
                >
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
