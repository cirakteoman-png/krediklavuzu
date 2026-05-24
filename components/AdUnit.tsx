'use client';

import { useEffect, useRef } from 'react';

interface Props {
  slot: string;
  format?: 'auto' | 'rectangle' | 'vertical' | 'horizontal';
  className?: string;
  style?: React.CSSProperties;
}

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export default function AdUnit({ slot, format = 'auto', className = '', style }: Props) {
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {}
  }, []);

  return (
    <ins
      className={`adsbygoogle block ${className}`}
      style={style}
      data-ad-client="ca-pub-5873246208638372"
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive="true"
    />
  );
}
