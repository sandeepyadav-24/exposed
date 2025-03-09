"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? "text-blue-600" : "text-gray-700";
  };

  const handleWriteToUs = () => {
    window.location.href =
      "https://docs.google.com/forms/d/e/1FAIpQLSf3naZeKzP-4_mt1T-Bj-kq-_eVrGBOmxzFGxE3CNw4ACoJpA/viewform";
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container flex items-center justify-between h-20">
        <div className="flex-shrink-0">
          <Link
            href="/"
            className="group flex items-center space-x-2 font-extrabold text-2xl tracking-tight"
          >
            <div className="flex items-center bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-2 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <span className="mr-2">EXPOSED</span>
              <span className="bg-white text-blue-600 px-2 py-1 rounded-md text-sm font-black transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                ITS
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className={`${isActive(
              "/"
            )} hover:text-blue-600 font-medium transition-colors`}
          >
            Home
          </Link>

          <button className="btn btn-primary" onClick={handleWriteToUs}>
            Google Form
          </button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container py-3 space-y-1">
            <Link
              href="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(
                "/"
              )} hover:text-blue-600 hover:bg-gray-50`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            <div className="pt-2">
              <button
                className="w-full btn btn-primary"
                onClick={() => {
                  setIsMenuOpen(false);
                  handleWriteToUs();
                }}
              >
                Write to us
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
