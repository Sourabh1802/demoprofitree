"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (ms)
      once: true, // whether animation happens only once
      easing: "ease-in-out",
    });
  }, []);
  return (
    <section
      id="services"
      className="py-20 bg-gray-50"
      style={{ paddingTop: "20px" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tools and analysis for all your trading needs
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Stock Analysis
            </h3>
            <p className="text-gray-600 mb-4">
              Detailed technical analysis of individual stocks with key support
              and resistance levels.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Price action analysis</li>
              <li>• Volume indicators</li>
              <li>• Trend identification</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Index Tracking
            </h3>
            <p className="text-gray-600 mb-4">
              Comprehensive analysis of major indices including Nifty and Bank
              Nifty.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Nifty 50 analysis</li>
              <li>• Bank Nifty insights</li>
              <li>• Sector rotation</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              AI Insights
            </h3>
            <p className="text-gray-600 mb-4">
              Machine learning algorithms provide intelligent market predictions
              and patterns.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Pattern recognition</li>
              <li>• Momentum analysis</li>
              <li>• Risk assessment</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Educational Resources
            </h3>
            <p className="text-gray-600 mb-4">
              Learn technical analysis fundamentals and advanced trading
              strategies.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Trading tutorials</li>
              <li>• Market education</li>
              <li>• Strategy guides</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-5 5v-5zM4 17v2a2 2 0 002 2h2m-4-8V9a2 2 0 012-2h2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Technical Levels
            </h3>
            <p className="text-gray-600 mb-4">
              Key support and resistance levels identified through multiple
              technical indicators.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Support/Resistance</li>
              <li>• Fibonacci levels</li>
              <li>• Pivot points</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Risk Management
            </h3>
            <p className="text-gray-600 mb-4">
              Tools and strategies to help manage trading risk and protect your
              capital.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Position sizing</li>
              <li>• Stop loss levels</li>
              <li>• Risk/reward ratios</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
