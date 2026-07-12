/* R5 bilingual copy. UA is canonical; EN is a true equal.
   Voice: warm, thoughtful, "ти/you" — the space that lifts you.
   %G% is resolved at build time from the chosen gym noun ("простір / space"). */

type Locale = "uk" | "en";

interface ProofItem { n: string; l: string; sub: string; }
interface PillarItem { n: string; t: string; d: string; tag: string; }
interface ProgramItem { n: string; t: string; d: string; tag: string; }

export interface Strings {
  code: "UK" | "EN";
  nav: { coach: string; gym: string; services: string; online: string; contact: string; book: string; };
  hero: { eyebrow: string; title: string; marked: string; sub: string; cta: string; ghost: string; scroll: string; };
  proof: { eyebrow: string; items: ProofItem[]; };
  box: { eyebrow: string; title: string; marked: string; lead: string; body: string; ticks: string[]; photo: string; };
  pillars: { eyebrow: string; title: string; marked: string; items: PillarItem[]; };
  programs: { eyebrow: string; title: string; marked: string; more: string; details: string; items: ProgramItem[]; };
  coach: { eyebrow: string; name: string; title: string; body: string; creds: string[]; link: string; photo: string; };
  quote: { eyebrow: string; text: string; name: string; role: string; link: string; };
  onlineband: { eyebrow: string; title: string; body: string; cta: string; };
  cta: {
    eyebrow: string; title: string; marked: string; sub: string;
    name: string; phone: string; when: string; whenPh: string;
    submit: string; done: string; consent: string;
    namePh: string;
  };
  footer: {
    tagline: string; nav: string; contacts: string; social: string;
    address: string; hours: string; phone: string; ig: string;
    rights: string; meta: string;
  };
}

// Brand commitment: %G% = "простір" / "space" (the canonical gym noun).
const GYM = { uk: "простір", en: "space" } as const;

