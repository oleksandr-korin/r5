/* R5 — Results & Community page — components + App.
   Reuses shared components (Nav, Footer, Button, Icon, Marked, Tick, SecHead,
   StickyCTA). Content from results-i18n.js (window.R5_RESULTS); nav/footer +
   sticky-CTA label from i18n.js (window.R5_I18N). Earned, not gamified. */
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

/* ---- Header (cream, heavy headline + slim community band) -------------- */
function ResultsHeader({ d, onBook }) {
  const h = d.header;
  return (
    <header className="r5-section r5-rhead" id="top">
      <div className="r5-wrap">
        <div className="r5-rhead__in">
          <p className="r5-eyebrow-row">{h.eyebrow}</p>
          <h1>{h.title} <Marked>{h.marked}</Marked></h1>
          <p className="r5-rhead__lead">{h.lead}</p>
          <Button cta icon="arrow-right" onClick={onBook}>{h.cta}</Button>
        </div>
        <div className="r5-rhead__band r5-dark"><div className="r5-photo-ph">{h.photo}</div></div>
      </div>
    </header>
  );
}

/* ---- Achievements strip ------------------------------------------------ */
function Wins({ d }) {
  const w = d.wins;
  return (
    <section className="r5-section r5-wins" id="wins">
      <div className="r5-wrap">
        <SecHead eyebrow={w.eyebrow} title={w.title} marked={w.marked} />
        <div className="r5-wins__row">
          {w.items.map((it, i) => (
            <div key={i} className="r5-win">
              <div className="r5-win__n">{it.n}</div>
              <div className="r5-win__l">{it.l}</div>
              <div className="r5-win__who">{it.who}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Testimonials (featured + grid) ------------------------------------ */
function Voices({ d }) {
  const v = d.voices;
  const f = v.featured;
  return (
    <section className="r5-section r5-voices" id="voices">
      <div className="r5-wrap">
        <SecHead eyebrow={v.eyebrow} title={v.title} marked={v.marked} />
        <div className="r5-voices__grid">
          <div className="r5-voice-feat">
            <div className="r5-voice-feat__mark" aria-hidden="true">“</div>
            <blockquote>{f.text}</blockquote>
            <div className="r5-voice-feat__by">
              <div className="r5-voice__av">{f.name[0]}</div>
              <div>
                <div className="r5-voice-feat__name">{f.name}</div>
                <div className="r5-voice-feat__role">{f.role}</div>
              </div>
            </div>
          </div>
          <div className="r5-voices__small">
            {v.items.map((it, i) => (
              <div key={i} className="r5-card r5-card--tab r5-card--stamp r5-voice">
                <p className="r5-voice__text">“{it.text}”</p>
                <div className="r5-voice__by">
                  <div className="r5-voice__av">{it.name[0]}</div>
                  <div>
                    <div className="r5-voice__name">{it.name}</div>
                    <div className="r5-voice__role">{it.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- Transformation stories -------------------------------------------- */
function Stories({ d }) {
  const s = d.stories;
  return (
    <section className="r5-section" id="stories" style={{ background: "var(--surface)" }}>
      <div className="r5-wrap">
        <SecHead eyebrow={s.eyebrow} title={s.title} marked={s.marked} />
        <div className="r5-stories__grid">
          {s.items.map((it, i) => (
            <div key={i} className="r5-card r5-card--stamp r5-story">
              <div className="r5-story__photo"><div className="r5-photo-ph">{it.photo}</div></div>
              <div className="r5-story__body">
                <span className="r5-story__tag">{it.tag}</span>
                <h3>{it.name}</h3>
                <div className="r5-story__arc">
                  <span className="r5-story__chip">{it.from}</span>
                  <span className="r5-story__arrow"><Icon name="arrow-right" size={16} /></span>
                  <span className="r5-story__chip r5-story__chip--now">{it.to}</span>
                </div>
                <p className="r5-story__text">{it.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Community filmstrip ----------------------------------------------- */
function Filmstrip({ d }) {
  const g = d.gallery;
  return (
    <section className="r5-section" id="community">
      <div className="r5-wrap">
        <SecHead eyebrow={g.eyebrow} title={g.title} marked={g.marked} />
        <div className="r5-film">
          {g.items.map((it, i) => (
            <div key={i} className="r5-film__item">
              <div className="r5-photo-ph">{it.k}</div>
              <span className="r5-film__cap">{it.t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Board culture (whiteboard leaderboard) ---------------------------- */
function BoardCulture({ d }) {
  const b = d.board;
  const p = b.panel;
  return (
    <section className="r5-section r5-bculture r5-dark" id="board">
      <div className="r5-wrap r5-bculture__grid">
        <div>
          <p className="r5-eyebrow-row">{b.eyebrow}</p>
          <h2>{b.title} <Marked>{b.marked}</Marked></h2>
          <p className="r5-bculture__body">{b.body}</p>
        </div>
        <div className="r5-lb">
          <div className="r5-lb__head">
            <span className="r5-lb__label">{p.label}</span>
            <span className="r5-lb__cap">{p.cap}</span>
          </div>
          <div className="r5-lb__scheme">{p.scheme}</div>
          <div className="r5-lb__rows">
            {p.rows.map((row, i) => (
              <div key={i} className="r5-lb__row">
                <span className="r5-lb__rank">{row.r}</span>
                <span className="r5-lb__name">{row.n}</span>
                <span className="r5-lb__dots" />
                <span className="r5-lb__score">{row.s}</span>
                {row.rx && <span className="r5-lb__rx">RX</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- CTA band ("Want to be on the board?") ----------------------------- */
function ResultsCTA({ d }) {
  const c = d.cta;
  const [done, setDone] = useState(false);
  const [a, b] = c.title.split(c.marked);
  return (
    <section className="r5-section r5-ctaband" id="contact">
      <div className="r5-wrap r5-ctaband__grid">
        <div>
          <p className="r5-eyebrow-row">{c.eyebrow}</p>
          <h2>{a}<Marked>{c.marked}</Marked>{b}</h2>
          <p className="r5-ctaband__sub">{c.sub}</p>
        </div>
        <form className="r5-form" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
          {done ? (
            <div className="r5-form__done"><Icon name="send" size={22} />{c.done}</div>
          ) : (
            <React.Fragment>
              <div className="r5-field"><label className="r5-label">{c.name}</label><input className="r5-input" placeholder={c.name === "Імʼя" ? "Олена" : "Olena"} required /></div>
              <div className="r5-field"><label className="r5-label">{c.phone}</label><input className="r5-input" placeholder="+38 0__ ___ __ __" required /></div>
              <div className="r5-field full"><label className="r5-label">{c.when}</label><input className="r5-input" placeholder={c.whenPh} /></div>
              <div className="full"><Button cta icon="send" type="submit">{c.submit}</Button></div>
              <p className="r5-form__consent full">{c.consent}</p>
            </React.Fragment>
          )}
        </form>
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

function ResultsApp() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [locale, setLocale] = useState("uk");
  const [dark, setDark] = useState(false);
  const [stuck, setStuck] = useState(false);
  const termKey = GYM_TERMS[t.gymTerm] ? t.gymTerm : "Простір";
  const mapr = { "%G%": GYM_TERMS[termKey][locale] };
  const strings = deepReplace(window.R5_I18N[locale], mapr);
  const d = deepReplace(window.R5_RESULTS[locale], mapr);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("r5-dark", dark);
    root.classList.toggle("r5-light", !dark);
    root.setAttribute("lang", locale === "uk" ? "uk" : "en");
  }, [dark, locale]);

  useEffect(() => {
    const onScroll = () => {
      const contact = document.getElementById("contact");
      const past = window.scrollY > 600;
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
  // cross-page navigation
  const go = (id) => {
    if (id === "coach") { window.location.href = "Coach.html"; return; }
    if (id === "gym") { window.location.href = "TheGym.html"; return; }
    if (id === "services") { window.location.href = "Training.html"; return; }
    if (id === "online") { window.location.href = "Online.html"; return; }
    if (id === "contact") { window.location.href = "Contact.html"; return; }
    window.location.href = "index.html#" + id;
  };
  const onBook = () => scrollTo("contact");

  return (
    <div className={"r5-site" + (dark ? " r5-dark" : " r5-light")}
         data-surface={t.surface} data-vibe={t.vibe} data-stamp={t.stamp ? "on" : "off"}
         data-reduce={t.reduce ? "on" : "off"}>
      <Nav t={strings} locale={locale} setLocale={setLocale} dark={dark} setDark={setDark} go={go} onBook={onBook} />
      <ResultsHeader d={d} onBook={onBook} />
      <Wins d={d} />
      <Voices d={d} />
      <Stories d={d} />
      <Filmstrip d={d} />
      <BoardCulture d={d} />
      <ResultsCTA d={d} />
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

ReactDOM.createRoot(document.getElementById("root")).render(<ResultsApp />);
