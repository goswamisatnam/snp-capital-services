interface SkeletonProps {
  className?: string
}
export default function Skeleton({ className = '' }: SkeletonProps) {
  return <div className={`animate-pulse bg-navy-100 rounded-brand ${className}`} />
}