const RAW: Record<Locale, Strings> = {
  uk: {
    code: "UK",
    nav: { coach: "Тренер", gym: "%G%", services: "Напрямки", online: "Онлайн", contact: "Контакти", book: "Записатись" },
    hero: {
      eyebrow: "Функціональний тренінг · Дніпро",
      title: "Люди, з якими\nростеш",
      marked: "ростеш",
      sub: "R5 — %G%, який зустрічає тебе на твоєму рівні. Продумане обладнання, науковий підхід і люди, з якими хочеться повертатись.",
      cta: "Перше тренування — безкоштовно",
      ghost: "Тренуйся онлайн",
      scroll: "Гортай",
    },
    proof: {
      eyebrow: "Продумано до дрібниць",
      items: [
        { n: "#1", l: "Masters 40+ в Україні", sub: "CFX Open 2026 · 2:59" },
        { n: "25",  l: "років коучингу",           sub: "із 2001" },
        { n: "HRV", l: "сертифікований тренер",   sub: "відновлення · нервова система" },
        { n: "L2",  l: "CrossFit + Gymnastics",   sub: "Master of Sport · кетлбел" },
      ],
    },
    box: {
      eyebrow: "Хто ми",
      title: "%G%, продуманий",
      marked: "до дрібниць",
      lead: "R5 — не бутик із дзеркалами і не зала «на характер». Це %G%, у якому подумали про все: від обладнання світових брендів до фільтрованої води, індивідуальних сейфів і кави після тренування.",
      body: "Ми зустрінемо тебе на будь-якому рівні — від першого присіду до помосту. Найголовніше тут — люди, які тягнуть одне одного вгору, і тренер, який досі виходить на старт сам, щоб перевіряти те, чому вчить.",
      ticks: ["Зустрінемо на будь-якому рівні", "Продумане обладнання й комфорт", "Люди, з якими хочеться повертатись"],
      photo: "// інтер’єр —\nсвітло, обладнання, простір після тренування",
    },
    pillars: {
      eyebrow: "Чому R5",
      title: "Три причини",
      marked: "залишитись",
      items: [
        { n: "01", t: "Правильне\nоточення",       d: "Ти стаєш тим, з ким тренуєшся. У R5 ти оточений людьми, які підштовхують тебе вгору — і поруч із тобою, коли важко.", tag: "Люди" },
        { n: "02", t: "Наука,\nа не виснаження",   d: "Сертифікований HRV-тренер. Програмуємо навколо відновлення нервової системи — щоб ти прогресував десятиліттями, а не один сезон.", tag: "HRV-метод" },
        { n: "03", t: "Продумано\nдо дрібниць",    d: "Обладнання світових брендів, індивідуальні сейфи, душові преміум-класу, фільтрована вода, кава. Комфорт, щоб хотілося повертатись.", tag: "Комфорт" },
      ],
    },
    programs: {
      eyebrow: "Що ти можеш тут робити",
      title: "Напрямки",
      marked: "тренувань",
      more: "Усі напрямки",
      details: "Деталі",
      items: [
        { n: "01", t: "Групові класи",   d: "Функціональні класи під наглядом тренера. Кожен клас масштабується під твій рівень — і твій сьогоднішній стан.", tag: "Пн–Сб" },
        { n: "02", t: "Персональні",     d: "Один на один або невеликі групи до 2 людей. Максимум уваги від тренера — техніка, програма й прогрес під тебе.", tag: "Популярне" },
        { n: "03", t: "Для новачків",    d: "On-ramp: базова техніка й рухи з нуля. Спокійний вхід у функціональний тренінг — без «а ти зможеш?».",           tag: "З нуля" },
      ],
    },
    coach: {
      eyebrow: "Тренер", name: "Дмитро",
      title: "Все ще на старті —\nщоб знати, чому вчить",
      body: "Майстер спорту України з гирьового спорту, призер чемпіонатів світу, CrossFit L2 + Gymnastics і сертифікований HRV-тренер. Тренує з 2001 року — і досі виходить на старт сам, щоб перевіряти те, чому вчить інших.",
      creds: [
        "#1 Masters 40+ (чол.) в Україні, CFX Open 2026",
        "Майстер спорту України · гирьовий спорт",
        "Медалі ЧС із кетлбелу (Гамбург 2012)",
        "CrossFit L2 + Gymnastics · диплом зі спортивної науки",
      ],
      link: "Більше про тренера",
      photo: "// портрет тренера —\nтепле, злегка зернисте світло",
    },
    quote: {
      eyebrow: "Спільнота",
      text: "Прийшов на місяць.\nЗалишився на три роки.",
      name: "Олег Шевченко", role: "Член клубу з 2022",
      link: "Результати та спільнота",
    },
    onlineband: {
      eyebrow: "Онлайн-коучинг",
      title: "Не в Дніпрі?\nТренуйся з Дмитром онлайн",
      body: "Індивідуальне програмування та HRV-метод відновлення — де б ти не був. Контроль навантаження й підтримка на кожному кроці.",
      cta: "Дізнатись про онлайн",
    },
    cta: {
      eyebrow: "Перше тренування",
      title: "Приходь подивитись",
      marked: "подивитись",
      sub: "Залиш контакти — тренер передзвонить і підбере зручний час. Перше тренування безкоштовне, без зобовʼязань і без «а ти зможеш?».",
      name: "Імʼя", phone: "Телефон", when: "Коли тобі зручно?",
      whenPh: "Будній вечір", submit: "Записатись на пробне",
      done: "Готово! Тренер зателефонує тобі найближчим часом.",
      consent: "Натискаючи, ти погоджуєшся, що з тобою звʼяжуться щодо тренування.",
      namePh: "Олена",
    },
    footer: {
      tagline: "%G%, який тягне вгору. Дніпро.",
      nav: "Навігація", contacts: "Контакти", social: "Ми тут",
      address: "вул. Робоча 5, Дніпро", hours: "Пн–Сб · 07:00–22:00",
      phone: "+38 067 000 00 00", ig: "@rokytnyi5.crossbox",
      rights: "© 2026 R5 Rokytnyi5. Усі права захищено.",
      meta: "Функціональний тренінг · Дніпро",
    },
  },
  en: {
    code: "EN",
    nav: { coach: "Coach", gym: "%G%", services: "Training", online: "Online", contact: "Contact", book: "Book" },
    hero: {
      eyebrow: "Functional training · Dnipro",
      title: "The people who\nlift you",
      marked: "lift you",
      sub: "R5 is a %G% that meets you where you are. Thoughtful equipment, science-informed coaching, and the kind of people you'll want to come back to.",
      cta: "First session — free",
      ghost: "Train online",
      scroll: "Scroll",
    },
    proof: {
      eyebrow: "Thoughtful to the detail",
      items: [
        { n: "#1", l: "Masters 40+ in Ukraine",  sub: "CFX Open 2026 · 2:59" },
        { n: "25",  l: "years coaching",         sub: "since 2001" },
        { n: "HRV", l: "certified coach",        sub: "recovery · nervous system" },
        { n: "L2",  l: "CrossFit + Gymnastics",  sub: "Master of Sport · kettlebell" },
      ],
    },
    box: {
      eyebrow: "Who we are",
      title: "A %G% thought",
      marked: "through",
      lead: "R5 isn't a boutique full of mirrors, and it isn't a grit-for-grit's-sake gym either. It's a %G% where every detail is considered — from world-brand equipment to filtered water, individual lockers, and coffee after training.",
      body: "We meet you at whatever level you're at — from your first squat to the competition platform. What matters most: the people who lift each other up, and a coach who still competes himself to test what he teaches.",
      ticks: ["Meets you at every level", "Thoughtful equipment and comfort", "People you'll want to come back to"],
      photo: "// interior —\nlight, equipment, room to breathe after training",
    },
    pillars: {
      eyebrow: "Why R5",
      title: "Three reasons",
      marked: "to stay",
      items: [
        { n: "01", t: "The right\nenvironment",   d: "You become who you train with. At R5 you're surrounded by people pushing you upward — and beside you when it's hard.", tag: "People" },
        { n: "02", t: "Science, not\nexhaustion", d: "A certified HRV coach. We program around nervous-system recovery — so you progress for decades, not one season.", tag: "HRV method" },
        { n: "03", t: "Thought through\nto the detail", d: "World-brand equipment, individual lockers, premium showers, filtered water, coffee. Comfort that makes you want to come back.", tag: "Comfort" },
      ],
    },
    programs: {
      eyebrow: "What you can do here",
      title: "Ways to",
      marked: "train",
      more: "All training",
      details: "Details",
      items: [
        { n: "01", t: "Group classes",      d: "Coach-led functional classes. Every class scales to your level — and to the state you're in today.", tag: "Mon–Sat" },
        { n: "02", t: "Personal training",  d: "One-on-one or small groups of up to 2. Maximum coach attention — technique, programming and progress built around you.", tag: "Popular" },
        { n: "03", t: "Beginner on-ramp",   d: "Learn the movements from zero. A calm, welcoming entry into functional training — no 'can you handle it?'.", tag: "From zero" },
      ],
    },
    coach: {
      eyebrow: "Coach", name: "Dmytro",
      title: "Still on the start line —\nso he knows what he teaches",
      body: "Master of Sport of Ukraine in kettlebell, a world-championship medallist, CrossFit L2 + Gymnastics and a certified HRV coach. Coaching since 2001 — and still competing himself, so he knows what actually works.",
      creds: [
        "#1 Masters 40+ (Men) in Ukraine, CFX Open 2026",
        "Master of Sport of Ukraine · kettlebell",
        "Kettlebell World Championship medals (Hamburg 2012)",
        "CrossFit L2 + Gymnastics · sports-science degree",
      ],
      link: "More about the coach",
      photo: "// coach portrait —\nwarm, slightly grainy light",
    },
    quote: {
      eyebrow: "Community",
      text: "Came for a month.\nStayed three years.",
      name: "Oleh Shevchenko", role: "Member since 2022",
      link: "Results & community",
    },
    onlineband: {
      eyebrow: "Online coaching",
      title: "Not in Dnipro?\nTrain with Dmytro online",
      body: "Individual programming and HRV-based recovery — wherever you are. Load managed, and support at every step.",
      cta: "Ask about online",
    },
    cta: {
      eyebrow: "First session",
      title: "Come see for yourself",
      marked: "for yourself",
      sub: "Leave your details — a coach will call and find a time that works. Your first session is free, no pressure and no 'can you handle it?'.",
      name: "Name", phone: "Phone", when: "When suits you?",
      whenPh: "Weekday evening", submit: "Book my free session",
      done: "Done! A coach will call you shortly.",
      consent: "By submitting, you agree we may contact you about training.",
      namePh: "Olena",
    },
    footer: {
      tagline: "A %G% that lifts you. Dnipro.",
      nav: "Navigation", contacts: "Contact", social: "Find us",
      address: "5 Robocha St, Dnipro", hours: "Mon–Sat · 07:00–22:00",
      phone: "+38 067 000 00 00", ig: "@rokytnyi5.crossbox",
      rights: "© 2026 R5 Rokytnyi5. All rights reserved.",
      meta: "Functional training · Dnipro",
    },
  },
};

