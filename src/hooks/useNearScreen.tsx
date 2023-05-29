import { useEffect, useRef, useState } from 'react';

export function useNearScreen(): [boolean, React.RefObject<HTMLDivElement>] {
  const el = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          console.log('si');
          setShow(true);
          observer.disconnect();
        }
      });

      if (el.current) {
        observer.observe(el.current);
      }

      return () => {
        if (el.current) {
          observer.unobserve(el.current);
        }
      };
    });
  }, []);

  return [show, el];
}
