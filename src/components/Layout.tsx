
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, X, Menu, Code, Home, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isTipSidebarOpen, setIsTipSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleTipSidebar = () => {
    setIsTipSidebarOpen(!isTipSidebarOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home className="w-5 h-5" /> },
    { name: 'Celebrity Bio', path: '/celebrity-bio', icon: <User className="w-5 h-5" /> },
  ];

  const htmlTips = [
    {
      title: 'Basic Structure',
      content: '<html>\n  <head>...</head>\n  <body>...</body>\n</html>'
    },
    {
      title: 'Headings',
      content: '<h1>Largest Heading</h1>\n<h2>Smaller Heading</h2>\n...\n<h6>Smallest Heading</h6>'
    },
    {
      title: 'Paragraphs',
      content: '<p>This is a paragraph of text.</p>'
    },
    {
      title: 'Images',
      content: '<img src="image.jpg" alt="Description">'
    },
    {
      title: 'Links',
      content: '<a href="https://example.com">Link Text</a>'
    },
    {
      title: 'Lists',
      content: '<ul>\n  <li>Unordered Item</li>\n</ul>\n\n<ol>\n  <li>Ordered Item</li>\n</ol>'
    },
  ];

  return (
    <div className="min-h-screen bg-stem-gray bg-opacity-30 flex flex-col">
      {/* Navigation */}
      <nav className="bg-stem-blue text-white shadow-md z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold">STEM</span>
                <span className="text-stem-yellow text-xl font-bold ml-1">Escape</span>
              </div>
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      "inline-flex items-center px-3 py-2 text-sm font-medium border-b-2 transition-colors duration-200",
                      location.pathname === link.path
                        ? "border-stem-yellow text-stem-yellow"
                        : "border-transparent text-gray-200 hover:text-stem-yellow"
                    )}
                  >
                    {link.icon}
                    <span className="ml-1">{link.name}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center">
              <Button
                variant="outline"
                size="sm"
                className="text-white border-stem-yellow hover:bg-stem-yellow hover:text-stem-blue focus:ring-stem-yellow"
                onClick={toggleTipSidebar}
              >
                <Code className="w-5 h-5 mr-1" />
                HTML Tips
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden bg-stem-blue">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200",
                location.pathname === link.path
                  ? "bg-stem-yellow text-stem-blue"
                  : "text-white hover:bg-stem-blue hover:text-stem-yellow"
              )}
            >
              {link.icon}
              <span className="ml-2">{link.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 relative">
          <div className="animate-fadeIn">
            {children}
          </div>
        </div>
      </main>

      {/* HTML Tips Sidebar */}
      <div className={cn("tip-sidebar", !isTipSidebarOpen && "closed")}>
        <div className="p-4">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <BookOpen className="w-5 h-5 mr-2" />
              <h2 className="text-xl font-bold">HTML Tips</h2>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleTipSidebar}
              className="text-white hover:bg-stem-blue hover:bg-opacity-50"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          <div className="space-y-4 overflow-y-auto h-[calc(100vh-100px)]">
            {htmlTips.map((tip, index) => (
              <div key={index} className="bg-stem-blue bg-opacity-50 rounded-md p-3">
                <h3 className="font-medium text-stem-yellow mb-2">{tip.title}</h3>
                <pre className="bg-black bg-opacity-20 p-2 rounded text-xs overflow-x-auto whitespace-pre-wrap">
                  {tip.content}
                </pre>
              </div>
            ))}
            <div className="bg-stem-blue bg-opacity-50 rounded-md p-3">
              <h3 className="font-medium text-stem-yellow mb-2">Help Resources</h3>
              <ul className="text-sm space-y-2">
                <li>
                  <a 
                    href="https://www.w3schools.com/html/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-stem-yellow underline"
                  >
                    W3Schools HTML Tutorial
                  </a>
                </li>
                <li>
                  <a 
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-stem-yellow underline"
                  >
                    MDN Web Docs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Tip Sidebar Toggle for Mobile */}
      <Button
        className={cn(
          "md:hidden tip-toggle",
          isTipSidebarOpen && "opacity-0 pointer-events-none"
        )}
        variant="outline"
        size="icon"
        onClick={toggleTipSidebar}
      >
        <Code className="w-5 h-5" />
      </Button>

      {/* Footer */}
      <footer className="bg-stem-blue text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm">&copy; {new Date().getFullYear()} Youth for STEM Equity</p>
            </div>
            <div>
              <p className="text-sm">STEMscape Challenge</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
