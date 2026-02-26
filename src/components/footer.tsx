import Image from "next/image";
import QRCode from "qrcode.react";
import { FaFacebookF, FaYoutube, FaTwitter, FaTiktok, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="py-14 px-4 md:px-8 border-t border-border text-white"
      style={{ background: "hsl(var(--coffee-espresso))" }}
    >
      <div className="container mx-auto grid md:grid-cols-4 gap-10 items-start">

        {/* BRAND */}
        <div>
          <Image
            src="/assets/logo.png"
            alt="Coffee Life Logo"
            width={140}
            height={60}
            className="mb-4"
          />
          <p className="text-white/70 text-sm leading-relaxed">
            Coffee Life Café: premium coffee, great food, and a relaxing
            atmosphere in the heart of Kampala.
          </p>

          {/* SOCIAL LINKS */}
          <div className="flex gap-4 mt-4">
            <a href="https://facebook.com/coffeelife" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">
              <FaFacebookF />
            </a>
            <a href="https://youtube.com/coffeelife" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">
              <FaYoutube />
            </a>
            <a href="https://twitter.com/coffeelife" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">
              <FaTwitter />
            </a>
            <a href="https://tiktok.com/@coffeelife" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">
              <FaTiktok />
            </a>
            <a href="https://instagram.com/coffeelife" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* NAVIGATION */}
        <div>
          <h4 className="font-semibold mb-4">Pages</h4>
          <div className="flex flex-col gap-2 text-white/70 text-sm">
            <a href="/" className="hover:text-amber-400">Home</a>
            <a href="/menu" className="hover:text-amber-400">Menu</a>
            <a href="/about" className="hover:text-amber-400">About</a>
            <a href="/gallery" className="hover:text-amber-400">Gallery</a>
            <a href="/contact" className="hover:text-amber-400">Contact</a>
          </div>

          <h4 className="font-semibold mt-6 mb-4">Policies</h4>
          <div className="flex flex-col gap-2 text-white/70 text-sm">
            <a href="/privacy" className="hover:text-amber-400">Privacy Policy</a>
            <a href="/terms" className="hover:text-amber-400">Terms & Conditions</a>
          </div>
        </div>

        {/* QR CODE */}
        <div>
          <h4 className="font-semibold mb-4">Scan to Visit</h4>
          <div className="bg-white p-3 rounded-xl inline-block">
            <QRCode
              value="https://coffeelife.cafe"
              size={120}
              includeMargin
            />
          </div>
          <p className="text-xs text-white/60 mt-3">
            Scan to open <strong>coffeelife.cafe</strong>
          </p>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <a
            href="https://wa.me/256772514889"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            Chat on WhatsApp
          </a>

          <p className="text-white/60 text-xs mt-6">
            Designed by <span className="text-white font-medium">Reagan Otema</span>
          </p>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="text-center text-sm text-white/50 mt-12">
        © {new Date().getFullYear()} Coffee Life Café. All rights reserved.
      </div>
    </footer>
  );
}