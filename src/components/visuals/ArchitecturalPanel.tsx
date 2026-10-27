export function ArchitecturalPanel() {
  return (
    <div className="relative h-full min-h-[24rem] overflow-hidden bg-forest lg:min-h-[32rem]">
      <svg
        viewBox="0 0 800 1040"
        role="img"
        aria-label="Abstract architectural study of a colonnade and arch, drawn in ivory line on deep green."
        className="h-full w-full"
      >
        <rect width="800" height="1040" fill="#152B27" />
        <rect
          x="48"
          y="48"
          width="704"
          height="944"
          fill="none"
          stroke="#E7E1D6"
          strokeOpacity="0.35"
        />
        {[150, 230, 310, 490, 570, 650].map((x) => (
          <line
            key={x}
            x1={x}
            y1="180"
            x2={x}
            y2="820"
            stroke="#F7F5F0"
            strokeOpacity="0.72"
            strokeWidth="1.25"
          />
        ))}
        <path d="M150 690 Q400 210 650 690" fill="none" stroke="#F7F5F0" strokeWidth="1.6" />
        <path d="M210 690 Q400 330 590 690" fill="none" stroke="#F7F5F0" strokeOpacity="0.55" />
        <line x1="96" y1="690" x2="704" y2="690" stroke="#B69A62" strokeWidth="1.25" />
        {[0, 1, 2, 3, 4].map((row) => (
          <line
            key={row}
            x1="170"
            y1={730 + row * 16}
            x2="630"
            y2={730 + row * 16}
            stroke="#E7E1D6"
            strokeOpacity="0.4"
          />
        ))}
        <rect x="360" y="760" width="80" height="120" fill="none" stroke="#B69A62" />
        <circle cx="400" cy="430" r="18" fill="none" stroke="#F7F5F0" strokeOpacity="0.8" />
        <text
          x="64"
          y="970"
          fill="#E7E1D6"
          fontFamily="Georgia, serif"
          fontSize="18"
          letterSpacing="6"
        >
          KATHMANDU
        </text>
      </svg>
    </div>
  );
}
