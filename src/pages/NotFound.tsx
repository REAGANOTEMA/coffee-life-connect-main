import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import footer from "@/components/footer"; // ✅ Professional Footer
import logoImg from "@/assets/logo.png"; // ✅ Page logo

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">

      {/* ================= PAGE LOGO ================= */}
      <div className="py-8 px-4 md:px-8 text-center bg-muted/10">
        <img src={logoImg} alt="Coffee Life Logo" className="mx-auto w-44 h-auto" />
      </div>

      {/* ================= 404 CONTENT ================= */}
      <div className="flex-1 flex items-center justify-center bg-muted px-4">
        <div className="text-center">
          <h1 className="mb-4 text-6xl md:text-7xl font-bold" style={{ color: 'hsl(var(--coffee-espresso))' }}>404</h1>
          <p className="mb-6 text-xl md:text-2xl text-muted-foreground">Oops! Page not found</p>
          <a
            href="/"
            className="inline-block px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition"
          >
            Return to Home
          </a>
        </div>
      </div>

      {/* ================= PROFESSIONAL FOOTER ================= */}
      <footer/>
    </div>
  );
};

export default NotFound;