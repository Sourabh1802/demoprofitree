export default function Hero() {
  return (
    // Home Section
    <section
      id="home"
      className=" bg-gradient-to-br from-green-50 to-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-green-600">Profitree</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Advanced Stock Analysis Tool with AI-powered insights for smarter
            trading decisions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-green-700 transition-colors shadow-lg">
              Get Started
            </a>
            <a
              href="#about"
              className="bg-white text-green-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-50 transition-colors shadow-lg border border-green-200">
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Features Preview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Stock Charts
            </h3>
            <p className="text-gray-600">
              Comprehensive charts for stocks, indices, Nifty, and Bank Nifty
              with technical analysis.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              AI-Powered
            </h3>
            <p className="text-gray-600">
              Advanced AI algorithms help identify trading opportunities and
              market trends.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Educational
            </h3>
            <p className="text-gray-600">
              Learn technical analysis and improve your trading skills with our
              educational resources.
            </p>
          </div>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mx-4 rounded-r-lg mb-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-lg font-semibold text-yellow-800 mb-3">
            Important Disclaimer
          </h3>
          <p className="text-yellow-700 text-sm leading-relaxed">
            Profitree provides you with important levels charts of stocks,
            indices, Nifty, Bank Nifty. You can use these charts in your trading
            analysis. Any of the stock or index charts given here do not advise
            you to buy or sell in any way. These charts are for educational
            purposes only. These charts are created with the help of various
            indicators and technical levels. These charts are provided with the
            intention of helping you in trading or in your analysis. Please
            contact your financial advisor before making any purchase or sale
            from these charts. We will not be responsible for any profit or loss
            incurred by buying or selling from these charts. This app is made
            for educational purpose only.
          </p>
        </div>
      </div>
    </section>
  );
}
