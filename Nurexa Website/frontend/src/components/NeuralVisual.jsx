export function NeuralVisual() {
  return (
    <div className="relative mx-auto h-[320px] w-full max-w-[480px] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 backdrop-blur-xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,124,255,0.16),transparent_55%)]" />
      <svg viewBox="0 0 400 300" className="h-full w-full opacity-80" aria-hidden="true">
        <g stroke="rgba(120,166,255,0.25)" strokeWidth="1.2" fill="none">
          <path d="M80 80 C120 50, 180 50, 220 80 S320 120, 340 150" />
          <path d="M80 220 C120 250, 180 250, 220 220 S320 180, 340 150" />
          <path d="M120 140 C150 100, 230 110, 260 140" />
        </g>
        <g>
          {[
            [80, 80], [220, 80], [340, 150], [220, 220], [80, 220], [120, 140], [260, 140]
          ].map(([x, y], index) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="4.5" fill={index % 2 === 0 ? '#4f7cff' : '#8fd3ff'} />
          ))}
        </g>
      </svg>
      <div className="pointer-events-none absolute inset-0 animate-pulse" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(79,124,255,0.18), transparent 30%)' }} />
    </div>
  )
}
