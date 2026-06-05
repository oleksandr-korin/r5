/* R5 — Online Coaching (remote) page — components + App.
   Reuses shared components (Nav, Footer, Button, Icon, Marked, Tick, SecHead).
   Reuses .r5-hero (home.css), .r5-flow + .r5-price (training.css), .r5-ctaband
   + .r5-form (home.css). Content from online-i18n.js (window.R5_ONLINE);
   nav/footer + credibility stats from i18n.js (window.R5_I18N).
   This page defaults to English (the remote / diaspora wedge); UA via toggle.
   On this page the online CTA is primary; the local "book" steps back. */
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
function splitMark(title, marked) {
  const i = title.indexOf(marked);
  if (i < 0) return [title, "", ""];
  return [title.slice(0, i), marked, title.slice(i + marked.length)];
}

/* ---- Hero (dark, full-bleed — reuses .r5-hero) ------------------------- */
function OnlineHero({ o, onApply }) {
  const h = o.hero;
  const [a, b, c] = splitMark(h.title, h.marked);
  return (
    <header className="r5-hero r5-ohero r5-dark" id="top">
      <div className="r5-hero__bg" />
      <div className="r5-hero__scrim" />
      <div className="r5-wrap r5-hero__grid">
        <div>
          <p className="r5-eyebrow-row">{h.eyebrow}</p>
          <h1>{a}<Marked>{h.marked}</Marked>{c}</h1>
          <p className="r5-hero__sub">{h.sub}</p>
          <div className="r5-hero__cta">
            <Button cta icon="arrow-right" onClick={onApply}>{h.cta}</Button>
          </div>
          <div className="r5-ohero__note">{h.note}</div>
        </div>
        <div className="r5-hero__plate">
          <div className="r5-photo-ph">{h.photo}</div>
        </div>
      </div>
    </header>
  );
}

