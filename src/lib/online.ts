/* R5 Online Coaching (remote) page — bilingual content.
   Voice: plain, warm, earned, "ти/you". Prices are placeholders in USD —
   the final track and price are confirmed at application. */
import { replaceG, GYM_TERM } from "./strings";

interface MethodCol { n: string; t: string; d: string; }
interface HowStep { n: string; t: string; d: string; }
interface WhoItem { t: string; d: string; }
interface OnlinePlan { name: string; price: string; per: string; items: string[]; popular?: boolean; }
interface FaqItem { q: string; a: string; }

export interface OnlineStrings {
  hero:   { eyebrow: string; title: string; marked: string; sub: string; cta: string; note: string; photo: string; };
  method: { eyebrow: string; tag: string; title: string; lead: string; cols: MethodCol[]; };
  cred:   { eyebrow: string; title: string; link: string; };
  how:    { eyebrow: string; title: string; steps: HowStep[]; };
  who:    { eyebrow: string; title: string; items: WhoItem[]; };
  plans:  { eyebrow: string; title: string; marked: string; note: string; popular: string; cta: string; items: OnlinePlan[]; };
  faq:    { eyebrow: string; title: string; items: FaqItem[]; };
  apply: {
    eyebrow: string; title: string; marked: string; sub: string;
    name: string; email: string; goal: string; goalPh: string;
    submit: string; done: string; consent: string;
    localText: string; localLink: string;
    namePh: string;
  };
}

