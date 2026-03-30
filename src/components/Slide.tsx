import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../lib/utils';

interface SlideProps extends React.ComponentProps<"div"> {
  children: React.ReactNode;
  className?: string;
}

export function Slide({ children, className, ...props }: SlideProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width } = entry.contentRect;
        setScale(width / 1280);
      }
    });
    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={wrapperRef} 
      className="w-full aspect-video relative overflow-hidden bg-white shadow-2xl rounded-xl border border-gray-200"
    >
      <div
        className={cn("absolute top-0 left-0 flex flex-col bg-white", className)}
        style={{
          width: '1280px',
          height: '720px',
          transform: `scale(${scale})`,
          transformOrigin: 'top left'
        }}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}

export function SlideHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="w-full px-8 py-4 flex flex-col justify-center border-b-[4px] border-[#2563EB] bg-white shrink-0 relative">
      <div className="absolute top-4 right-8 flex items-center gap-2 text-[#2563EB]">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5l-10 14M7 5l10 14M22 12H2M19.07 19.07L4.93 4.93M19.07 4.93L4.93 19.07" />
        </svg>
        <span className="text-2xl font-bold tracking-tight">Kimbal</span>
      </div>
      <h1 className="text-[24px] font-bold text-slate-900 leading-tight tracking-tight pr-32">
        {title}
      </h1>
      {subtitle && (
        <p className="text-[14px] text-slate-600 mt-1 leading-snug max-w-[95%]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
