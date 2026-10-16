"use client";

import { useState } from "react";

const styles = ["Fine line", "Geometric", "Botanical", "Symbolic", "Cover-up", "Custom"];

export default function BookingForm() {
  const [picked, setPicked] = useState<string[]>([]);
  const [sent, setSent] = useState(false);

  const toggle = (s: string) =>
    setPicked((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));

  if (sent)
    return (
      <div className="ok">
        <h3>Thank you.</h3>
        <p>Your request is in. We&apos;ll text you within 24 hours to confirm your session.</p>
      </div>
    );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="row">
        <div className="field">
          <input id="name" required placeholder=" " />
          <label htmlFor="name">Full name</label>
        </div>
        <div className="field">
          <input id="phone" type="tel" required placeholder=" " />
          <label htmlFor="phone">Phone</label>
        </div>
      </div>
      <div className="row">
        <div className="field">
          <input id="email" type="email" placeholder=" " />
          <label htmlFor="email">Email</label>
        </div>
        <div className="field">
          <input id="date" type="date" />
          <label htmlFor="date">Preferred date</label>
        </div>
      </div>
      <div>
        <span className="styles-label">Style</span>
        <div className="styles">
          {styles.map((s) => (
            <button
              type="button"
              key={s}
              className={`chip ${picked.includes(s) ? "on" : ""}`}
              onClick={() => toggle(s)}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
      <div className="field">
        <textarea id="idea" rows={3} placeholder=" " />
        <label htmlFor="idea">Tell us your idea &amp; placement</label>
      </div>
      <div>
        <button className="btn solid" type="submit">
          Request session <span className="arr">→</span>
        </button>
      </div>
    </form>
  );
}
