/* R5 The Gym page — bilingual content. UA canonical · EN equal. */
import { replaceG, GYM_TERM } from "./strings";

interface BoardRow { n: string; s: string; rx?: boolean; }
interface BoardData { label: string; scheme: string; moves: string[]; cap: string; tallyLabel: string; rows: BoardRow[]; }
interface GalleryItem { t: string; k: string; }
interface ExpectStep { n: string; t: string; d: string; }
interface PracticalBlock { h: string; items: string[]; }

export interface GymStrings {
  hero:    { eyebrow: string; title: string; marked: string; sub: string; cta: string; photo: string; };
  whatis:  { eyebrow: string; title: string; marked: string; body: string; ticks: string[]; photo: string; };
  beyond:  { eyebrow: string; title: string; marked: string; body: string; ticks: string[]; };
  ritual:  { eyebrow: string; title: string; marked: string; body: string; board: BoardData; };
  gallery: { eyebrow: string; title: string; marked: string; items: GalleryItem[]; };
  expect:  { eyebrow: string; title: string; lead: string; steps: ExpectStep[]; };
  practical:{ eyebrow: string; title: string; marked: string; mapPh: string; mapCta: string; blocks: PracticalBlock[]; };
}

const RAW: Record<"uk" | "en", GymStrings> = {
  uk: {
    hero: {
      eyebrow: "R5 зсередини",
      title: "Ось наш",
      marked: "%G%",
      sub: "Фанера, чавун, крейда в повітрі. Чорна стеля, тепле світло. Серйозна робота — без понтів.",
      cta: "Перше тренування — безкоштовно",
      photo: "// зала R5 — широкий кадр:\nрами, фанера, чорна стеля, тепле світло",
    },
    whatis: {
      eyebrow: "Що це",
      title: "Робочий %G%,",
      marked: "не бутик",
      body: "Тут немає дзеркальних залів і фонової музики для селфі. Є чавун, фанера й люди, які прийшли працювати. Прийдеш новачком — підкажемо все. Прийдеш із досвідом — буде куди рости.",
      ticks: [
        "Серйозне тренування, не розвага",
        "Від першого разу до помосту",
        "Спільнота, а не абонемент",
      ],
      photo: "// кадр із залу —\nлюди тренуються, тренер поряд",
    },
    beyond: {
      eyebrow: "Не лише зал",
      title: "Місце, куди хочеш",
      marked: "повертатися",
      body: "Дровʼяний камін, душові, тепло і місце для роботи. Тренування — це початок. Тут є де відновитися й переключити голову.",
      ticks: [
        "Дровʼяний камін і м’яка зона",
        "Душові та чисті роздягальні",
        "Стіл і Wi-Fi для роботи після класу",
      ],
    },
    ritual: {
      eyebrow: "Ритуал",
      title: "Все на",
      marked: "дошці",
      body: "Щодня на дошці — новий WOD. Ти пишеш свій результат поряд з усіма. Ніхто не ховається. Завтра виходиш бити вчорашнього себе. Це і є R5.",
      board: {
        label: "WOD · ПʼЯТНИЦЯ",
        scheme: "21–15–9",
        moves: ["Трастери · 43 кг", "Підтягування", "Бьорпі через штангу"],
        cap: "Ліміт 12 хв",
        tallyLabel: "Сьогодні на дошці",
        rows: [
          { n: "Олег Ш.", s: "8:42" },
          { n: "Марія К.", s: "9:15" },
          { n: "Андрій В.", s: "7:58" },
          { n: "Дмитро П.", s: "5:59", rx: true },
        ],
      },
    },
    gallery: {
      eyebrow: "Простір",
      title: "Подивись",
      marked: "сам",
      items: [
        { t: "Рами та кільця", k: "// рами, кільця, канат" },
        { t: "Поміст", k: "// зона важкої атлетики" },
        { t: "Гирі та чавун", k: "// стійка з гирями, диски" },
        { t: "Дошка WOD", k: "// біла дошка, маркер, цифри" },
        { t: "Відкритий простір", k: "// чистий простір підлоги" },
        { t: "Тепле світло", k: "// тунгстенові лампи, вечір" },
      ],
    },
    expect: {
      eyebrow: "Як проходить тренування",
      title: "Чого чекати\nвід заняття",
      lead: "Кожен клас веде тренер. Усе масштабується під твій рівень — приходь будь-яким.",
      steps: [
        { n: "01", t: "Розминка", d: "Мобільність і підготовка суглобів." },
        { n: "02", t: "Сила",     d: "Базові рухи, чиста техніка." },
        { n: "03", t: "WOD",      d: "Робота дня — інтенсивно, під контролем." },
        { n: "04", t: "Заминка",  d: "Розтяжка й відновлення." },
      ],
    },
    practical: {
      eyebrow: "Перед візитом",
      title: "Як нас",
      marked: "знайти",
      mapPh: "// мапа —\nвул. Робоча 5, Дніпро",
      mapCta: "Прокласти маршрут",
      blocks: [
        { h: "Адреса",       items: ["вул. Робоча 5, Дніпро", "1 поверх, окремий вхід"] },
        { h: "Години",       items: ["Пн–Сб · 07:00–22:00", "Неділя — вихідний"] },
        { h: "Як дістатися", items: ["5 хв від центру", "Безкоштовна парковка біля входу"] },
        { h: "Що взяти",     items: ["Кросівки й форму", "Воду й рушник", "Себе — решту дамо"] },
      ],
    },
  },
  en: {
    hero: {
      eyebrow: "Inside R5",
      title: "This is our",
      marked: "%G%",
      sub: "Plywood, cast iron, chalk in the air. Black ceiling, warm light. Serious work — no posing.",
      cta: "First session — free",
      photo: "// the R5 floor — wide shot:\nrig, plywood, black ceiling, warm light",
    },
    whatis: {
      eyebrow: "What it is",
      title: "A working %G%,",
      marked: "not a boutique",
      body: "No mirror halls, no background music for selfies. Just cast iron, plywood and people who came to work. Walk in new — we'll show you everything. Walk in experienced — there's room to grow.",
      ticks: [
        "Serious training, not entertainment",
        "From first-timer to competitor",
        "A community, not a membership card",
      ],
      photo: "// candid floor shot —\npeople training, coach nearby",
    },
    beyond: {
      eyebrow: "More than a gym",
      title: "A place you",
      marked: "come back to",
      body: "A wood-burning stove, hot showers, warmth and somewhere to work. The session is the start — there's space for what comes after.",
      ticks: [
        "A wood-burning stove and a soft corner",
        "Hot showers and clean changing rooms",
        "A desk and Wi-Fi for after class",
      ],
    },
    ritual: {
      eyebrow: "The ritual",
      title: "It's all on",
      marked: "the board",
      body: "Every day there's a new WOD on the board. You write your score next to everyone else's. Nobody hides. Tomorrow you come back to beat yesterday's you. That's R5.",
      board: {
        label: "WOD · FRIDAY",
        scheme: "21–15–9",
        moves: ["Thrusters · 43 kg", "Pull-ups", "Bar-facing burpees"],
        cap: "12 min cap",
        tallyLabel: "On the board today",
        rows: [
          { n: "Oleh Sh.", s: "8:42" },
          { n: "Maria K.", s: "9:15" },
          { n: "Andrii V.", s: "7:58" },
          { n: "Dmytro P.", s: "5:59", rx: true },
        ],
      },
    },
    gallery: {
      eyebrow: "The space",
      title: "See for",
      marked: "yourself",
      items: [
        { t: "Rig & rings", k: "// rig, rings, rope" },
        { t: "The platform", k: "// weightlifting platform" },
        { t: "Kettlebells & iron", k: "// kettlebell rack, plates" },
        { t: "The WOD board", k: "// white board, marker, numbers" },
        { t: "Open floor", k: "// clean stretch of floor" },
        { t: "Warm light", k: "// tungsten lamps, evening" },
      ],
    },
    expect: {
      eyebrow: "How a session runs",
      title: "What to\nexpect",
      lead: "Every class is coached. Everything scales to your level — come exactly as you are.",
      steps: [
        { n: "01", t: "Warm-up",   d: "Mobility and joint prep." },
        { n: "02", t: "Strength",  d: "Core lifts, clean technique." },
        { n: "03", t: "WOD",       d: "The work of the day — intense, under control." },
        { n: "04", t: "Cool-down", d: "Stretch and recovery." },
      ],
    },
    practical: {
      eyebrow: "Before you visit",
      title: "How to",
      marked: "find us",
      mapPh: "// map —\n5 Robocha St, Dnipro",
      mapCta: "Get directions",
      blocks: [
        { h: "Address",       items: ["5 Robocha St, Dnipro", "Ground floor, own entrance"] },
        { h: "Hours",         items: ["Mon–Sat · 07:00–22:00", "Sunday — closed"] },
        { h: "Getting here",  items: ["5 min from the centre", "Free parking at the door"] },
        { h: "What to bring", items: ["Trainers and kit", "Water and a towel", "Just yourself — we'll handle the rest"] },
      ],
    },
  },
};

export const GYM: Record<"uk" | "en", GymStrings> = {
  uk: replaceG(RAW.uk, GYM_TERM.uk),
  en: replaceG(RAW.en, GYM_TERM.en),
};
