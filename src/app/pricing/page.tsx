import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Qiymətlər",
};

export default function PricingPage() {
  return (
    <main>
      <section className="px-6 pb-28 pt-12 md:px-16 md:pt-20">
        <div className="mx-auto max-w-4xl">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#B77E80]">
            Qiymətlər
          </p>
          <h1 className="font-serif text-5xl leading-tight md:text-7xl">
            Aydın və sadə
            <span className="text-[#B77E80]">.</span>
          </h1>
          <p className="mt-6 max-w-lg text-sm leading-7 text-[#806F6C]">
            Hər xidmətin müddəti və qiyməti əvvəlcədən görünür.
          </p>

          <ul className="mt-14 divide-y divide-[#DED3CD] border-y border-[#DED3CD]">
            {services.map((service) => (
              <li
                key={service.id}
                className="flex flex-col gap-3 py-6 sm:flex-row sm:items-baseline sm:justify-between"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#B77E80]">
                    {service.category}
                  </p>
                  <h2 className="mt-2 font-serif text-2xl">{service.name}</h2>
                  <p className="mt-1 text-sm text-[#806F6C]">{service.duration}</p>
                </div>
                <p className="font-serif text-2xl text-[#783F4A]">
                  {service.price} ₼
                </p>
              </li>
            ))}
          </ul>

          <Link
            href="/booking"
            className="mt-12 inline-block bg-[#783F4A] px-8 py-4 text-xs uppercase tracking-widest text-white transition-colors hover:bg-[#5E3039]"
          >
            Rezervasiya et
          </Link>
        </div>
      </section>
    </main>
  );
}
