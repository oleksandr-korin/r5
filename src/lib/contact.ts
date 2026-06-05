/* R5 Start Here / Contact page — bilingual content. */
import { replaceG, GYM_TERM } from "./strings";

interface BookingFields { name: string; namePh: string; contact: string; contactPh: string; experience: string; expNew: string; expBefore: string; when: string; whenPh: string; note: string; notePh: string; submit: string; }
interface ReassureStep { t: string; d: string; }
interface Channel { icon: "instagram" | "phone" | "send" | "mail"; k: string; v: string; sub: string; cta: string; href: string; }
interface PracticalBlock { h: string; items: string[]; }
interface FaqItem { q: string; a: string; }

export interface ContactStrings {
  header:  { eyebrow: string; title: string; marked: string; lead: string; };
  booking: {
    eyebrow: string; title: string; fields: BookingFields;
    done: string; consent: string;
    reassure: { title: string; steps: ReassureStep[]; bringLabel: string; bring: string[]; };
  };
  channels:{ eyebrow: string; title: string; marked: string; items: Channel[]; };
  find:    { eyebrow: string; title: string; marked: string; mapPh: string; mapCta: string; blocks: PracticalBlock[]; };
  faq:     { eyebrow: string; title: string; items: FaqItem[]; };
  online:  { text: string; link: string; };
}

