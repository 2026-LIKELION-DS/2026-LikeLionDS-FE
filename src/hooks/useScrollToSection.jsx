import { useRef } from "react";

function useScrollToSection() {
  const HEADER_HEIGHT = 56; // 헤더 높이 설정
  const startRef = useRef(null);
  const partInfoRef = useRef(null);
  const projectsRef = useRef(null);
  const joinRef = useRef(null);
  const faqRef = useRef(null);

  const scrollToSection = (section) => {
    const sectionRefs = {
      start: startRef,
      partInfo: partInfoRef,
      projects: projectsRef,
      join: joinRef,
      faq: faqRef,
    };

    setTimeout(() => {
      if (sectionRefs[section]?.current) {
        const element = sectionRefs[section].current;
        const topOffset = element.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;

        window.scrollTo({ top: topOffset, behavior: "smooth" });
      }
    }, 100);
  };

  return { scrollToSection, refs: { startRef, partInfoRef, projectsRef, joinRef, faqRef } };
}

export default useScrollToSection;
