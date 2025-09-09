"use client";
import { motion, AnimatePresence } from "framer-motion"

export default function GetStartedModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 🔹 Background Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* 🔹 Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition"
              >
                ✕
              </button>

              {/* Modal Content */}
              <h2 className="text-2xl font-bold text-center text-green-600">
                🚀 Get Started with Profitree
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Join us today and supercharge your stock analysis journey!
              </p>

              {/* Example Form */}
              <form className="mt-6 space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border text-black rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border text-black  rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition shadow-md hover:shadow-lg"
                >
                  Get Started
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
