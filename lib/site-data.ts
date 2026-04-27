import {
  BadgeCheck,
  Clock3,
  Droplets,
  FileCheck2,
  Hammer,
  HardHat,
  Home,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  ThermometerSun,
  WalletCards,
  Wrench,
} from "lucide-react";

export const phone = process.env.NEXT_PUBLIC_PHONE_LABEL ?? "+7 (999) 123-45-67";
export const phoneDigits = process.env.NEXT_PUBLIC_PHONE_DIGITS ?? "79991234567";
export const phoneHref = `tel:+${phoneDigits}`;
export const whatsappHref = `https://wa.me/${phoneDigits}`;
export const telegramHref =
  process.env.NEXT_PUBLIC_TELEGRAM_URL ?? "https://t.me/roofmaster";
export const yandexMapsHref =
  process.env.NEXT_PUBLIC_YANDEX_MAPS_URL ?? "https://yandex.ru/maps";

export const heroStats = [
  { label: "8+ лет опыта", value: "8+" },
  { label: "Гарантия на работы", value: "5 лет" },
  { label: "Выезд на замер", value: "0 ₽" },
  { label: "Работа по договору", value: "100%" },
];

export const services = [
  {
    title: "Монтаж кровли",
    text: "Металлочерепица, профлист, фальц и мягкая кровля с подготовкой основания.",
    icon: Home,
  },
  {
    title: "Ремонт кровли",
    text: "Ищем протечки, восстанавливаем узлы примыканий и меняем поврежденные участки.",
    icon: Wrench,
  },
  {
    title: "Замена кровли",
    text: "Аккуратный демонтаж старого покрытия, усиление и монтаж новой системы.",
    icon: Hammer,
  },
  {
    title: "Утепление",
    text: "Подбираем пирог кровли, пароизоляцию и вентиляционные зазоры без лишних расходов.",
    icon: ThermometerSun,
  },
  {
    title: "Водостоки",
    text: "Ставим водосточные системы, снегозадержатели и доборные элементы.",
    icon: Droplets,
  },
];

export const projects = [
  {
    title: "Металлочерепица",
    area: "160 м²",
    time: "6 дней",
    image:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Ремонт мягкой кровли",
    area: "90 м²",
    time: "3 дня",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Замена кровли",
    area: "210 м²",
    time: "8 дней",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
  },
];

export const steps = [
  "Заявка",
  "Связь",
  "Выезд",
  "Смета",
  "Договор",
  "Работы",
];

export const advantages = [
  {
    title: "Без посредников",
    text: "На объект приезжает бригада, которая сама отвечает за результат.",
    icon: HardHat,
  },
  {
    title: "Фиксированная цена",
    text: "Смета закрепляется до старта работ и не растет в процессе.",
    icon: WalletCards,
  },
  {
    title: "Соблюдение сроков",
    text: "План работ понятен заранее, материалы и люди готовятся до выезда.",
    icon: Clock3,
  },
  {
    title: "Помощь с материалами",
    text: "Подскажем, где не переплачивать, и привезем комплект под вашу крышу.",
    icon: Sparkles,
  },
];

export const trustItems = [
  { text: "Договор и закрывающие документы", icon: FileCheck2 },
  { text: "Гарантийные обязательства", icon: ShieldCheck },
  { text: "Фотоотчет по этапам", icon: BadgeCheck },
  { text: "Заявка в Telegram", icon: MessageCircle },
  { text: "Звонок в течение 10 минут", icon: Phone },
];

export const reviews = [
  {
    name: "Ирина Белая",
    date: "31 марта 2026",
    avatar: "ИБ",
    text: "Нужно было полностью обновить кровлю на даче. Приехали в день обращения, спокойно объяснили по материалам и смете. Работы сделали аккуратно, мусор после себя убрали.",
    photos: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=240&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=240&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=240&q=80",
    ],
  },
  {
    name: "Арсений Бреусов",
    date: "10 марта 2026",
    avatar: "АБ",
    text: "После зимы потекла крыша у пристройки. Ребята нашли проблемное место, заменили узел примыкания и дали гарантию. По срокам уложились, цена не поменялась.",
  },
  {
    name: "Эльвира Валуева",
    date: "13 февраля 2026",
    avatar: "ЭВ",
    text: "Заказывала навес над террасой и водостоки. Очень приятная бригада: быстро, чисто и без лишних разговоров. Отдельно спасибо за помощь с подбором цвета.",
  },
  {
    name: "Николай И.",
    date: "26 января 2026",
    avatar: "НИ",
    text: "Меняли старую кровлю на металлочерепицу. Понравилось, что заранее расписали этапы и закупку. Результат выглядит отлично, соседи уже спрашивают контакты.",
  },
  {
    name: "Кирилл Кириллыч",
    date: "18 января 2026",
    avatar: "КК",
    text: "Делали утепление мансарды и частичный ремонт покрытия. После работ стало заметно теплее, протечек больше нет. Все по договору и без сюрпризов.",
  },
  {
    name: "Марина С.",
    date: "9 января 2026",
    avatar: "МС",
    text: "Обращалась для замены водосточной системы. Приехали на замер бесплатно, предложили два варианта по бюджету. Выбрали средний, сделали за один день.",
  },
];
