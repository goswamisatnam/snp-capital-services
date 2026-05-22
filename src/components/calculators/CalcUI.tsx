// ─────────────────────────────────────────
// Shared UI primitives for calculator pages
// ─────────────────────────────────────────

interface CalcHeaderProps {
  breadcrumb: string
  title: React.ReactNode
  subtitle: string
  tags?: string[]
}

export function CalcHeader({ breadcrumb, title, subtitle, tags }: CalcHeaderProps) {
  return (
    <div className="mb-7">
      <p className="text-xs text-gray-400 mb-1">{breadcrumb}</p>
      <h1 className="font-display text-navy text-3xl font-bold leading-tight">{title}</h1>
      <p className="text-sm text-gray-500 font-light leading-relaxed mt-2 max-w-lg">{subtitle}</p>
      {tags && (
        <div className="flex gap-2 mt-3">
          {tags.map((t) => (
            <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-full bg-teal-50 text-teal-600">
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

interface ResultCardProps {
  label: string
  value: string
  sub?: string
  highlight?: boolean
}

export function ResultCard({ label, value, sub, highlight }: ResultCardProps) {
  return (
    <div className={`rounded-xl p-4 text-center ${highlight ? 'bg-navy' : 'bg-cream-100'}`}>
      <p className={`text-xs uppercase tracking-wider font-medium mb-1 ${highlight ? 'text-white/50' : 'text-gray-400'}`}>
        {label}
      </p>
      <p className={`font-display text-2xl font-bold ${highlight ? 'text-gold' : 'text-navy'}`}>
        {value}
      </p>
      {sub && <p className={`text-xs mt-0.5 ${highlight ? 'text-white/30' : 'text-gray-400'}`}>{sub}</p>}
    </div>
  )
}

interface CalcCardProps { children: React.ReactNode; className?: string }

export function CalcCard({ children, className = '' }: CalcCardProps) {
  return (
    <div className={`bg-white border border-cream-300 rounded-xl p-6 mb-5 ${className}`}>
      {children}
    </div>
  )
}

interface FieldProps {
  label: string
  hint?: string
  children: React.ReactNode
}

export function Field({ label, hint, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-gray-600">{label}</label>
      {hint && <span className="text-[11px] text-gray-400">{hint}</span>}
      {children}
    </div>
  )
}

interface RangeFieldProps {
  label: string
  hint?: string
  min: number; max: number; step: number; value: number
  displayValue: string
  onChange: (v: number) => void
}

export function RangeField({ label, hint, min, max, step, value, displayValue, onChange }: RangeFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex justify-between items-center">
        <div>
          <label className="text-xs font-medium text-gray-600">{label}</label>
          {hint && <p className="text-[11px] text-gray-400">{hint}</p>}
        </div>
        <span className="text-xs font-medium text-navy bg-cream-100 border border-cream-300 rounded-md px-2.5 py-1 min-w-[68px] text-right">
          {displayValue}
        </span>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1.5 rounded-full cursor-pointer accent-navy"
      />
    </div>
  )
}

interface NumberInputProps {
  prefix?: string; suffix?: string; value: number
  onChange: (v: number) => void
  min?: number; max?: number; step?: number
}

export function NumberInput({ prefix, suffix, value, onChange, min, max, step = 1 }: NumberInputProps) {
  return (
    <div className="relative flex items-center">
      {prefix && <span className="absolute left-3 text-sm text-gray-400 pointer-events-none">{prefix}</span>}
      <input
        type="number" value={value} min={min} max={max} step={step}
        onChange={(e) => onChange(Number(e.target.value))}
        className={`w-full py-2.5 border border-cream-300 rounded-lg text-sm text-navy bg-cream-50 outline-none focus:border-navy transition-colors ${prefix ? 'pl-7' : 'pl-3'} ${suffix ? 'pr-7' : 'pr-3'}`}
      />
      {suffix && <span className="absolute right-3 text-sm text-gray-400 pointer-events-none">{suffix}</span>}
    </div>
  )
}

export function CalcButton({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick}
      className="w-full mt-4 py-3.5 bg-navy hover:bg-navy-700 text-white font-display font-semibold text-base rounded-lg transition-colors active:scale-[.99]">
      {children}
    </button>
  )
}

export function InfoBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-cream-100 border border-cream-300 rounded-xl p-5 mt-4">
      <p className="font-medium text-navy text-sm mb-2">{title}</p>
      <div className="text-xs text-gray-500 font-light leading-relaxed space-y-1">{children}</div>
    </div>
  )
}
