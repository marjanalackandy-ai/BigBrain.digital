import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#05080F] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <img
                src="/logo.png"
                className="h-20 w-auto object-contain hover:opacity-80 transition-opacity"
                alt="BigBrain.Digital"
              />
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed">
              We help ambitious businesses scale with data-driven marketing,
              branding, and performance ads. Think bigger.
            </p>

            <div className="flex gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#4A6CF7] hover:text-white transition-all hover:scale-110"
              >
                <Twitter size={18} />
              </a>

              <a
                href="https://www.linkedin.com/company/bigbrain-digital/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#4A6CF7] hover:text-white transition-all hover:scale-110"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="https://www.instagram.com/bigbrain.digital"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#4A6CF7] hover:text-white transition-all hover:scale-110"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#4A6CF7] hover:text-white transition-all hover:scale-110"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              {[
                "About Us",
                "Packages",
                "Careers",
                "Privacy Policy",
                "Terms of Service",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="text-gray-400 hover:text-[#00FFA3] transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              {[
                "Social Media Marketing",
                "Performance Ads",
                "SEO Optimization",
                "Web Design",
                "Branding",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-[#00FFA3] transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-[#4A6CF7] shrink-0" />
                <span>Your City, India</span>
              </li>

              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-[#4A6CF7] shrink-0" />
                <span>+91 9562564101</span>
              </li>

              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-[#4A6CF7] shrink-0" />
                <span>info@bigbrain.digital</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} BigBrain.Digital. All rights reserved.
          </p>

          <div className="flex gap-8">
            <a href="#" className="text-gray-500 hover:text-white text-sm">
              Privacy
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm">
              Terms
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}