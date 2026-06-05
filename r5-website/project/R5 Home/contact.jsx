/* R5 — Start Here / Contact page — components + App.
   Reuses shared components (Nav, Footer, Button, Icon, Marked, SecHead).
   Content from contact-i18n.js (window.R5_CONTACT); nav/footer from i18n.js.
   Single job: book a free first session, with low-friction alternatives. */
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

/* ---- Header (warm, friction-removing, centred) ------------------------- */
function ContactHeader({ d }) {
  const h = d.header;
  return (
    <header className="r5-section r5-chead" id="top">
      <div className="r5-wrap">
        <p className="r5-eyebrow-row">{h.eyebrow}</p>
        <h1>{h.title} <Marked>{h.marked}</Marked></h1>
        <p className="r5-chead__lead">{h.lead}</p>
      </div>
    </header>
  );
}

/* ---- Booking block (form + reassurance) -------------------------------- */
function BookingBlock({ d }) {
  const b = d.booking;
  const f = b.fields;
  const r = b.reassure;
  const [exp, setExp] = useState("new");
  const [done, setDone] = useState(false);
  return (
    <section className="r5-section r5-book" id="book">
      <div className="r5-wrap r5-book__grid">
        <div className="r5-book__form">
          {done ? (
            <div className="r5-bform__done"><Icon name="send" size={22} />{b.done}</div>
          ) : (
            <React.Fragment>
              <p className="r5-eyebrow-row">{b.eyebrow}</p>
              <h2>{b.title}</h2>
              <form className="r5-bform" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
                <div className="r5-field"><label className="r5-label">{f.name}</label><input className="r5-input" placeholder={f.namePh} required /></div>
                <div className="r5-field"><label className="r5-label">{f.contact}</label><input className="r5-input" placeholder={f.contactPh} required /></div>
                <div className="r5-field">
                  <label className="r5-label">{f.experience}</label>
                  <div className="r5-cseg" role="group" aria-label={f.experience}>
                    <button type="button" aria-pressed={exp === "new"} onClick={() => setExp("new")}>{f.expNew}</button>
                    <button type="button" aria-pressed={exp === "before"} onClick={() => setExp("before")}>{f.expBefore}</button>
                  </div>
                </div>
                <div className="r5-field"><label className="r5-label">{f.when}</label><input className="r5-input" placeholder={f.whenPh} /></div>
                <div className="r5-field"><label className="r5-label">{f.note}</label><textarea className="r5-textarea" placeholder={f.notePh}></textarea></div>
                <div className="r5-bform__submit"><Button cta icon="arrow-right" type="submit">{f.submit}</Button></div>
                <p className="r5-bform__consent">{b.consent}</p>
              </form>
            </React.Fragment>
          )}
        </div>
        <div className="r5-reassure">
          <h2>{r.title}</h2>
          <ol className="r5-reassure__steps">
            {r.steps.map((s, i) => (
              <li key={i} className="r5-reassure__step">
                <span className="r5-reassure__n">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="r5-reassure__st">{s.t}</h3>
                  <p className="r5-reassure__sd">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="r5-reassure__bring">
            <p className="r5-reassure__bringlabel">{r.bringLabel}</p>
            <ul className="r5-ticks">{r.bring.map((x, i) => <li key={i}><Tick />{x}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- Other ways to reach us (equal-weight tap targets) ----------------- */
function Channels({ d }) {
  const c = d.channels;
  return (
    <section className="r5-section" id="channels">
      <div className="r5-wrap">
        <SecHead eyebrow={c.eyebrow} title={c.title} marked={c.marked} />
        <div className="r5-chan__grid">
          {c.items.map((it, i) => (
            <a key={i} className="r5-card r5-card--tab r5-card--stamp r5-chan" href={it.href}
               target={it.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
              <span className="r5-chan__icon"><Icon name={it.icon} size={24} /></span>
              <span className="r5-chan__k">{it.k}</span>
              <span className="r5-chan__v">{it.v}</span>
              <p className="r5-chan__sub">{it.sub}</p>
              <span className="r5-chan__cta">{it.cta}<Icon name="arrow-right" size={16} /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Find us (map + practical blocks) ---------------------------------- */
function FindUs({ d, onDirections }) {
  const p = d.find;
  return (
    <section className="r5-section r5-find" id="find">
      <div className="r5-wrap">
        <SecHead eyebrow={p.eyebrow} title={p.title} marked={p.marked} />
        <div className="r5-find__grid">
          <div className="r5-find__map">
            <div className="r5-photo-ph">{p.mapPh}</div>
            <div className="r5-find__mapcta"><Button icon="map-pin" onClick={onDirections}>{p.mapCta}</Button></div>
          </div>
          <div className="r5-find__blocks">
            {p.blocks.map((b, i) => (
              <div key={i} className="r5-find__b">
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

/* ---- Quick FAQ (accordion) -------------------------------------------- */
function QuickFaq({ d }) {
  const f = d.faq;
  const [open, setOpen] = useState(0);
  return (
    <section className="r5-section" id="faq">
      <div className="r5-wrap">
        <div className="r5-sechead" style={{ margin: "0 auto var(--space-12)", textAlign: "center", maxWidth: "none" }}>
          <p className="r5-eyebrow-row" style={{ justifyContent: "center" }}>{f.eyebrow}</p>
          <h2>{f.title}</h2>
        </div>
        <div className="r5-cfaq__wrap">
          {f.items.map((it, i) => (
            <div key={i} className={"r5-cfaq__item" + (open === i ? " is-open" : "")}>
              <button className="r5-cfaq__q" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
                {it.q}<span className="r5-cfaq__icon" aria-hidden="true" />
              </button>
              <div className="r5-cfaq__a"><p>{it.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Online alternative (slim, low emphasis) -------------------------- */
function OnlineAlt({ d, onOnline }) {
  const o = d.online;
  return (
    <section className="r5-calt" id="online-alt">
      <div className="r5-wrap r5-calt__in">
        <span className="r5-calt__text">{o.text}</span>
        <button className="r5-link" onClick={onOnline}>{o.link}<Icon name="arrow-right" size={16} /></button>
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

function ContactApp() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [locale, setLocale] = useState("uk");
  const [dark, setDark] = useState(false);
  const termKey = GYM_TERMS[t.gymTerm] ? t.gymTerm : "Простір";
  const mapc = { "%G%": GYM_TERMS[termKey][locale] };
  const strings = deepReplace(window.R5_I18N[locale], mapc);
  const d = deepReplace(window.R5_CONTACT[locale], mapc);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("r5-dark", dark);
    root.classList.toggle("r5-light", !dark);
    root.setAttribute("lang", locale === "uk" ? "uk" : "en");
  }, [dark, locale]);

  // cross-page navigation
  const go = (id) => {
    if (id === "contact") { window.scrollTo({ top: 0, behavior: t.reduce ? "auto" : "smooth" }); return; }
    if (id === "coach") { window.location.href = "Coach.html"; return; }
    if (id === "gym") { window.location.href = "TheGym.html"; return; }
    if (id === "services") { window.location.href = "Training.html"; return; }
    if (id === "online") { window.location.href = "Online.html"; return; }
    window.location.href = "index.html#" + id;
  };
  const onBook = () => { const el = document.getElementById("book"); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 84, behavior: t.reduce ? "auto" : "smooth" }); };
  const onOnline = () => { window.location.href = "Online.html"; };
  const onDirections = (e) => { e.preventDefault(); };

  return (
    <div className={"r5-site" + (dark ? " r5-dark" : " r5-light")}
         data-surface={t.surface} data-vibe={t.vibe} data-stamp={t.stamp ? "on" : "off"}
         data-reduce={t.reduce ? "on" : "off"}>
      <Nav t={strings} locale={locale} setLocale={setLocale} dark={dark} setDark={setDark} go={go} onBook={onBook} active="contact" />
      <ContactHeader d={d} />
      <BookingBlock d={d} />
      <Channels d={d} />
      <FindUs d={d} onDirections={onDirections} />
      <QuickFaq d={d} />
      <OnlineAlt d={d} onOnline={onOnline} />
      <Footer t={strings} locale={locale} go={go} />

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

ReactDOM.createRoot(document.getElementById("root")).render(<ContactApp />);
