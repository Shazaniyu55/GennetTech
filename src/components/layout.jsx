import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";

// Wraps a page with the shared navbar, footer and scroll-to-top button.
// Toggle each via props where needed.
export default function Layout({ children, showNavbar = true, showFooter = true }) {
  return (
    <div className="flex min-h-screen flex-col">
      {showNavbar && <Navbar />}
      <main className="flex-1">{children}</main>
      {showFooter && <Footer />}
      <ScrollToTopButton />
    </div>
  );
}
