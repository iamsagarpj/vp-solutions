import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  centered = false,
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-10 lg:mb-14", centered && "text-center", className)}>
      <p
        className={cn(
          "text-[10px] sm:text-[11px] font-bold tracking-[3px] uppercase mb-2 sm:mb-2.5",
          light ? "text-gold-light" : "text-gold"
        )}
      >
        {label}
      </p>
      <h2
        className={cn(
          "font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] 2xl:text-[46px] font-extrabold leading-tight mb-3 sm:mb-3.5",
          light ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-sm sm:text-base leading-relaxed max-w-2xl",
            light ? "text-white/50" : "text-slate-500",
            centered && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
