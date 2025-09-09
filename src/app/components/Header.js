"use client";

export default function Header() {
    return (
        <div className="bg-gradient-to-r fixed top-0 w-full from-green-600 to-green-700 text-white py-2 text-sm z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
              {/* Left - Email & Phone */}
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <span>support@profitree.com</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <span>+91 98765 43210</span>
                </div>
              </div>
    
              {/* Right - Social Media */}
              <div className="flex items-center space-x-4">
                <span className="text-xs opacity-90">Follow us:</span>
                <div className="flex space-x-3">
                  {/* Twitter */}
                  <a href="#" className="hover:text-green-200 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775..."></path>
                    </svg>
                  </a>
                  {/* Facebook */}
                  <a href="#" className="hover:text-green-200 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69..."></path>
                    </svg>
                  </a>
                  {/* LinkedIn */}
                  <a href="#" className="hover:text-green-200 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569..."></path>
                    </svg>
                  </a>
                  {/* Reddit */}
                  <a href="#" className="hover:text-green-200 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367..."></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
