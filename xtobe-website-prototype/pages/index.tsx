import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>XTOBE — APEX 4.0</title>
        <meta name="description" content="XTOBE — Intelligent Systems Research. Engineering intelligence that protects lives." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="container">
        <section className="hero">
          <img src="/xtobe-hero-v2.svg" alt="XTOBE cinematic hero" className="hero-img" />
          <div className="hero-copy">
            <h1>XTOBE — Intelligent Systems Research</h1>
            <p className="tag">Engineering intelligence that protects lives.</p>
            <p className="sub">Founder — Nishan Ramanathan · United Arab Emirates</p>
          </div>
        </section>

        <section className="panel">
          <h2>Intelligent Reactor — Flagship</h2>
          <p>Research-stage architecture for physiological sensing, local edge inference, and human-controlled operational intelligence. Status and verification are tracked in the public evidence registry.</p>
        </section>

        <section className="panel">
          <h2>Research & Evidence</h2>
          <p>View verified evidence and repository references in the XTOBE public evidence registry included in this branch.</p>
        </section>

        <section className="panel">
          <h2>Founder</h2>
          <p>Nishan Ramanathan — Founder. Focused on trustworthy human-centered intelligence for safety-critical operations.</p>
        </section>

        <section className="panel contact">
          <h2>Collaborate</h2>
          <p>Institutional collaborations, research inquiries, and technical discussions welcome — use the contact channels linked from the GitHub profile.</p>
        </section>
      </main>

      <style jsx>{`
        .container { max-width: 980px; margin: 48px auto; padding: 0 20px; font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; color: #DCE9F2; }
        .hero { display: grid; grid-template-columns: 1fr; gap: 18px; align-items: center; text-align: center; }
        .hero-img { width: 100%; height: auto; border-radius: 8px; background: linear-gradient(180deg, rgba(5,11,24,0.6), rgba(20,34,56,0.6)); }
        .hero-copy h1 { font-size: 28px; margin: 0 0 8px 0; color: #DCE9F2; }
        .tag { color: #67E8F9; font-weight: 600; letter-spacing: 1px; margin: 0 0 6px 0; }
        .sub { color: #8196AF; margin: 0; }
        .panel { background: rgba(7,16,36,0.6); padding: 20px; border-radius: 8px; margin-top: 18px; }
        .contact { border-left: 4px solid #67E8F9; }
        @media (min-width: 900px) {
          .hero { grid-template-columns: 1fr 420px; text-align: left; }
          .hero-img { grid-column: 1 / 2; }
          .hero-copy { grid-column: 2 / 3; display:flex; flex-direction:column; justify-content:center; padding-left:24px; }
          .hero-copy h1 { font-size: 36px; }
        }
      `}</style>

    </>
  )
}
