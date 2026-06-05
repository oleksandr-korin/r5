/* R5 — Rokytnyi5 homepage — components (React + Babel).
   Visual language from colors_and_type.css + components.css; layout from home.css.
   Icons are exact Lucide 24×24 paths (recoloured via currentColor, not redrawn). */
const { useState, useEffect, useRef } = React;

/* ---- Icons (Lucide path data) ------------------------------------------ */
const LUCIDE = {
  "arrow-right": <><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></>,
  "arrow-down": <><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></>,
  menu: <><path d="M4 12h16"/><path d="M4 6h16"/><path d="M4 18h16"/></>,
  x: <><path d="M18 6 6 18"/><path d="m6 6 12 12"/></>,
  phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>,
  "map-pin": <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></>,
  clock: <><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></>,
  instagram: <><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></>,
  send: <><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></>,
  mail: <><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></>,
  sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></>,
  moon: <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>,
  monitor: <><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></>,
};
function Icon({ name, size = 22, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {LUCIDE[name]}
    </svg>
  );
}

/* hand-drawn marker underline — inline SVG so it always paints + recolours.
   (The CSS ::after data-URI variant does not render in this preview env.) */
function Marked({ children }) {
  return (
    <span className="r5-mkword">
      {children}
      <svg className="r5-mkline" viewBox="0 0 320 24" preserveAspectRatio="none" aria-hidden="true">
        <path d="M4 13.5 C 60 9.5 130 8.5 196 10 C 244 11 286 12.5 314 11 C 300 14.5 250 15.5 196 15 C 130 14.5 64 15.5 6 18 C 3 18 2 14 4 13.5 Z" fill="currentColor"/>
      </svg>
    </span>
  );
}

