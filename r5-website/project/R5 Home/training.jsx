/* R5 — Training & Programs page — components + App.
   Reuses shared components (Nav, Footer, Button, Icon, Marked, Tick, SecHead,
   CtaBand, StickyCTA). Content from training-i18n.js (window.R5_TRAINING);
   nav/footer + booking form strings from i18n.js (window.R5_I18N).
   Tweak: programs card set switches layout grid <-> featured. */
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

/* ---- Header (cream, heavy headline + slim photo band) ------------------ */
function TrainHeader({ d, onBook, onOnline }) {
  const h = d.header;
  return (
    <header className="r5-section r5-thead" id="top">
      <div className="r5-wrap">
        <div className="r5-thead__in">
          <p className="r5-eyebrow-row">{h.eyebrow}</p>
          <h1>{h.title} <Marked>{h.marked}</Marked></h1>
          <p className="r5-thead__lead">{h.lead}</p>
          <div className="r5-thead__cta">
            <Button cta icon="arrow-right" onClick={onBook}>{h.cta}</Button>
            <button className="r5-thead__online" onClick={onOnline}>
              <Icon name="monitor" size={18} />{h.online}<Icon name="arrow-right" size={16} />
            </button>
          </div>
        </div>
        <div className="r5-thead__band r5-dark"><div className="r5-photo-ph">{h.photo}</div></div>
      </div>
    </header>
  );
}

/* ---- Programs card set (layout switches grid <-> featured) ------------- */
function ProgramCard({ it, p, onBook }) {
  return (
    <div className={"r5-card r5-card--tab r5-card--stamp r5-progc" + (it.feature ? " r5-progc--feature" : "")}>
      <div>
        <div className="r5-progc__top">
          <span className="r5-progc__n">{it.n}</span>
          <span className="r5-badge r5-badge--amber">{it.tag}</span>
        </div>
        <h3>{it.t}</h3>
        <p className="r5-progc__d">{it.d}</p>
        <div className="r5-progc__good">
          <span className="r5-progc__goodlabel">{p.goodLabel}</span>
          <span className="r5-progc__goodtext">{it.good}</span>
        </div>
      </div>
      <div className="r5-progc__foot">
        <span className="r5-progc__price">{it.price}</span>
        <button className="r5-link" onClick={onBook}>{p.bookCta}<Icon name="arrow-right" size={16} /></button>
      </div>
    </div>
  );
}
function ProgramSet({ d, layout, onBook }) {
  const p = d.programs;
  return (
    <section className="r5-section" id="programs" style={{ background: "var(--surface)" }}>
      <div className="r5-wrap">
        <SecHead eyebrow={p.eyebrow} title={p.title} marked={p.marked} />
        <div className={"r5-progset r5-progset--" + layout}>
          {p.items.map((it) => <ProgramCard key={it.n} it={it} p={p} onBook={onBook} />)}
        </div>
      </div>
    </section>
  );
}

