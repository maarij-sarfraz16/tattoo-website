import Shell from "@/components/Shell";
import Gallery from "@/components/Gallery";
import BookingForm from "@/components/BookingForm";
import { Mandala, Monogram } from "@/components/art";

const words = ["Fine line", "Geometric", "Botanical", "Symbolic", "Cover-ups", "Custom work", "Paint & canvas"];

const paintings = [
  { n: "Dusk, Study I", bg: "radial-gradient(70% 60% at 30% 30%, #c08a64, transparent 70%), radial-gradient(80% 70% at 75% 80%, #3f4a5e, transparent 70%), #1c1a16" },
  { n: "Sage", bg: "radial-gradient(60% 60% at 70% 30%, #8c9a82, transparent 70%), radial-gradient(70% 70% at 20% 90%, #4a4036, transparent 70%), #17150f" },
  { n: "Ember", bg: "radial-gradient(65% 60% at 40% 70%, #a4553f, transparent 70%), radial-gradient(60% 60% at 80% 20%, #d7b27c, transparent 70%), #1a1411" },
  { n: "Low Tide", bg: "radial-gradient(70% 60% at 60% 60%, #5f7a80, transparent 70%), radial-gradient(60% 60% at 15% 20%, #b9a58a, transparent 70%), #12151a" },
  { n: "Bone & Ash", bg: "radial-gradient(60% 70% at 30% 40%, #d9cfbd, transparent 72%), radial-gradient(70% 70% at 85% 85%, #55504a, transparent 70%), #16140f" },
];

const steps = [
  ["01", "Reach out", "Book online or just text us. Share your idea, placement and references."],
  ["02", "Design", "We draw something that fits you, and refine it together before the day."],
  ["03", "Session", "A calm, private studio. Unhurried, sterile, and entirely yours."],
  ["04", "Aftercare", "Clear healing guidance and a free touch-up check, always."],
];