/* hand-drawn chalk tick (brand asset, inline so it recolours) */
function Tick() {
  return (
    <svg className="r5-tick" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M8 25 C 12 27, 17 33, 20 39 C 25 27, 33 14, 42 7" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}

/* ---- Wordmark ---------------------------------------------------------- */
function Wordmark({ size = 26, locale = "uk", dark = false }) {
  const full = locale === "uk" ? "Рокитний" : "Rokytnyi";
  const logo = dark ? "assets/r5-logo-ondark.svg" : "assets/r5-logo.svg";
  return (
    <a className="r5-mark" href="#top" style={{ fontSize: size }} onClick={(e)=>{e.preventDefault(); window.scrollTo({top:0,behavior:"smooth"});}}>
      <img className="r5-mark__logo" src={logo} alt="R5" />
      <span className="r5-mark__word">{full}<span className="five">5</span></span>
    </a>
  );
}

/* ---- Button ------------------------------------------------------------ */
function Button({ variant = "primary", cta, children, icon, onClick, type = "button" }) {
  const cls = ["r5-btn", `r5-btn--${variant}`, cta ? "r5-btn--cta" : ""].join(" ");
  return (
    <button className={cls} onClick={onClick} type={type}>
      {children}{icon && <Icon name={icon} size={cta ? 20 : 18} />}
    </button>
  );
}

/* ---- Section header ---------------------------------------------------- */
function SecHead({ eyebrow, title, marked }) {
  return (
    <div className="r5-sechead">
      <p className="r5-eyebrow-row">{eyebrow}</p>
      <h2>{title} <Marked>{marked}</Marked></h2>
    </div>
  );
}

/* ---- Toggles ----------------------------------------------------------- */
function LangToggle({ locale, setLocale }) {
  return (
    <div className="r5-seg" role="group" aria-label="Language">
      <button aria-pressed={locale === "uk"} onClick={() => setLocale("uk")}>UA</button>
      <button aria-pressed={locale === "en"} onClick={() => setLocale("en")}>EN</button>
    </div>
  );
}
function ThemeToggle({ dark, setDark }) {
  return (
    <button className="r5-iconbtn" onClick={() => setDark(!dark)} aria-label="Toggle light / dark" title="Light / dark">
      <Icon name={dark ? "sun" : "moon"} size={20} />
    </button>
  );
}

/* ---- Nav --------------------------------------------------------------- */
function Nav({ t, locale, setLocale, dark, setDark, go, onBook, active }) {
  const [open, setOpen] = useState(false);
  const links = [
    ["coach", t.nav.coach], ["gym", t.nav.gym], ["services", t.nav.services],
    ["online", t.nav.online], ["contact", t.nav.contact],
  ];
  const jump = (id) => { setOpen(false); go(id); };
  return (
    <React.Fragment>
      <nav className="r5-nav">
        <div className="r5-wrap r5-nav__in">
          <Wordmark locale={locale} dark={dark} />
          <div className="r5-nav__links">
            {links.map(([id, label]) => (
              <button key={id} className={"r5-nav__link" + (active === id ? " is-active" : "")} onClick={() => jump(id)}>{label}</button>
            ))}
          </div>
          <div className="r5-nav__right">
            <LangToggle locale={locale} setLocale={setLocale} />
            <ThemeToggle dark={dark} setDark={setDark} />
            <span className="r5-nav__cta-wrap" style={{display:"inline-flex"}}>
              <Button onClick={onBook}>{t.nav.book}</Button>
            </span>
            <button className="r5-nav__burger" aria-label="Menu" onClick={()=>setOpen(!open)}>
              <Icon name={open ? "x" : "menu"} size={26} />
            </button>
          </div>
        </div>
      </nav>
      <div className={"r5-mobnav" + (open ? " open" : "")}>
        <ul>
          {links.map(([id, label]) => (
            <li key={id}><button onClick={() => jump(id)}>{label}</button></li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}

/* ---- Hero (dark, full-bleed) ------------------------------------------- */
function Hero({ t, onBook, onOnline }) {
  const [a, b] = t.hero.title.split(t.hero.marked);
  return (
    <header className="r5-hero r5-dark" id="top">
      <div className="r5-hero__bg" />
      <div className="r5-hero__scrim" />
      <div className="r5-wrap r5-hero__grid">
        <div>
          <p className="r5-eyebrow-row">{t.hero.eyebrow}</p>
          <h1>{a}<Marked>{t.hero.marked}</Marked>{b}</h1>
          <p className="r5-hero__sub">{t.hero.sub}</p>
          <div className="r5-hero__cta">
            <Button cta icon="arrow-right" onClick={onBook}>{t.hero.cta}</Button>
            <button className="r5-hero__ghost" onClick={onOnline}>
              <Icon name="monitor" size={18} />{t.hero.ghost}
            </button>
          </div>
          <div className="r5-hero__scrollcue"><span className="bar" />{t.hero.scroll}</div>
        </div>
        <div className="r5-hero__plate">
          <div className="r5-photo-ph">{t.coach.photo}</div>
        </div>
      </div>
    </header>
  );
}

/* ---- Proof bar --------------------------------------------------------- */
function ProofBar({ t }) {
  return (
    <section className="r5-proof" aria-label={t.proof.eyebrow}>
      <div className="r5-wrap">
        <p className="r5-eyebrow-row" style={{marginBottom:"var(--space-8)"}}>{t.proof.eyebrow}</p>
        <div className="r5-proof__row">
          {t.proof.items.map((s, i) => (
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

/* ---- Who we are (the box) ---------------------------------------------- */
function Box({ t }) {
  const b = t.box;
  return (
    <section className="r5-section r5-box" id="gym">
      <div className="r5-wrap r5-box__grid">
        <div className="r5-box__photo">
          <div className="r5-photo-ph">{b.photo}</div>
        </div>
        <div>
          <p className="r5-eyebrow-row">{b.eyebrow}</p>
          <h2 className="r5-h1" style={{margin:0}}>{b.title} <Marked>{b.marked}</Marked></h2>
          <p className="r5-box__lead">{b.lead}</p>
          <p className="r5-box__body">{b.body}</p>
          <ul className="r5-ticks">
            {b.ticks.map((x, i) => <li key={i}><Tick />{x}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---- Three pillars ----------------------------------------------------- */
function Pillars({ t }) {
  const p = t.pillars;
  return (
    <section className="r5-section" id="why">
      <div className="r5-wrap">
        <SecHead eyebrow={p.eyebrow} title={p.title} marked={p.marked} />
        <div className="r5-pillars">
          {p.items.map((it) => (
            <div key={it.n} className="r5-card r5-card--tab r5-card--stamp r5-pillar">
              <div className="r5-pillar__top">
                <span className="r5-pillar__n">{it.n}</span>
                <span className="r5-badge r5-badge--amber">{it.tag}</span>
              </div>
              <h3>{it.t}</h3>
              <p>{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Programs teaser --------------------------------------------------- */
function Programs({ t }) {
  const p = t.programs;
  return (
    <section className="r5-section r5-coach" id="services" style={{background:"var(--surface)"}}>
      <div className="r5-wrap">
        <div className="r5-prog__head">
          <SecHead eyebrow={p.eyebrow} title={p.title} marked={p.marked} />
          <button className="r5-link" onClick={()=>{window.location.href='Training.html';}}>{p.more}<Icon name="arrow-right" size={18} /></button>
        </div>
        <div className="r5-grid">
          {p.items.map((s) => (
            <div key={s.n} className="r5-card r5-card--tab r5-card--stamp r5-svc">
              <span className="r5-svc__n">{s.n}</span>
              <span className="r5-badge r5-badge--amber" style={{alignSelf:"flex-start"}}>{s.tag}</span>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
              <button className="r5-link r5-svc__more" onClick={()=>{window.location.href='Training.html';}}>{p.details}<Icon name="arrow-right" size={16} /></button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Meet the coach (teaser) ------------------------------------------- */
function Coach({ t }) {
  const c = t.coach;
  return (
    <section className="r5-section r5-coach" id="coach">
      <div className="r5-wrap r5-coach__grid">
        <div className="r5-coach__photo">
          <div className="r5-photo-ph">{c.photo}</div>
        </div>
        <div>
          <p className="r5-coach__name">{c.eyebrow} · {c.name}</p>
          <h2>{c.title}</h2>
          <p className="r5-coach__body">{c.body}</p>
          <ul className="r5-coach__creds">
            {c.creds.map((x, i) => <li key={i}><Tick />{x}</li>)}
          </ul>
          <button className="r5-link" onClick={()=>{window.location.href='Coach.html';}}>{c.link}<Icon name="arrow-right" size={18} /></button>
        </div>
      </div>
    </section>
  );
}

/* ---- Community / proof strip ------------------------------------------- */
function Quote({ t }) {
  const q = t.quote;
  return (
    <section className="r5-section" id="community">
      <div className="r5-wrap r5-quote">
        <div className="r5-quote__head">
          <p className="r5-eyebrow-row" style={{margin:0}}>{q.eyebrow}</p>
        </div>
        <div className="r5-quote__mark">“</div>
        <blockquote>{q.text}</blockquote>
        <div className="r5-quote__by">
          <div className="r5-quote__av">{q.name[0]}</div>
          <div>
            <div className="r5-quote__name">{q.name}</div>
            <div className="r5-quote__role">{q.role}</div>
          </div>
        </div>
        <div className="r5-quote__link">
          <button className="r5-link" onClick={()=>{window.location.href='Results.html';}}>{q.link}<Icon name="arrow-right" size={18} /></button>
        </div>
      </div>
    </section>
  );
}

/* ---- Online coaching band (dark) --------------------------------------- */
function OnlineBand({ t, onOnline }) {
  const o = t.onlineband;
  return (
    <section className="r5-section r5-online r5-dark" id="online">
      <div className="r5-online__tag" aria-hidden="true">EN</div>
      <div className="r5-wrap r5-online__grid">
        <div>
          <p className="r5-eyebrow-row">{o.eyebrow}</p>
          <h2>{o.title}</h2>
          <p>{o.body}</p>
        </div>
        <div className="r5-online__cta">
          <Button cta variant="primary" icon="arrow-right" onClick={onOnline}>{o.cta}</Button>
        </div>
      </div>
    </section>
  );
}

/* ---- Persistent CTA band + lead form ----------------------------------- */
function CtaBand({ t }) {
  const c = t.cta;
  const [done, setDone] = useState(false);
  return (
    <section className="r5-section r5-ctaband" id="contact">
      <div className="r5-wrap r5-ctaband__grid">
        <div>
          <p className="r5-eyebrow-row">{c.eyebrow}</p>
          <h2>{c.title.split(c.marked)[0]}<Marked>{c.marked}</Marked>{c.title.split(c.marked)[1]}</h2>
          <p className="r5-ctaband__sub">{c.sub}</p>
        </div>
        <form className="r5-form" onSubmit={(e)=>{e.preventDefault(); setDone(true);}}>
          {done ? (
            <div className="r5-form__done"><Icon name="send" size={22} />{c.done}</div>
          ) : (
            <React.Fragment>
              <div className="r5-field"><label className="r5-label">{c.name}</label><input className="r5-input" placeholder={t.code === "UK" ? "Олена" : "Olena"} required /></div>
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

/* ---- Footer ------------------------------------------------------------ */
function Footer({ t, locale, go }) {
  const f = t.footer;
  const links = [["coach", t.nav.coach], ["gym", t.nav.gym], ["services", t.nav.services], ["online", t.nav.online]];
  return (
    <footer className="r5-footer r5-dark" id="footer">
      <div className="r5-wrap">
        <div className="r5-footer__grid">
          <div>
            <Wordmark locale={locale} dark={true} />
            <p className="r5-footer__tag">{f.tagline}</p>
          </div>
          <div>
            <h4>{f.nav}</h4>
            <ul>{links.map(([id,l]) => <li key={id}><button className="r5-footer__navlink" onClick={()=>go(id)}>{l}</button></li>)}</ul>
          </div>
          <div>
            <h4>{f.contacts}</h4>
            <ul>
              <li style={{display:"flex",gap:8,alignItems:"flex-start"}}><Icon name="map-pin" size={18}/>{f.address}</li>
              <li style={{display:"flex",gap:8,alignItems:"center"}}><Icon name="clock" size={18}/>{f.hours}</li>
              <li style={{display:"flex",gap:8,alignItems:"center"}}><Icon name="phone" size={18}/>{f.phone}</li>
            </ul>
          </div>
          <div>
            <h4>{f.social}</h4>
            <ul><li style={{display:"flex",gap:8,alignItems:"center"}}><Icon name="instagram" size={18}/>{f.ig}</li></ul>
            <div className="r5-socials" style={{marginTop:16}}>
              <a className="r5-iconbtn" href="#" onClick={(e)=>e.preventDefault()} aria-label="Instagram"><Icon name="instagram" size={20}/></a>
            </div>
          </div>
        </div>
        <div className="r5-footer__bottom">
          <span>{f.rights}</span>
          <span>{f.meta}</span>
        </div>
      </div>
    </footer>
  );
}

/* ---- Sticky mobile CTA ------------------------------------------------- */
function StickyCTA({ t, show, onBook }) {
  return (
    <div className={"r5-stickycta" + (show ? " show" : "")}>
      <Button cta icon="arrow-right" onClick={onBook}>{t.hero.cta}</Button>
    </div>
  );
}

Object.assign(window, {
  Icon, Tick, Marked, Wordmark, Button, SecHead, LangToggle, ThemeToggle,
  Nav, Hero, ProofBar, Box, Pillars, Programs, Coach, Quote, OnlineBand, CtaBand, Footer, StickyCTA,
});
