import Link from "next/link";
import { studio } from "@/data/studio";

const pages = [
  { label: "Xidmətlər", href: "/services" },
  { label: "Qiymətlər", href: "/pricing" },
  { label: "Komandamız", href: "/team" },
  { label: "Haqqımızda", href: "/about" },
  { label: "Əlaqə", href: "/contact" },
  { label: "Rezervasiya", href: "/booking" },
];

export default function Footer() {
  return (
    <footer className="bg-[#352629] text-[#F8F5F0]">
      <div className="mx-auto grid max-w-7xl gap-12 px-8 py-16 md:px-16 lg:grid-cols-[1.3fr_0.8fr_1.1fr]">
        <div>
          <p className="font-serif text-3xl">
            LUMA<span className="text-[#D9B7A9]">.</span>
          </p>
          <p className="mt-4 max-w-xs text-sm leading-7 text-white/65">
            Websayt demo məqsədi daşıyır.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[#D9B7A9]">
            Səhifələr
          </p>
          <ul className="mt-5 space-y-3">
            {pages.map((page) => (
              <li key={page.href}>
                <Link
                  href={page.href}
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[#D9B7A9]">
            Studiya
          </p>
          <dl className="mt-5 space-y-4 text-sm">
            <div>
              <dt className="text-white/45">Ünvan</dt>
              <dd className="mt-1 text-white/80">{studio.address}</dd>
            </div>
            <div>
              <dt className="text-white/45">Telefon</dt>
              <dd className="mt-1">
                <a
                  href={studio.phoneHref}
                  className="text-white/80 transition-colors hover:text-white"
                >
                  {studio.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-white/45">E-poçt</dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${studio.email}`}
                  className="text-white/80 transition-colors hover:text-white"
                >
                  {studio.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-white/45">İş saatları</dt>
              <dd className="mt-1 text-white/80">{studio.hours}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="border-t border-white/10 px-8 py-5 text-xs text-white/45 md:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 LUMA Beauty Studio</p>
          <p>Bakı, Azərbaycan</p>
        </div>
      </div>
    </footer>
  );
}
