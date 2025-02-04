import * as M_ from "@styles/PartInfoStyle";
import * as M from "@styles/MainFAQStyle";

import icon_underline_orange from "@assets/icons/icon_underline_orange.svg";
import FAQRobotChat from "./FAQRobotChat";
import FAQLine from "./FAQLine";
import FAQRecruitChat from "./FAQRecruitChat";
import FAQActivityChat from "./FAQActivityChat";
import FAQuestion from "./FAQuestion";
import FAQWriting from "./FAQWriting";
import { useState } from "react";

const MainFAQ = () => {
  const [isClicked, setIsClicked] = useState(null);
  const handleChatClick = (key) => {
    setIsClicked((prevKey) => (prevKey === key ? null : key));
  };
  return (
    <M_.PageContainer>
      <M_.ComponentContainer $width={"342px"}>
        {/* 자주 묻는 질문 */}
        <M.ComponentContainer>
          <M_.TextWrapper $fontSize={"28px"} $fontWeight={600}>
            자주 묻는 질문
          </M_.TextWrapper>
          <M_.ImgWrapper width={"153px"}>
            <img src={icon_underline_orange} />
          </M_.ImgWrapper>
        </M.ComponentContainer>

        {/* 채팅 - 로봇 */}
        <FAQRobotChat />

        {/* 입장 */}
        <FAQLine text={"아기사자님과 운영진님이 입장하셨습니다."} $marginTop={"38px"} />

        {/* 모집 관련 */}
        <FAQRecruitChat isClicked={isClicked} handleChatClick={handleChatClick} />

        {/* 활동 관련 */}
        <FAQActivityChat isClicked={isClicked} handleChatClick={handleChatClick} />

        {/* 입력중 */}
        <FAQWriting isClicked={isClicked} />

        {/* 퇴장 */}
        <FAQLine text={"아기사자님과 운영진님이 퇴장하셨습니다."} $marginTop={"72px"} />

        {/* 질문 */}
        <FAQuestion text={"더 궁금한 내용을 질문해주세요!"} />
      </M_.ComponentContainer>
    </M_.PageContainer>
  );
};

export default MainFAQ;