const RAW: Record<"uk" | "en", ContactStrings> = {
  uk: {
    header: {
      eyebrow: "Перший крок",
      title: "Почни",
      marked: "тут",
      lead: "Перше тренування — безкоштовне й під наглядом тренера. Без досвіду, без тиску. Просто прийди.",
    },
    booking: {
      eyebrow: "Безкоштовне перше тренування",
      title: "Запишись",
      fields: {
        name: "Імʼя", namePh: "Олена",
        contact: "Телефон або email", contactPh: "+38 0__ ___ __ __",
        experience: "Ти вже тренувався?", expNew: "Перший раз", expBefore: "Вже тренувався",
        when: "Зручний день / час", whenPh: "Будній вечір",
        note: "Коментар (необовʼязково)", notePh: "Питання чи побажання",
        submit: "Записатись безкоштовно",
      },
      done: "Готово! Тренер звʼяжеться з тобою найближчим часом — оберемо час разом.",
      consent: "Натискаючи, ти погоджуєшся, що з тобою звʼяжуться щодо тренування.",
      reassure: {
        title: "Що далі",
        steps: [
          { t: "Ми відповімо",  d: "Тренер напише або зателефонує протягом дня — у зручному тобі каналі." },
          { t: "Оберемо час",   d: "Підберемо день і годину під твій графік. Перше тренування безкоштовне." },
          { t: "Приходь як є",  d: "Зустрінемо, проведемо, покажемо все. Нічого не треба знати наперед." },
        ],
        bringLabel: "Що взяти",
        bring: ["Кросівки й форму", "Воду й рушник", "Себе — решту дамо"],
      },
    },
    channels: {
      eyebrow: "Інші способи",
      title: "Напиши, як",
      marked: "зручно",
      items: [
        { icon: "instagram", k: "Instagram",          v: "@rokytnyi5.crossbox", sub: "Жива сторінка зали — пиши в Direct", cta: "Написати в Direct", href: "https://instagram.com/rokytnyi5.crossbox" },
        { icon: "phone",     k: "Телефон · WhatsApp", v: "+38 067 000 00 00",   sub: "Подзвони або напиши",               cta: "Зателефонувати",    href: "tel:+380670000000" },
        { icon: "send",      k: "Telegram",           v: "@rokytnyi5",          sub: "Швидке повідомлення",                cta: "Відкрити Telegram", href: "https://t.me/rokytnyi5" },
        { icon: "mail",      k: "Email",              v: "hello@rokytnyi5.com", sub: "Для довших питань",                  cta: "Написати лист",     href: "mailto:hello@rokytnyi5.com" },
      ],
    },
    find: {
      eyebrow: "Як нас знайти", title: "Завітай", marked: "до нас",
      mapPh: "// мапа —\nвул. Робоча 5, Дніпро",
      mapCta: "Прокласти маршрут",
      blocks: [
        { h: "Адреса",       items: ["вул. Робоча 5, Дніпро", "1 поверх, окремий вхід"] },
        { h: "Години",       items: ["Пн–Сб · 07:00–22:00", "Неділя — вихідний"] },
        { h: "Як дістатися", items: ["5 хв від центру", "Безкоштовна парковка біля входу"] },
      ],
    },
    faq: {
      eyebrow: "Швидкі відповіді",
      title: "Поширені питання",
      items: [
        { q: "Треба бути у формі?",                    a: "Ні. Усе масштабується під будь-який рівень — приходь будь-яким." },
        { q: "Що взяти на перше тренування?",          a: "Кросівки, форму, воду й рушник. Решту дамо на місці." },
        { q: "Перше тренування справді безкоштовне?",  a: "Так. Перший клас — коштом зали, без зобовʼязань." },
        { q: "Можна просто прийти?",                   a: "Можна. Але краще напиши заздалегідь — підберемо час і зустрінемо." },
      ],
    },
    online: { text: "Не в Дніпрі?", link: "Онлайн-коучинг" },
  },
  en: {
    header: {
      eyebrow: "Your first step",
      title: "Start",
      marked: "here",
      lead: "Your first session is free and coached. No experience, no pressure. Just show up.",
    },
    booking: {
      eyebrow: "Free first session",
      title: "Book it",
      fields: {
        name: "Name", namePh: "Olena",
        contact: "Phone or email", contactPh: "+38 0__ ___ __ __",
        experience: "Trained before?", expNew: "First time", expBefore: "Trained before",
        when: "Preferred day / time", whenPh: "Weekday evening",
        note: "Note (optional)", notePh: "A question or anything else",
        submit: "Book my free session",
      },
      done: "Done! A coach will reach out shortly — we'll find a time together.",
      consent: "By submitting, you agree we may contact you about training.",
      reassure: {
        title: "What happens next",
        steps: [
          { t: "We reply",         d: "A coach messages or calls within the day — on whichever channel suits you." },
          { t: "We pick a time",   d: "We fit a day and hour around your schedule. The first session is free." },
          { t: "Come as you are",  d: "We'll meet you, coach you, show you everything. Nothing to know in advance." },
        ],
        bringLabel: "What to bring",
        bring: ["Trainers and kit", "Water and a towel", "Just yourself — we'll handle the rest"],
      },
    },
    channels: {
      eyebrow: "Other ways", title: "Reach us however", marked: "you like",
      items: [
        { icon: "instagram", k: "Instagram",      v: "@rokytnyi5.crossbox", sub: "The gym's live channel — slide into the DMs", cta: "Message on Direct", href: "https://instagram.com/rokytnyi5.crossbox" },
        { icon: "phone",     k: "Phone · WhatsApp", v: "+38 067 000 00 00",  sub: "Call or message",                             cta: "Call us",           href: "tel:+380670000000" },
        { icon: "send",      k: "Telegram",       v: "@rokytnyi5",          sub: "A quick message",                             cta: "Open Telegram",     href: "https://t.me/rokytnyi5" },
        { icon: "mail",      k: "Email",          v: "hello@rokytnyi5.com", sub: "For longer questions",                        cta: "Write an email",    href: "mailto:hello@rokytnyi5.com" },
      ],
    },
    find: {
      eyebrow: "How to find us", title: "Come", marked: "by",
      mapPh: "// map —\n5 Robocha St, Dnipro",
      mapCta: "Get directions",
      blocks: [
        { h: "Address",       items: ["5 Robocha St, Dnipro", "Ground floor, own entrance"] },
        { h: "Hours",         items: ["Mon–Sat · 07:00–22:00", "Sunday — closed"] },
        { h: "Getting here",  items: ["5 min from the centre", "Free parking at the door"] },
      ],
    },
    faq: {
      eyebrow: "Quick answers",
      title: "Common questions",
      items: [
        { q: "Do I need to be fit?",                  a: "No. Everything scales to your level — come exactly as you are." },
        { q: "What do I bring to my first session?",  a: "Trainers, kit, water and a towel. We'll handle the rest on-site." },
        { q: "Is the first session really free?",     a: "Yes. Your first class is on the gym, no strings attached." },
        { q: "Can I just turn up?",                   a: "You can. But it's better to message first — we'll save a time and meet you." },
      ],
    },
    online: { text: "Not in Dnipro?", link: "Online coaching" },
  },
};

export const CONTACT: Record<"uk" | "en", ContactStrings> = {
  uk: replaceG(RAW.uk, GYM_TERM.uk),
  en: replaceG(RAW.en, GYM_TERM.en),
};