/* ---- The method — centrepiece (cream manual panel) --------------------- */
function MethodCentre({ o }) {
  const m = o.method;
  return (
    <section className="r5-section" id="method">
      <div className="r5-wrap">
        <div className="r5-mthd__panel">
          <div className="r5-mthd__head">
            <div>
              <p className="r5-eyebrow-row">{m.eyebrow}</p>
              <h2>{m.title}</h2>
            </div>
            <span className="r5-mthd__tag">{m.tag}</span>
          </div>
          <p className="r5-mthd__lead">{m.lead}</p>
          <div className="r5-mthd__cols">
            {m.cols.map((col) => (
              <div key={col.n} className="r5-mthd__col">
                <div className="r5-mthd__n">{col.n}</div>
                <h3 className="r5-mthd__t">{col.t}</h3>
                <p className="r5-mthd__d">{col.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- Credibility (condensed proof row — reuses strings.proof) ---------- */
function Credibility({ o, proof, onCoach }) {
  const c = o.cred;
  return (
    <section className="r5-section r5-cred" id="cred" style={{ background: "var(--surface)" }}>
      <div className="r5-wrap">
        <div className="r5-cred__head">
          <div className="r5-sechead">
            <p className="r5-eyebrow-row">{c.eyebrow}</p>
            <h2>{c.title}</h2>
          </div>
          <button className="r5-link" onClick={onCoach}>{c.link}<Icon name="arrow-right" size={18} /></button>
        </div>
        <div className="r5-cred__row">
          {proof.items.map((s, i) => (
            <div key={i} className="r5-proofc">
              <div className="r5-proofc__n">
                {s.n === "#1" ? (
                  <span className="r5-circle">{s.n}
                    <svg className="r5-circle__ring" viewBox="0 0 200 120" fill="none" aria-hidden="true">
                      <path d="M104 12 C 56 10 20 30 16 60 C 12 92 58 110 108 109 C 158 108 188 88 186 58 C 184 30 150 12 96 13 C 70 14 40 26 30 50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none"/>
                    </svg>
                  </span>
                ) : s.n}
              </div>
              <div className="r5-proofc__l">{s.l}</div>
              <div className="r5-proofc__sub">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- How online coaching works (step strip — reuses .r5-flow) --------- */
function HowItWorks({ o }) {
  const h = o.how;
  return (
    <section className="r5-section r5-flow" id="how">
      <div className="r5-wrap">
        <div className="r5-flow__panel">
          <div className="r5-flow__head">
            <div>
              <p className="r5-eyebrow-row">{h.eyebrow}</p>
              <h2>{h.title}</h2>
            </div>
          </div>
          <div className="r5-flow__steps">
            {h.steps.map((s) => (
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

/* ---- Who it's for (qualifier grid) ------------------------------------ */
function WhoFor({ o }) {
  const w = o.who;
  return (
    <section className="r5-section r5-wfor" id="who" style={{ background: "var(--surface)" }}>
      <div className="r5-wrap">
        <SecHead eyebrow={w.eyebrow} title={w.title} />
        <div className="r5-wfor__grid">
          {w.items.map((it, i) => (
            <div key={i} className="r5-card r5-card--tab r5-card--stamp r5-wfor__item">
              <h3>{it.t}</h3>
              <p>{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Plans / pricing (reuses .r5-price) ------------------------------- */
function Plans({ o, onApply }) {
  const pr = o.plans;
  return (
    <section className="r5-section r5-pricing" id="plans">
      <div className="r5-wrap">
        <div className="r5-pricing__head">
          <SecHead eyebrow={pr.eyebrow} title={pr.title} marked={pr.marked} />
          <p className="r5-pricing__note">{pr.note}</p>
        </div>
        <div className="r5-prices">
          {pr.items.map((pl, i) => (
            <div key={i} className={"r5-price" + (pl.popular ? " r5-price--popular" : "")}>
              {pl.popular && <span className="r5-price__flag">{pr.popular}</span>}
              <p className="r5-price__name">{pl.name}</p>
              <div className="r5-price__amount">
                <span className="r5-price__num">{pl.price}</span>
                <span className="r5-price__per">{pl.per}</span>
              </div>
              <ul className="r5-price__items">{pl.items.map((x, j) => <li key={j}><Tick />{x}</li>)}</ul>
              <Button cta variant="primary" onClick={onApply}>{pr.cta}</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- FAQ (accordion) -------------------------------------------------- */
function Faq({ o }) {
  const f = o.faq;
  const [open, setOpen] = useState(0);
  return (
    <section className="r5-section" id="faq" style={{ background: "var(--surface)" }}>
      <div className="r5-wrap">
        <div className="r5-sechead" style={{ margin: "0 auto var(--space-12)", textAlign: "center", maxWidth: "none" }}>
          <p className="r5-eyebrow-row" style={{ justifyContent: "center" }}>{f.eyebrow}</p>
          <h2>{f.title}</h2>
        </div>
        <div className="r5-faq__wrap">
          {f.items.map((it, i) => (
            <div key={i} className={"r5-faq__item" + (open === i ? " is-open" : "")}>
              <button className="r5-faq__q" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
                {it.q}<span className="r5-faq__icon" aria-hidden="true" />
              </button>
              <div className="r5-faq__a"><p>{it.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Apply band (primary CTA + lead form; local link steps back) ------ */
function ApplyBand({ o, onLocal }) {
  const a = o.apply;
  const [a0, am, a1] = splitMark(a.title, a.marked);
  const [done, setDone] = useState(false);
  return (
    <section className="r5-section r5-ctaband r5-apply" id="apply">
      <div className="r5-wrap r5-ctaband__grid">
        <div>
          <p className="r5-eyebrow-row">{a.eyebrow}</p>
          <h2>{a0}<Marked>{am}</Marked>{a1}</h2>
          <p className="r5-ctaband__sub">{a.sub}</p>
          <div className="r5-apply__local">
            <span>{a.localText}</span>
            <button className="r5-link" onClick={onLocal}>{a.localLink}<Icon name="arrow-right" size={16} /></button>
          </div>
        </div>
        <form className="r5-form" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
          {done ? (
            <div className="r5-form__done"><Icon name="send" size={22} />{a.done}</div>
          ) : (
            <React.Fragment>
              <div className="r5-field"><label className="r5-label">{a.name}</label><input className="r5-input" placeholder={a.name === "Імʼя" ? "Олена" : "Olena"} required /></div>
              <div className="r5-field"><label className="r5-label">{a.email}</label><input className="r5-input" type="email" placeholder="you@email.com" required /></div>
              <div className="r5-field full"><label className="r5-label">{a.goal}</label><input className="r5-input" placeholder={a.goalPh} /></div>
              <div className="full"><Button cta icon="send" type="submit">{a.submit}</Button></div>
              <p className="r5-form__consent full">{a.consent}</p>
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

function OnlineApp() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [locale, setLocale] = useState("en"); // English-primary wedge; UA via toggle
  const [dark, setDark] = useState(false);
  const [stuck, setStuck] = useState(false);
  const termKey = GYM_TERMS[t.gymTerm] ? t.gymTerm : "Простір";
  const map = { "%G%": GYM_TERMS[termKey][locale] };
  const strings = deepReplace(window.R5_I18N[locale], map);
  const o = deepReplace(window.R5_ONLINE[locale], map);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("r5-dark", dark);
    root.classList.toggle("r5-light", !dark);
    root.setAttribute("lang", locale === "uk" ? "uk" : "en");
  }, [dark, locale]);

  useEffect(() => {
    const onScroll = () => {
      const apply = document.getElementById("apply");
      const past = window.scrollY > 620;
      const nearForm = apply && apply.getBoundingClientRect().top < window.innerHeight * 0.9;
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
    if (id === "online") { window.scrollTo({ top: 0, behavior: t.reduce ? "auto" : "smooth" }); return; }
    if (id === "coach") { window.location.href = "Coach.html"; return; }
    if (id === "gym") { window.location.href = "TheGym.html"; return; }
    if (id === "services") { window.location.href = "Training.html"; return; }
    if (id === "contact") { window.location.href = "Contact.html"; return; }
    window.location.href = "index.html#" + id;
  };
  const onApply = () => scrollTo("apply");
  const onCoach = () => { window.location.href = "Coach.html#method"; };
  const onLocal = () => { window.location.href = "TheGym.html"; };
  // nav "book" (local) steps back on this page → the dedicated contact page
  const onBook = () => { window.location.href = "Contact.html"; };

  return (
    <div className={"r5-site" + (dark ? " r5-dark" : " r5-light")}
         data-surface={t.surface} data-vibe={t.vibe} data-stamp={t.stamp ? "on" : "off"}
         data-reduce={t.reduce ? "on" : "off"}>
      <Nav t={strings} locale={locale} setLocale={setLocale} dark={dark} setDark={setDark} go={go} onBook={onBook} active="online" />
      <OnlineHero o={o} onApply={onApply} />
      <MethodCentre o={o} />
      <Credibility o={o} proof={strings.proof} onCoach={onCoach} />
      <HowItWorks o={o} />
      <WhoFor o={o} />
      <Plans o={o} onApply={onApply} />
      <Faq o={o} />
      <ApplyBand o={o} onLocal={onLocal} />
      <Footer t={strings} locale={locale} go={go} />

      <div className={"r5-stickycta" + (stuck ? " show" : "")}>
        <Button cta icon="arrow-right" onClick={onApply}>{o.hero.cta}</Button>
      </div>

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

ReactDOM.createRoot(document.getElementById("root")).render(<OnlineApp />);
