/* R5 Coach page (Dmytro Pasichnyi) — bilingual content.
   UA canonical · EN equal. Voice: his own, on the floor — plain, earned, "ти".
   Facts verified from the coach brief. No emoji. %G% resolved from the shared gym noun. */
import { replaceG, GYM_TERM } from "./strings";

interface HrvStep { n: string; t: string; d: string; }
interface TimelineItem { y: string; t: string; d?: string; }
interface Credential { t: string; s: string; }
interface AthleteItem { t: string; d: string; tag: string; }

export interface CoachStrings {
  hero: { eyebrow: string; name: string; role: string; punch: string; marked: string; cta: string; ghost: string; portrait: string; };
  opening: { eyebrow: string; title: string; marked: string; paras: string[]; };
  timeline: { eyebrow: string; title: string; marked: string; items: TimelineItem[]; };
  hrv: { eyebrow: string; title: string; lead: string; steps: HrvStep[]; };
  creds: { eyebrow: string; title: string; marked: string; items: Credential[]; };
  athletes: { eyebrow: string; title: string; marked: string; lead: string; items: AthleteItem[]; link: string; };
  quote: { text: string; by: string; role: string; };
  dual: {
    eyebrow: string; title: string; marked: string;
    local:  { kicker: string; title: string; body: string; cta: string; };
    online: { kicker: string; title: string; body: string; cta: string; };
  };
}

