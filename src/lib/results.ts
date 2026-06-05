/* R5 Results & Community page — bilingual content. */
import { replaceG, GYM_TERM } from "./strings";

interface Win { n: string; l: string; who: string; }
interface Featured { text: string; name: string; role: string; }
interface VoiceItem { text: string; name: string; role: string; }
interface Story { name: string; tag: string; from: string; to: string; body: string; photo: string; }
interface GalleryItem { t: string; k: string; }
interface LbRow { r: string; n: string; s: string; rx?: boolean; }

export interface ResultsStrings {
  header:  { eyebrow: string; title: string; marked: string; lead: string; cta: string; photo: string; };
  wins:    { eyebrow: string; title: string; marked: string; items: Win[]; };
  voices:  { eyebrow: string; title: string; marked: string; featured: Featured; items: VoiceItem[]; };
  stories: { eyebrow: string; title: string; marked: string; items: Story[]; };
  gallery: { eyebrow: string; title: string; marked: string; items: GalleryItem[]; };
  board:   { eyebrow: string; title: string; marked: string; body: string;
             panel: { label: string; cap: string; scheme: string; rows: LbRow[]; }; };
  cta: {
    eyebrow: string; title: string; marked: string; sub: string;
    name: string; phone: string; when: string; whenPh: string;
    submit: string; done: string; consent: string;
    namePh: string;
  };
}

