import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950"
      style={{
        backgroundImage: "radial-gradient(at center center, #1e3a8a 0%, #172554 70%)"
      }}
    >
      <div className="text-center p-8 rounded-xl bg-blue-900/10 backdrop-blur-sm border border-blue-700/30 shadow-2xl shadow-blue-900/50 max-w-md mx-4">
        <h1 className="text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-blue-100 mb-2">Page Not Found</h2>
        <p className="text-blue-300 mb-6">
          The page <span className="font-mono text-blue-200">{location.pathname}</span> doesn't seem to exist.
        </p>
        <a 
          href="/" 
          className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-medium shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
        >
          Return to Home
        </a>
        <div className="mt-8 text-blue-400 text-sm">
          <p>Need help? Contact our support team.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;