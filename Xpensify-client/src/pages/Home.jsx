'use client'

import { useState } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate();
  return (
    
    <div className="bg-white h-screen flex items-center justify-center">
      <img
          src="./src/assets/logo.png"
          className="absolute top-0 left-0 ml-4 h-40 w-auto"
        />
      <div className="relative isolate px-6 lg:px-8 w-full">
        <div className="mx-auto max-w-2xl text-center">
          {/* Small Tagline */}
          <div className="mb-6 sm:mb-8 flex justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Track, Plan, and Save Smarter and les fking goooooo!
            </div>
          </div>

          {/* Typewriter Effect on H1 */}
          <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            <Typewriter
              words={['Take Control of Your Finances with Ease', 'Manage Your Budget Smarter', 'Achieve Your Savings Goals!']}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg font-medium text-gray-500 sm:text-xl">
            Managing your budget has never been this simple! Get a clear overview of your expenses, set savings goals, and stay on top of your finances effortlessly.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex items-center cursor-pointer justify-center gap-x-6">
            <a
              onClick={()=>navigate('/sign-up')}
              className="rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 hover:"
            >
              Get started
            </a>
            
          </div>
        </div>
      </div>
    </div>
  )
}
