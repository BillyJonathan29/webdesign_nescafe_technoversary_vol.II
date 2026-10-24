interface LogoProps {
  className?: string
  variant?: 'horizontal' | 'mark-only' | 'stacked'
  theme?: 'dark' | 'light' // dark = deep forest green text; light = warm paper text (for dark backgrounds)
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({
  className = '',
  variant = 'horizontal',
  theme = 'dark',
  size = 'md',
}: LogoProps) {
  const isLight = theme === 'light'
  
  // Color palette logic
  const primaryColor = isLight ? '#F5F2E9' : '#203D32'
  const mossColor = isLight ? '#A3B49D' : '#71816A'
  const clayAccent = '#B77D58'
  const contourColor = isLight ? 'rgba(245, 242, 233, 0.4)' : 'rgba(32, 61, 50, 0.25)'

  // Size dimensions for mark
  const markDimensions = {
    sm: { width: 32, height: 26 },
    md: { width: 42, height: 34 },
    lg: { width: 56, height: 46 },
  }[size]

  // Render original Mountain Ridge + Contour + Summit Trail Mark
  const renderMark = () => (
    <svg
      width={markDimensions.width}
      height={markDimensions.height}
      viewBox="0 0 56 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-200 group-hover:scale-105"
      aria-hidden="true"
    >
      {/* Topographic Contour Lines - Subtle concentric elevation lines of Ciremai caldera */}
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

      {/* Secondary Ridge (Mount Ciremai sub-peak/Langgob ridge silhouette) */}
      <path
        d="M12 40L24 22L34 32L44 24L52 40H12Z"
        fill={mossColor}
        fillOpacity={isLight ? '0.45' : '0.3'}
      />

      {/* Primary Peak: Iconic silhouette of Mt. Ciremai (3,078 m dpl) with steep conical gradient line */}
      <path
        d="M4 42L28 10L36 21L42 16L52 42H4Z"
        fill={primaryColor}
      />

      {/* Summit Trail Path & Summit Coordinate Dot */}
      <path
        d="M28 10L25 20L31 27L29 37"
        stroke={isLight ? '#203D32' : '#F5F2E9'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="2.5 2"
      />

      {/* Summit Marker Dot in Muted Clay Accent */}
      <circle cx="28" cy="10" r="2.5" fill={clayAccent} />

      {/* Base Elevation Datum Line */}
      <line x1="2" y1="43.5" x2="54" y2="43.5" stroke={clayAccent} strokeWidth="1.2" />
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
      <div className={variant === 'stacked' ? 'flex flex-col' : 'flex flex-col'}>
        <div className="flex items-baseline tracking-tight">
          <span
            className="font-editorial-serif font-medium text-xl leading-none tracking-[-0.015em]"
            style={{ color: primaryColor }}
          >
            Ciremai
          </span>
          <span
            className="font-editorial-serif italic font-normal text-xl leading-none text-[#71816A] ml-0.5"
            style={{ color: isLight ? '#A3B49D' : '#71816A' }}
          >
            Green
          </span>
        </div>
        <span
          className="text-[9px] uppercase tracking-[0.22em] font-editorial-sans font-semibold mt-1"
          style={{ color: isLight ? 'rgba(245, 242, 233, 0.65)' : '#74604D' }}
        >
          Kawasan Konservasi &middot; 3.078 mdpl
        </span>
      </div>
    </div>
  )
}
