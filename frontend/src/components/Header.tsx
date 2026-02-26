import { useState } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact Us', path: '/contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  return (
    <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo Placeholder */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-10 h-10 bg-navy rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm font-heading">BS</span>
            </div>
            <div className="border-2 border-navy rounded px-3 py-1">
              <span className="text-navy font-bold text-lg font-heading tracking-wide">Brainscribe</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link text-sm font-medium pb-1 border-b-2 transition-all duration-200 ${
                  currentPath === link.path
                    ? 'text-navy border-sky'
                    : 'text-slate-700 border-transparent hover:text-navy hover:border-sky'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-navy text-white px-5 py-2 rounded text-sm font-semibold hover:bg-navy-dark transition-colors duration-200 ml-2"
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded text-slate-700 hover:text-navy hover:bg-slate-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
          <nav className="container-custom py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded text-sm font-medium transition-colors duration-200 ${
                  currentPath === link.path
                    ? 'bg-sky-pale text-navy font-semibold'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-navy'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 bg-navy text-white px-4 py-3 rounded text-sm font-semibold text-center hover:bg-navy-dark transition-colors"
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
