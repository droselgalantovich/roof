"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Calculator,
  CheckCircle2,
  Gift,
  Home,
  Percent,
  X,
} from "lucide-react";

const storageKey = "roofmaster-scroll-offer-closed";

export function ScrollOfferModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(storageKey) === "true") {
      return;
    }

    function handleScroll() {
      if (window.scrollY > 720) {
        setOpen(true);
        window.removeEventListener("scroll", handleScroll);
      }
    }

    const timer = window.setTimeout(handleScroll, 1200);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeOffer();
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  function closeOffer() {
    sessionStorage.setItem(storageKey, "true");
    setOpen(false);
  }

  function goToCalculator() {
    closeOffer();
    window.setTimeout(() => {
      document
        .getElementById("calculator")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }

  if (!open) {
    return null;
  }

  return (
    <div
      aria-labelledby="scroll-offer-title"
      aria-modal="true"
      className="fixed inset-0 z-[70] grid place-items-center bg-slate-950/82 px-4 py-6 backdrop-blur-sm"
      role="dialog"
    >
      <button
        aria-label="Закрыть предложение"
        className="focus-ring absolute right-4 top-4 rounded-md p-2 text-white/70 transition hover:bg-white/10 hover:text-white sm:right-8 sm:top-8"
        onClick={closeOffer}
        type="button"
      >
        <X className="size-8" aria-hidden />
      </button>

      <div className="animate-rise w-full max-w-6xl overflow-hidden rounded-lg bg-stone-50 text-slate-950 shadow-2xl">
        <div className="grid max-h-[calc(100vh-48px)] overflow-hidden lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative hidden min-h-[560px] bg-white lg:block">
            <Image
              alt="Мастер RoofMaster с инструментом"
              className="object-cover object-center"
              fill
              sizes="44vw"
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1100&q=85"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white/70 to-transparent p-5 pt-20">
              <div className="rounded-lg bg-slate-950 p-3 text-white">
                <p className="text-xs text-stone-300">Бонус после расчета</p>
                <p className="mt-1 text-xl font-black text-amber-300">
                  Бесплатный выезд и смета
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden p-5 sm:p-7 lg:p-9">
            <div className="flex items-center gap-4 border-b border-slate-200 pb-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-md bg-emerald-500 text-white">
                <Home className="size-7" aria-hidden />
              </span>
              <div>
                <p className="text-sm font-black uppercase text-emerald-700">
                  Кровельные работы
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Расчет стоимости по вашим параметрам
                </p>
              </div>
            </div>

            <h2
              className="mt-6 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl"
              id="scroll-offer-title"
            >
              Узнайте за 3 минуты стоимость кровли под ключ
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 lg:text-lg">
              Ответьте на несколько параметров в калькуляторе и получите
              ориентир по цене, срокам и материалам до звонка мастера.
            </p>

            <div className="mt-5 grid gap-2">
              {[
                "Предварительная стоимость работ",
                "Бесплатный выезд на замер",
                "Скидка 20% на монтаж при заявке с сайта",
              ].map((item) => (
                <p
                  className="flex items-start gap-3 text-sm font-bold text-slate-700 lg:text-base"
                  key={item}
                >
                  <CheckCircle2
                    className="mt-0.5 size-5 shrink-0 text-emerald-500"
                    aria-hidden
                  />
                  {item}
                </p>
              ))}
            </div>

            <button
              className="focus-ring mt-6 inline-flex h-13 w-full items-center justify-center gap-2 rounded-md bg-emerald-500 px-6 text-base font-black text-white shadow-lg shadow-emerald-900/20 transition hover:bg-emerald-600 sm:w-auto"
              onClick={goToCalculator}
              type="button"
            >
              <Calculator className="size-5" aria-hidden />
              Рассчитать стоимость
            </button>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg bg-slate-950 p-4 text-white">
                <div className="flex items-center gap-2 text-amber-300">
                  <Percent className="size-5" aria-hidden />
                  <p className="text-sm font-black uppercase">Ваша скидка</p>
                </div>
                <p className="mt-2 text-3xl font-black">до 20%</p>
              </div>
              <div className="rounded-lg bg-amber-300 p-4 text-slate-950">
                <div className="flex items-center gap-2">
                  <Gift className="size-5" aria-hidden />
                  <p className="text-sm font-black uppercase">Бонус</p>
                </div>
                <p className="mt-2 text-lg font-black leading-snug">
                  Помощь с подбором материалов
                </p>
              </div>
            </div>

            <p className="mt-4 text-xs leading-5 text-slate-500">
              Предложение не обязывает к заказу. Точную смету фиксируем после
              осмотра объекта и согласования материалов.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
