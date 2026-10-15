"use client";

import { useState, type FormEvent } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      company: String(formData.get("company") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      website: String(formData.get("website") ?? "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Sõnumi saatmine ebaõnnestus.");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const fieldClass =
    "w-full border-0 border-b border-[#111111]/25 bg-transparent px-0 py-3 font-inter text-sm text-[#111111] outline-none transition-colors placeholder:text-[#111111]/40 focus:border-[#D32F2F]";

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Honeypot: päris külastaja jätab selle välja tühjaks. */}
      <div
        className="absolute -left-[9999px]"
        aria-hidden="true"
      >
        <label htmlFor="website">Ära täida seda välja</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label
          htmlFor="name"
          className="font-inter text-[10px] uppercase tracking-[0.1em] text-[#111111]/60"
        >
          Sinu nimi *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          maxLength={100}
          required
          className={fieldClass}
          placeholder="Ees- ja perekonnanimi"
        />
      </div>

      <div>
        <label
          htmlFor="company"
          className="font-inter text-[10px] uppercase tracking-[0.1em] text-[#111111]/60"
        >
          Ettevõte
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          maxLength={150}
          className={fieldClass}
          placeholder="Ettevõtte nimi (valikuline)"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="font-inter text-[10px] uppercase tracking-[0.1em] text-[#111111]/60"
        >
          E-posti aadress *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          maxLength={254}
          required
          className={fieldClass}
          placeholder="nimi@ettevote.ee"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="font-inter text-[10px] uppercase tracking-[0.1em] text-[#111111]/60"
        >
          Sinu sõnum *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          maxLength={5000}
          required
          className={`${fieldClass} resize-y`}
          placeholder="Kirjelda lühidalt, kuidas saame aidata."
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="group inline-flex items-center gap-3 font-inter text-[10px] uppercase tracking-[0.1em] transition-colors hover:text-[#D32F2F] disabled:cursor-wait disabled:opacity-50"
      >
        <span>
          {status === "sending" ? "Saadan sõnumit..." : "Saada sõnum"}
        </span>
        <span className="text-[#D32F2F] transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </button>

      <div aria-live="polite">
        {status === "success" && (
          <p className="font-inter text-sm text-[#111111]/75">
            Aitäh! Sinu sõnum on edukalt saadetud. Võtame sinuga ühendust.
          </p>
        )}

        {status === "error" && (
          <p className="font-inter text-sm text-[#D32F2F]">
            Sõnumi saatmine ei õnnestunud. Palun proovi uuesti või kirjuta
            otse aadressile irene@lltrading.ee.
          </p>
        )}
      </div>
    </form>
  );
}