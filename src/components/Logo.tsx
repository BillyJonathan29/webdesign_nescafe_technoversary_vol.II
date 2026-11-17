interface LogoProps {
  className?: string
  variant?: 'horizontal' | 'mark-only' | 'stacked'
  theme?: 'dark' | 'light'
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({
  className = '',
  variant = 'horizontal',
  theme = 'light',
  size = 'md',
}: LogoProps) {
  const isLight = theme === 'light'
  
  const primaryColor = isLight ? '#FFFFFF' : '#0a1610'
  const mossColor = isLight ? '#34d399' : '#059669'
  const contourColor = isLight ? 'rgba(52, 211, 153, 0.4)' : 'rgba(16, 185, 129, 0.3)'

  const markDimensions = {
    sm: { width: 32, height: 26 },
    md: { width: 42, height: 34 },
    lg: { width: 56, height: 46 },
  }[size]

  const renderMark = () => (
    <svg
      width={markDimensions.width}
      height={markDimensions.height}
      viewBox="0 0 56 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_12px_rgba(16,185,129,0.35)]"
      aria-hidden="true"
    >
      <path
        d="M2 42C12 36 24 38 32 35C40 32 48 37 54 42"
        stroke={contourColor}
        strokeWidth="1.2"
        strokeDasharray="2 2"
      />
      <path
        d="M8 36C16 31 26 32 34 29C42 26 48 30 52 36"
        stroke={contourColor}
        strokeWidth="1.2"
      />

      <path
        d="M12 40L24 22L34 32L44 24L52 40H12Z"
        fill={mossColor}
        fillOpacity="0.4"
      />

      <path
        d="M4 42L28 10L36 21L42 16L52 42H4Z"
        fill="url(#mountainGrad)"
      />

      <path
        d="M28 10L25 20L31 27L29 37"
        stroke="#10b981"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="2.5 2"
      />

      <circle cx="28" cy="10" r="2.5" fill="#a3e635" className="animate-pulse" />
      <line x1="2" y1="43.5" x2="54" y2="43.5" stroke="#10b981" strokeWidth="1.2" />

      <defs>
        <linearGradient id="mountainGrad" x1="28" y1="10" x2="28" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#34d399" />
          <stop offset="1" stopColor="#064e3b" />
        </linearGradient>
      </defs>
    </svg>
  )

  if (variant === 'mark-only') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        {renderMark()}
        <span className="sr-only">CiremaiGreen</span>
      </div>
    )
  }

  return (
    <div className={`inline-flex items-center gap-3 select-none group ${className}`}>
      {renderMark()}
      <div className="flex flex-col">
        <div className="flex items-baseline tracking-tight">
          <span
            className="font-['Mori',sans-serif] font-semibold text-xl leading-none tracking-tight"
            style={{ color: primaryColor }}
          >
            Ciremai
          </span>
          <span
            className="font-['Mori',sans-serif] font-normal text-xl leading-none text-emerald-400 ml-0.5"
          >
            Green
          </span>
        </div>
        <span
          className="text-[9px] uppercase tracking-[0.22em] font-['Mori',sans-serif] font-medium mt-1 text-emerald-300/70"
        >
          Taman Nasional &middot; 3.078 mdpl
        </span>
      </div>
    </div>
  )
}
