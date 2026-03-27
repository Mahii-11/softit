import MobileMenu from "./MobileMenu";
import { useState } from "react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="bg-[#e62e04] text-white sticky top-0 z-50">
        <div className="flex items-center gap-2 px-2 py-1.5 max-w-screen-2xl mx-auto">
          <a href="/" className="flex-shrink-0 font-bold text-lg tracking-tight mr-1 whitespace-nowrap">
            <span className="text-white">Kai</span>
            <span className="text-orange-200">Zen</span>
          </a>

          <div className="hidden sm:flex items-center gap-1 text-xs text-orange-100 whitespace-nowrap flex-shrink-0">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span>Ship to US</span>
          </div>

          <div className="flex-1 flex items-center gap-1 mx-1">
            <div className="flex-1 flex items-center bg-white rounded overflow-hidden">
              <input
                type="text"
                placeholder="Search products, brands..."
                className="flex-1 text-gray-800 text-xs px-2 py-1.5 outline-none min-w-0"
              />
              <button className="bg-[#ff7700] hover:bg-[#e56a00] px-3 py-1.5 text-white text-xs font-semibold flex-shrink-0">
                Search
              </button>
            </div>
          </div>

          {/* Desktop icons — only on xl+ */}
          <div className="hidden xl:flex items-center gap-4 text-xs flex-shrink-0">
            <button className="flex flex-col items-center gap-0.5 hover:text-orange-200">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Account</span>
            </button>
            <button className="flex flex-col items-center gap-0.5 hover:text-orange-200">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span>Wishlist</span>
            </button>
            <button className="flex flex-col items-center gap-0.5 hover:text-orange-200 relative">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>Cart</span>
              <span className="absolute -top-1 -right-1 bg-yellow-400 text-gray-900 text-[9px] font-bold rounded-full w-3.5 h-3.5 flex items-center justify-center">3</span>
            </button>
            <button className="flex flex-col items-center gap-0.5 hover:text-orange-200">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <span>Orders</span>
            </button>
          </div>

          {/* Hamburger — visible on all screens below xl */}
          <button
            className="xl:hidden flex-shrink-0 p-1"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
};

export default Header;
