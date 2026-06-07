import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Palette, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Palette className="h-8 w-8 text-indigo-400" />
              <span className="font-bold text-xl text-white">Home Interiors</span>
            </Link>
            <p className="text-sm">
              Transforming spaces into extraordinary experiences since 2025.
            </p>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/16Dxy6ZBvv/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/charith_pulaganti_?igsh=MXUyNGRjZGlsNzRwNg=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              {/* Twitter */}
              <a
                href="https://x.com/PulagantiC17450"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="hover:text-indigo-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-indigo-400 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-indigo-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-indigo-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="hover:text-indigo-400 transition-colors">
                  Interior Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-indigo-400 transition-colors">
                  Space Planning
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-indigo-400 transition-colors">
                  Furniture Selection
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-indigo-400 transition-colors">
                  Color Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-indigo-400" />
                <span>chakri9701@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-indigo-400" />
                <span>+91 9701859929</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-indigo-400" />
                <span>1-246, Eguva Amilepalli, Gurramkonda, 517291</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Home Interiors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;