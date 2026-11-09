"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Ana səhifə", href: "/" },
  { label: "Xidmətlər", href: "/services" },
  { label: "Haqqımızda", href: "/about" },
  { label: "Əlaqə", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#DED3CD]/80 bg-[#F8F5F0]/90 backdrop-blur-md">
      <nav className="flex items-center justify-between gap-4 px-5 py-4 md:px-16 md:py-5">
        <Link href="/" className="font-serif text-2xl tracking-wide">
          LUMA<span className="text-[#B77E80]">.</span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#655957] transition-colors hover:text-[#B77E80]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/booking"
            className="whitespace-nowrap bg-[#783F4A] px-4 py-3 text-xs text-white transition-colors hover:bg-[#5E3039] sm:px-6 sm:text-sm"
          >
            Rezervasiya et
          </Link>

          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? "Menyunu bağla" : "Menyunu aç"}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex size-11 items-center justify-center border border-[#DED3CD] text-[#783F4A] lg:hidden"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-[#DED3CD]/80 px-5 pb-5 pt-3 lg:hidden"
        >
          <div className="grid gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-3 py-3 text-sm text-[#655957] transition-colors hover:bg-[#E8D8D2] hover:text-[#783F4A]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
