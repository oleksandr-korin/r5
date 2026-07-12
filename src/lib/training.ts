/* R5 Training & Programs page — bilingual content. */
import { replaceG, GYM_TERM } from "./strings";

interface ProgramItem { n: string; tag: string; feature?: boolean; t: string; d: string; good: string; price: string; }
interface FlowStep { n: string; t: string; d: string; }
interface Plan { name: string; price: string; per: string; items: string[]; cta: string; popular?: boolean; }

export interface TrainingStrings {
  header:   { eyebrow: string; title: string; marked: string; lead: string; cta: string; online: string; photo: string; };
  programs: { eyebrow: string; title: string; marked: string; goodLabel: string; bookCta: string; items: ProgramItem[]; };
  onramp:   { eyebrow: string; title: string; body: string; ticks: string[]; cta: string; };
  flow:     { eyebrow: string; title: string; lead: string; steps: FlowStep[]; };
  method:   { eyebrow: string; title: string; body: string; link: string; };
  pricing:  { eyebrow: string; title: string; marked: string; note: string; popular: string; plans: Plan[]; };
  online:   { text: string; link: string; };
}

const RAW: Record<"uk" | "en", TrainingStrings> = {
  uk: {
    header: {
      eyebrow: "Як тренуватися в R5",
      title: "Способи",
      marked: "тренуватись",
      lead: "Коучинг, що масштабується під будь-який рівень — від першого присіду до помосту. Обери формат і почни з безкоштовного тренування.",
      cta: "Безкоштовне перше тренування",
      online: "Краще онлайн?",
      photo: "// фанера, чавун, дошка WOD —\nтепле тунгстенове світло",
    },
    programs: {
      eyebrow: "Напрямки",
      title: "Як ти можеш",
      marked: "тренуватись",
      goodLabel: "Кому підходить",
      bookCta: "Записатись",
      items: [
        { n: "01", tag: "З нуля",       feature: true,
          t: "Старт для новачків",
          d: "On-ramp: базова техніка й рухи з нуля — без поспіху, під наглядом тренера. М’який вхід у функціональний тренінг.",
          good: "Для тих, хто ніколи не пробував функціональний тренінг",
          price: "Перше тренування — безкоштовно" },
        { n: "02", tag: "Пн–Сб",
          t: "Групові класи",
          d: "Щоденний WOD під наглядом тренера. Кожен рух — під твій рівень і твій сьогоднішній стан.",
          good: "Для тих, хто любить енергію спільноти й розклад",
          price: "Від ₴2 400 / місяць" },
        { n: "03", tag: "1 на 1",
          t: "Персональні",
          d: "Один на один або невеликі групи до 2 людей. Максимум уваги тренера — техніка, програма й прогрес під тебе.",
          good: "Для швидкого прогресу чи підготовки до змагань",
          price: "Від ₴700 / сесія" },
        { n: "04", tag: "Вільний зал",
          t: "Відкритий зал",
          d: "Тренуйся за власною програмою у вільні години. Простір, чавун, дошка — твої.",
          good: "Для досвідчених, хто має свій план",
          price: "Включено в безліміт" },
      ],
    },
    onramp: {
      eyebrow: "Вперше тут?",
      title: "Не треба бути\nу формі, щоб почати",
      body: "Ніхто не дивиться на тебе. Усе масштабується — від першого присіду. Перший клас веде тренер особисто, і він безкоштовний. Твоє завдання — просто прийти.",
      ticks: [
        "Не потрібен ані досвід, ані спортивна форма",
        "У кожного руху є легший варіант",
        "Перше тренування — безкоштовне й під наглядом тренера",
      ],
      cta: "Спробувати перший клас",
    },
    flow: {
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
    method: {
      eyebrow: "Метод R5",
      title: "Наука,\nа не виснаження",
      body: "Дмитро — сертифікований HRV-тренер. Ми будуємо навантаження навколо відновлення нервової системи — щоб ти прогресував десятиліттями, а не вигорав за сезон.",
      link: "Більше про метод",
    },
    pricing: {
      eyebrow: "Членство",
      title: "Прозорі",
      marked: "ціни",
      note: "Перше тренування безкоштовне. Без прихованих платежів і довгих контрактів.",
      popular: "Найпопулярніше",
      plans: [
        { name: "Разове",             price: "₴300",     per: "/ заняття", items: ["Один візит", "Будь-який клас", "Без зобовʼязань"], cta: "Записатись" },
        { name: "Безлімітний місяць", price: "₴2 400",   per: "/ місяць",  items: ["Безліміт класів", "Відкритий зал включено", "Заморозка до 7 днів"], cta: "Обрати безліміт", popular: true },
        { name: "Персональні",         price: "від ₴700", per: "/ сесія",   items: ["Один на один із тренером", "Індивідуальна програма", "Гнучкий графік"], cta: "Запитати деталі" },
      ],
    },
    online: { text: "Не в Дніпрі?", link: "Тренуйся з Дмитром онлайн" },
  },
  en: {
    header: {
      eyebrow: "How to train at R5",
      title: "Ways to",
      marked: "train",
      lead: "Coaching that scales to every level — from your first squat to the competition platform. Pick a format and start with a free session.",
      cta: "Book a free first session",
      online: "Prefer to train online?",
      photo: "// plywood, cast iron, the WOD board —\nwarm tungsten light",
    },
    programs: {
      eyebrow: "Programs",
      title: "Ways you can",
      marked: "train",
      goodLabel: "Good for",
      bookCta: "Book",
      items: [
        { n: "01", tag: "From zero", feature: true,
          t: "Beginner on-ramp",
          d: "Learn the technique and movements from zero — no rush, coach-led. A soft, safe entry into functional training.",
          good: "Anyone who's never tried functional training",
          price: "First session — free" },
        { n: "02", tag: "Mon–Sat",
          t: "Group classes",
          d: "The daily WOD, coach-led. Every movement scales to your level — and to the state you're in today.",
          good: "People who want community energy and a schedule",
          price: "From ₴2,400 / month" },
        { n: "03", tag: "1-to-1",
          t: "Personal training",
          d: "One-on-one or small groups of up to 2. Maximum coach attention — technique, programming and progress built around you.",
          good: "Fast progress or competition prep",
          price: "From ₴700 / session" },
        { n: "04", tag: "Open gym",
          t: "Open gym",
          d: "Train your own program during open hours. The floor, the iron, the board — yours.",
          good: "Experienced athletes with their own plan",
          price: "Included with unlimited" },
      ],
    },
    onramp: {
      eyebrow: "First time here?",
      title: "You don't need to\nbe fit to start",
      body: "Nobody is watching you. Everything scales — from your very first squat. The first class is coached one-on-one, and it's free. Your only job is to show up.",
      ticks: [
        "No experience or fitness required",
        "Every movement has an easier version",
        "Your first session is free and coach-led",
      ],
      cta: "Try your first class",
    },
    flow: {
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
    method: {
      eyebrow: "The R5 method",
      title: "Science,\nnot exhaustion",
      body: "Dmytro is a certified HRV coach. We build load around nervous-system recovery — so you progress for decades, instead of burning out in a season.",
      link: "More on the method",
    },
    pricing: {
      eyebrow: "Membership",
      title: "Honest",
      marked: "pricing",
      note: "The first session is free. No hidden fees, no long contracts.",
      popular: "Most popular",
      plans: [
        { name: "Drop-in",            price: "₴300",      per: "/ session", items: ["One visit", "Any class", "No commitment"], cta: "Book a visit" },
        { name: "Monthly unlimited",  price: "₴2,400",    per: "/ month",   items: ["Unlimited classes", "Open gym included", "Freeze up to 7 days"], cta: "Go unlimited", popular: true },
        { name: "Personal training",  price: "from ₴700", per: "/ session", items: ["One-on-one with a coach", "An individual program", "Flexible schedule"], cta: "Ask for details" },
      ],
    },
    online: { text: "Not in Dnipro?", link: "Train with Dmytro online" },
  },
};

export const TRAINING: Record<"uk" | "en", TrainingStrings> = {
  uk: replaceG(RAW.uk, GYM_TERM.uk),
  en: replaceG(RAW.en, GYM_TERM.en),
};
