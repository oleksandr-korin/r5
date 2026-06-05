/* R5 bilingual copy. UA is canonical; EN is a true equal.
   Voice: direct, plain, earned, "ти/you". %G% is resolved at build time
   from the chosen gym noun (we commit to "простір / space"). */

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
      title: "Залізо не\nбреше",
      marked: "бреше",
      sub: "Чесний %G% у Дніпрі. Тренер, який досі #1 у своєму дивізіоні — і вчить тренуватися так, щоб вистачило на десятиліття.",
      cta: "Перше тренування — безкоштовно",
      ghost: "Тренуйся онлайн",
      scroll: "Гортай",
    },
    proof: {
      eyebrow: "Зароблено, не подаровано",
      items: [
        { n: "#1", l: "Masters 40+ в Україні", sub: "CFX Open 2026 · 2:59" },
        { n: "25",  l: "років тренує",            sub: "із 2001" },
        { n: "HRV", l: "сертифікований тренер",   sub: "відновлення · нервова система" },
        { n: "L2",  l: "CrossFit + Gymnastics",   sub: "Master of Sport · кетлбел" },
      ],
    },
    box: {
      eyebrow: "Хто ми",
      title: "Чесний",
      marked: "%G%",
      lead: "R5 — це не бутик із дзеркалами. Це робочий %G%: фанера, чавун, крейда в повітрі.",
      body: "Ми тренуємо серйозно й масштабуємо під будь-який рівень — від першого присіду до помосту. Тут спільнота, яка змагається, і тренер, який досі виходить на старт сам.",
      ticks: ["Тренування щодня, окрім неділі", "Масштабуємо під будь-який рівень", "Спільнота, що змагається"],
      photo: "// інтер’єр —\nфанера, чавун, тунгстенове світло",
    },
    pillars: {
      eyebrow: "Чому R5",
      title: "Три причини",
      marked: "лишитись",
      items: [
        { n: "01", t: "Перевірено.\nІ досі в строю",   d: "Майже 25 років коучингу й зараз — #1 Masters 40+ (чоловіки) в Україні. Не вицвіле резюме, а жива форма.", tag: "Доказ" },
        { n: "02", t: "Тренує сигнали,\nне лише годинник", d: "Сертифікований HRV-тренер. Програмує навколо відновлення нервової системи — щоб тренуватися розумно й надовго.", tag: "HRV-метод" },
        { n: "03", t: "Виховує\nчемпіонів",             d: "Ментор багаторазового чемпіона світу зі стронгмену та призера ЧС серед Masters (кетлбел, Мілан 2018).", tag: "Результат" },
      ],
    },
    programs: {
      eyebrow: "Що ти можеш тут робити",
      title: "Напрямки",
      marked: "тренувань",
      more: "Усі напрямки",
      details: "Деталі",
      items: [
        { n: "01", t: "Групові класи",   d: "Функціональні класи під наглядом тренера. Кожен клас масштабується під твій рівень.", tag: "Пн–Сб" },
        { n: "02", t: "Персональні",     d: "Один на один. Техніка, програма й прогрес, зібрані саме під тебе.",                  tag: "Популярне" },
        { n: "03", t: "Для новачків",    d: "On-ramp: базова техніка й рухи з нуля. М’який вхід у функціональний тренінг.",      tag: "З нуля" },
      ],
    },
    coach: {
      eyebrow: "Тренер", name: "Дмитро",
      title: "Досі найсильніший\nу своєму дивізіоні",
      body: "Майстер спорту України з гирьового спорту, призер чемпіонатів світу, CrossFit L2 + Gymnastics і сертифікований HRV-тренер. Тренує з 2001 року — і досі виходить на старт сам.",
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
      body: "Його програмування та HRV-метод — де б ти не був. Індивідуальний план, контроль навантаження й відновлення.",
      cta: "Дізнатись про онлайн",
    },
    cta: {
      eyebrow: "Перше тренування",
      title: "Готовий почати?",
      marked: "почати",
      sub: "Залиш контакти — тренер передзвонить і підбере зручний час. Перше тренування безкоштовне, без зобов’язань.",
      name: "Імʼя", phone: "Телефон", when: "Коли тобі зручно?",
      whenPh: "Будній вечір", submit: "Записатись на безкоштовне",
      done: "Готово! Тренер зателефонує тобі найближчим часом.",
      consent: "Натискаючи, ти погоджуєшся, що з тобою звʼяжуться щодо тренування.",
      namePh: "Олена",
    },
    footer: {
      tagline: "Чесний %G%. Дніпро.",
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
      title: "Iron never\nlies",
      marked: "lies",
      sub: "An honest %G% in Dnipro. A coach who's still #1 in his division — and trains you to last decades, not just to sweat.",
      cta: "First session — free",
      ghost: "Train online",
      scroll: "Scroll",
    },
    proof: {
      eyebrow: "Earned, not gifted",
      items: [
        { n: "#1", l: "Masters 40+ in Ukraine",  sub: "CFX Open 2026 · 2:59" },
        { n: "25",  l: "years coaching",         sub: "since 2001" },
        { n: "HRV", l: "certified coach",        sub: "recovery · nervous system" },
        { n: "L2",  l: "CrossFit + Gymnastics",  sub: "Master of Sport · kettlebell" },
      ],
    },
    box: {
      eyebrow: "Who we are",
      title: "An honest",
      marked: "%G%",
      lead: "R5 isn't a boutique full of mirrors. It's a working %G%: plywood, cast iron, chalk in the air.",
      body: "We train seriously and scale for every level — from your first squat to the competition platform. A community that competes, and a coach who still toes the line himself.",
      ticks: ["Training every day except Sunday", "Scaled for every level", "A community that competes"],
      photo: "// interior —\nplywood, cast iron, tungsten light",
    },
    pillars: {
      eyebrow: "Why R5",
      title: "Three reasons",
      marked: "to stay",
      items: [
        { n: "01", t: "Proven.\nStill competing",          d: "Nearly 25 years coaching and, right now, #1 Masters 40+ (Men) in Ukraine. Not a faded résumé — living proof.", tag: "Proof" },
        { n: "02", t: "Trains signals,\nnot just the clock", d: "A certified HRV coach. Programs around nervous-system recovery — so you train smart and last for decades.", tag: "HRV method" },
        { n: "03", t: "Builds\nchampions",                  d: "Mentor to a multiple-time Strongman world champion and a Masters world medallist (kettlebell, Milan 2018).", tag: "Results" },
      ],
    },
    programs: {
      eyebrow: "What you can do here",
      title: "Ways to",
      marked: "train",
      more: "All training",
      details: "Details",
      items: [
        { n: "01", t: "Group classes",      d: "Coach-led functional classes. Every class scales to your level.",                tag: "Mon–Sat" },
        { n: "02", t: "Personal training",  d: "One-on-one. Technique, programming and progress built around you.",              tag: "Popular" },
        { n: "03", t: "Beginner on-ramp",   d: "Learn the movements from zero. A soft, safe entry into functional training.",   tag: "From zero" },
      ],
    },
    coach: {
      eyebrow: "Coach", name: "Dmytro",
      title: "Still the fittest\nin his division",
      body: "Master of Sport of Ukraine in kettlebell, a world-championship medallist, CrossFit L2 + Gymnastics and a certified HRV coach. Coaching since 2001 — and still on the start line himself.",
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
      body: "His programming and HRV method, wherever you are. An individual plan with load and recovery under control.",
      cta: "Ask about online",
    },
    cta: {
      eyebrow: "First session",
      title: "Ready to start?",
      marked: "start",
      sub: "Leave your details — a coach will call and find a time that works. The first session is free, no strings.",
      name: "Name", phone: "Phone", when: "When suits you?",
      whenPh: "Weekday evening", submit: "Book my free session",
      done: "Done! A coach will call you shortly.",
      consent: "By submitting, you agree we may contact you about training.",
      namePh: "Olena",
    },
    footer: {
      tagline: "An honest %G%. Dnipro.",
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
