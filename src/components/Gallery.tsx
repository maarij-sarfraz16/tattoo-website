"use client";

import { useState } from "react";
import { Dagger, Eye, Mandala, Moons, Orbit, Serpent, Sprig, Sun, Waves } from "./art";

const pieces = [
  { t: "Lunar Phase", c: "Fine line", Art: Moons },
  { t: "Mandala No. 3", c: "Geometric", Art: Mandala },
  { t: "Wild Sprig", c: "Botanical", Art: Sprig },
  { t: "The Watcher", c: "Symbolic", Art: Eye },
  { t: "Serpent", c: "Fine line", Art: Serpent },
  { t: "Sol", c: "Geometric", Art: Sun },
  { t: "Tide", c: "Botanical", Art: Waves },
  { t: "Dagger", c: "Symbolic", Art: Dagger },
  { t: "Orbit", c: "Geometric", Art: Orbit },
];

const cats = ["All", "Fine line", "Geometric", "Botanical", "Symbolic"];

export default function Gallery() {
  const [cat, setCat] = useState("All");
  return (
    <>
      <div className="head-row reveal">
        <div>
          <span className="eyebrow">Tattoo Gallery</span>
          <h2 className="h2">
            Drawn for <em>one</em> body.
          </h2>
        </div>
        <div className="filters" role="tablist">
          {cats.map((c) => (
            <button key={c} className={`chip ${cat === c ? "on" : ""}`} onClick={() => setCat(c)}>
              {c}
            </button>
          ))}
        </div>
      </div>
      <div className="grid">
        {pieces.map(({ t, c, Art }, i) => (
          <article
            key={t}
            className={`card reveal ${cat === "All" || cat === c ? "" : "off"}`}
            style={{ "--d": `${(i % 4) * 90}ms` } as React.CSSProperties}
          >
            <Art />
            <div className="cap">
              <h4>{t}</h4>
              <small>{c}</small>
            </div>
          </article>
        ))}
      </div>
      <p className="note reveal">Illustrative flash shown. Swap in studio photography to go live.</p>
    </>
  );
}
