import { Link } from '@tanstack/react-router';
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook } from 'lucide-react';
import { SiLinkedin, SiX, SiFacebook } from 'react-icons/si';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact Us', path: '/contact' },
];

const services = [
  'Microsoft .NET Development',
  'SharePoint Solutions',
  'Moodle LMS',
  'IT Staffing Services',
  'Extended Dev Teams (XDT)',
  'Azure & AWS Hosting',
  'Instructional Design',
];

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'brainscribe');

  return (
    <footer className="bg-navy text-white">
      {/* Main Footer */}
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-white rounded flex items-center justify-center">
                <span className="text-navy font-bold text-sm font-heading">BS</span>
              </div>
              <div className="border-2 border-white/60 rounded px-3 py-1">
                <span className="text-white font-bold text-base font-heading tracking-wide">Brainscribe</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Engineering Intelligence. Empowering Growth. Your trusted technology partner for custom software, cloud, and eLearning solutions.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded bg-white/10 hover:bg-sky flex items-center justify-center transition-colors duration-200"
              >
                <SiLinkedin size={16} />
              </a>
              <a
                href="#"
                aria-label="Twitter / X"
                className="w-9 h-9 rounded bg-white/10 hover:bg-sky flex items-center justify-center transition-colors duration-200"
              >
                <SiX size={16} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded bg-white/10 hover:bg-sky flex items-center justify-center transition-colors duration-200"
              >
                <SiFacebook size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-sky group-hover:bg-white transition-colors"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-white/70 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-sky group-hover:bg-white transition-colors"></span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-sky mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm leading-relaxed">
                  Pune, Maharashtra<br />India — 411 001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-sky flex-shrink-0" />
                <a href="mailto:info@brainscribe.in" className="text-white/70 hover:text-white text-sm transition-colors">
                  info@brainscribe.in
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-sky flex-shrink-0" />
                <a href="tel:+912012345678" className="text-white/70 hover:text-white text-sm transition-colors">
                  +91 20 1234 5678
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs">
            &copy; {year} Brainscribe. All rights reserved. | Pune, India
          </p>
          <p className="text-white/40 text-xs">
            Built with{' '}
            <span className="text-sky" aria-label="love">♥</span>
            {' '}using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
