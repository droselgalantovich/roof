"use client";

import { useMemo, useState } from "react";
import { Calculator, CheckCircle2, Gauge, Ruler, WalletCards } from "lucide-react";

const workTypes = [
  { id: "install", label: "Монтаж", price: 1850 },
  { id: "repair", label: "Ремонт", price: 950 },
  { id: "replace", label: "Замена", price: 2450 },
];

const materials = [
  { id: "metal", label: "Металлочерепица", factor: 1 },
  { id: "soft", label: "Мягкая кровля", factor: 1.12 },
  { id: "fold", label: "Фальц", factor: 1.35 },
  { id: "profile", label: "Профлист", factor: 0.88 },
];

const complexity = [
  { id: "simple", label: "Простая", factor: 1 },
  { id: "medium", label: "Есть примыкания", factor: 1.18 },
  { id: "hard", label: "Сложная", factor: 1.38 },
];

const additions = [
  { id: "insulation", label: "Утепление", price: 850 },
  { id: "gutters", label: "Водостоки", price: 420 },
  { id: "dismantling", label: "Демонтаж", price: 520 },
];

function formatPrice(value: number) {
  return new Intl.NumberFormat("ru-RU").format(Math.round(value / 1000) * 1000);
}

export function RoofCalculator() {
  const [area, setArea] = useState(140);
  const [workType, setWorkType] = useState(workTypes[0].id);
  const [material, setMaterial] = useState(materials[0].id);
  const [difficulty, setDifficulty] = useState(complexity[1].id);
  const [selectedAdditions, setSelectedAdditions] = useState<string[]>([
    "dismantling",
  ]);

  const result = useMemo(() => {
    const currentWork = workTypes.find((item) => item.id === workType)!;
    const currentMaterial = materials.find((item) => item.id === material)!;
    const currentDifficulty = complexity.find((item) => item.id === difficulty)!;
    const additionsPrice = selectedAdditions.reduce((sum, id) => {
      const addition = additions.find((item) => item.id === id);
      return sum + (addition?.price ?? 0);
    }, 0);

    const base = area * (currentWork.price * currentMaterial.factor + additionsPrice);
    const estimated = base * currentDifficulty.factor;

    return {
      from: estimated * 0.9,
      to: estimated * 1.14,
      days: Math.max(2, Math.ceil(area / 32) + selectedAdditions.length),
      meterPrice: estimated / area,
    };
  }, [area, difficulty, material, selectedAdditions, workType]);

  function toggleAddition(id: string) {
    setSelectedAdditions((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  }

  return (
    <section className="bg-stone-100 py-16 text-slate-950" id="calculator">
      <div className="section-shell grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-black uppercase text-amber-700">
            <Calculator className="size-4" aria-hidden />
            Калькулятор
          </p>
          <h2 className="mt-3 text-3xl font-black sm:text-5xl">
            Прикиньте бюджет кровли за минуту
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
            Укажите площадь, материал и состав работ. Итог покажет ориентир, а
            точную смету мастер закрепит после бесплатного замера.
          </p>

          <div className="mt-8 rounded-lg bg-white p-5 shadow-sm sm:p-6">
            <label className="flex flex-col gap-4">
              <span className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 text-sm font-black uppercase text-slate-600">
                  <Ruler className="size-4" aria-hidden />
                  Площадь кровли
                </span>
                <span className="rounded-md bg-slate-950 px-3 py-2 text-lg font-black text-amber-300">
                  {area} м²
                </span>
              </span>
              <input
                className="accent-amber-500"
                max="320"
                min="40"
                onChange={(event) => setArea(Number(event.target.value))}
                step="10"
                type="range"
                value={area}
              />
            </label>

            <div className="mt-6 grid gap-5">
              <OptionGroup
                label="Тип работ"
                options={workTypes}
                value={workType}
                onChange={setWorkType}
              />
              <OptionGroup
                label="Покрытие"
                options={materials}
                value={material}
                onChange={setMaterial}
              />
              <OptionGroup
                label="Сложность"
                options={complexity}
                value={difficulty}
                onChange={setDifficulty}
              />
            </div>

            <div className="mt-6">
              <p className="mb-3 text-sm font-black uppercase text-slate-600">
                Дополнительно
              </p>
              <div className="grid gap-2 sm:grid-cols-3">
                {additions.map((item) => {
                  const checked = selectedAdditions.includes(item.id);
                  return (
                    <button
                      className={`focus-ring flex min-h-12 items-center justify-center gap-2 rounded-md border px-3 text-sm font-bold transition ${
                        checked
                          ? "border-slate-950 bg-slate-950 text-white"
                          : "border-slate-200 bg-white text-slate-700 hover:border-amber-500"
                      }`}
                      key={item.id}
                      onClick={() => toggleAddition(item.id)}
                      type="button"
                    >
                      <CheckCircle2
                        className={`size-4 ${checked ? "text-amber-300" : "text-slate-300"}`}
                        aria-hidden
                      />
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <aside className="sticky top-6 rounded-lg bg-slate-950 p-5 text-white shadow-2xl sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase text-amber-300">
                Ориентир по смете
              </p>
              <p className="mt-2 text-4xl font-black sm:text-5xl">
                {formatPrice(result.from)} - {formatPrice(result.to)} ₽
              </p>
            </div>
            <WalletCards className="size-9 text-amber-300" aria-hidden />
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-md bg-white/10 p-4">
              <p className="text-xs text-stone-300">Срок работ</p>
              <p className="mt-1 text-2xl font-black text-amber-300">
                {result.days} дней
              </p>
            </div>
            <div className="rounded-md bg-white/10 p-4">
              <p className="text-xs text-stone-300">Средняя цена</p>
              <p className="mt-1 text-2xl font-black text-amber-300">
                {formatPrice(result.meterPrice)} ₽/м²
              </p>
            </div>
          </div>

          <p className="mt-5 flex gap-3 rounded-md bg-amber-400/10 p-4 text-sm leading-6 text-stone-200">
            <Gauge className="mt-0.5 size-5 shrink-0 text-amber-300" aria-hidden />
            Расчет предварительный: точная цена зависит от стропильной системы,
            примыканий, высоты и выбранных материалов.
          </p>

          <a
            className="focus-ring mt-5 inline-flex h-13 w-full items-center justify-center rounded-md bg-amber-400 px-5 text-base font-black text-slate-950 transition hover:bg-amber-300"
            href="#lead"
          >
            Получить точную смету
          </a>
        </aside>
      </div>
    </section>
  );
}

type OptionGroupProps = {
  label: string;
  onChange: (value: string) => void;
  options: { id: string; label: string }[];
  value: string;
};

function OptionGroup({ label, onChange, options, value }: OptionGroupProps) {
  return (
    <div>
      <p className="mb-3 text-sm font-black uppercase text-slate-600">
        {label}
      </p>
      <div className="grid gap-2 sm:grid-cols-3">
        {options.map((option) => (
          <button
            className={`focus-ring min-h-12 rounded-md border px-3 text-sm font-bold transition ${
              value === option.id
                ? "border-amber-500 bg-amber-400 text-slate-950"
                : "border-slate-200 bg-white text-slate-700 hover:border-amber-500"
            }`}
            key={option.id}
            onClick={() => onChange(option.id)}
            type="button"
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
