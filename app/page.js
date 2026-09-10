"use client";

import { useState, useEffect } from "react";

const TOOLS = {
  sequencing: {
    key: "sequencing",
    title: "Production Sequencing Board",
    url: "/tools/sku-sequencing-board.html",
  },
  bottleneck: {
    key: "bottleneck",
    title: "Filling Line Bottleneck Finder",
    url: "/tools/filling-line-bottleneck-finder.html",
  },
};

export default function Page() {
  const [submitted, setSubmitted] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const [activeTool, setActiveTool] = useState(null);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
  });

  useEffect(() => {
    const anyOpen = showPicker || !!activeTool;
    document.body.style.overflow = anyOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [showPicker, activeTool]);

  const handleAccessSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setShowPicker(true);
  };

  const openTool = (key) => {
    setActiveTool(TOOLS[key]);
    setShowPicker(false);
  };

  const reopenPicker = () => {
    if (submitted) {
      setShowPicker(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById("access-form")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="logo">
            <img src="/logo.png" alt="Gemba Concepts" />
          </div>
          <a href="#access-form" className="header-cta" onClick={(e) => {
            e.preventDefault();
            reopenPicker();
          }}>
            Run a Free Diagnostic →
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">
              Interactive board · Sanitary napkin, diaper, wipes, handwash &amp; cleaning products
            </span>
            <h1>
              Your Plan Is Ready. <span className="accent">What Will Stop the Line?</span>
            </h1>
            <p className="lede">
              Production planning and scheduling for personal hygiene and home-care manufacturing.
            </p>
            <div className="callout">
              Check whether the problem is <strong>readiness</strong>, <strong>sequence</strong> or
              the <strong>filling line itself</strong> — before the shift loses hours.
            </div>
            <div className="hero-cta">
              <button className="btn-primary" onClick={reopenPicker}>
                Choose What You Want to Fix  ↓
              </button>
            </div>
          </div>

          <aside id="access-form">
            <form className="access-form" onSubmit={handleAccessSubmit}>
              <h3>Open Your Diagnostic</h3>
              <p className="sub">Enter your details once. Choose either tool and start immediately.</p>

              <div className="form-row">
                <label htmlFor="fullName">Full Name</label>
                <input
                  id="fullName"
                  type="text"
                  required
                  value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  placeholder="Your full name"
                />
              </div>
              <div className="form-row">
                <label htmlFor="email">Work Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="name@company.com"
                />
              </div>
              <div className="form-row">
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+91 00000 00000"
                />
              </div>
              <div className="form-row">
                <label htmlFor="company">Company Name</label>
                <input
                  id="company"
                  type="text"
                  required
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  placeholder="Your company"
                />
              </div>
              <button type="submit" className="btn-primary submit">
                Continue to My Diagnostic →
              </button>
              <p className="microcopy">Runs in your browser. No installation required.</p>
            </form>
          </aside>
        </div>
      </section>

      {/* SUB — Choose Your Diagnostic */}
      <section className="tools-wrap">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">Section 01 — Sub</span>
            <h2>Choose What You Want to Check</h2>
          </div>
          <div className="tool-grid">
            <div className="tool-card">
              <h3>Production Sequencing Board</h3>
              <p className="quote">
                “Given everything we need to produce, what should run first?”
              </p>
              <p>
                Check every SKU for material, packaging, QA and line readiness. Compare your current
                plan with an improved production sequence.
              </p>
              <div className="shows">
                <strong>Shows you</strong>
                Readiness conflicts · Current vs improved sequence · Changeover time · Cleaning time ·
                Waiting time · Urgent-order impact
              </div>
              <div className="cta-wrap">
                <button className="btn-primary" onClick={() => submitted ? openTool("sequencing") : reopenPicker()}>
                  Sequence My Production Plan →
                </button>
              </div>
            </div>

            <div className="tool-card">
              <h3>Filling Line Bottleneck Finder</h3>
              <p className="quote">
                “Where is my filling line actually losing capacity?”
              </p>
              <p>
                Enter your production hours, speed, downtime and waiting time. See which constraint
                is costing the line the most.
              </p>
              <div className="shows">
                <strong>Shows you</strong>
                Effective hours · Time lost · Speed gap · Capacity loss · Stage constraint ·
                Ranked bottlenecks
              </div>
              <div className="cta-wrap">
                <button className="btn-primary" onClick={() => submitted ? openTool("bottleneck") : reopenPicker()}>
                  Find My Filling Bottleneck →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="problem-wrap">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">Section 02 — What Happens on the Shop Floor</span>
            <h2>
              The Schedule Can Look Fine. <span className="accent">The Shift Still Loses Hours.</span>
            </h2>
          </div>
          <div className="problem-grid">
            <div className="problem-tile">
              <span className="tag">Plan Ready. Line Not Ready.</span>
              <p>Material, packaging or QA is still pending when the order reaches the line.</p>
            </div>
            <div className="problem-tile">
              <span className="tag">Too Many Changeovers</span>
              <p>The same orders take longer because of the sequence they run in.</p>
            </div>
            <div className="problem-tile">
              <span className="tag">One Item Missing</span>
              <p>One material, component or approval turns scheduled production into waiting.</p>
            </div>
            <div className="problem-tile">
              <span className="tag">Urgent Order. Domino Effect.</span>
              <p>Move one SKU forward and the rest of the production plan moves with it.</p>
            </div>
            <div className="problem-tile">
              <span className="tag">Line Running Below Rate</span>
              <p>The machine is running, but actual output is well below what the line should deliver.</p>
            </div>
            <div className="problem-tile">
              <span className="tag">Time Lost Between Runs</span>
              <p>Downtime, cleaning, material waiting and quality clearance quietly eat into available hours.</p>
            </div>
          </div>
          <p className="transition">
            The first question is not always, <em>“Do we need more capacity?”</em><br />
            It is: <span className="accent">Where are the hours going?</span>
          </p>
        </div>
      </section>

      {/* PROOF */}
      <section className="proof-wrap">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">Section 03 — Results From Manufacturing Projects</span>
            <h2>
              The Tools Diagnose. <span className="accent">The Shop Floor Proves What Is Possible.</span>
            </h2>
          </div>
          <div className="proof-grid">
            <div className="proof-card">
              <div className="tag">Proof 01 · FMCG Manufacturing</div>
              <div className="stat">15–20%</div>
              <div className="stat-label">Productivity Improvement</div>
              <div className="detail">45% improvement in inventory days.</div>
            </div>
            <div className="proof-card">
              <div className="tag">Proof 02 · FMCG Manufacturing</div>
              <div className="stat">20–30%</div>
              <div className="stat-label">Manpower Productivity Improvement</div>
              <div className="detail">
                Packaging-material inventory brought under tighter control, with reduction in
                finished-goods shortfall linked to production planning.
              </div>
            </div>
            <div className="proof-card">
              <div className="tag">Proof 03 · Flexible Packaging</div>
              <div className="stat">20%</div>
              <div className="stat-label">Higher Production per Shift</div>
              <div className="detail">
                20% wastage reduction. Changeover time was also reduced as part of the
                production-improvement work.
              </div>
            </div>
          </div>
          <p className="proof-context">
            Context: Productivity and inventory optimisation in an FMCG manufacturing environment.
          </p>
        </div>
      </section>

      {/* BRIDGE */}
      <section className="bridge-wrap">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">Section 04 — What Happens After the Diagnostic</span>
            <h2>
              The Tool Shows Where to Look. <span className="accent">Gemba Works on What Is Behind It.</span>
            </h2>
          </div>
          <div className="bridge-copy">
            <p>A readiness conflict may come from planning.</p>
            <p>A long changeover may come from the way the sequence is built.</p>
            <p>
              A slow filling line may come from speed loss, downtime, material waiting or a
              bottleneck at another stage.
            </p>
            <p>
              Gemba works with the people running the plant to find the cause, implement the change
              and make sure the improvement holds.
            </p>
          </div>

          <div className="strip">
            <div className="strip-step">
              <h4>Diagnose</h4>
              <p>Find where time and output are being lost.</p>
            </div>
            <div className="strip-arrow">→</div>
            <div className="strip-step">
              <h4>Baseline</h4>
              <p>Put a number against the current condition.</p>
            </div>
            <div className="strip-arrow">→</div>
            <div className="strip-step">
              <h4>Implement</h4>
              <p>Work with the team on the shop floor.</p>
            </div>
            <div className="strip-arrow">→</div>
            <div className="strip-step">
              <h4>Sustain</h4>
              <p>Build the review system into daily operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-wrap">
        <div className="container">
          <div className="final-grid">
            <div>
              <span className="section-label" style={{ color: "var(--green-300)" }}>
                Section 05 — Review Your Result
              </span>
              <h2>Found Something Worth Fixing?</h2>
              <p>Bring the output from either diagnostic.</p>
              <p>
                A manufacturing consultant can help you understand whether the issue sits in:
              </p>
              <div className="final-list">
                <div className="pills">
                  <span className="pill">Planning</span>
                  <span className="pill">Readiness</span>
                  <span className="pill">Sequencing</span>
                  <span className="pill">Changeover</span>
                  <span className="pill">Line Performance</span>
                  <span className="pill">Material Flow</span>
                  <span className="pill">Shop-Floor Execution</span>
                </div>
              </div>
            </div>

            <ConsultForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <img src="/logo.png" alt="Gemba Concepts" />
            <div>
              <div className="name">Gemba Concepts</div>
              <div className="tag">Improve Productivity. Reduce Costs.</div>
            </div>
          </div>
          <div className="footer-contact">
            <div>+91 95581 37573 &nbsp;·&nbsp; sales@gembaconcepts.com</div>
            <div className="footer-links" style={{ marginTop: 6 }}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </div>
      </footer>

      {/* PICKER MODAL */}
      {showPicker && (
        <div className="modal-backdrop" onClick={() => setShowPicker(false)}>
          <div className="modal-picker" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" aria-label="Close" onClick={() => setShowPicker(false)}>×</button>
            <h2>Choose Your Diagnostic</h2>
            <p className="sub">Both tools run in your browser. You can open the other one after.</p>
            <div className="grid">
              <div className="card" onClick={() => openTool("sequencing")}>
                <h3>Production Sequencing Board →</h3>
                <p>
                  Check readiness, compare current vs improved sequence, see changeover, cleaning
                  and waiting time.
                </p>
              </div>
              <div className="card" onClick={() => openTool("bottleneck")}>
                <h3>Filling Line Bottleneck Finder →</h3>
                <p>
                  Enter hours, speed and downtime. See effective hours, capacity loss and the
                  ranked bottleneck.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TOOL MODAL */}
      {activeTool && (
        <div className="modal-tool">
          <div className="bar">
            <h4>{activeTool.title}</h4>
            <div className="actions">
              <button onClick={() => { setActiveTool(null); setShowPicker(true); }}>Switch tool</button>
              <button onClick={() => setActiveTool(null)}>Close ×</button>
            </div>
          </div>
          <iframe src={activeTool.url} title={activeTool.title} />
        </div>
      )}
    </>
  );
}

function ConsultForm() {
  const [state, setState] = useState({ review: "", notes: "" });
  const [done, setDone] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setDone(true);
  };

  if (done) {
    return (
      <div className="final-form">
        <h3>Thanks — we&apos;ll be in touch.</h3>
        <p>
          A Gemba consultant will reach out within one business day to schedule your
          30-minute production review.
        </p>
      </div>
    );
  }

  return (
    <form className="final-form" onSubmit={submit}>
      <h3>Book Your Production Review</h3>
      <p>Bring the output from either diagnostic and we&apos;ll walk it through with you.</p>

      <div className="form-row">
        <label htmlFor="review">What would you like to review?</label>
        <select
          id="review"
          required
          value={state.review}
          onChange={(e) => setState({ ...state, review: e.target.value })}
        >
          <option value="">Choose one…</option>
          <option>Production planning &amp; sequencing</option>
          <option>Filling-line performance</option>
          <option>Changeover &amp; cleaning</option>
          <option>Material / packaging readiness</option>
          <option>Capacity improvement</option>
          <option>Multiple issues</option>
        </select>
      </div>

      <div className="form-row">
        <label htmlFor="notes">Anything we should know? (optional)</label>
        <textarea
          id="notes"
          value={state.notes}
          onChange={(e) => setState({ ...state, notes: e.target.value })}
          placeholder="Line, SKU family, current shift pattern, or the constraint you suspect."
        />
      </div>

      <button type="submit" className="btn-primary submit">
        Book My Production Review →
      </button>
      <p className="reassurance">
        30-minute conversation · No commitment · Bring your diagnostic output
      </p>
    </form>
  );
}
