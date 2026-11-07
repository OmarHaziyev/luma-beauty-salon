import Link from "next/link";

const navLinks = [
  { label: "Ana səhifə", href: "/" },
  { label: "Xidmətlər", href: "/services" },
  { label: "Komandamız", href: "/team" },
  { label: "Haqqımızda", href: "/about" },
  { label: "Əlaqə", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#DED3CD]/80 bg-[#F8F5F0]/90 backdrop-blur-md">
      <nav className="flex items-center justify-between px-8 py-5 md:px-16">
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

        <Link
          href="/booking"
          className="bg-[#783F4A] px-6 py-3 text-sm text-white transition-colors hover:bg-[#5E3039]"
        >
          Rezervasiya et
        </Link>
      </nav>
    </header>
  );
}
