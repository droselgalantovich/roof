import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  MessageCircle,
  Phone,
  Ruler,
  Send,
} from "lucide-react";
import Image from "next/image";
import { FloatingChat } from "@/components/floating-chat";
import { LeadForm } from "@/components/lead-form";
import { RoofCalculator } from "@/components/roof-calculator";
import { ScrollOfferModal } from "@/components/scroll-offer-modal";
import { YandexReviews } from "@/components/yandex-reviews";
import {
  advantages,
  heroStats,
  phone,
  phoneHref,
  projects,
  services,
  steps,
  telegramHref,
  trustItems,
  whatsappHref,
} from "@/lib/site-data";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0b1115] text-stone-50">
      <header className="absolute left-0 right-0 top-0 z-20">
        <div className="section-shell flex h-20 items-center justify-between gap-4">
          <a className="focus-ring rounded-md text-2xl font-black" href="#">
            RoofMaster
          </a>
          <nav className="hidden items-center gap-6 text-sm text-stone-200 md:flex">
            <a className="transition hover:text-amber-300" href="#services">
              Услуги
            </a>
            <a className="transition hover:text-amber-300" href="#calculator">
              Калькулятор
            </a>
            <a className="transition hover:text-amber-300" href="#projects">
              Работы
            </a>
            <a className="transition hover:text-amber-300" href="#steps">
              Процесс
            </a>
            <a className="transition hover:text-amber-300" href="#reviews">
              Отзывы
            </a>
            <a className="transition hover:text-amber-300" href="#contacts">
              Контакты
            </a>
          </nav>
          <a
            className="focus-ring hidden items-center gap-2 rounded-md bg-white px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-amber-200 sm:inline-flex"
            href={phoneHref}
          >
            <Phone className="size-4" aria-hidden />
            {phone}
          </a>
        </div>
      </header>

      <section className="relative min-h-[760px] pb-20 pt-28 sm:min-h-[720px] sm:pt-32">
        <div className="absolute inset-0">
          <Image
            alt="Монтаж кровли на частном доме"
            className="h-full w-full object-cover"
            fill
            priority
            sizes="100vw"
            src="https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=1800&q=80"
          />
          <div className="absolute inset-0 bg-slate-950/70" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b1115] to-transparent" />
        </div>

        <div className="section-shell relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_420px]">
          <div className="animate-rise max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-sm font-bold text-amber-200">
              <Ruler className="size-4" aria-hidden />
              Замер в день обращения
            </p>
            <h1 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-normal text-white sm:text-6xl lg:text-7xl">
              Кровельные работы под ключ в Москве и области
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-200 sm:text-xl">
              Монтаж, ремонт и замена кровли. Приезжаем на объект, считаем
              смету, закрепляем цену в договоре и доводим крышу до результата.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="focus-ring inline-flex h-14 items-center justify-center gap-2 rounded-md bg-amber-400 px-6 text-base font-black text-slate-950 transition hover:bg-amber-300"
                href="#lead"
              >
                Оставить заявку
                <ArrowRight className="size-5" aria-hidden />
              </a>
              <a
                className="focus-ring inline-flex h-14 items-center justify-center gap-2 rounded-md bg-emerald-500 px-6 text-base font-bold text-slate-950 transition hover:bg-emerald-400"
                href={whatsappHref}
                rel="noreferrer"
                target="_blank"
              >
                <MessageCircle className="size-5" aria-hidden />
                WhatsApp
              </a>
              <a
                className="focus-ring inline-flex h-14 items-center justify-center gap-2 rounded-md bg-sky-400 px-6 text-base font-bold text-slate-950 transition hover:bg-sky-300"
                href={telegramHref}
                rel="noreferrer"
                target="_blank"
              >
                <Send className="size-5" aria-hidden />
                Telegram
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {heroStats.map((item) => (
                <div
                  className="rounded-lg border border-white/10 bg-white/10 p-4"
                  key={item.label}
                >
                  <p className="text-2xl font-black text-amber-300">
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm text-stone-200">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="glass-panel animate-rise rounded-lg p-5">
            <p className="text-sm font-bold uppercase text-amber-300">
              Расчет за 10 минут
            </p>
            <h2 className="mt-2 text-2xl font-black text-white">
              Оставьте номер, мастер уточнит задачу и приедет на замер
            </h2>
            <div className="mt-5">
              <LeadForm source="hero-form" />
            </div>
          </aside>
        </div>
      </section>

      <section className="py-14">
        <div className="section-shell grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                className="rounded-lg border border-white/10 bg-white/[0.04] p-4"
                key={item.text}
              >
                <Icon className="mb-3 size-6 text-amber-300" aria-hidden />
                <p className="text-sm font-semibold text-stone-100">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-16" id="services">
        <div className="section-shell">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase text-amber-300">Услуги</p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              Берем на себя всю кровлю, а не отдельный кусок задачи
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  className="group rounded-lg border border-white/10 bg-stone-100 p-5 text-slate-950 shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-amber-300"
                  key={service.title}
                >
                  <Icon className="size-8 text-slate-900" aria-hidden />
                  <h3 className="mt-5 text-xl font-black">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    {service.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <RoofCalculator />

      <section className="py-16" id="projects">
        <div className="section-shell">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase text-amber-300">
                Примеры работ
              </p>
              <h2 className="mt-3 text-3xl font-black sm:text-5xl">
                Реальные форматы объектов
              </h2>
            </div>
            <a
              className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/15 px-5 text-sm font-bold text-stone-100 transition hover:bg-white/10"
              href="#lead"
            >
              Получить смету
              <ArrowRight className="size-4" aria-hidden />
            </a>
          </div>
          <div className="mt-8 flex snap-x gap-5 overflow-x-auto pb-4">
            {projects.map((project) => (
              <article
                className="min-w-[280px] snap-start overflow-hidden rounded-lg border border-white/10 bg-white/[0.05] shadow-2xl sm:min-w-[360px] lg:min-w-0 lg:flex-1"
                key={project.title}
              >
                <Image
                  alt={project.title}
                  className="h-56 w-full object-cover"
                  height={420}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 360px, 280px"
                  src={project.image}
                  width={640}
                />
                <div className="p-5">
                  <h3 className="text-2xl font-black">{project.title}</h3>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-md bg-white/10 p-3">
                      <p className="text-xs text-stone-300">Площадь</p>
                      <p className="text-lg font-black text-amber-300">
                        {project.area}
                      </p>
                    </div>
                    <div className="rounded-md bg-white/10 p-3">
                      <p className="text-xs text-stone-300">Срок</p>
                      <p className="text-lg font-black text-amber-300">
                        {project.time}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-100 py-16 text-slate-950" id="steps">
        <div className="section-shell">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase text-amber-700">
              Как мы работаем
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              От заявки до готовой крыши без лишних созвонов
            </h2>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {steps.map((step, index) => (
              <div className="rounded-lg bg-white p-5 shadow-sm" key={step}>
                <span className="flex size-10 items-center justify-center rounded-md bg-slate-950 text-sm font-black text-amber-300">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-xl font-black">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase text-amber-300">
              Почему нам доверяют
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              Цена, сроки и материалы понятны до старта
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-300">
              Мы не тянем клиента по сайту: показываем главное, быстро
              связываемся и даем понятный следующий шаг.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {advantages.map((advantage) => {
              const Icon = advantage.icon;
              return (
                <article
                  className="rounded-lg border border-white/10 bg-white/[0.05] p-5"
                  key={advantage.title}
                >
                  <Icon className="size-7 text-amber-300" aria-hidden />
                  <h3 className="mt-4 text-xl font-black">
                    {advantage.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-stone-300">
                    {advantage.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <YandexReviews />

      <section className="py-16" id="lead">
        <div className="section-shell grid gap-8 rounded-lg bg-amber-400 p-6 text-slate-950 sm:p-10 lg:grid-cols-[1fr_420px] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase">Заявка</p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              Узнайте стоимость работ по вашей кровле сегодня
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-800">
              Перезвоним, уточним площадь и покрытие, подскажем ближайшее окно
              для бесплатного замера по Москве и области.
            </p>
            <div className="mt-6 grid gap-2 text-sm font-bold sm:grid-cols-2">
              {["Без навязанных услуг", "Предварительная смета по телефону"].map(
                (item) => (
                  <p className="flex items-center gap-2" key={item}>
                    <CheckCircle2 className="size-5" aria-hidden />
                    {item}
                  </p>
                ),
              )}
            </div>
          </div>
          <div className="rounded-lg bg-slate-950 p-5">
            <LeadForm source="bottom-form" />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-12" id="contacts">
        <div className="section-shell grid gap-8 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <p className="text-3xl font-black">RoofMaster</p>
            <p className="mt-3 max-w-xl text-stone-300">
              Кровельные работы под ключ в Москве и Московской области.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <a
              className="focus-ring flex items-center gap-3 rounded-md bg-white/10 p-4 transition hover:bg-white/15"
              href={phoneHref}
            >
              <Phone className="size-5 text-amber-300" aria-hidden />
              {phone}
            </a>
            <p className="flex items-center gap-3 rounded-md bg-white/10 p-4">
              <MapPin className="size-5 text-amber-300" aria-hidden />
              Москва и область
            </p>
            <a
              className="focus-ring flex items-center gap-3 rounded-md bg-white/10 p-4 transition hover:bg-white/15"
              href={whatsappHref}
              rel="noreferrer"
              target="_blank"
            >
              <MessageCircle className="size-5 text-emerald-300" aria-hidden />
              WhatsApp
            </a>
            <a
              className="focus-ring flex items-center gap-3 rounded-md bg-white/10 p-4 transition hover:bg-white/15"
              href={telegramHref}
              rel="noreferrer"
              target="_blank"
            >
              <Send className="size-5 text-sky-300" aria-hidden />
              Telegram
            </a>
          </div>
        </div>
      </footer>

      <FloatingChat />
      <ScrollOfferModal />
    </main>
  );
}
