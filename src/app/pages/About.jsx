import "aos/dist/aos.css";

export default function About() {
      
    return (
      <section id="about" className="py-20 bg-white" style={{ paddingTop: "20px" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Profitree
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering traders with intelligent stock analysis and educational
              resources
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Our Mission
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Profitree, we believe that everyone deserves access to
                professional-grade stock analysis tools. Our platform combines
                cutting-edge artificial intelligence with proven technical
                analysis methods to help traders make informed decisions.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We focus on education and empowerment, providing you with the
                tools and knowledge needed to understand market movements and
                technical patterns.
              </p>
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h4 className="text-lg font-semibold text-green-800 mb-3">
                  Our Technology
                </h4>
                <p className="text-green-700 text-sm leading-relaxed">
                  The stocks charts given in Profitree are selected and delivered
                  to you with the help of AI-based strategy, indicator-based
                  strategy and important technical levels. So that you get help in
                  your analysis.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Why Choose Profitree?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">
                      AI-Powered Analysis
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Advanced algorithms analyze market patterns and trends
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">
                      Educational Focus
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Learn while you trade with our comprehensive resources
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">
                      Technical Expertise
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Built by traders, for traders with real market experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  