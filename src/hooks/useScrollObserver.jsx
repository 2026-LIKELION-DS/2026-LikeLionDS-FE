import { useState, useEffect } from "react";

function useScrollObserver(refs) {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    if (!refs) return;

    const observerOptions = {
      root: null, // viewport 기준
      rootMargin: "-50% 0px -50% 0px", // 50% 이상 화면에 보이면 감지
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      let newActiveSection = activeSection;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          newActiveSection = entry.target.getAttribute("data-section");
        }
      });

      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    Object.values(refs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    const setInitialActiveSection = () => {
      for (let key in refs) {
        if (refs[key]?.current) {
          const rect = refs[key].current.getBoundingClientRect();
          if (rect.top >= 0 && rect.bottom >= window.innerHeight * 0.5) {
            setActiveSection(refs[key].current.getAttribute("data-section"));
            break;
          }
        }
      }
    };

    setInitialActiveSection();

    const handleScroll = () => {
      setInitialActiveSection();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [refs, activeSection]);

  const setActiveManually = (section) => {
    setActiveSection(section);
  };

  return { activeSection, setActiveManually };
}

export default useScrollObserver;
