"use client";

import { services } from "@/data/services";
import Link from "next/link";
import { useState } from "react";

const categories = [
  "Hamısı",
  "Saç",
  "Dırnaq",
  "Makiyaj",
  "Dəriyə qulluq",
] as const;

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("Hamısı");

  const filteredServices =
    activeCategory === "Hamısı"
      ? services
      : services.filter((service) => service.category === activeCategory);

  return (
    <main>
      <section className="px-6 py-24 md:px-16 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#B77E80]">
                LUMA-da gözəllik
              </p>

              <h1 className="font-serif text-5xl md:text-6xl">
                Xidmətlərimiz<span className="text-[#B77E80]">.</span>
              </h1>

              <p className="mt-5 max-w-lg leading-7 text-[#806F6C]">
                Özünüzə ayırdığınız vaxtı daha xüsusi edən peşəkar gözəllik
                xidmətləri.
              </p>
            </div>

            <Link
              href="/pricing"
              className="w-fit border-b border-[#783F4A] pb-2 text-sm text-[#783F4A] transition-colors hover:text-[#B77E80]"
            >
              Qiymətlərə baxın ↗
            </Link>
          </div>

          <div className="mb-10 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-3 text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#783F4A] text-white"
                    : "border border-[#DED3CD] text-[#655957] hover:border-[#783F4A] hover:text-[#783F4A]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredServices.map((service) => (
              <article key={service.id} className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#E8D8D2]">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <span className="absolute left-4 top-4 bg-[#F8F5F0]/90 px-3 py-2 text-xs text-[#783F4A]">
                    {service.category}
                  </span>
                </div>

                <div className="pt-5">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="font-serif text-xl">{service.name}</h2>

                    <span className="whitespace-nowrap text-sm text-[#783F4A]">
                      {service.price} ₼
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-[#806F6C]">
                    {service.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-[#DED3CD] pt-4">
                    <span className="text-xs text-[#806F6C]">
                      {service.duration}
                    </span>

                    <Link
                      href={`/booking?service=${service.id}`}
                      prefetch={true}
                      className="text-xs uppercase tracking-wider text-[#783F4A] hover:text-[#B77E80]"
                    >
                      Rezervasiya ↗
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
