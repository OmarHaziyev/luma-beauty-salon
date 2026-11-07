
import Link from "next/link";

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#F8F5F0] text-[#352629]">
      {/* HERO */}
      <section className="px-6 pb-16 pt-10 md:px-16 md:pb-24 md:pt-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">

          <div className="relative z-10">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-[#B77E80]" />
              <p className="text-xs uppercase tracking-[0.3em] text-[#783F4A]">
                Beauty, in your own way · Bakı
              </p>
            </div>

            <h1 className="max-w-3xl font-serif text-6xl leading-[0.98] tracking-tight md:text-8xl">
              Gözəllik
              <br />
              <span className="italic text-[#783F4A]">sadəcə</span>
              <br />
              görünüş deyil.
            </h1>

            <p className="mt-8 max-w-md text-sm leading-8 text-[#806F6C] md:text-base">
              Özünüzü yenidən kəşf etdiyiniz, hər detalın
              diqqətlə düşünüldüyü xüsusi bir məkan.
              LUMA-da bu vaxt yalnız sizə aiddir.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/booking"
                className="bg-[#783F4A] px-8 py-5 text-xs uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#5E3039]"
              >
                Görüş təyin edin ↗
              </Link>

              <Link
                href="/services"
                className="border-b border-[#783F4A] pb-2 text-xs uppercase tracking-[0.2em] text-[#783F4A] transition-colors hover:text-[#B77E80]"
              >
                Xidmətləri kəşf edin
              </Link>
            </div>

            <div className="mt-16 flex items-center gap-5 border-t border-[#DED3CD] pt-7">
              <div>
                <p className="font-serif text-3xl text-[#783F4A]">4</p>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-[#806F6C]">
                  Peşəkar ekspertlər
                </p>
              </div>

              <div className="h-10 w-px bg-[#DED3CD]" />

              <div>
                <p className="font-serif text-3xl text-[#783F4A]">4</p>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-[#806F6C]">
                  Xidmət kateqoriyası
                </p>
              </div>

              <div className="h-10 w-px bg-[#DED3CD]" />

              <div>
                <p className="font-serif text-3xl text-[#783F4A]">100%</p>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-[#806F6C]">
                  Keyfiyyətə diqqət
                </p>
              </div>
            </div>
          </div>

          {/* ABSTRACT BRAND VISUAL */}
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[520px] bg-[#E8D8D2]">

            <div className="absolute inset-5 border border-[#783F4A]/30" />

            <div className="absolute left-1/2 top-1/2 flex h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#783F4A]/40">
              <div className="flex h-[78%] w-[78%] items-center justify-center rounded-full bg-[#783F4A]">
                <span className="font-serif text-7xl italic text-[#F8F5F0] md:text-7xl">
                  LUMA.
                </span>
              </div>
            </div>

            <p className="absolute left-8 top-8 text-xs uppercase tracking-[0.3em] text-[#783F4A]">
              Est. in beauty
            </p>

            <p className="absolute bottom-9 left-8 font-serif text-2xl italic text-[#783F4A]">
              Feel like yourself.
            </p>

            <div className="absolute -right-3 top-1/4 flex h-20 w-20 items-center justify-center rounded-full bg-[#C5A77D] text-center text-[9px] uppercase leading-4 tracking-widest text-[#352629] shadow-lg md:-right-6 md:h-24 md:w-24">
              Your moment
              <br />
              Your beauty
            </div>

            <span className="absolute bottom-8 right-8 text-xs tracking-[0.3em] text-[#783F4A]">
              L / 001
            </span>
          </div>
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section className="bg-[#352629] px-6 py-20 text-center text-[#F8F5F0] md:px-16 md:py-28">
        <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#D9B7A9]">
          Daha çox özünüzə vaxt ayırın
        </p>

        <h2 className="mx-auto max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
          Gözəllik dəyişmək deyil.
          <br />
          <span className="italic text-[#D9B7A9]">
            Özünü yaxşı hiss etməkdir.
          </span>
        </h2>

        <p className="mx-auto mt-7 max-w-lg text-sm leading-7 text-white/60">
          Saç, dırnaq, makiyaj və dəriyə qulluq.
          Bütün sevdiyiniz xidmətlər bir məkanda.
        </p>

        <Link
          href="/services"
          className="mt-9 inline-block border border-[#D9B7A9] px-8 py-4 text-xs uppercase tracking-widest transition-colors hover:bg-[#D9B7A9] hover:text-[#352629]"
        >
          Bütün xidmətlər
        </Link>
      </section>
    </main>
  );
}
