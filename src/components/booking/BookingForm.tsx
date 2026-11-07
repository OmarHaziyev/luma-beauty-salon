"use client";

import { services } from "@/data/services";
import { useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";

export default function BookingForm() {
  const requestedId = useSearchParams().get("service") ?? "";
  const requestedIsKnown = services.some(
    (service) => String(service.id) === requestedId,
  );
  const [serviceId, setServiceId] = useState(
    requestedIsKnown ? requestedId : "",
  );
  const [trackedRequest, setTrackedRequest] = useState(requestedId);
  const [submitted, setSubmitted] = useState(false);

  if (requestedId !== trackedRequest) {
    setTrackedRequest(requestedId);
    setServiceId(requestedIsKnown ? requestedId : "");
    setSubmitted(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-[#DED3CD] p-10">
        <p className="text-xs uppercase tracking-[0.3em] text-[#B77E80]">
          Qəbul edildi
        </p>
        <h2 className="mt-4 font-serif text-4xl">
          Sorğunuz üçün təşəkkür edirik.
        </h2>
        <p className="mt-4 text-sm leading-7 text-[#806F6C]">
          Tezliklə sizinlə əlaqə saxlayacağıq.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <label className="grid gap-2 text-xs uppercase tracking-[0.2em] text-[#806F6C]">
        Ad
        <input
          required
          name="name"
          className="border border-[#DED3CD] bg-transparent px-4 py-3 text-sm normal-case tracking-normal text-[#352629] outline-none focus:border-[#783F4A]"
        />
      </label>
      <label className="grid gap-2 text-xs uppercase tracking-[0.2em] text-[#806F6C]">
        Telefon
        <input
          required
          name="phone"
          type="tel"
          className="border border-[#DED3CD] bg-transparent px-4 py-3 text-sm normal-case tracking-normal text-[#352629] outline-none focus:border-[#783F4A]"
        />
      </label>
      <label className="grid gap-2 text-xs uppercase tracking-[0.2em] text-[#806F6C]">
        Xidmət
        <select
          required
          name="service"
          value={serviceId}
          onChange={(event) => setServiceId(event.target.value)}
          className="border border-[#DED3CD] bg-transparent px-4 py-3 text-sm normal-case tracking-normal text-[#352629] outline-none focus:border-[#783F4A]"
        >
          <option value="" disabled>
            Seçin
          </option>
          {services.map((service) => (
            <option key={service.id} value={String(service.id)}>
              {service.name}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-xs uppercase tracking-[0.2em] text-[#806F6C]">
        Tarix
        <input
          required
          name="date"
          type="date"
          className="border border-[#DED3CD] bg-transparent px-4 py-3 text-sm normal-case tracking-normal text-[#352629] outline-none focus:border-[#783F4A]"
        />
      </label>
      <button
        type="submit"
        className="mt-2 bg-[#783F4A] px-8 py-4 text-xs uppercase tracking-widest text-white transition-colors hover:bg-[#5E3039]"
      >
        Göndər
      </button>
    </form>
  );
}
