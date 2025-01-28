import * as M_ from "@styles/PartInfoStyle";
import * as M from "@styles/MainFAQStyle";

import icon_underline_orange from "@assets/icons/icon_underline_orange.svg";
import FAQRobotChat from "./FAQRobotChat";
import FAQLine from "./FAQLine";
import FAQRecruitChat from "./FAQRecruitChat";
import FAQActivityChat from "./FAQActivityChat";
import FAQuestion from "./FAQuestion";

const MainFAQ = () => {
  return (
    <>
      {/* 자주 묻는 질문 */}
      <M_.TextWrapper $fontSize={"28px"} $fontWeight={600}>
        자주 묻는 질문
      </M_.TextWrapper>
      <M_.ImgWrapper width={"153px"}>
        <img src={icon_underline_orange} />
      </M_.ImgWrapper>
      {/* 채팅 - 로봇 */}
      <FAQRobotChat />

      {/* 입장 */}
      <FAQLine text={"아기사자님과 운영진님이 입장하셨습니다."} />

      {/* 모집 관련 */}
      <FAQRecruitChat />

      {/* 활동 관련 */}
      <FAQActivityChat />

      {/* 입력중 */}

      {/* 퇴장 */}
      <FAQLine text={"아기사자님과 운영진님이 퇴장하셨습니다."} />

      {/* 질문 */}
      <FAQuestion text={"더 궁금한 내용을 질문해주세요!"} />
    </>
  );
};

export default MainFAQ;
