'use client';

import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  /** Sıralı beliriş gecikmesi (1-5) */
  delay?: 1 | 2 | 3 | 4 | 5;
  /** Sarmalayıcı etiketi (varsayılan div) */
  as?: ElementType;
  className?: string;
};

/**
 * Görünüm alanına girince içeriği yumuşakça yukarı kaydırarak gösterir.
 * Stil app/globals.css içindeki .reveal / .is-visible ile gelir.
 */
export default function Reveal({ children, delay, as: Tag = 'div', className = '' }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      {...(delay ? { 'data-delay': delay } : {})}
    >
      {children}
    </Tag>
  );
}
