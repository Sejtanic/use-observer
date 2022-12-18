import React, { useEffect } from "react";

const useObserver = (
  element: string,
  eachtime: boolean,
  addClass: string | null,
  threshold: number,
  callBack: (observed: IntersectionObserverEntry) => void
) => {
  useEffect(() => {
    const cards = document.querySelectorAll(element);
    const observer = new IntersectionObserver(
      (entry) => {
        entry.forEach((entry) => {
          if (entry.isIntersecting) {
            addClass && entry.target.classList.add(addClass);
            callBack(entry);
          } else if (eachtime) {
            addClass && entry.target.classList.remove(addClass);
          }
        });
      },
      {
        threshold,
      }
    );

    cards.forEach((card) => observer.observe(card));
  }, []);
};
export default useObserver;
