"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 20, suffix: "+", label: "Years of Experience" },
  { value: 1000, suffix: "+", label: "Skilled Employees" },
  { value: 50, suffix: "+", label: "Government Projects" },
  { value: 25, suffix: "M+", label: "Meter Readings Done" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const step = Math.ceil(target / 55);
          const timer = setInterval(() => {
            setCount((c) => {
              const next = c + step;
              if (next >= target) { clearInterval(timer); return target; }
              return next;
            });
          }, 28);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="flex items-baseline justify-center gap-0.5">
      <span className="font-heading text-3xl sm:text-4xl xl:text-5xl font-extrabold text-gold-light">
        {count.toLocaleString()}
      </span>
      <span className="font-heading text-xl sm:text-2xl xl:text-3xl font-extrabold text-gold-light">
        {suffix}
      </span>
    </div>
  );
}

export default function Stats() {
  return (
    <div className="bg-navy py-12 sm:py-14 lg:py-16 xl:py-20 px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 xl:gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center px-2 sm:px-4 py-3 xl:py-4">
            <Counter target={s.value} suffix={s.suffix} />
            <div className="w-6 sm:w-7 h-0.5 bg-gold mx-auto my-2 sm:my-2.5" />
            <p className="text-[11px] sm:text-[12.5px] xl:text-[13px] text-white/[0.52] font-medium">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
