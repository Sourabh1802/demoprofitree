"use client"; // ✅ required in Next.js App Router
import Link from "next/link";
import { useState } from "react";
import GetStartedModal from "../components/GetStartedModal";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // ✅ modal state
  return (
    <div className="fixed top-0 left-0 w-full z-50 shadow">
      {/* 🔹 Top Info Bar */}
      <div className="bg-gradient-to-r fixed top-0 w-full from-green-600 to-green-700 text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>support@profitree.com</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+91 98765 43210</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-xs opacity-90">Follow us:</span>
              <div className="flex space-x-3">
                <a href="#" className="hover:text-green-200 transition-colors">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-green-200 transition-colors">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-green-200 transition-colors">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-green-200 transition-colors">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.219-.359-1.219c0-1.142.662-1.994 1.488-1.994.219 0 .537.082.537.219 0 .179-.142.219-.142.438 0 .219.283.558.283 1.499 0 .719-.219 1.321-.219 1.896 0 .179.283.438.662.438.537 0 .958-.719.958-1.896 0-1.057-.662-1.896-1.748-1.896-1.57 0-2.426 1.142-2.426 2.304 0 .458.179.958.179 1.499 0 .179-.142.458-.462.458-.179 0-.359-.179-.359-.458 0-.719.219-1.321.219-2.079 0-1.499-1.057-2.644-2.426-2.644-1.748 0-3.296 1.279-3.296 3.062 0 .537.219 1.142.398 1.499.041.179.041.219 0 .398-.041.219-.179.719-.179.958 0 .179.142.219.219.219.399 0 .662-.537.662-.958 0-.398-.142-.719-.142-1.142 0-1.499 1.279-2.644 2.866-2.644 1.499 0 2.426 1.057 2.426 2.304 0 1.279-.537 2.079-1.279 2.079-.458 0-.719-.358-.719-.798 0-.219.041-.458.041-.719 0-.537-.458-.958-.958-.958-.719 0-1.279.719-1.279 1.499 0 .537.179 1.057.179 1.057s-.662 2.866-.798 3.439c-.179.719-.142 1.499-.142 2.304C18.91 21.027 22.132 16.891 22.132 11.987 22.132 5.367 16.765.001 12.017.001z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      {/* Navigation */}
      <nav className="bg-white shadow-xl fixed w-full top-8 z-50 border-b-2 border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center text-black">

              <Image
                src="/logo.png"
                alt="Profitree Logo"
                width={80}
                height={70}
                priority
              />
              <div className="ml-3">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                  Profitree
                </h1>
                <p className="text-xs text-gray-500">Stock Analysis Tool</p>
              </div>
            </div>
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              <Link
                href="/"
                className="group relative px-4 py-2 text-gray-800 hover:text-white font-medium transition-all duration-300 rounded-lg hover:bg-gradient-to-r hover:from-green-500 hover:to-green-600 hover:shadow-lg hover:scale-105">
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  Home
                </span>
              </Link>
              <Link
                href="/about"
                className="group relative px-4 py-2 text-gray-700 hover:text-white font-medium transition-all duration-300 rounded-lg hover:bg-gradient-to-r hover:from-green-500 hover:to-green-600 hover:shadow-lg hover:scale-105">
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  About
                </span>
              </Link>
              <Link
                href="/services"
                className="group relative px-4 py-2 text-gray-700 hover:text-white font-medium transition-all duration-300 rounded-lg hover:bg-gradient-to-r hover:from-green-500 hover:to-green-600 hover:shadow-lg hover:scale-105">
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Services
                </span>
              </Link>
              <Link
                href="/contact"
                className="group relative px-4 py-2 text-gray-700 hover:text-white font-medium transition-all duration-300 rounded-lg hover:bg-gradient-to-r hover:from-green-500 hover:to-green-600 hover:shadow-lg hover:scale-105">
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Contact
                </span>
              </Link>
            </div>
            {/* Action Buttons (Desktop) */}
            <div className="hidden lg:flex items-center space-x-3">
              {/* Call Button */}
              <a
                href="tel:+919876543210"
                className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call Now
              </a>
              {/* Get Started Button */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Get Started
              </button>
            </div>
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                id="mobile-menu-button"
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 text-gray-700 hover:text-green-600 focus:outline-none focus:text-green-600 rounded-lg hover:bg-green-50 transition-all duration-300">
                {menuOpen ? (
                  // Close (X) Icon
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  // Hamburger Icon
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
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
        </div>
        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden bg-white border-t border-green-100 transition-all duration-300 ${menuOpen ? "block" : "hidden"
            }`}>
          <div className="px-4 pt-4 pb-6 space-y-3">
            <Link
              href="/"
              className="flex items-center px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-300">
              <svg
                className="w-4 h-4 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Home
            </Link>
            <Link
              href="/about"
              className="flex items-center px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-300">
              <svg
                className="w-4 h-4 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              About
            </Link>
            <Link
              href="/services"
              className="flex items-center px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-300">
              <svg
                className="w-4 h-4 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Services
            </Link>
            <Link
              href="/contact"
              className="flex items-center px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-300">
              <svg
                className="w-4 h-4 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Contact
            </Link>
            {/* Mobile Action Buttons */}
            <div className="pt-4 space-y-3 border-t border-green-100">
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call Now
              </a>
              <button
                onClick={() => {
                  setIsModalOpen(true);
                  setMenuOpen(false);
                }}
                className="flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Get Started
              </button>
            </div>
          </div>
        </div>
        {/* Modal Component */}
        <GetStartedModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </nav>
    </div>
  );
}
