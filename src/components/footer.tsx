import QRCode from "qrcode.react";
import { FaFacebookF, FaYoutube, FaTwitter, FaTiktok, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-14 px-4 md:px-8 border-t border-border bg-coffee-espresso text-white dark:bg-gray-900 dark:border-gray-700">
      <div className="container mx-auto grid md:grid-cols-4 gap-10 items-start">

        {/* BRAND */}
        <div>
          <img
            src="/assets/logo.png"
            alt="Coffee Life Logo"
            width={140}
            height={60}
            className="mb-4"
          />
          <p className="text-white/70 dark:text-gray-300 text-sm leading-relaxed">
            Coffee Life Café: premium coffee, great food, and a relaxing atmosphere in the heart of Kampala.
          </p>

          {/* SOCIAL LINKS */}
          <div className="flex gap-4 mt-4 text-white/80 dark:text-gray-300">
            <a href="https://facebook.com/coffeelife" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 dark:hover:text-amber-500 transition-colors">
              <FaFacebookF />
            </a>
            <a href="https://youtube.com/coffeelife" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 dark:hover:text-amber-500 transition-colors">
              <FaYoutube />
            </a>
            <a href="https://twitter.com/coffeelife" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 dark:hover:text-amber-500 transition-colors">
              <FaTwitter />
            </a>
            <a href="https://tiktok.com/@coffeelife" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 dark:hover:text-amber-500 transition-colors">
              <FaTiktok />
            </a>
            <a href="https://instagram.com/coffeelife" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 dark:hover:text-amber-500 transition-colors">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* NAVIGATION */}
        <div>
          <h4 className="font-semibold mb-4 text-white dark:text-gray-100">Pages</h4>
          <div className="flex flex-col gap-2 text-white/70 dark:text-gray-300 text-sm">
            <a href="/" className="hover:text-amber-400 dark:hover:text-amber-500 transition-colors">Home</a>
            <a href="/menu" className="hover:text-amber-400 dark:hover:text-amber-500 transition-colors">Menu</a>
            <a href="/about" className="hover:text-amber-400 dark:hover:text-amber-500 transition-colors">About</a>
            <a href="/gallery" className="hover:text-amber-400 dark:hover:text-amber-500 transition-colors">Gallery</a>
            <a href="/contact" className="hover:text-amber-400 dark:hover:text-amber-500 transition-colors">Contact</a>
          </div>

          <h4 className="font-semibold mt-6 mb-4 text-white dark:text-gray-100">Policies</h4>
          <div className="flex flex-col gap-2 text-white/70 dark:text-gray-300 text-sm">
            <a href="/privacy" className="hover:text-amber-400 dark:hover:text-amber-500 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-amber-400 dark:hover:text-amber-500 transition-colors">Terms & Conditions</a>
          </div>
        </div>

        {/* QR CODE */}
        <div>
          <h4 className="font-semibold mb-4 text-white dark:text-gray-100">Scan to Visit</h4>
          <div className="bg-white p-3 rounded-xl inline-block">
            <QRCode
              value="https://coffeelife.cafe"
              size={120}
              includeMargin
            />
          </div>
          <p className="text-xs text-white/60 dark:text-gray-400 mt-3">
            Scan to open <strong>coffeelife.cafe</strong>
          </p>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-semibold mb-4 text-white dark:text-gray-100">Contact</h4>
          <a
            href="https://wa.me/256772514889"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-500 hover:bg-amber-600 dark:hover:bg-amber-400 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Chat on WhatsApp
          </a>

          <p className="text-white/60 dark:text-gray-400 text-xs mt-6">
            Designed by <span className="text-white dark:text-gray-200 font-medium">Reagan Otema</span>
          </p>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="text-center text-sm text-white/50 dark:text-gray-500 mt-12">
        © {new Date().getFullYear()} Coffee Life Café. All rights reserved.
      </div>
    </footer>
  );
}