import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-800 overflow-auto pb-24">
      <div className="max-w-5xl mx-auto px-8">
        <footer className="pt-28 text-base-content">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <aside className="flex-shrink-0 mb-6 md:mb-0 md:w-1/3 md:mr-12">
              <div className="text-center md:text-left">
                <p className="text-2xl font-bold text-[#DAA520] mb-2">ASHRA</p>
                <p className="text-gray-400 text-sm">
                  Empowering orphanages and families in South Asia with essential resources and hope for a brighter future.
                </p>
              </div>
            </aside>

            <div className="flex flex-col md:flex-row md:w-2/3 md:justify-between">
              <nav className="mb-6 md:mb-0">
                <h2 className="text-lg font-semibold mb-2 text-[#DAA520]">PAGES</h2>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li><a href="/" className="hover:text-white">Home</a></li>
                  <li><a href="/about" className="hover:text-white">About</a></li>
                  <li><a href="/getinvolved" className="hover:text-white">Get Involved</a></li>
                  <li><a href="/updates" className="hover:text-white">Updates</a></li>
                </ul>
              </nav>

              <nav className="mb-6 md:mb-0">
                <h2 className="text-lg font-semibold mb-2 text-[#DAA520]">SOCIALS</h2>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li><a href="https://www.instagram.com/ashra.corp/?igsh=aTNxcmg2YzA3bTVx&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a></li>
                  <li><a href="mailto:ashracorporations@gmail.com" className="hover:text-white">Email</a></li>
                </ul>
              </nav>

              <nav>
                <h2 className="text-lg font-semibold mb-2 text-[#DAA520]">CONTACT INFORMATION</h2>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>Email: <a href="mailto:ashracorporations@gmail.com" className="hover:text-white">ashracorporations@gmail.com</a></li>
                  <li>Phone: <a href="tel:+1234567890" className="hover:text-white">+123 456 7890</a></li>
                  <li>Address: 123 Hope Street, City, Country</li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="mt-12 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} ASHRA. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;