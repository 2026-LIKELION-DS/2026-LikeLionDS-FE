import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as M from "@styles/MainStyle";
import MainPartInfo from "@components/MainPage/MainPartInfo";
import MainJoin from "@components/MainPage/MainJoin/MainJoin";

import Header from "@components/Header/Header";
import MainFAQ from "../components/MainPage/MainFAQ/MainFAQ";
import MainStartPage from "@components/Main/MainStartPage";
import Main12thProjects from "@components/Main/Main12thProjects";
import MainLastPage from "@components/Main/MainLastPage";
import Footer from "@components/Footer";
import useScrollToSection from "@/hooks/useScrollToSection";
import useScrollObserver from "@/hooks/useScrollObserver";

function Main() {
  const location = useLocation();
  const navigate = useNavigate();
  const { scrollToSection, refs } = useScrollToSection();
  const { activeSection, setActiveManually } = useScrollObserver(refs);

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        scrollToSection(location.state.scrollTo);

        navigate(location.pathname, { replace: true, state: {} });
      }, 100);
    }
  }, [location, scrollToSection, navigate]);

  return (
    <>
      <Header scrollToSection={scrollToSection} activeSection={activeSection} setActiveManually={setActiveManually} />
      <M.Main>
        <div ref={refs.startRef} data-section="start">
          <MainStartPage />
        </div>
        <div ref={refs.partInfoRef} data-section="partInfo">
          <MainPartInfo />
        </div>
        <div ref={refs.projectsRef} data-section="projects">
          <Main12thProjects />
        </div>
        <div ref={refs.joinRef} data-section="join">
          <MainJoin />
        </div>
        <div ref={refs.faqRef} data-section="faq">
          <MainFAQ />
        </div>
        <MainLastPage />
        <Footer isMain={true} />
      </M.Main>
    </>
  );
}

export default Main;