// Exported so per-page string files can resolve %G% against the same gym noun.
export const GYM_TERM = GYM;

export function replaceG<T>(node: T, term: string): T {
  if (typeof node === "string") return node.split("%G%").join(term) as unknown as T;
  if (Array.isArray(node)) return node.map((x) => replaceG(x, term)) as unknown as T;
  if (node && typeof node === "object") {
    const out: Record<string, unknown> = {};
    for (const k of Object.keys(node as Record<string, unknown>)) {
      out[k] = replaceG((node as Record<string, unknown>)[k], term);
    }
    return out as unknown as T;
  }
  return node;
}

export const STRINGS: Record<Locale, Strings> = {
  uk: replaceG(RAW.uk, GYM.uk),
  en: replaceG(RAW.en, GYM.en),
};

// Section IDs that the in-page smooth-scroll listener targets. Use ScrollId
// when typing data-go props so a typo fails at build time.
export const SCROLL_IDS = ["coach", "gym", "services", "online", "contact"] as const;
export type ScrollId = typeof SCROLL_IDS[number];

// Top-nav items. Each navigates to its own page; the routes live alongside
// here so Nav, Footer and the active-state checker share one source of truth.
export const NAV_ITEMS = [
  { id: "coach",    href: "/coach"    },
  { id: "gym",      href: "/gym"      },
  { id: "services", href: "/training" },
  { id: "online",   href: "/online"   },
  { id: "contact",  href: "/contact"  },
] as const;
export type NavId = typeof NAV_ITEMS[number]["id"];

export function splitMarked(title: string, marked: string): { before: string; after: string } {
  const i = title.indexOf(marked);
  if (i < 0) return { before: title, after: "" };
  return { before: title.slice(0, i), after: title.slice(i + marked.length) };
}

export function zipLocales<U, E>(uk: U[], en: E[]): Array<{ u: U; e: E }> {
  return uk.map((u, i) => ({ u, e: en[i] }));
}
