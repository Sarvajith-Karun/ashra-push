"use client";

import React, { useState } from 'react';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const toggleMobileNavbar = () => {
    setClick(!click);
  }

  return (
    <>
      <nav className='bg-white shadow-lg fixed top-0 left-0 w-full z-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
                <a href="/" className='text-[#DAA520] text-3xl font-bold uppercase'>
                  Ashra
                </a>
              </div>
            </div>
            <div className='hidden md:block'>
              <div className='ml-4 flex items-center space-x-4'>
                <a href="/" className="relative inline-block text-[#DAA520] rounded-lg p-2 transition duration-300 ease-in-out group">
                  Home
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#DAA520] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
                </a>
                <a href="/about" className="relative inline-block text-[#DAA520] rounded-lg p-2 transition duration-300 ease-in-out group">
                  About
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#DAA520] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
                </a>
                <a href="/getinvolved" className="relative inline-block text-[#DAA520] rounded-lg p-2 transition duration-300 ease-in-out group">
                  Get Involved
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#DAA520] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
                </a>
                <a href="/updates" className="relative inline-block text-[#DAA520] rounded-lg p-2 transition duration-300 ease-in-out group">
                  Updates
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#DAA520] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
                </a>
              </div>
            </div>
            <div className='md:hidden flex items-center'>
              <button className='inline-flex items-center justify-center p-2 rounded-md text-[#DAA520] hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black' onClick={toggleMobileNavbar}>
                {click ? (
                  <svg className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor" >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {click && (
          <div className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
              <a href="/" className="relative block text-[#DAA520] rounded-lg p-2 transition duration-300 ease-in-out group">
                Home
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#DAA520] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
              </a>
              <a href="/about" className="relative block text-[#DAA520] rounded-lg p-2 transition duration-300 ease-in-out group">
                About
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#DAA520] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
              </a>
              <a href="/getinvolved" className="relative block text-[#DAA520] rounded-lg p-2 transition duration-300 ease-in-out group">
                Get Involved
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#DAA520] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
              </a>
              <a href="/updates" className="relative block text-[#DAA520] rounded-lg p-2 transition duration-300 ease-in-out group">
                Updates
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#DAA520] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar;