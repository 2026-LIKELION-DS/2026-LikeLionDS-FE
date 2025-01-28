import * as M from "@styles/MainFAQStyle";
import JoinRectangle from "../MainJoin/JoinRectangle";
import palette from "@lib/colorPalette";

import baby_face from "@assets/icons/👶 아기.svg";
import FAQRecruitAnswer1 from "./FAQRecruitAnswer1";
import FAQRecruitAnswer2 from "./FAQRecruitAnswer2";
import FAQRecruitAnswer3 from "./FAQRecruitAnswer3";

const FAQRecruitChat = () => {
  return (
    <>
      <div>
        <M.ChatWrapper>
          <M.IconImg src={baby_face} width={"40px"} />
          <p>모집 관련</p>
        </M.ChatWrapper>

        {/* 모집 관련 질문 1 */}
        <JoinRectangle
          width={"207px"}
          height={"60px"}
          borderRadius={"24px"}
          bgr={palette.realOrange.ex2nd}
          color={"#000000"}
          fontWeight={400}
          fontSize={"14px"}
          textAlign={"start"}>
          개발을 잘 몰라도 가능할까요?
          <br />
          코딩을 한 번도 해본 적이 없어요.
        </JoinRectangle>

        {/* 답변 */}
        <FAQRecruitAnswer1 />

        {/* 모집 관련 질문 2 */}
        <JoinRectangle
          width={"169px"}
          height={"42px"}
          borderRadius={"24px"}
          bgr={palette.realOrange.ex2nd}
          color={"#000000"}
          fontWeight={400}
          fontSize={"14px"}
          textAlign={"start"}>
          몇 학년이 가장 많은가요?
        </JoinRectangle>

        {/* 답변 */}
        <FAQRecruitAnswer2 />

        {/* 모집 관련 질문 3 */}
        <JoinRectangle
          width={"193px"}
          height={"42px"}
          borderRadius={"24px"}
          bgr={palette.realOrange.ex2nd}
          color={"#000000"}
          fontWeight={400}
          fontSize={"14px"}
          textAlign={"start"}>
          파트별로 몇 명씩 모집하나요?
        </JoinRectangle>

        {/* 답변 */}
        <FAQRecruitAnswer3 />
      </div>
    </>
  );
};

export default FAQRecruitChat;