const RAW: Record<"uk" | "en", OnlineStrings> = {
  uk: {
    hero: {
      eyebrow: "Онлайн-коучинг · Будь-де",
      title: "Тренуйся з Дмитром",
      marked: "будь-де",
      sub: "Його програмування та HRV-метод відновлення — на базі 25 років досвіду й двигуна чинного чемпіона країни — доставлені тобі, де б ти не був.",
      cta: "Подати заявку на онлайн",
      note: "Дистанційне програмування · UA / EN · будь-який часовий пояс",
      photo: "// тренер у підйомі, тепле зерно —\nготовий до дистанційної роботи",
    },
    method: {
      eyebrow: "Метод",
      tag: "HRV · відновлення нервової системи",
      title: "Тренуйся важко.\nВідновлюйся за цифрами.",
      lead: "Більшість програм тільки навантажують. Метод Дмитра враховує й відновлення — через HRV (варіабельність серцевого ритму) читає, як насправді справляється твоя нервова система, і коригує навантаження. Так стаєш сильнішим роками, а не вигораєш за сезон.",
      cols: [
        { n: "01", t: "Тренуйся важко",         d: "Справжня сила й кондиція, масштабовані під твій рівень і твоє обладнання." },
        { n: "02", t: "Відновлюйся за цифрами", d: "Показники HRV кажуть, коли тиснути, а коли відступити — без здогадок і зайвого обсягу." },
        { n: "03", t: "Будуй те, що триває",    d: "Навантаження, що поважає нервову систему. Прогрес, який утримаєш десятиліттями." },
      ],
    },
    cred: { eyebrow: "Чому Дмитро", title: "Метод чинного\nчемпіона", link: "Повна історія тренера" },
    how: {
      eyebrow: "Як працює онлайн-коучинг",
      title: "Від заявки\nдо прогресу",
      steps: [
        { n: "01", t: "Заявка",      d: "Розкажи про цілі, досвід і яке маєш обладнання. Це п’ять хвилин." },
        { n: "02", t: "Оцінка",      d: "Відеоконсультація й скринінг рухів, щоб план підходив саме тобі, а не шаблону." },
        { n: "03", t: "Твоя програма", d: "Персональне програмування плюс HRV-супровід — прямо у твій телефон." },
        { n: "04", t: "Контроль",    d: "Регулярні перегляди — коригуємо навантаження, техніку й відновлення по ходу." },
      ],
    },
    who: {
      eyebrow: "Кому це підходить",
      title: "Створено для\nдовгої гри",
      items: [
        { t: "Masters-атлети",          d: "Досі змагаєшся або хочеш — без того, щоб ламатися." },
        { t: "Зайняті професіонали",    d: "Обмаль часу; потрібен план, що справді вписується в тиждень." },
        { t: "Травми й вигорання",      d: "Втомився травмуватись чи перетреновуватись? Тренуйся за відновленням." },
        { t: "Тривалість понад усе",    d: "Хочеш силу на десятиліття, а не на один важкий сезон." },
      ],
    },
    plans: {
      eyebrow: "Плани", title: "Обери свій", marked: "напрям",
      note: "Плани орієнтовні — фінальний напрям і ціну підтверджуємо під час заявки.",
      popular: "Найпопулярніше", cta: "Подати заявку",
      items: [
        { name: "Програмування",   price: "$49",      per: "/ місяць", items: ["Щомісячна програма", "Під твоє обладнання", "Підтримка поштою"] },
        { name: "Онлайн-коучинг",  price: "$129",     per: "/ місяць", items: ["Програма + HRV-метод", "Супровід відновлення", "Перевірки раз на два тижні", "Прямий звʼязок у месенджері"], popular: true },
        { name: "Один на один",     price: "від $279", per: "/ місяць", items: ["Усе з коучингу", "Щотижневі відеодзвінки", "Прямий контакт із Дмитром", "Пріоритетний перегляд"] },
      ],
    },
    faq: {
      eyebrow: "Питання",
      title: "Чесні відповіді",
      items: [
        { q: "Яке обладнання потрібне?",              a: "Будь-що — від повноцінного залу до однієї штанги чи пари гантелей. Програму будуємо під те, що в тебе реально є." },
        { q: "Як вимірюється HRV?",                   a: "Нагрудним датчиком або застосунком із камерою телефона. Ти робиш короткий ранковий замір; ми читаємо тренд у часі, а не окремі дні." },
        { q: "Якими мовами ведеться коучинг?",        a: "Українською та англійською — нарівні. Обирай ту, якою думаєш; нічого не губиться в перекладі." },
        { q: "Чи працює це в інших часових поясах?",  a: "Так. Програмування й перевірки асинхронні; дзвінки бронюємо під твій пояс." },
        { q: "Які зобовʼязання?",                     a: "Помісячно, без довгих контрактів. Лишаєшся, бо працює, а не через угоду." },
      ],
    },
    apply: {
      eyebrow: "Старт",
      title: "Тренуйся за",
      marked: "цифрами",
      sub: "Розкажи про свої цілі — Дмитро особисто переглядає кожну заявку й відповідає планом і напрямом.",
      name: "Імʼя", email: "Email", goal: "Твоя ціль", goalPh: "Стати сильним без травм",
      submit: "Надіслати заявку",
      done: "Готово. Дмитро перегляне твою заявку й відповість особисто.",
      consent: "Подаючи заявку, ти погоджуєшся, що з тобою звʼяжуться щодо коучингу.",
      localText: "Ти в Дніпрі?", localLink: "Тренуйся в залі",
      namePh: "Олена",
    },
  },
  en: {
    hero: {
      eyebrow: "Online coaching · Worldwide",
      title: "Train with Dmytro from",
      marked: "anywhere",
      sub: "His programming and HRV recovery method — built on 25 years and a still-competing national-champion engine — delivered to you, wherever you are.",
      cta: "Apply for online coaching",
      note: "Remote programming · UA / EN · any time zone",
      photo: "// coach mid-lift, warm grain —\nremote-ready",
    },
    method: {
      eyebrow: "The method",
      tag: "HRV · nervous-system recovery",
      title: "Train hard.\nRecover by the numbers.",
      lead: "Most programs only push. Dmytro's is built around recovery too — using HRV (heart-rate variability) to read how your nervous system is actually coping, then adjusting the load. That's how you get stronger for years instead of burning out in a season.",
      cols: [
        { n: "01", t: "Train hard",              d: "Real strength and conditioning, scaled to your level and the equipment you have." },
        { n: "02", t: "Recover by the numbers",  d: "HRV readings show when to push and when to back off — no guessing, no junk volume." },
        { n: "03", t: "Build what lasts",        d: "Load that respects your nervous system. Progress you can hold onto for decades." },
      ],
    },
    cred: { eyebrow: "Why Dmytro", title: "A still-competing\nchampion's method", link: "Full coach story" },
    how: {
      eyebrow: "How online coaching works",
      title: "From apply\nto progress",
      steps: [
        { n: "01", t: "Apply",        d: "Tell us your goals, training history and what gear you have. Takes five minutes." },
        { n: "02", t: "Assessment",   d: "A video consult and movement screen, so the plan fits you — not a template." },
        { n: "03", t: "Your program", d: "Personalized programming plus HRV guidance, delivered to your phone." },
        { n: "04", t: "Check-ins",    d: "Regular reviews — we adjust load, technique and recovery as you go." },
      ],
    },
    who: {
      eyebrow: "Who it's for",
      title: "Built for the\nlong game",
      items: [
        { t: "Masters athletes",        d: "Still competing, or want to — without breaking down." },
        { t: "Busy professionals",      d: "Limited time; you need a plan that actually fits your week." },
        { t: "Burnout & injury cycles", d: "Tired of getting hurt or overtrained? Train by your recovery." },
        { t: "Longevity seekers",       d: "You want strength that lasts decades, not just one hard season." },
      ],
    },
    plans: {
      eyebrow: "Plans", title: "Choose your", marked: "track",
      note: "Placeholder plans — your final track and price are confirmed during your application.",
      popular: "Most popular", cta: "Apply",
      items: [
        { name: "Programming",     price: "$49",        per: "/ month", items: ["Monthly programming", "Built around your equipment", "Email support"] },
        { name: "Online coaching", price: "$129",       per: "/ month", items: ["Programming + the HRV method", "Recovery guidance", "Bi-weekly check-ins", "Direct message access"], popular: true },
        { name: "1-to-1",          price: "from $279",  per: "/ month", items: ["Everything in coaching", "Weekly video calls", "A direct line to Dmytro", "Priority review"] },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Honest answers",
      items: [
        { q: "What equipment do I need?",            a: "Anything from a full box to a single barbell or a pair of dumbbells. We build the program around what you actually have." },
        { q: "How is HRV measured?",                 a: "With a chest strap or a phone-camera app. You log a quick morning reading; we read the trend over time, not single days." },
        { q: "What languages do you coach in?",      a: "Ukrainian and English, equally. Pick whichever you think in — nothing is lost in translation." },
        { q: "Does it work across time zones?",      a: "Yes. Programming and check-ins are asynchronous; any calls are booked to suit your zone." },
        { q: "What's the commitment?",               a: "Monthly, no long lock-in. You stay because it works — not because of a contract." },
      ],
    },
    apply: {
      eyebrow: "Start",
      title: "Train by the",
      marked: "numbers",
      sub: "Tell us your goals — Dmytro reviews every application personally and replies with a plan and a track.",
      name: "Name", email: "Email", goal: "Your goal", goalPh: "Get strong without breaking down",
      submit: "Send application",
      done: "Got it. Dmytro will review your application and reply personally.",
      consent: "By applying, you agree we may contact you about coaching.",
      localText: "In Dnipro?", localLink: "Train in the box",
      namePh: "Olena",
    },
  },
};

export const ONLINE: Record<"uk" | "en", OnlineStrings> = {
  uk: replaceG(RAW.uk, GYM_TERM.uk),
  en: replaceG(RAW.en, GYM_TERM.en),
};