const RAW: Record<"uk" | "en", CoachStrings> = {
  uk: {
    hero: {
      eyebrow: "Власник · головний тренер",
      name: "Дмитро\nПасічний",
      role: "Засновник і головний тренер R5",
      punch: "Досі найсильніший у своєму дивізіоні.",
      marked: "найсильніший",
      cta: "Перше тренування — безкоштовно",
      ghost: "Тренуйся онлайн",
      portrait: "// портрет —\nтепле тунгстенове світло, фанера за спиною",
    },
    opening: {
      eyebrow: "Підхід",
      title: "Залізо",
      marked: "не бреше",
      paras: [
        "Я тренуюся 25 років і досі виходжу на старт. Не тому, що мушу — тому, що залізо не бреше. Воно показує, де ти насправді.",
        "Я будую силу, яка лишається. Не на сезон — на десятиліття. Тому ми тренуємо не лише мʼязи, а нервову систему: навантаження, відновлення, сон. HRV каже мені, коли тиснути, а коли відступити.",
        "Моя робота — щоб ти став сильнішим і дотягнув цю силу до того віку, коли вона потрібна найбільше.",
      ],
    },
    timeline: {
      eyebrow: "Шлях",
      title: "Двадцять пʼять років",
      marked: "у строю",
      items: [
        { y: "2001", t: "Початок тренерської роботи" },
        { y: "2005", t: "Диплом зі спортивної науки", d: "Дніпропетровський інститут фізкультури і спорту" },
        { y: "2012", t: "Майстер спорту України · кетлбел", d: "ЧС, Гамбург — 2-е особисто, 1-е в команді" },
        { y: "2018", t: "Його атлет — чемпіон Masters 40–49", d: "ЧС з кетлбелу, Мілан" },
        { y: "2019", t: "3-е місце, Masters 35–40", d: "CrossFit Marbella Beach Games, Іспанія" },
        { y: "2026", t: "#1 Masters 40+ (чол.) в Україні", d: "CFX Open · 2:59" },
      ],
    },
    hrv: {
      eyebrow: "Метод",
      title: "Тренуй сигнали,\nне лише годинник",
      lead: "HRV — варіабельність серцевого ритму: різниця в долях секунди між ударами серця. Вона показує, наскільки відновилася твоя нервова система. Це наш головний прилад.",
      steps: [
        { n: "01", t: "Вимірюємо", d: "Щоранку, одна хвилина. Спокійний вимір одразу після пробудження." },
        { n: "02", t: "Читаємо",   d: "Високий HRV — нервова система готова тиснути. Низький — час відновлюватись." },
        { n: "03", t: "Програмуємо", d: "Навантаження під твій сьогоднішній стан, а не під вчорашній план." },
      ],
    },
    creds: {
      eyebrow: "Кваліфікація",
      title: "Зароблено,",
      marked: "не куплено",
      items: [
        { t: "CrossFit L2 Trainer", s: "Сертифікація рівня 2" },
        { t: "Gymnastics Trainer", s: "Гімнастика · CrossFit" },
        { t: "HRV-сертифікований", s: "Відновлення · нервова система" },
        { t: "Майстер спорту України", s: "Гирьовий спорт · кетлбел" },
        { t: "Медалі ЧС, Гамбург 2012", s: "2-е особисто · 1-е в команді" },
        { t: "Диплом зі спортивної науки", s: "Дніпро · 2000–2005" },
      ],
    },
    athletes: {
      eyebrow: "Виховує чемпіонів",
      title: "Він тренує не лише",
      marked: "себе",
      lead: "Найкращий доказ тренера — це його атлети.",
      items: [
        { t: "Чемпіон світу зі стронгмену", d: "Багаторазовий титул світового рівня — під його наставництвом.", tag: "Стронгмен" },
        { t: "Чемпіон Masters 40–49",       d: "Перемога на ЧС з кетлбелу, Мілан 2018.",                         tag: "Кетлбел" },
      ],
      link: "Результати та спільнота",
    },
    quote: { text: "Сила, якої немає\nз тобою у шістдесят,\n— це не сила.", by: "Дмитро Пасічний", role: "Головний тренер R5" },
    dual: {
      eyebrow: "Два шляхи",
      title: "Тренуйся з Дмитром",
      marked: "з Дмитром",
      local:  { kicker: "У Дніпрі",  title: "Приходь тренуватись", body: "Перше тренування безкоштовне, без зобовʼязань. Тренер підбере зручний час.",            cta: "Записатись на безкоштовне" },
      online: { kicker: "Будь-де",   title: "Тренуйся онлайн",      body: "Його програмування та HRV-метод дистанційно. Індивідуальний план і контроль відновлення.", cta: "Дізнатись про онлайн" },
    },
  },
  en: {
    hero: {
      eyebrow: "Owner · Head coach",
      name: "Dmytro\nPasichnyi",
      role: "Founder & Head Coach, R5",
      punch: "Still the fittest in his division.",
      marked: "fittest",
      cta: "First session — free",
      ghost: "Train online",
      portrait: "// portrait —\nwarm tungsten light, plywood behind",
    },
    opening: {
      eyebrow: "The approach",
      title: "Iron never",
      marked: "lies",
      paras: [
        "I've been training for 25 years and I still toe the start line. Not because I have to — because iron never lies. It shows you where you really are.",
        "I build strength that lasts. Not for a season — for decades. So we train more than muscle: the nervous system, recovery, sleep. HRV tells me when to push and when to back off.",
        "My job is to make you stronger — and to carry that strength to the age when you'll need it most.",
      ],
    },
    timeline: {
      eyebrow: "The record",
      title: "Twenty-five years",
      marked: "in it",
      items: [
        { y: "2001", t: "Started coaching" },
        { y: "2005", t: "Sports-science degree", d: "Dnipropetrovsk Institute of Physical Culture & Sport" },
        { y: "2012", t: "Master of Sport of Ukraine · kettlebell", d: "World Champs, Hamburg — 2nd individual, 1st team" },
        { y: "2018", t: "His athlete wins Masters 40–49", d: "Kettlebell World Champs, Milan" },
        { y: "2019", t: "3rd, Masters 35–40", d: "CrossFit Marbella Beach Games, Spain" },
        { y: "2026", t: "#1 Masters 40+ (Men) in Ukraine", d: "CFX Open · 2:59" },
      ],
    },
    hrv: {
      eyebrow: "The method",
      title: "Train your signals,\nnot just the clock",
      lead: "HRV — heart-rate variability — is the split-second difference between heartbeats. It shows how far your nervous system has recovered. It's our most important instrument.",
      steps: [
        { n: "01", t: "Measure", d: "One minute every morning. A calm reading right after you wake." },
        { n: "02", t: "Read",    d: "High HRV — your nervous system is ready to push. Low — time to recover." },
        { n: "03", t: "Program", d: "Load built for the state you're in today, not yesterday's plan." },
      ],
    },
    creds: {
      eyebrow: "Credentials",
      title: "Earned,",
      marked: "not bought",
      items: [
        { t: "CrossFit L2 Trainer", s: "Level 2 certification" },
        { t: "Gymnastics Trainer", s: "Gymnastics · CrossFit" },
        { t: "HRV-certified", s: "Recovery · nervous system" },
        { t: "Master of Sport of Ukraine", s: "Kettlebell sport" },
        { t: "World Champs medals, Hamburg 2012", s: "2nd individual · 1st team" },
        { t: "Sports-science degree", s: "Dnipro · 2000–2005" },
      ],
    },
    athletes: {
      eyebrow: "Builds champions",
      title: "He doesn't just train",
      marked: "himself",
      lead: "The truest proof of a coach is his athletes.",
      items: [
        { t: "Strongman world champion", d: "A multiple-time world title — built under his mentorship.", tag: "Strongman" },
        { t: "Masters 40–49 champion",   d: "Won the kettlebell World Championship, Milan 2018.",       tag: "Kettlebell" },
      ],
      link: "Results & community",
    },
    quote: { text: "Strength that isn't\nwith you at sixty\nisn't strength.", by: "Dmytro Pasichnyi", role: "Head Coach, R5" },
    dual: {
      eyebrow: "Two ways",
      title: "Train with Dmytro",
      marked: "with Dmytro",
      local:  { kicker: "In Dnipro", title: "Come and train", body: "Your first session is free, no strings. A coach will find a time that works for you.", cta: "Book a free session" },
      online: { kicker: "Anywhere",  title: "Train online",   body: "His programming and HRV method, remotely. An individual plan with recovery under control.", cta: "Ask about online" },
    },
  },
};

export const COACH: Record<"uk" | "en", CoachStrings> = {
  uk: replaceG(RAW.uk, GYM_TERM.uk),
  en: replaceG(RAW.en, GYM_TERM.en),
};
