/* R5 — The Gym page — components + App.
   Reuses shared components (Nav, Footer, Button, Icon, Marked, Tick, SecHead,
   CtaBand, StickyCTA). Content from gym-i18n.js (window.R5_GYM);
   nav/footer + booking form strings from i18n.js (window.R5_I18N). */
const { useState, useEffect } = React;

const GYM_TERMS = {
  "Простір": { uk: "простір", en: "space" },
  "Зал":     { uk: "зал",     en: "gym" },
  "Клуб":    { uk: "клуб",    en: "club" },
  "Цех":     { uk: "цех",     en: "shop" },
};
function deepReplace(o, map) {
  if (typeof o === "string") { let s = o; for (const k in map) s = s.split(k).join(map[k]); return s; }
  if (Array.isArray(o)) return o.map((x) => deepReplace(x, map));
  if (o && typeof o === "object") { const r = {}; for (const k in o) r[k] = deepReplace(o[k], map); return r; }
  return o;
}

/* ---- Atmosphere hero --------------------------------------------------- */
function GymHero({ g, onBook }) {
  return (
    <header className="r5-ghero r5-dark" id="top">
      <div className="r5-ghero__photo"><div className="r5-photo-ph">{g.hero.photo}</div></div>
      <div className="r5-ghero__scrim" />
      <div className="r5-wrap">
        <div className="r5-ghero__in">
          <p className="r5-eyebrow-row">{g.hero.eyebrow}</p>
          <h1>{g.hero.title} <Marked>{g.hero.marked}</Marked></h1>
          <p className="r5-ghero__sub">{g.hero.sub}</p>
          <Button cta icon="arrow-right" onClick={onBook}>{g.hero.cta}</Button>
        </div>
      </div>
    </header>
  );
}

