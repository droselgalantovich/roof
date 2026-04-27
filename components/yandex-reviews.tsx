import Image from "next/image";
import { ExternalLink, MapPin, Star } from "lucide-react";
import { reviews, yandexMapsHref } from "@/lib/site-data";

function Stars() {
  return (
    <span className="inline-flex items-center gap-0.5 text-yellow-400">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star className="size-6 fill-current" key={index} aria-hidden />
      ))}
    </span>
  );
}

export function YandexReviews() {
  return (
    <section className="bg-stone-100 py-16 text-slate-950" id="reviews">
      <div className="section-shell">
        <div className="rounded-lg bg-white p-5 shadow-sm sm:p-7">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-md bg-red-500 text-xl font-black text-white">
                  Я
                </span>
                <div>
                  <p className="text-2xl font-black">Яндекс Карты</p>
                  <p className="text-sm text-slate-500">
                    Отзывы клиентов RoofMaster
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <p className="text-3xl font-black">5.0 из 5</p>
                <Stars />
                <p className="text-base text-slate-500">
                  На основе 92 оценок
                </p>
              </div>
            </div>
            <a
              className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-5 text-sm font-bold text-slate-950 shadow-sm transition hover:border-amber-400 hover:bg-amber-50"
              href={yandexMapsHref}
              rel="noreferrer"
              target="_blank"
            >
              <MapPin className="size-4 text-red-500" aria-hidden />
              Оставить отзыв
            </a>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review) => (
            <article
              className="flex min-h-[330px] flex-col rounded-lg bg-white p-5 shadow-lg shadow-slate-950/10"
              key={`${review.name}-${review.date}`}
            >
              <div className="flex items-start gap-4">
                <span className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-lg font-black text-slate-950">
                  {review.avatar}
                </span>
                <div>
                  <h3 className="text-xl font-black">{review.name}</h3>
                  <Stars />
                  <p className="mt-1 text-sm text-slate-500">{review.date}</p>
                </div>
              </div>

              {review.photos && (
                <div className="mt-5 grid grid-cols-3 gap-2">
                  {review.photos.map((photo, index) => (
                    <Image
                      alt={`Фото объекта из отзыва ${review.name}`}
                      className="h-20 rounded-md object-cover"
                      height={96}
                      key={photo}
                      sizes="96px"
                      src={photo}
                      width={120}
                      priority={index === 0}
                    />
                  ))}
                </div>
              )}

              <p className="mt-5 text-lg leading-7 text-slate-700">
                {review.text}
              </p>

              <div className="mt-auto pt-5">
                <a
                  className="focus-ring inline-flex items-center gap-2 rounded-md text-sm font-bold text-slate-700 underline underline-offset-4 transition hover:text-amber-700"
                  href={yandexMapsHref}
                  rel="noreferrer"
                  target="_blank"
                >
                  Отзыв Яндекс Карты
                  <ExternalLink className="size-4" aria-hidden />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
