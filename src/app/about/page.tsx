import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Haqqımızda",
};

const team = [
  {
    name: "Aylin Məmmədova",
    role: "Baş stilist",
    specialty: "Saç kəsimi və saç düzümü",
    experience: "8 il təcrübə",
    initials: "AM",
    number: "01",
  },
  {
    name: "Nərmin Əliyeva",
    role: "Nail artist",
    specialty: "Manikür və dırnaq dizaynı",
    experience: "6 il təcrübə",
    initials: "NƏ",
    number: "02",
  },
  {
    name: "Leyla Qasımova",
    role: "Make-up artist",
    specialty: "Gündəlik və professional makiyaj",
    experience: "7 il təcrübə",
    initials: "LQ",
    number: "03",
  },
  {
    name: "Günel Rzayeva",
    role: "Dəriyə qulluq mütəxəssisi",
    specialty: "Üz baxımı və kosmetoloji prosedurlar",
    experience: "5 il təcrübə",
    initials: "GR",
    number: "04",
  },
];

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

      </section>

      <section className="bg-[#F8F5F0] px-6 pb-28 md:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#B77E80]">
                LUMA BEAUTY STUDIO · BAKI
              </p>
              <h2 className="max-w-3xl font-serif text-5xl leading-tight md:text-7xl">
                Gözəlliyin arxasında
                <br />
                <span className="italic text-[#783F4A]">
                  peşəkar bir komanda.
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-[#806F6C]">
              Hər detalın arxasında öz işini sevən, təcrübəli və diqqətli
              mütəxəssislər dayanır.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <article key={member.number} className="group">
                <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-[#E8D8D2] transition-colors duration-500 group-hover:bg-[#DDC5BD]">
                  <span className="font-serif text-8xl text-[#783F4A]/70 transition-transform duration-500 group-hover:scale-110">
                    {member.initials}
                  </span>
                  <span className="absolute left-5 top-5 text-xs tracking-widest text-[#783F4A]">
                    {member.number}
                  </span>
                  <span className="absolute bottom-5 right-5 text-xs uppercase tracking-widest text-[#783F4A]">
                    LUMA TEAM
                  </span>
                </div>

                <div className="pt-6">
                  <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#B77E80]">
                    {member.role}
                  </p>
                  <h3 className="font-serif text-2xl text-[#352629]">
                    {member.name}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#806F6C]">
                    {member.specialty}
                  </p>
                  <p className="mt-5 border-t border-[#DED3CD] pt-4 text-xs text-[#783F4A]">
                    {member.experience}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#352629] px-6 py-20 text-center text-[#F8F5F0] md:py-28">
        <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#D9B7A9]">
          LUMA ilə tanış olun
        </p>
        <h2 className="mx-auto max-w-2xl font-serif text-4xl leading-tight md:text-5xl">
          Özünüzə ayırdığınız vaxtı bizə etibar edin.
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-white/65">
          Sizin üçün ən uyğun xidməti seçin və komandamızla görüşünüzü
          planlaşdırın.
        </p>
        <Link
          href="/booking"
          className="mt-9 inline-block border border-[#D9B7A9] px-8 py-4 text-xs uppercase tracking-widest text-[#F8F5F0] transition-colors hover:bg-[#D9B7A9] hover:text-[#352629]"
        >
          Rezervasiya et
        </Link>
      </section>
    </main>
  );
}
