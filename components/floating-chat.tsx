"use client";

import { useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { telegramHref, whatsappHref } from "@/lib/site-data";
import { LeadForm } from "./lead-form";

export function FloatingChat() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      {open && (
        <div className="mb-3 w-[calc(100vw-32px)] max-w-sm rounded-lg border border-white/12 bg-slate-950 p-4 shadow-2xl">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-amber-300">RoofMaster</p>
              <p className="mt-1 text-lg font-bold text-white">
                Быстрый расчет кровли
              </p>
            </div>
            <button
              aria-label="Закрыть"
              className="focus-ring rounded-md p-2 text-stone-300 transition hover:bg-white/10 hover:text-white"
              onClick={() => setOpen(false)}
              type="button"
            >
              <X className="size-5" aria-hidden />
            </button>
          </div>
          <LeadForm compact source="floating-chat" />
          <div className="mt-4 grid grid-cols-2 gap-2">
            <a
              className="focus-ring inline-flex h-11 items-center justify-center gap-2 rounded-md bg-emerald-500 text-sm font-bold text-slate-950"
              href={whatsappHref}
              rel="noreferrer"
              target="_blank"
            >
              <MessageCircle className="size-4" aria-hidden />
              WhatsApp
            </a>
            <a
              className="focus-ring inline-flex h-11 items-center justify-center gap-2 rounded-md bg-sky-400 text-sm font-bold text-slate-950"
              href={telegramHref}
              rel="noreferrer"
              target="_blank"
            >
              <Send className="size-4" aria-hidden />
              Telegram
            </a>
          </div>
        </div>
      )}
      <button
        aria-label="Открыть форму заявки"
        className="focus-ring float-soft ml-auto flex size-16 items-center justify-center rounded-full bg-amber-400 text-slate-950 shadow-2xl shadow-amber-950/40 transition hover:bg-amber-300"
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        {open ? <X className="size-7" aria-hidden /> : <MessageCircle className="size-7" aria-hidden />}
      </button>
    </div>
  );
}