/* ---- What R5 is (and isn't) -------------------------------------------- */
function WhatIs({ g }) {
  const w = g.whatis;
  return (
    <section className="r5-section r5-whatis" id="about">
      <div className="r5-wrap r5-whatis__grid">
        <div className="r5-whatis__photo"><div className="r5-photo-ph">{w.photo}</div></div>
        <div>
          <p className="r5-eyebrow-row">{w.eyebrow}</p>
          <h2>{w.title} <Marked>{w.marked}</Marked></h2>
          <p className="r5-whatis__body">{w.body}</p>
          <ul className="r5-ticks">{w.ticks.map((x, i) => <li key={i}><Tick />{x}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}

/* ---- Whiteboard ritual ------------------------------------------------- */
function Ritual({ g }) {
  const r = g.ritual; const b = r.board;
  return (
    <section className="r5-section r5-ritual r5-dark" id="ritual">
      <div className="r5-wrap r5-ritual__grid">
        <div>
          <p className="r5-eyebrow-row">{r.eyebrow}</p>
          <h2>{r.title} <Marked>{r.marked}</Marked></h2>
          <p className="r5-ritual__body">{r.body}</p>
        </div>
        <div className="r5-board">
          <div className="r5-board__head">
            <span className="r5-board__label">{b.label}</span>
            <span className="r5-board__cap">{b.cap}</span>
          </div>
          <div className="r5-board__scheme">{b.scheme}</div>
          <ul className="r5-board__moves">{b.moves.map((m, i) => <li key={i}>{m}</li>)}</ul>
          <div className="r5-board__tally">
            <p className="r5-board__tlabel">{b.tallyLabel}</p>
            {b.rows.map((row, i) => (
              <div key={i} className={"r5-board__row" + (row.rx ? " r5-board__row--rx" : "")}>
                <span className="r5-board__name">{row.n}</span>
                <span className="r5-board__dots" />
                <span className="r5-board__score">{row.s}</span>
                {row.rx && <span className="r5-board__rx">RX</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- Gallery ----------------------------------------------------------- */
function Gallery({ g }) {
  const ga = g.gallery;
  return (
    <section className="r5-section r5-gallery" id="gallery">
      <div className="r5-wrap">
        <SecHead eyebrow={ga.eyebrow} title={ga.title} marked={ga.marked} />
        <div className="r5-gallery__grid">
          {ga.items.map((it, i) => (
            <div key={i} className="r5-gphoto">
              <div className="r5-photo-ph">{it.k}</div>
              <span className="r5-gphoto__cap">{it.t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Typical class (manual page) --------------------------------------- */
function TypicalClass({ g }) {
  const c = g.expect;
  return (
    <section className="r5-section r5-class" id="class">
      <div className="r5-wrap">
        <div className="r5-class__panel">
          <div className="r5-class__head">
            <div>
              <p className="r5-eyebrow-row">{c.eyebrow}</p>
              <h2>{c.title}</h2>
            </div>
            <p className="r5-class__lead">{c.lead}</p>
          </div>
          <div className="r5-class__steps">
            {c.steps.map((s) => (
              <div key={s.n} className="r5-class__step">
                <div className="r5-class__n">{s.n}</div>
                <h3 className="r5-class__st">{s.t}</h3>
                <p className="r5-class__sd">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- Practical info ---------------------------------------------------- */
function Practical({ g, onDirections }) {
  const p = g.practical;
  return (
    <section className="r5-section" id="practical" style={{ background: "var(--surface)" }}>
      <div className="r5-wrap">
        <SecHead eyebrow={p.eyebrow} title={p.title} marked={p.marked} />
        <div className="r5-prac__grid">
          <div className="r5-prac__map">
            <div className="r5-photo-ph">{p.mapPh}</div>
            <div className="r5-prac__mapcta"><Button icon="map-pin" onClick={onDirections}>{p.mapCta}</Button></div>
          </div>
          <div className="r5-prac__blocks">
            {p.blocks.map((b, i) => (
              <div key={i} className="r5-prac__b">
                <h4>{b.h}</h4>
                <ul>{b.items.map((x, j) => <li key={j}>{x}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- App --------------------------------------------------------------- */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "vibe": "expressive",
  "stamp": true,
  "gymTerm": "Простір",
  "surface": "desktop",
  "reduce": false
}/*EDITMODE-END*/;

function GymApp() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [locale, setLocale] = useState("uk");
  const [dark, setDark] = useState(false);
  const [stuck, setStuck] = useState(false);
  const termKey = GYM_TERMS[t.gymTerm] ? t.gymTerm : "Простір";
  const map = { "%G%": GYM_TERMS[termKey][locale] };
  const strings = deepReplace(window.R5_I18N[locale], map);
  const g = deepReplace(window.R5_GYM[locale], map);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("r5-dark", dark);
    root.classList.toggle("r5-light", !dark);
    root.setAttribute("lang", locale === "uk" ? "uk" : "en");
  }, [dark, locale]);

  useEffect(() => {
    const onScroll = () => {
      const contact = document.getElementById("contact");
      const past = window.scrollY > 620;
      const nearForm = contact && contact.getBoundingClientRect().top < window.innerHeight * 0.9;
      setStuck(past && !nearForm);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [t.surface]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 84, behavior: t.reduce ? "auto" : "smooth" });
  };
  const go = (id) => {
    if (id === "gym") { window.scrollTo({ top: 0, behavior: t.reduce ? "auto" : "smooth" }); return; }
    if (id === "coach") { window.location.href = "Coach.html"; return; }
    if (id === "services") { window.location.href = "Training.html"; return; }
    if (id === "online") { window.location.href = "Online.html"; return; }
    if (id === "contact") { window.location.href = "Contact.html"; return; }
    window.location.href = "index.html#" + id;
  };
  const onBook = () => scrollTo("contact");
  const onDirections = (e) => { e.preventDefault(); };

  return (
    <div className={"r5-site" + (dark ? " r5-dark" : " r5-light")}
         data-surface={t.surface} data-vibe={t.vibe} data-stamp={t.stamp ? "on" : "off"}
         data-reduce={t.reduce ? "on" : "off"}>
      <Nav t={strings} locale={locale} setLocale={setLocale} dark={dark} setDark={setDark} go={go} onBook={onBook} active="gym" />
      <GymHero g={g} onBook={onBook} />
      <WhatIs g={g} />
      <Ritual g={g} />
      <Gallery g={g} />
      <TypicalClass g={g} />
      <Practical g={g} onDirections={onDirections} />
      <CtaBand t={strings} />
      <Footer t={strings} locale={locale} go={go} />
      <StickyCTA t={strings} show={stuck} onBook={onBook} />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Whiteboard energy" />
        <TweakRadio label="Vibe" value={t.vibe} options={["restrained", "expressive"]}
                    onChange={(v) => setTweak("vibe", v)} />
        <TweakToggle label="Stamp shadows" value={t.stamp} onChange={(v) => setTweak("stamp", v)} />
        <TweakSection label="Wording" />
        <TweakSelect label="Gym term" value={t.gymTerm} options={["Простір", "Зал", "Клуб", "Цех"]}
                    onChange={(v) => setTweak("gymTerm", v)} />
        <TweakSection label="Preview" />
        <TweakRadio label="Surface" value={t.surface} options={["desktop", "mobile"]}
                    onChange={(v) => setTweak("surface", v)} />
        <TweakToggle label="Reduce motion" value={t.reduce} onChange={(v) => setTweak("reduce", v)} />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<GymApp />);
