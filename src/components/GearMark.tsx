export function GearMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="gearGrad" x1="6" y1="6" x2="42" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F58220" />
          <stop offset="0.55" stopColor="#F2A81D" />
          <stop offset="1" stopColor="#F6C64E" />
        </linearGradient>
      </defs>
      <path
        fill="url(#gearGrad)"
        d="M24 2.2l3.3 3.9 4.9-1.7 1.6 5 5.2.4-.4 5.2 4.6 2.5-2.3 4.7 3.7 3.7-3.7 3.7 2.3 4.7-4.6 2.5.4 5.2-5.2.4-1.6 5-4.9-1.7L24 45.8l-3.3-3.9-4.9 1.7-1.6-5-5.2-.4.4-5.2-4.6-2.5 2.3-4.7L3.4 22l3.7-3.7-2.3-4.7 4.6-2.5-.4-5.2 5.2-.4 1.6-5 4.9 1.7L24 2.2z"
      />
      <circle cx="24" cy="24" r="8.4" fill="#23273B" />
    </svg>
  );
}
