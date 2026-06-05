/* R5 — Coach page (Dmytro Pasichnyi) — components + App.
   Reuses shared components from components.jsx (Nav, Footer, Button, Icon,
   Marked, Tick, SecHead, StickyCTA). Content from coach-i18n.js (window.R5_COACH);
   nav/footer strings from i18n.js (window.R5_I18N). */
const { useState, useEffect } = React;

/* gym-noun options + placeholder substitution (shared semantics with home) */
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
function splitMark(str, mark) { const i = str.indexOf(mark); if (i < 0) return [str, "", ""]; return [str.slice(0, i), mark, str.slice(i + mark.length)]; }

/* ---- Coach hero -------------------------------------------------------- */
function CoachHero({ c, onBook, onOnline }) {
  const [pa, pm, pb] = splitMark(c.hero.punch, c.hero.marked);
  return (
    <header className="r5-chero r5-dark" id="top">
      <div className="r5-chero__bg" />
      <div className="r5-chero__scrim" />
      <div className="r5-wrap r5-chero__grid">
        <div className="r5-chero__plate"><div className="r5-photo-ph">{c.hero.portrait}</div></div>
        <div>
          <p className="r5-chero__role">{c.hero.eyebrow}</p>
          <h1 className="r5-chero__name">{c.hero.name}</h1>
          <p className="r5-chero__sub">{c.hero.role}</p>
          <p className="r5-chero__punch">{pa}<Marked>{pm}</Marked>{pb}</p>
          <div className="r5-chero__cta">
            <Button cta icon="arrow-right" onClick={onBook}>{c.hero.cta}</Button>
            <button className="r5-chero__ghost" onClick={onOnline}><Icon name="monitor" size={18} />{c.hero.ghost}</button>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ---- Opening statement ------------------------------------------------- */
function OpeningStatement({ c }) {
  const o = c.opening;
  return (
    <section className="r5-section r5-open" id="approach">
      <div className="r5-wrap r5-open__grid">
        <div>
          <p className="r5-eyebrow-row">{o.eyebrow}</p>
          <h2>{o.title} <Marked>{o.marked}</Marked></h2>
        </div>
        <div className="r5-open__body">
          {o.paras.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </div>
    </section>
  );
}

/* ---- Career timeline --------------------------------------------------- */
function Timeline({ c }) {
  const tl = c.timeline;
  return (
    <section className="r5-section" id="record" style={{ background: "var(--surface)" }}>
      <div className="r5-wrap">
        <SecHead eyebrow={tl.eyebrow} title={tl.title} marked={tl.marked} />
        <div className="r5-tl">
          {tl.items.map((it) => (
            <div key={it.y} className="r5-tl__row">
              <div className="r5-tl__year">{it.y}</div>
              <div className="r5-tl__body">
                <span className="r5-tl__node" />
                <h3 className="r5-tl__t">{it.t}</h3>
                {it.d && <p className="r5-tl__d">{it.d}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- HRV method (dark manual panel) ------------------------------------ */
function HrvMethod({ c }) {
  const h = c.hrv;
  return (
    <section className="r5-section r5-hrv r5-dark" id="method">
      <div className="r5-wrap">
        <div className="r5-hrv__panel">
          <div className="r5-hrv__head">
            <h2>{h.title}</h2>
            <span className="r5-hrv__tag">{h.eyebrow}</span>
          </div>
          <p className="r5-hrv__lead">{h.lead}</p>
          <div className="r5-hrv__steps">
            {h.steps.map((s) => (
              <div key={s.n} className="r5-hrv__step">
                <div className="r5-hrv__n">{s.n}</div>
                <h3 className="r5-hrv__st">{s.t}</h3>
                <p className="r5-hrv__sd">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- Credentials grid -------------------------------------------------- */
function Credentials({ c }) {
  const cr = c.creds;
  return (
    <section className="r5-section" id="creds">
      <div className="r5-wrap">
        <SecHead eyebrow={cr.eyebrow} title={cr.title} marked={cr.marked} />
        <div className="r5-creds">
          {cr.items.map((it, i) => (
            <div key={i} className="r5-cred">
              <h3 className="r5-cred__t">{it.t}</h3>
              <p className="r5-cred__s">{it.s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Athletes he's built ----------------------------------------------- */
function Athletes({ c, onResults }) {
  const a = c.athletes;
  return (
    <section className="r5-section r5-ath" id="athletes">
      <div className="r5-wrap">
        <div className="r5-ath__head">
          <p className="r5-eyebrow-row">{a.eyebrow}</p>
          <h2 className="r5-h1" style={{ margin: 0 }}>{a.title} <Marked>{a.marked}</Marked></h2>
          <p className="r5-ath__lead">{a.lead}</p>
        </div>
        <div className="r5-ath__grid">
          {a.items.map((it, i) => (
            <div key={i} className="r5-card r5-card--tab r5-card--stamp r5-ath__card">
              <span className="r5-badge r5-badge--amber" style={{ alignSelf: "flex-start" }}>{it.tag}</span>
              <h3>{it.t}</h3>
              <p>{it.d}</p>
            </div>
          ))}
        </div>
        <div className="r5-ath__link">
          <button className="r5-link" onClick={onResults}>{a.link}<Icon name="arrow-right" size={18} /></button>
        </div>
      </div>
    </section>
  );
}

/* ---- Philosophy quote -------------------------------------------------- */
function PhilosophyQuote({ c }) {
  const q = c.quote;
  return (
    <section className="r5-section r5-pquote" id="philosophy">
      <div className="r5-wrap">
        <blockquote>{q.text}</blockquote>
        <div className="r5-pquote__rule" />
        <div className="r5-pquote__by">{q.by}</div>
        <div className="r5-pquote__role">{q.role}</div>
      </div>
    </section>
  );
}

/* ---- Dual CTA band ----------------------------------------------------- */
function DualCTA({ c, onBook, onOnline }) {
  const d = c.dual;
  const [ta, tm, tb] = splitMark(d.title, d.marked);
  return (
    <section className="r5-section r5-dual" id="dual">
      <div className="r5-wrap">
        <div className="r5-dual__head">
          <p className="r5-eyebrow-row">{d.eyebrow}</p>
          <h2>{ta}<Marked>{tm}</Marked>{tb}</h2>
        </div>
        <div className="r5-dual__grid">
          <div className="r5-dual__card r5-dual__card--local">
            <p className="r5-dual__kicker">{d.local.kicker}</p>
            <h3>{d.local.title}</h3>
            <p>{d.local.body}</p>
            <div><Button cta icon="arrow-right" onClick={onBook}>{d.local.cta}</Button></div>
          </div>
          <div className="r5-dual__card r5-dual__card--online">
            <p className="r5-dual__kicker">{d.online.kicker}</p>
            <h3>{d.online.title}</h3>
            <p>{d.online.body}</p>
            <div><Button cta icon="monitor" onClick={onOnline}>{d.online.cta}</Button></div>
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

function CoachApp() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [locale, setLocale] = useState("uk");
  const [dark, setDark] = useState(false);
  const [stuck, setStuck] = useState(false);
  const termKey = GYM_TERMS[t.gymTerm] ? t.gymTerm : "Простір";
  const map = { "%G%": GYM_TERMS[termKey][locale] };
  const strings = deepReplace(window.R5_I18N[locale], map);
  const c = deepReplace(window.R5_COACH[locale], map);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("r5-dark", dark);
    root.classList.toggle("r5-light", !dark);
    root.setAttribute("lang", locale === "uk" ? "uk" : "en");
  }, [dark, locale]);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 620);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [t.surface]);

  // if arriving with a #hash (e.g. Training.html → #method), scroll to it once mounted
  useEffect(() => {
    if (!window.location.hash) return;
    const id = window.location.hash.slice(1);
    const t0 = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 84, behavior: "auto" });
    }, 140);
    return () => clearTimeout(t0);
  }, []);

  // cross-page navigation: coach links route to the home page anchors
  const go = (id) => {
    if (id === "coach") { window.scrollTo({ top: 0, behavior: t.reduce ? "auto" : "smooth" }); return; }
    if (id === "gym") { window.location.href = "TheGym.html"; return; }
    if (id === "services") { window.location.href = "Training.html"; return; }
    if (id === "online") { window.location.href = "Online.html"; return; }
    if (id === "contact") { window.location.href = "Contact.html"; return; }
    window.location.href = "index.html#" + id;
  };
  const onBook = () => { window.location.href = "Contact.html"; };
  const onOnline = () => { window.location.href = "Online.html"; };
  const onResults = () => { window.location.href = "Results.html"; };

  return (
    <div className={"r5-site" + (dark ? " r5-dark" : " r5-light")}
         data-surface={t.surface} data-vibe={t.vibe} data-stamp={t.stamp ? "on" : "off"}
         data-reduce={t.reduce ? "on" : "off"}>
      <Nav t={strings} locale={locale} setLocale={setLocale} dark={dark} setDark={setDark} go={go} onBook={onBook} active="coach" />
      <CoachHero c={c} onBook={onBook} onOnline={onOnline} />
      <OpeningStatement c={c} />
      <Timeline c={c} />
      <HrvMethod c={c} />
      <Credentials c={c} />
      <Athletes c={c} onResults={onResults} />
      <PhilosophyQuote c={c} />
      <DualCTA c={c} onBook={onBook} onOnline={onOnline} />
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

ReactDOM.createRoot(document.getElementById("root")).render(<CoachApp />);
