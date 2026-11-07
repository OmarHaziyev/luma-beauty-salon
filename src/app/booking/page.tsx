import type { Metadata } from "next";
import { Suspense } from "react";
import BookingForm from "@/components/booking/BookingForm";

export const metadata: Metadata = {
  title: "Rezervasiya",
};

export default function BookingPage() {
  return (
    <main>
      <section className="px-6 pb-28 pt-12 md:px-16 md:pt-20">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#B77E80]">
              Rezervasiya
            </p>
            <h1 className="font-serif text-5xl leading-tight md:text-7xl">
              Görüşünüzü
              <br />
              <span className="italic text-[#783F4A]">planlaşdırın.</span>
            </h1>
            <p className="mt-7 max-w-md text-sm leading-7 text-[#806F6C]">
              Xidməti və uyğun vaxtı seçin. Komandamız sorğunuzu təsdiqləyəcək.
            </p>
          </div>

          <Suspense fallback={<div className="min-h-80" />}>
            <BookingForm />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
