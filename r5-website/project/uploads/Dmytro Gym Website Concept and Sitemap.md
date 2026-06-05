# R5 (Rokytnyi5) — Website Concept & Sitemap

Master doc. Defines the website concept, audiences, positioning, and the
full sitemap. Each **area** below has its own standalone doc
(`01`–`07`) that can be pasted into [Claude Design](https://claude.ai/design)
on its own to produce desktop + mobile designs.

> **Design language is already defined.** All area docs assume the
> **R5 brand design system** (`r5-design-system-brief.md`) — raw plywood
> + black + warm amber, whiteboard energy, Cyrillic-complete heavy
> display face, light/cream canvas primary with dark sections. Area docs
> describe *layout, content, and responsive behaviour* — they do **not**
> re-specify colour or type. Feed the design-system output alongside each
> area doc so Claude Design stays on-brand.

---

## The concept in one line

**A real working CrossFit gym in Dnipro, led by a coach who's still the
fittest man in his division — and who trains people to last, not just to
sweat.**

The site should feel like walking into the box: raw, warm, heavy, no
gloss. The whiteboard is the spirit of the brand. Content does the
talking; chrome stays quiet.

---

## Who the site is for

**Primary — local prospects (Ukrainian).** People in and around Dnipro
deciding where to train. They want to know: is this serious, will I fit
in, is the coach legit, how do I start. Conversion = **book a free first
session.**

**Secondary — remote / online clients (English + Ukrainian).** People who
can't train in the box but want the coach's programming and his
HRV/recovery method. Conversion = **enquire about online coaching.**

Both audiences share one trust engine: **Dmytro's credibility.** The
site is built to establish that fast and then route each audience to its
own next step.

---

## Positioning — the three pillars

Every page leans on one or more of these. They're all verified from his
own record.

1. **Proven, and still competing.** ~25 years coaching (since 2001) and
   currently **#1 Masters 40+ (Men) in Ukraine** (CFX Open 2026, 2:59).
   Not a faded résumé — living proof. *"Still the fittest in his
   division."*
2. **Trains your signals, not just the clock.** A certified **HRV / heart-
   rate-variability** coach who programs around nervous-system recovery.
   Train smart, recover smart, last for decades. **This is the
   differentiator** — almost no Ukrainian box markets on recovery
   science.
3. **Builds champions.** Mentor to a multiple-time Strongman world
   champion and a Masters world-championship medallist (kettlebell,
   Milan 2018). He doesn't just train himself — he gets *other* people to
   the top.

Supporting credibility: Master of Sport of Ukraine (kettlebell), Kettle-
bell World Championship medals (Hamburg 2012), CrossFit L2 + Gymnastics,
a sports-science degree, and a working, near-capacity community box.

---

## Conversion strategy

- **One primary CTA everywhere:** *Book a free first session* (local).
  Persistent in the nav and repeated at the foot of every page.
- **One secondary CTA:** *Online coaching* (remote/EN), surfaced where
  relevant (coach page, online page, footer) but never competing with the
  primary on local-intent pages.
- **Low-friction contact:** phone / Instagram DM / form — meet Ukrainian
  users where they already are (Instagram is the gym's live channel:
  `@rokytnyi5.crossbox`).

---

## Sitemap

```
HOME (01)
├── Coach — Dmytro (02)          ← the trust engine
├── The Gym — R5 (03)            ← space, culture, location
├── Training & Programs (04)     ← in-gym: group, personal, on-ramp
│     └── Online Coaching (05)   ← remote / HRV method / EN wedge
├── Results & Community (06)     ← proof: athletes, testimonials, wins
└── Start Here / Contact (07)    ← book a free first session
```

Flat, six-section structure. No deep nesting. Online Coaching is reachable
from Training and from the Coach page, but stands alone as a page because
it serves a different audience and conversion.

---

## Global elements (apply to every area)

These are defined once and reused on all pages; each area doc assumes
them rather than redrawing them.

- **Header / nav** — heavy R5 wordmark left; nav links; **UA/EN language
  toggle**; persistent primary CTA button (*Book a free session*).
  Collapses to a hamburger + sticky CTA on mobile.
- **Footer** — contact (phone, address, map link), `@rokytnyi5.crossbox`
  + social, language toggle, quiet heavy wordmark, copyright. Repeats the
  primary CTA above it.
- **Language toggle** — Ukrainian is canonical/default; English is a full
  equal, not a thin machine translation. Every page must hold both
  string lengths.
- **Persistent CTA band** — a recurring "Ready to start?" → *Book a free
  first session* block, reused at the bottom of most pages.

---

## Page inventory → which doc to feed Claude Design

| # | Area | Doc | Primary goal |
|---|------|-----|--------------|
| 01 | Home | `01-home.md` | Hook + route both audiences |
| 02 | Coach (Dmytro) | `02-coach-dmytro.md` | Build trust / credibility |
| 03 | The Gym (R5) | `03-the-gym.md` | Convey the space & culture |
| 04 | Training & Programs | `04-training-programs.md` | Explain in-gym offerings |
| 05 | Online Coaching | `05-online-coaching.md` | Capture remote/EN leads |
| 06 | Results & Community | `06-results-community.md` | Social proof |
| 07 | Start Here / Contact | `07-contact-start.md` | Convert → book session |

**How to use:** paste one area doc + the design-system output into Claude
Design per run. Each area doc specifies desktop (~1280) and mobile (~390)
layouts and the content blocks for that page.

---

## Bilingual principle (all pages)

- Design and review **every** component in both Ukrainian and English.
- Ukrainian strings typically run longer — headings, buttons, and cards
  must not break when they do.
- Keep one display face that is **Cyrillic-complete** (already a hard
  constraint in the design system).
- Avoid baking text into images; copy must be swappable per language.

---

## Placeholders the content docs will fill later

Not needed for design, but flagged so mocks use realistic stand-ins:
gym address & map, class schedule, membership prices, online-coaching
offer & pricing, real member testimonials & photos, gym interior photos,
and the R5 wordmark/logo (the design system proposes one if none exists).
