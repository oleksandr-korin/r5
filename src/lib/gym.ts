/* R5 The Gym page — bilingual content. UA canonical · EN equal.
   Voice: warm, thoughtful, "ти/you" — thoughtful details, comfort, people. */
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
      sub: "%G%, продуманий до дрібниць — від обладнання світових брендів до фільтрованої води, кави й місця, де хочеться залишитись після тренування.",
      cta: "Перше тренування — безкоштовно",
      photo: "// зала R5 — широкий кадр:\nобладнання, тепле світло, простір після класу",
    },
    whatis: {
      eyebrow: "Що це",
      title: "%G%, який",
      marked: "зустрічає тебе",
      body: "R5 — не бутик із дзеркалами і не зала «на характер». Ми продумали кожну деталь: обладнання світових брендів, індивідуальні сейфи, фільтровану воду, душові преміум-класу й каву після тренування. Приходь новачком — покажемо все. Приходь із досвідом — буде куди рости.",
      ticks: [
        "Обладнання світових брендів",
        "Зустрінемо на будь-якому рівні",
        "Спільнота, а не абонемент",
      ],
      photo: "// кадр із залу —\nлюди тренуються, тренер поряд",
    },
    beyond: {
      eyebrow: "Не лише зал",
      title: "Місце, куди хочеш",
      marked: "повертатись",
      body: "Індивідуальні сейфи, душові преміум-класу, фільтрована вода й кава після тренування. Тепла зона для роботи чи кави з друзями. Тренування — лише початок дня, який ти проведеш добре.",
      ticks: [
        "Індивідуальні сейфи й рушники",
        "Душові преміум-класу, фільтрована вода",
        "Кава, коворкінг і зона відпочинку",
      ],
    },
    ritual: {
      eyebrow: "Ритуал",
      title: "Все на",
      marked: "дошці",
      body: "Щодня на дошці — новий WOD. Ти пишеш свій результат поряд із друзями — не щоб когось перемогти, а щоб мати з ким пробігти цей забіг. Після класу — кава разом. Це і є R5.",
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
        { t: "Обладнання", k: "// стійка з гирями, диски" },
        { t: "Дошка WOD", k: "// біла дошка, маркер, цифри" },
        { t: "Простір для роботи", k: "// чистий простір підлоги" },
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
        { n: "03", t: "WOD",      d: "Робота дня — під наглядом тренера, під твій рівень." },
        { n: "04", t: "Заминка",  d: "Розтяжка, відновлення й кава, якщо треба." },
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
        { h: "Комфорт",      items: ["Індивідуальні сейфи · рушники", "Фільтрована вода · кава", "Душові преміум · коворкінг"] },
      ],
    },
  },
  en: {
    hero: {
      eyebrow: "Inside R5",
      title: "This is our",
      marked: "%G%",
      sub: "A %G% thought through to the smallest detail — from world-brand equipment to filtered water, coffee, and a place you'll want to stay after training.",
      cta: "First session — free",
      photo: "// the R5 floor — wide shot:\nequipment, warm light, room to breathe after class",
    },
    whatis: {
      eyebrow: "What it is",
      title: "A %G% that",
      marked: "meets you",
      body: "R5 isn't a boutique full of mirrors, and it isn't a grit-for-grit's-sake gym either. We've thought through every detail: world-brand equipment, individual lockers, filtered water, premium showers, and coffee after training. Walk in new — we'll show you everything. Walk in experienced — there's room to grow.",
      ticks: [
        "World-brand equipment",
        "Meets you at every level",
        "A community, not a membership card",
      ],
      photo: "// candid floor shot —\npeople training, coach nearby",
    },
    beyond: {
      eyebrow: "More than a gym",
      title: "A place you",
      marked: "come back to",
      body: "Individual lockers, premium showers, filtered water, and coffee after training. A warm corner to work or share a coffee with friends. The session is just the start of a day you'll spend well.",
      ticks: [
        "Individual lockers and towels",
        "Premium showers, filtered water",
        "Coffee, a coworking corner and a soft space",
      ],
    },
    ritual: {
      eyebrow: "The ritual",
      title: "It's all on",
      marked: "the board",
      body: "Every day there's a new WOD on the board. You write your score next to your friends' — not to beat anyone, but to have people to race the same lap with. Coffee together after class. That's R5.",
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
        { t: "Equipment", k: "// kettlebell rack, plates" },
        { t: "The WOD board", k: "// white board, marker, numbers" },
        { t: "Room to work", k: "// clean stretch of floor" },
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
        { n: "03", t: "WOD",       d: "The work of the day — coached, scaled to you." },
        { n: "04", t: "Cool-down", d: "Stretch, recovery, and coffee if you need it." },
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
        { h: "Comfort",       items: ["Individual lockers · towels", "Filtered water · coffee", "Premium showers · coworking"] },
      ],
    },
  },
};

export const GYM: Record<"uk" | "en", GymStrings> = {
  uk: replaceG(RAW.uk, GYM_TERM.uk),
  en: replaceG(RAW.en, GYM_TERM.en),
};
