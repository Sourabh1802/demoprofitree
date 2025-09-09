import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Profitree",
  description: "Advanced Stock Analysis Tool",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Fixed Navbar + Header */}
       
        <Navbar />

        {/* Page Content */}
        
        <main className="pt-28">{children}</main>
        

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
