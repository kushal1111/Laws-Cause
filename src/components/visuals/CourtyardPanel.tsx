export function CourtyardPanel() {
  return (
    <div className="relative min-h-[24rem] overflow-hidden bg-stone lg:min-h-full">
      <svg
        viewBox="0 0 800 1000"
        role="img"
        aria-label="Line drawing of a courtyard plan, with a central court and four corner piers."
        className="h-full w-full"
      >
        <rect width="800" height="1000" fill="#EAE6DF" />
        <rect
          x="90"
          y="120"
          width="620"
          height="720"
          fill="none"
          stroke="#152B27"
          strokeWidth="1.4"
        />
        <rect
          x="180"
          y="220"
          width="440"
          height="500"
          fill="none"
          stroke="#152B27"
          strokeOpacity="0.7"
        />
        <line x1="400" y1="120" x2="400" y2="840" stroke="#152B27" strokeOpacity="0.35" />
        <line x1="90" y1="470" x2="710" y2="470" stroke="#152B27" strokeOpacity="0.35" />
        <circle cx="400" cy="470" r="70" fill="none" stroke="#152B27" />
        {[
          [180, 220],
          [560, 220],
          [180, 660],
          [560, 660],
        ].map(([x, y]) => (
          <rect key={`${x}-${y}`} x={x} y={y} width="60" height="60" fill="none" stroke="#7C6238" />
        ))}
        <text
          x="90"
          y="910"
          fill="#3F4844"
          fontFamily="Georgia, serif"
          fontSize="18"
          letterSpacing="4"
        >
          COURTYARD STUDY
        </text>
      </svg>
    </div>
  );
}