/* ---- On-ramp reassurance panel ----------------------------------------- */
function OnRamp({ d, onBook }) {
  const o = d.onramp;
  return (
    <section className="r5-section r5-onramp" id="onramp">
      <div className="r5-wrap">
        <div className="r5-onramp__panel">
          <div className="r5-onramp__left">
            <p className="r5-eyebrow-row">{o.eyebrow}</p>
            <h2>{o.title}</h2>
            <p className="r5-onramp__body">{o.body}</p>
            <Button cta icon="arrow-right" onClick={onBook}>{o.cta}</Button>
          </div>
          <div className="r5-onramp__right">
            <ul className="r5-ticks">{o.ticks.map((x, i) => <li key={i}><Tick />{x}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- Session flow (cream manual page) ---------------------------------- */
function SessionFlow({ d }) {
  const f = d.flow;
  return (
    <section className="r5-section r5-flow" id="flow" style={{ background: "var(--surface)" }}>
      <div className="r5-wrap">
        <div className="r5-flow__panel">
          <div className="r5-flow__head">
            <div>
              <p className="r5-eyebrow-row">{f.eyebrow}</p>
              <h2>{f.title}</h2>
            </div>
            <p className="r5-flow__lead">{f.lead}</p>
          </div>
          <div className="r5-flow__steps">
            {f.steps.map((s) => (
              <div key={s.n} className="r5-flow__step">
                <div className="r5-flow__n">{s.n}</div>
                <h3 className="r5-flow__st">{s.t}</h3>
                <p className="r5-flow__sd">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- R5 method (HRV) band — dark, links to coach ----------------------- */
function MethodBand({ d, onMethod }) {
  const m = d.method;
  return (
    <section className="r5-section r5-method r5-dark" id="method">
      <div className="r5-method__tag" aria-hidden="true">HRV</div>
      <div className="r5-wrap r5-method__grid">
        <div>
          <p className="r5-eyebrow-row">{m.eyebrow}</p>
          <h2>{m.title}</h2>
          <p className="r5-method__body">{m.body}</p>
        </div>
        <div className="r5-method__cta">
          <button className="r5-link" onClick={onMethod}>{m.link}<Icon name="arrow-right" size={18} /></button>
        </div>
      </div>
    </section>
  );
}

/* ---- Pricing / membership ---------------------------------------------- */
function Pricing({ d, onBook }) {
  const pr = d.pricing;
  return (
    <section className="r5-section r5-pricing" id="pricing">
      <div className="r5-wrap">
        <div className="r5-pricing__head">
          <SecHead eyebrow={pr.eyebrow} title={pr.title} marked={pr.marked} />
          <p className="r5-pricing__note">{pr.note}</p>
        </div>
        <div className="r5-prices">
          {pr.plans.map((pl, i) => (
            <div key={i} className={"r5-price" + (pl.popular ? " r5-price--popular" : "")}>
              {pl.popular && <span className="r5-price__flag">{pr.popular}</span>}
              <p className="r5-price__name">{pl.name}</p>
              <div className="r5-price__amount">
                <span className="r5-price__num">{pl.price}</span>
                <span className="r5-price__per">{pl.per}</span>
              </div>
              <ul className="r5-price__items">{pl.items.map((x, j) => <li key={j}><Tick />{x}</li>)}</ul>
              <Button cta variant="primary" onClick={onBook}>{pl.cta}</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Online teaser (slim, low emphasis) -------------------------------- */
function OnlineTease({ d, onOnline }) {
  const o = d.online;
  return (
    <section className="r5-onlinetease" id="online-tease">
      <div className="r5-wrap r5-onlinetease__in">
        <span className="r5-onlinetease__text">{o.text}</span>
        <button className="r5-link" onClick={onOnline}>{o.link}<Icon name="arrow-right" size={16} /></button>
      </div>
    </section>
  );
}

/* ---- App --------------------------------------------------------------- */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "vibe": "expressive",
  "stamp": true,
  "programs": "featured",
  "gymTerm": "Простір",
  "surface": "desktop",
  "reduce": false
}/*EDITMODE-END*/;

function TrainingApp() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [locale, setLocale] = useState("uk");
  const [dark, setDark] = useState(false);
  const [stuck, setStuck] = useState(false);
  const termKey = GYM_TERMS[t.gymTerm] ? t.gymTerm : "Простір";
  const map = { "%G%": GYM_TERMS[termKey][locale] };
  const strings = deepReplace(window.R5_I18N[locale], map);
  const d = deepReplace(window.R5_TRAINING[locale], map);
  const layout = t.programs === "grid" ? "grid" : "featured";

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
    if (id === "services") { window.scrollTo({ top: 0, behavior: t.reduce ? "auto" : "smooth" }); return; }
    if (id === "coach") { window.location.href = "Coach.html"; return; }
    if (id === "gym") { window.location.href = "TheGym.html"; return; }
    if (id === "contact") { window.location.href = "Contact.html"; return; }
    if (id === "online") { window.location.href = "Online.html"; return; }
    window.location.href = "index.html#" + id;
  };
  const onBook = () => scrollTo("contact");
  const onOnline = () => { window.location.href = "Online.html"; };
  const onMethod = () => { window.location.href = "Coach.html#method"; };

  return (
    <div className={"r5-site" + (dark ? " r5-dark" : " r5-light")}
         data-surface={t.surface} data-vibe={t.vibe} data-stamp={t.stamp ? "on" : "off"}
         data-reduce={t.reduce ? "on" : "off"} data-programs={layout}>
      <Nav t={strings} locale={locale} setLocale={setLocale} dark={dark} setDark={setDark} go={go} onBook={onBook} active="services" />
      <TrainHeader d={d} onBook={onBook} onOnline={onOnline} />
      <ProgramSet d={d} layout={layout} onBook={onBook} />
      <OnRamp d={d} onBook={onBook} />
      <SessionFlow d={d} />
      <MethodBand d={d} onMethod={onMethod} />
      <Pricing d={d} onBook={onBook} />
      <OnlineTease d={d} onOnline={onOnline} />
      <CtaBand t={strings} />
      <Footer t={strings} locale={locale} go={go} />
      <StickyCTA t={strings} show={stuck} onBook={onBook} />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Programs card set" />
        <TweakRadio label="Layout" value={layout} options={["featured", "grid"]}
                    onChange={(v) => setTweak("programs", v)} />
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

ReactDOM.createRoot(document.getElementById("root")).render(<TrainingApp />);
