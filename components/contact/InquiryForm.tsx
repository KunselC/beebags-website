"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { inquirySchema, type InquiryInput } from "@/lib/validation";
import { Field, inputClass } from "@/components/ui/Field";

type Status = "idle" | "submitting" | "error";

/** One form, three fields (name, email, message) per the brand book. */
export function InquiryForm() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InquiryInput>({ resolver: zodResolver(inquirySchema) });

  async function onSubmit(data: InquiryInput) {
    setStatus("submitting");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      router.push("/thank-you");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-5"
    >
      <Field label="Name" htmlFor="name" error={errors.name?.message}>
        <input
          id="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={inputClass(!!errors.name)}
          {...register("name")}
        />
      </Field>

      <Field label="Work email" htmlFor="email" error={errors.email?.message}>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={inputClass(!!errors.email)}
          {...register("email")}
        />
      </Field>

      <Field label="Message" htmlFor="message" error={errors.message?.message}>
        <textarea
          id="message"
          rows={5}
          placeholder="What are you packaging, and what are you trying to solve?"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={inputClass(!!errors.message)}
          {...register("message")}
        />
      </Field>

      {/* Honeypot — visually hidden. */}
      <div
        aria-hidden
        className="absolute -left-[9999px]"
        style={{ position: "absolute" }}
      >
        <label htmlFor="company">Company (leave blank)</label>
        <input
          id="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("company")}
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-meadow">
          Something went wrong sending your note. Please try again in a moment.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-1 inline-flex items-center justify-center bg-forest px-7 py-3.5 text-sm font-semibold tracking-wide text-paper transition-colors hover:bg-forest/90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