const RAW: Record<"uk" | "en", ResultsStrings> = {
  uk: {
    header: {
      eyebrow: "Результати та спільнота",
      title: "Що будує",
      marked: "R5",
      lead: "Справжні люди, справжній прогрес і зала, що змагається разом. Ось чого досягають ті, хто залишився.",
      cta: "Перше тренування — безкоштовно",
      photo: "// повна зала на класі —\nтепле світло, робота, спільнота",
    },
    wins: {
      eyebrow: "Зароблено, не подаровано",
      title: "Гучні",
      marked: "перемоги",
      items: [
        { n: "#1",    l: "Masters 40+ в Україні",         who: "Дмитро · CFX Open 2026" },
        { n: "WORLD", l: "Чемпіон світу зі стронгмену",   who: "Атлет під менторством Дмитра" },
        { n: "2018",  l: "Титул ЧС із кетлбелу, Мілан",   who: "Підготовка в R5" },
        { n: "300+",  l: "атлетів пройшли підготовку",     who: "із 2001 року" },
      ],
    },
    voices: {
      eyebrow: "Голоси спільноти",
      title: "Чому вони",
      marked: "лишаються",
      featured: { text: "Прийшов на місяць.\nЗалишився на три роки.", name: "Олег Шевченко", role: "Член клубу з 2022" },
      items: [
        { text: "Тут не питають, скільки ти жмеш. Питають, чи ти прийшов.",                name: "Марія Коваль",   role: "2 роки в R5" },
        { text: "Після 40 думав, що вже пізно. Дмитро довів протилежне.",                  name: "Андрій Волков",  role: "Masters-атлет" },
        { text: "Першого тренування боявся. Тепер не уявляю тижня без зали.",              name: "Ірина Лисенко",  role: "Новачок 2024" },
        { text: "Зі зламаною спиною в анамнезі тренуюсь без болю — вперше за роки.",       name: "Сергій Мороз",   role: "Рік у R5" },
      ],
    },
    stories: {
      eyebrow: "Шлях",
      title: "Де почали —",
      marked: "де зараз",
      items: [
        { name: "Ірина",  tag: "З нуля до першого старту",
          from: "Ніколи не займалась спортом",      to: "Перший local Open за плечима",
          body: "Прийшла, бо боялася залів. Почала з on-ramp, де кожен рух мав легший варіант. За рік — перші змагання й місце в середині таблиці. Лишилась не заради медалі, а заради зали.",
          photo: "// Ірина на помості —\nперший старт" },
        { name: "Андрій", tag: "Сильніший у 44, ніж у 34",
          from: "Біль у спині, втома",              to: "Особисті рекорди в присіді й тязі",
          body: "Прийшов масштабувати навантаження під вік. HRV-метод показав, коли тиснути, а коли відступити. Два роки потому — найкраща форма в житті, без травм.",
          photo: "// Андрій із штангою —\nчиста техніка" },
        { name: "Сергій", tag: "Назад зі спини",
          from: "Хронічний біль, кинув спорт",      to: "Тренується без болю щотижня",
          body: "Списав себе після травми. Дмитро відновив рух поступово, через відновлення нервової системи. Тепер на дошці щотижня — і вперше за роки без болю.",
          photo: "// Сергій на кільцях —\nконтрольований рух" },
      ],
    },
    gallery: {
      eyebrow: "Спільнота в кадрі",
      title: "Як це",
      marked: "виглядає",
      items: [
        { t: "Повна зала",       k: "// клас у розпалі" },
        { t: "День змагань",     k: "// local Open, глядачі" },
        { t: "Дошка з рахунками", k: "// імена, цифри, маркер" },
        { t: "Після тренування", k: "// спільне фото, втома й усмішки" },
        { t: "Поміст",            k: "// важка атлетика, підтримка" },
        { t: "Розминка разом",    k: "// коло, тренер у центрі" },
      ],
    },
    board: {
      eyebrow: "Культура дошки",
      title: "Хто на",
      marked: "дошці",
      body: "Атлети пишуть свій результат поряд з усіма. Ніхто не ховається. Зала змагається разом — і це тягне кожного вгору.",
      panel: {
        label: "COMMUNITY OPEN · 25.1", cap: "Останній тиждень", scheme: "AMRAP 15",
        rows: [
          { r: "1", n: "Дмитро П.", s: "+312 reps", rx: true },
          { r: "2", n: "Андрій В.", s: "287 reps",  rx: true },
          { r: "3", n: "Олег Ш.",   s: "264 reps" },
          { r: "4", n: "Марія К.",  s: "241 reps" },
          { r: "5", n: "Ірина Л.",  s: "198 reps" },
        ],
      },
    },
    cta: {
      eyebrow: "Твоя черга",
      title: "Хочеш бути\nна дошці?",
      marked: "дошці",
      sub: "Залиш контакти — тренер передзвонить і підбере час. Перше тренування безкоштовне, без зобовʼязань.",
      name: "Імʼя", phone: "Телефон", when: "Коли тобі зручно?",
      whenPh: "Будній вечір", submit: "Записатись на безкоштовне",
      done: "Готово! Тренер зателефонує тобі найближчим часом.",
      consent: "Натискаючи, ти погоджуєшся, що з тобою звʼяжуться щодо тренування.",
      namePh: "Олена",
    },
  },
  en: {
    header: {
      eyebrow: "Results & community",
      title: "What R5",
      marked: "builds",
      lead: "Real people, real progress, and a room that competes together. This is what the people who stayed have done.",
      cta: "First session — free",
      photo: "// a full class —\nwarm light, work, community",
    },
    wins: {
      eyebrow: "Earned, not gifted",
      title: "The marquee",
      marked: "wins",
      items: [
        { n: "#1",    l: "Masters 40+ in Ukraine",        who: "Dmytro · CFX Open 2026" },
        { n: "WORLD", l: "Strongman world champion",      who: "Athlete mentored by Dmytro" },
        { n: "2018",  l: "Kettlebell world title, Milan", who: "Prepared at R5" },
        { n: "300+",  l: "athletes coached",              who: "since 2001" },
      ],
    },
    voices: {
      eyebrow: "Voices from the community",
      title: "Why they",
      marked: "stay",
      featured: { text: "Came for a month.\nStayed three years.", name: "Oleh Shevchenko", role: "Member since 2022" },
      items: [
        { text: "Nobody asks how much you bench. They ask if you showed up.",                       name: "Maria Koval",    role: "2 years at R5" },
        { text: "After 40 I thought it was too late. Dmytro proved otherwise.",                     name: "Andrii Volkov",  role: "Masters athlete" },
        { text: "I dreaded my first session. Now I can't imagine a week without the gym.",          name: "Iryna Lysenko",  role: "Started 2024" },
        { text: "With a broken back in my history, I train pain-free — for the first time in years.", name: "Serhii Moroz",   role: "A year at R5" },
      ],
    },
    stories: {
      eyebrow: "The journey",
      title: "Where they started —",
      marked: "where they are",
      items: [
        { name: "Iryna",  tag: "From zero to her first meet",
          from: "Never played a sport",        to: "First local Open behind her",
          body: "She came because gyms scared her. Started on the on-ramp, where every movement had an easier version. A year later: her first competition and a mid-table finish. She stayed for the room, not the medal.",
          photo: "// Iryna on the platform —\nher first meet" },
        { name: "Andrii", tag: "Stronger at 44 than at 34",
          from: "Back pain, fatigue",          to: "PRs in the squat and deadlift",
          body: "He came to scale training to his age. The HRV method showed when to push and when to back off. Two years on: the best shape of his life, injury-free.",
          photo: "// Andrii under the bar —\nclean technique" },
        { name: "Serhii", tag: "Back from a back injury",
          from: "Chronic pain, quit sport",    to: "Trains pain-free every week",
          body: "He'd written himself off after the injury. Dmytro rebuilt movement gradually, through nervous-system recovery. Now he's on the board every week — and pain-free for the first time in years.",
          photo: "// Serhii on the rings —\ncontrolled movement" },
      ],
    },
    gallery: {
      eyebrow: "The community in frame",
      title: "What it",
      marked: "looks like",
      items: [
        { t: "A full floor",       k: "// class in full swing" },
        { t: "Competition day",    k: "// local Open, spectators" },
        { t: "The scoreboard",     k: "// names, numbers, marker" },
        { t: "After the session",  k: "// group photo, tired and smiling" },
        { t: "The platform",       k: "// weightlifting, support" },
        { t: "Warm-up together",   k: "// circle, coach in the middle" },
      ],
    },
    board: {
      eyebrow: "Board culture",
      title: "Who's on",
      marked: "the board",
      body: "Athletes write their score next to everyone else's. Nobody hides. The room competes together — and that pulls everyone up.",
      panel: {
        label: "COMMUNITY OPEN · 25.1", cap: "This week", scheme: "AMRAP 15",
        rows: [
          { r: "1", n: "Dmytro P.", s: "+312 reps", rx: true },
          { r: "2", n: "Andrii V.", s: "287 reps",  rx: true },
          { r: "3", n: "Oleh Sh.",  s: "264 reps" },
          { r: "4", n: "Maria K.",  s: "241 reps" },
          { r: "5", n: "Iryna L.",  s: "198 reps" },
        ],
      },
    },
    cta: {
      eyebrow: "Your turn",
      title: "Want to be\non the board?",
      marked: "board",
      sub: "Leave your details — a coach will call and find a time that works. The first session is free, no strings.",
      name: "Name", phone: "Phone", when: "When suits you?",
      whenPh: "Weekday evening", submit: "Book my free session",
      done: "Done! A coach will call you shortly.",
      consent: "By submitting, you agree we may contact you about training.",
      namePh: "Olena",
    },
  },
};

export const RESULTS: Record<"uk" | "en", ResultsStrings> = {
  uk: replaceG(RAW.uk, GYM_TERM.uk),
  en: replaceG(RAW.en, GYM_TERM.en),
};
