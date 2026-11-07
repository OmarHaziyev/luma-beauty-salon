import type { Metadata } from "next";
import Link from "next/link";
import { studio } from "@/data/studio";

export const metadata: Metadata = {
  title: "Əlaqə",
};

const details = [
  { label: "Ünvan", value: studio.address },
  { label: "Telefon", value: studio.phone },
  { label: "İş saatları", value: studio.hours },
  { label: "E-poçt", value: studio.email },
];

export default function ContactPage() {
  return (
    <main>
      <section className="px-6 pb-28 pt-12 md:px-16 md:pt-20">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#B77E80]">
              Əlaqə
            </p>
            <h1 className="font-serif text-5xl leading-tight md:text-7xl">
              Sizi studiya
              <br />
              <span className="italic text-[#783F4A]">gözləyir.</span>
            </h1>
            <p className="mt-7 max-w-md text-sm leading-7 text-[#806F6C]">
              Sualınız varsa yazın, və ya birbaşa görüş vaxtı seçin.
            </p>

            <dl className="mt-12 space-y-6">
              {details.map((item) => (
                <div key={item.label} className="border-t border-[#DED3CD] pt-5">
                  <dt className="text-xs uppercase tracking-[0.2em] text-[#B77E80]">
                    {item.label}
                  </dt>
                  <dd className="mt-2 font-serif text-2xl">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex flex-col justify-end bg-[#E8D8D2] p-10">
            <p className="font-serif text-4xl leading-tight">
              Görüşü indi planlaşdırın.
            </p>
            <Link
              href="/booking"
              className="mt-8 inline-block w-fit bg-[#783F4A] px-8 py-4 text-xs uppercase tracking-widest text-white transition-colors hover:bg-[#5E3039]"
            >
              Rezervasiya et
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
