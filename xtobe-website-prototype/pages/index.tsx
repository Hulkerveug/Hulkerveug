import Head from 'next/head'
import React from 'react'
import evidence from '../data/evidence.json'

export default function Home() {
  return (
    <>
      <Head>
        <title>XTOBE — APEX 4.1</title>
        <meta name="description" content="XTOBE — Intelligent Systems Research. Engineering intelligence that protects lives." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="site">
        <header className="mast">
          <div className="hero">
            <img src="/xtobe-hero-v2.svg" alt="XTOBE cinematic hero" className="hero-img" />
            <div className="hero-copy">
              <h1>XTOBE — Intelligent Systems Research</h1>
              <p className="strap">INTELLIGENCE THAT ANTICIPATES. ENGINEERING THAT PROTECTS.</p>
              <p className="sub">Advancing wearable computing, trustworthy AI and human-controlled safety intelligence.</p>
              <p className="meta">Founder — Nishan Ramanathan · United Arab Emirates · Research-stage</p>
            </div>
          </div>
          <nav className="nav" aria-label="Primary navigation">
            <a href="#reactor">The Reactor</a>
            <a href="#evidence">Engineering evidence</a>
            <a href="#founder">Founder</a>
            <a href="#collaborate">Collaborate</a>
          </nav>
        </header>

        <section id="reactor" className="panel">
          <div className="panel-inner">
            <div className="panel-left">
              <h2>The Reactor — Flagship research</h2>
              <p className="lead">Research-stage wearable computing architecture focusing on signal integrity, local inference, human oversight, and accountable action pathways. Visuals are conceptual and labeled; implementation status is tracked in the public evidence registry.</p>

              <ul className="features">
                <li><strong>Physiological sensing</strong> — rigorous signal-quality assessment and sensor fusion</li>
                <li><strong>Edge AI</strong> — low-latency local inference with clear audit boundaries</li>
                <li><strong>Officer Digital Twin (research)</strong> — personalized, privacy-first representations for safe decision support</li>
                <li><strong>Human-controlled alerts</strong> — operator-in-the-loop with fail-closed defaults</li>
              </ul>
            </div>

            <div className="panel-right">
              <img src="/xtobe-reactor-architecture.svg" alt="Intelligent Reactor architecture" className="art" />
            </div>
          </div>
        </section>

        <section id="evidence" className="panel shallow">
          <h2>Engineering evidence</h2>
          <p className="lead">Evidence cards below are intentionally conservative. Only items with traceable source links and verification records should be elevated beyond "Designed" or "Implemented" in the public registry.</p>

          <div className="cards" role="list">
            {evidence.map((c) => (
              <article key={c.id} className="card" role="listitem" aria-labelledby={`e-${c.id}`}>
                <header>
                  <h3 id={`e-${c.id}`}>{c.area}</h3>
                  <p className={`status status-${c.status.toLowerCase()}`}>{c.status}</p>
                </header>
                <p className="card-note">{c.summary}</p>
                <dl className="meta-list">
                  <dt>Evidence</dt>
                  <dd>{c.evidenceUrl ? <a href={c.evidenceUrl} target="_blank" rel="noopener noreferrer">View</a> : '—'}</dd>
                  <dt>Method</dt>
                  <dd>{c.method || '—'}</dd>
                  <dt>Verification date</dt>
                  <dd>{c.date || '—'}</dd>
                </dl>
                {c.notes ? <p className="card-notes">{c.notes}</p> : null}
              </article>
            ))}
          </div>

          <p className="registry-hint">To update the registry: edit <code>xtobe-website-prototype/data/evidence.json</code> and follow the XXBE evidence policy in the repository.</p>
        </section>

        <section id="founder" className="panel">
          <h2>Founder — Nishan Ramanathan</h2>
          <p className="lead">Nishan leads XTOBE as a founder-led research initiative focused on trustworthy, human-centered intelligence for safety-critical operations. The public materials emphasize research direction, conservative evidence disclosure and institutional collaboration.</p>

          <p className="lead">The XTOBE mission is to design and validate systems that anticipate risk, support human operators, and provide auditable decision pathways to protect lives in high-consequence environments.</p>
        </section>

        <section id="collaborate" className="panel contact">
          <h2>Collaboration</h2>
          <p className="lead">XTOBE welcomes research conversations, pilot discussions and institutional partnerships. To initiate confidential discussions, please contact via the repository owner profile or use the secure channels established by the organization.</p>

          <p className="lead"><a className="cta" href="mailto:contact@xtobe.example?subject=XTOBE%20Collaboration%20Inquiry">Request collaboration</a></p>
          <p className="muted">Note: This site is a local prototype. Do not use these contact links to imply any existing partnership or confirmed deployment.</p>
        </section>

        <footer className="foot">
          <p>© XTOBE — Intelligent Systems Research · Founder-led · United Arab Emirates</p>
        </footer>
      </main>

      <style jsx>{`
        .site { max-width: 1100px; margin: 36px auto; padding: 0 20px; font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; color: #DCE9F2; }
        .mast { margin-bottom: 18px; }
        .hero { display:grid; grid-template-columns: 1fr; gap:18px; align-items:center; }
        .hero-img{ width:100%; height:auto; border-radius:8px; box-shadow: 0 8px 30px rgba(0,0,0,0.6); }
        .hero-copy h1{ margin:0; font-size:28px; color:#DCE9F2; }
        .strap{ color:#67E8F9; font-weight:700; letter-spacing:1px; margin:8px 0; }
        .sub{ color:#8196AF; margin:0 0 8px 0; }
        .meta{ color:#8196AF; font-size:13px; }
        .nav { display:flex; gap:12px; margin-top:12px; flex-wrap:wrap; }
        .nav a{ color:#67E8F9; text-decoration:none; font-weight:600; }

        .panel{ background: rgba(7,16,36,0.6); padding:20px; border-radius:10px; margin-top:18px; }
        .panel-inner{ display:grid; grid-template-columns:1fr; gap:18px; align-items:center; }
        .panel-left{ }
        .panel-right{ text-align:center; }
        .art{ max-width:480px; width:100%; height:auto; border-radius:8px; }
        .lead{ color:#DCE9F2; margin:0 0 12px 0; }
        .features{ list-style:none; padding:0; margin:0; display:grid; gap:8px; color:#8196AF; }

        .cards{ display:grid; grid-template-columns: 1fr; gap:12px; margin-top:12px; }
        .card{ background:linear-gradient(180deg, rgba(10,20,36,0.6), rgba(7,16,36,0.45)); padding:16px; border-radius:8px; }
        .card header{ display:flex; justify-content:space-between; align-items:center; gap:10px; }
        .card h3{ margin:0; font-size:16px; }
        .status{ font-weight:600; padding:6px 10px; border-radius:999px; font-size:13px; }
        .status-concept{ background:rgba(129,150,175,0.12); color:#8196AF; }
        .status-designed{ background:rgba(103,232,249,0.08); color:#67E8F9; }
        .status-implemented{ background:rgba(214,233,242,0.06); color:#DCE9F2; }
        .meta-list{ display:grid; grid-template-columns: 80px 1fr; gap:6px 12px; margin-top:12px; color:#8196AF; }

        .card-note{ color:#DCE9F2; margin-top:8px; }
        .card-notes{ color:#8196AF; margin-top:8px; font-size:13px; }
        .registry-hint{ color:#8196AF; margin-top:12px; font-size:13px; }

        .contact .cta{ display:inline-block; background:#67E8F9; color:#050B18; padding:10px 14px; border-radius:8px; text-decoration:none; font-weight:700; }
        .muted{ color:#8196AF; font-size:13px; }

        .foot{ color:#8196AF; font-size:13px; margin:20px 0 80px 0; text-align:center; }

        @media (min-width:900px){
          .hero{ grid-template-columns: 1fr 420px; text-align:left; }
          .hero-copy{ padding-left:20px; }
          .panel-inner{ grid-template-columns: 1fr 520px; }
          .cards{ grid-template-columns: repeat(2, 1fr); }
        }

        /* Motion & accessibility */
        @media (prefers-reduced-motion: reduce){
          *{ transition:none !important; animation:none !important; }
        }

        /* Focus states for keyboard users */
        a:focus, .cta:focus { outline: 3px solid rgba(103,232,249,0.25); outline-offset:4px; }
      `}</style>
    </>
  )
}
