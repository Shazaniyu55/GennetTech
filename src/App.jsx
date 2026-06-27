import { useEffect } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";

// Scroll to top whenever the route changes.
function ScrollToTopOnNavigate() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-mist px-5 text-center">
      <p className="font-display text-7xl font-bold text-brand-navy">404</p>
      <p className="mt-4 text-lg text-gray-600">We couldn't find that page.</p>
      <Link
        to="/"
        className="mt-8 rounded-full bg-brand-orange px-6 py-3 font-semibold text-white transition hover:bg-brand-orange-dark"
      >
        Back to home
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTopOnNavigate />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Booking />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
