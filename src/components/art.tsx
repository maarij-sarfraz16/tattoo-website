// Fine-line flash motifs drawn in SVG. Placeholders until real portfolio photos are supplied.
const S = {
  fill: "none",
  stroke: "#ece4d6",
  strokeWidth: 1,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const deg = (n: number) => Array.from({ length: n }, (_, i) => (360 / n) * i);

export function Mandala({ detail = 12 }: { detail?: number }) {
  return (
    <svg viewBox="-100 -100 200 200" {...S} aria-hidden>
      {deg(detail).map((a) => (
        <g key={a} transform={`rotate(${a})`}>
          <ellipse cx="0" cy="-52" rx="9" ry="30" />
          <path d="M0 -92 L3 -84 L0 -78 L-3 -84 Z" />
          <circle cx="0" cy="-20" r="1.4" />
        </g>
      ))}
      <circle r="96" />
      <circle r="38" />
      <circle r="12" />
      <circle r="99" strokeDasharray="1 5" />
    </svg>
  );
}

export function Moons() {
  const phases = [
    "M0 -26 A26 26 0 0 1 0 26 A8 26 0 0 1 0 -26",
    "M0 -26 A26 26 0 0 1 0 26 A26 26 0 0 0 0 -26",
    "M0 -26 A26 26 0 0 1 0 26 A26 26 0 0 1 0 -26",
    "M0 -26 A26 26 0 0 0 0 26 A26 26 0 0 0 0 -26",
    "M0 -26 A26 26 0 0 0 0 26 A8 26 0 0 0 0 -26",
  ];
  return (
    <svg viewBox="0 0 200 260" {...S} aria-hidden>
      <path d="M100 18 V242" strokeDasharray="1 5" />
      {phases.map((d, i) => (
        <g key={i} transform={`translate(100 ${42 + i * 44})`}>
          <circle r="26" />
          <path d={d} />
        </g>
      ))}
    </svg>
  );
}

export function Sun() {
  return (
    <svg viewBox="-100 -100 200 200" {...S} aria-hidden>
      <circle r="26" />
      <circle r="18" />
      {deg(24).map((a, i) => (
        <path key={a} transform={`rotate(${a})`} d={i % 2 ? "M0 -40 V-62" : "M0 -38 L5 -62 L0 -88 L-5 -62 Z"} />
      ))}
      <circle r="94" strokeDasharray="1 6" />
    </svg>
  );
}

export function Waves() {
  return (
    <svg viewBox="0 0 200 200" {...S} aria-hidden>
      {Array.from({ length: 9 }, (_, i) => (
        <path
          key={i}
          d={`M10 ${34 + i * 16} q 22.5 -${14 + i} 45 0 t 45 0 t 45 0 t 45 0`}
          opacity={1 - i * 0.07}
        />
      ))}
      <circle cx="100" cy="30" r="12" />
    </svg>
  );
}

export function Sprig() {
  const leaves = [40, 68, 96, 124, 152, 180];
  return (
    <svg viewBox="0 0 200 260" {...S} aria-hidden>
      <path d="M100 246 C92 190 112 140 96 90 C90 66 100 40 104 20" />
      {leaves.map((y, i) => {
        const side = i % 2 ? 1 : -1;
        return (
          <g key={y} transform={`translate(${100 + side * -2} ${240 - y})`}>
            <path d={`M0 0 C${side * 18} -20 ${side * 44} -20 ${side * 54} -8 C${side * 40} 10 ${side * 16} 12 0 0 Z`} />
            <path d={`M0 0 L${side * 40} -6`} />
          </g>
        );
      })}
      <circle cx="104" cy="16" r="4" />
    </svg>
  );
}

export function Eye() {
  return (
    <svg viewBox="-100 -100 200 200" {...S} aria-hidden>
      <path d="M-86 0 C-46 -52 46 -52 86 0 C46 52 -46 52 -86 0 Z" />
      <circle r="26" />
      <circle r="10" />
      <circle cx="-8" cy="-8" r="2.5" />
      {deg(15).map((a) => (
        <path key={a} transform={`rotate(${a - 90 + 12})`} d="M0 -64 V-78" opacity={a > 20 && a < 340 ? 1 : 0.6} />
      ))}
      <path d="M-60 -50 Q0 -80 60 -50" strokeDasharray="1 5" />
    </svg>
  );
}

export function Serpent() {
  return (
    <svg viewBox="0 0 200 260" {...S} aria-hidden>
      <path d="M60 230 C 10 200 40 160 100 150 C 170 138 160 90 100 84 C 50 80 56 40 98 36" strokeWidth="9" opacity="0.18" />
      <path d="M60 230 C 10 200 40 160 100 150 C 170 138 160 90 100 84 C 50 80 56 40 98 36" />
      <path d="M72 238 C 18 206 50 168 104 160 C 160 150 150 104 100 96 C 62 90 66 52 102 46" />
      <path d="M98 36 C 108 18 130 22 134 34 C 124 44 108 46 98 36 Z" />
      <circle cx="120" cy="32" r="1.6" />
      <path d="M134 34 l14 -4 M134 34 l14 6" />
    </svg>
  );
}

export function Dagger() {
  return (
    <svg viewBox="0 0 200 260" {...S} aria-hidden>
      <path d="M100 14 L112 150 H88 Z" />
      <path d="M100 14 V150" />
      <path d="M62 150 H138" />
      <path d="M62 150 C 62 162 74 164 82 160 H118 C 126 164 138 162 138 150" />
      <path d="M94 160 V212 H106 V160" />
      <circle cx="100" cy="226" r="12" />
      <circle cx="100" cy="226" r="4" />
      <path d="M94 176 H106 M94 192 H106" />
    </svg>
  );
}

export function Orbit() {
  return (
    <svg viewBox="-100 -100 200 200" {...S} aria-hidden>
      <circle r="8" />
      <ellipse rx="86" ry="30" />
      <ellipse rx="86" ry="30" transform="rotate(60)" />
      <ellipse rx="86" ry="30" transform="rotate(120)" />
      <circle cx="86" cy="0" r="3" />
      <circle cx="-43" cy="-26" r="3" transform="rotate(60)" />
      <circle r="96" strokeDasharray="1 6" />
    </svg>
  );
}

export function Monogram() {
  return (
    <svg viewBox="0 0 200 200" {...S} aria-hidden>
      <circle cx="100" cy="100" r="92" />
      <circle cx="100" cy="100" r="84" strokeDasharray="1 5" />
      <text
        x="100"
        y="122"
        textAnchor="middle"
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontStyle="italic"
        fontSize="70"
        fill="#ece4d6"
        stroke="none"
        fontWeight="300"
      >
        ii
      </text>
      <path d="M40 140 H160" />
    </svg>
  );
}
