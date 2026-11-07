import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Haqqımızda",
};

export default function AboutPage() {
  return (
    <main>
      <section className="px-6 pb-16 pt-12 md:px-16 md:pb-24 md:pt-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#B77E80]">
            LUMA Beauty Studio · Bakı
          </p>
          <h1 className="max-w-3xl font-serif text-5xl leading-tight md:text-7xl">
            Sakit, diqqətli
            <br />
            <span className="italic text-[#783F4A]">bir gözəllik məkanı.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-sm leading-7 text-[#806F6C]">
            LUMA, Bakıda qadınların özlərinə vaxt ayırması üçün yaradılıb.
            Burada tələskənlik yoxdur: hər görüş fərdi planla, hər detal
            diqqətlə seçilir.
          </p>
        </div>
      </section>

      <section className="px-6 pb-28 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {[
            {
              title: "Fərdi yanaşma",
              text: "Hər qonaq üçün saç, dəri və makiyaj ayrıca qiymətləndirilir.",
            },
            {
              title: "Peşəkar komanda",
              text: "Stilistlər, nail artistlər və dəri mütəxəssisləri bir studiya altında.",
            },
            {
              title: "Sakit mühit",
              text: "Prosedurlar tələsmədən, rahat və təmiz bir məkanda keçir.",
            },
          ].map((item) => (
            <article key={item.title} className="border border-[#DED3CD] p-8">
              <h2 className="font-serif text-3xl">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-[#806F6C]">{item.text}</p>
            </article>
          ))}
        </div>

        <Link
          href="/team"
          className="mx-auto mt-12 block w-fit border-b border-[#783F4A] pb-2 text-sm text-[#783F4A]"
        >
          Komanda ilə tanış olun ↗
        </Link>
      </section>
    </main>
  );
}
