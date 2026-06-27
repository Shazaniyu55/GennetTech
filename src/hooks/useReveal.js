import { useEffect, useRef, useState } from "react";

/**
 * useReveal — adds an "is-visible" trigger when the element scrolls into view.
 * Usage:
 *   const { ref, visible } = useReveal();
 *   <div ref={ref} className={`reveal ${visible ? "is-visible" : ""}`} />
 */
export default function useReveal(options = { threshold: 0.15 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return { ref, visible };
}
