import { useEffect, useRef } from 'react';

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    el.querySelectorAll('.reveal').forEach((child) => observer.observe(child));
    if (el.classList.contains('reveal')) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return ref;
}