export default function Home() {
  return (
    <Shell>
      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="glow a" />
          <div className="glow b" />
          <div className="wrap hero-grid">
            <div>
              <span className="eyebrow fade" style={{ "--d": "1.2s" } as React.CSSProperties}>
                Tattoo &amp; Art Studio · Atlanta
              </span>
              <h1>
                <span className="line"><span style={{ "--i": 0 } as React.CSSProperties}>Be free.</span></span>
                <span className="line"><span style={{ "--i": 1 } as React.CSSProperties}>Be you.</span></span>
                <span className="line"><span style={{ "--i": 2 } as React.CSSProperties}>Be <em>ii</em>nked.</span></span>
              </h1>
              <p className="hero-sub fade" style={{ "--d": "1.7s" } as React.CSSProperties}>
                Considered, one-of-one tattoos and original paintings, made in a quiet studio in the heart of Atlanta.
              </p>
              <div className="hero-cta fade" style={{ "--d": "1.9s" } as React.CSSProperties}>
                <a href="#book" className="btn solid">Book now <span className="arr">→</span></a>
                <a href="#tattoo" className="btn">Tattoo gallery</a>
                <a href="#paint" className="btn">Paint gallery</a>
              </div>
            </div>
            <div className="hero-art fade" style={{ "--d": "1.4s" } as React.CSSProperties}>
              <div className="ring" />
              <Mandala detail={16} />
            </div>
          </div>
          <div className="scroll-cue"><i /> Scroll</div>
        </section>

        {/* MARQUEE */}
        <div className="marquee" aria-hidden>
          <div className="marquee-track">
            {[0, 1].map((k) => (
              <div key={k} style={{ display: "flex" }}>
                {words.map((w) => (
                  <span key={w + k}>{w}<b>✦</b></span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ABOUT */}
        <section id="about">
          <div className="wrap split">
            <div className="portrait reveal">
              <Monogram />
              <span className="tag">Studio portrait — coming soon</span>
            </div>
            <div>
              <span className="eyebrow reveal">The Studio</span>
              <h2 className="h2 reveal" style={{ "--d": "100ms" } as React.CSSProperties}>
                Skin is the <em>oldest</em> canvas.
              </h2>
              <p className="lede reveal" style={{ "--d": "200ms", marginTop: "1.8rem" } as React.CSSProperties}>
                Be iinked is built on one belief: your art should feel like you. Every piece is drawn from a real
                conversation, never pulled from a binder. Whether it is a whisper-thin line or a full composition,
                it is made slowly and made to last.
              </p>
              <p className="lede reveal" style={{ "--d": "280ms" } as React.CSSProperties}>
                Alongside tattooing, the studio paints, and the same hand shows in both.
              </p>
              <div className="stats reveal" style={{ "--d": "360ms" } as React.CSSProperties}>
                <div className="stat"><b>1:1</b><span>Custom designs</span></div>
                <div className="stat"><b>100%</b><span>Sterile &amp; private</span></div>
                <div className="stat"><b>ATL</b><span>Chattahoochee Ave</span></div>
              </div>
            </div>
          </div>
        </section>

        <hr className="rule" />

        {/* TATTOO GALLERY */}
        <section id="tattoo">
          <div className="wrap"><Gallery /></div>
        </section>

        {/* PAINT GALLERY */}
        <section id="paint" className="paint-wrap">
          <div className="wrap">
            <div className="head-row" style={{ marginBottom: 0 }}>
              <div className="reveal">
                <span className="eyebrow">Paint Gallery</span>
                <h2 className="h2">Colour, <em>unhurried.</em></h2>
              </div>
              <p className="lede reveal" style={{ "--d": "120ms" } as React.CSSProperties}>
                Original works on canvas. Quiet palettes, soft edges, made to live on a wall.
              </p>
            </div>
            <div className="paint-grid">
              {paintings.map((p, i) => (
                <div
                  key={p.n}
                  className="canvas reveal"
                  style={{ "--bg": p.bg, "--d": `${i * 90}ms` } as React.CSSProperties}
                >
                  <span>{p.n}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process">
          <div className="wrap">
            <span className="eyebrow reveal">Process</span>
            <h2 className="h2 reveal" style={{ "--d": "100ms" } as React.CSSProperties}>
              From idea to <em>ink.</em>
            </h2>
            <div className="steps">
              {steps.map(([n, t, d], i) => (
                <div key={n} className="step reveal" style={{ "--d": `${i * 110}ms` } as React.CSSProperties}>
                  <span className="n">{n}</span>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="rule" />

        {/* BOOK */}
        <section id="book">
          <div className="wrap book-grid">
            <div>
              <span className="eyebrow reveal">Book Online</span>
              <h2 className="h2 reveal" style={{ "--d": "100ms" } as React.CSSProperties}>
                Let&apos;s make <em>yours.</em>
              </h2>
              <p className="lede reveal" style={{ "--d": "200ms", marginTop: "1.6rem" } as React.CSSProperties}>
                Tell us what you have in mind. Questions? Text us any time, it is the fastest way to reach us.
              </p>
              <dl className="contact-list reveal" style={{ "--d": "300ms" } as React.CSSProperties}>
                <div><dt>Text us</dt><dd><a className="link" href="sms:4702139092">470-213-9092</a></dd></div>
                <div><dt>Studio</dt><dd>1130 Chattahoochee Ave NW<br />Atlanta, GA</dd></div>
              </dl>
            </div>
            <div className="reveal" style={{ "--d": "200ms" } as React.CSSProperties}>
              <BookingForm />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <div className="foot">
            <div>
              <div className="big">Be free.<br />Be you.<br />Be iinked.</div>
            </div>
            <div>
              <h5>Address</h5>
              <p>1130 Chattahoochee Ave NW<br />Atlanta, GA</p>
            </div>
            <div>
              <h5>Contact</h5>
              <p>Please text</p>
              <a href="sms:4702139092">470-213-9092</a>
            </div>
            <div>
              <h5>Explore</h5>
              <a href="#tattoo">Tattoo Gallery</a>
              <a href="#paint">Paint Gallery</a>
              <a href="#book">Book Online</a>
            </div>
          </div>
          <div className="legal">
            <span>© Be Iinked. All rights reserved.</span>
            <span>Atlanta, Georgia</span>
          </div>
        </div>
      </footer>
    </Shell>
  );
}
