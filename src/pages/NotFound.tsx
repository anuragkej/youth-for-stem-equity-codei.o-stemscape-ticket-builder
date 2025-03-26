
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { AlertTriangle, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-md animate-fadeIn">
        <div className="bg-red-100 p-3 rounded-full inline-flex items-center justify-center mb-6">
          <AlertTriangle className="h-10 w-10 text-red-500" />
        </div>
        <h1 className="text-5xl font-bold text-stem-blue mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-6">Oops! This page has flown away</p>
        <p className="text-gray-500 mb-8">
          The page you're looking for doesn't exist or has been moved to another location.
        </p>
        <Link to="/">
          <Button 
            className="bg-stem-blue hover:bg-stem-blue hover:opacity-90 text-white transition-all duration-200"
          >
            <Home className="w-5 h-5 mr-2" />
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
