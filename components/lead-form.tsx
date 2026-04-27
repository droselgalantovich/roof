"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2, PhoneCall, Send } from "lucide-react";

type LeadFormProps = {
  compact?: boolean;
  source: string;
};

const leadEndpoint = process.env.NEXT_PUBLIC_LEAD_ENDPOINT ?? "/api/leads";
const isStaticDemo = process.env.NEXT_PUBLIC_STATIC_DEMO === "true";

export function LeadForm({ compact = false, source }: LeadFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      if (isStaticDemo && leadEndpoint === "/api/leads") {
        await new Promise((resolve) => window.setTimeout(resolve, 400));
        setStatus("success");
        form.reset();
        return;
      }

      const response = await fetch(leadEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          source,
        }),
      });

      if (!response.ok) {
        throw new Error("Lead request failed");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="grid gap-3" onSubmit={handleSubmit}>
      <label className="grid gap-2 text-sm text-stone-200">
        Имя
        <input
          className="focus-ring h-12 rounded-md border border-white/10 bg-white px-4 text-base text-slate-950 placeholder:text-slate-500"
          name="name"
          placeholder="Иван"
          required
          autoComplete="name"
        />
      </label>
      <label className="grid gap-2 text-sm text-stone-200">
        Телефон
        <input
          className="focus-ring h-12 rounded-md border border-white/10 bg-white px-4 text-base text-slate-950 placeholder:text-slate-500"
          name="phone"
          pattern="^[+()\\d\\s-]{7,20}$"
          placeholder="+7 999 123-45-67"
          required
          type="tel"
          autoComplete="tel"
          inputMode="tel"
        />
      </label>
      <button
        className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-md bg-amber-400 px-5 text-base font-bold text-slate-950 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-70"
        disabled={status === "loading"}
        type="submit"
      >
        {status === "loading" ? (
          <Loader2 className="size-5 animate-spin" aria-hidden />
        ) : compact ? (
          <Send className="size-5" aria-hidden />
        ) : (
          <PhoneCall className="size-5" aria-hidden />
        )}
        Жду звонка
      </button>
      <p className="text-xs leading-5 text-stone-300">
        Нажимая кнопку, вы соглашаетесь на обработку персональных данных для
        обратной связи.
      </p>
      {status === "success" && (
        <p className="inline-flex items-center gap-2 text-sm font-medium text-emerald-300">
          <CheckCircle2 className="size-4" aria-hidden />
          Заявка отправлена. Скоро перезвоним.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm font-medium text-red-200">
          Не получилось отправить. Позвоните нам или напишите в мессенджер.
        </p>
      )}
    </form>
  );
}
