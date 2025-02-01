import * as M from "@styles/MainFAQStyle";
import JoinRectangle from "../MainJoin/JoinRectangle";
import palette from "@lib/colorPalette";

import baby_face from "@assets/icons/👶 아기.svg";
import FAQRecruitAnswer1 from "./FAQRecruitAnswer1";
import FAQRecruitAnswer2 from "./FAQRecruitAnswer2";
import FAQRecruitAnswer3 from "./FAQRecruitAnswer3";
import { useState } from "react";

const FAQRecruitChat = ({ isClicked, handleChatClick }) => {
  return (
    <>
      <M.ComponentContainer $marginTop={"66px"} width={"100%"}>
        <M.ChatWrapper>
          <M.IconImg src={baby_face} width={"40px"} />
          <p>모집 관련</p>
        </M.ChatWrapper>
        <M.ComponentContainer $marginTop={"16px"} onClick={() => handleChatClick(1)} width={"100%"} cursor={"pointer"}>
          {/* 모집 관련 질문 1 */}
          <JoinRectangle
            width={"207px"}
            height={"60px"}
            $borderRadius={"24px"}
            $bgr={isClicked === 1 ? palette.realOrange.ex4 : palette.realOrange.ex2nd}
            color={isClicked === 1 ? palette.style.white : "#000000"}
            fontWeight={400}
            fontSize={"14px"}
            $textAlign={"start"}>
            개발을 잘 몰라도 가능할까요?
            <br />
            코딩을 한 번도 해본 적이 없어요.
          </JoinRectangle>
        </M.ComponentContainer>

        {/* 답변 */}
        {isClicked === 1 && <FAQRecruitAnswer1 />}

        {/* 모집 관련 질문 2 */}
        <M.ComponentContainer $marginTop={"12px"} onClick={() => handleChatClick(2)} width={"100%"} cursor={"pointer"}>
          <JoinRectangle
            width={"169px"}
            height={"42px"}
            $borderRadius={"24px"}
            $bgr={isClicked === 2 ? palette.realOrange.ex4 : palette.realOrange.ex2nd}
            color={isClicked === 2 ? palette.style.white : "#000000"}
            fontWeight={400}
            fontSize={"14px"}
            $textAlign={"start"}>
            몇 학년이 가장 많은가요?
          </JoinRectangle>
        </M.ComponentContainer>

        {/* 답변 */}
        {isClicked === 2 && <FAQRecruitAnswer2 />}

        {/* 모집 관련 질문 3 */}
        <M.ComponentContainer $marginTop={"12px"} onClick={() => handleChatClick(3)} width={"100%"} cursor={"pointer"}>
          <JoinRectangle
            width={"193px"}
            height={"42px"}
            $borderRadius={"24px"}
            $bgr={isClicked === 3 ? palette.realOrange.ex4 : palette.realOrange.ex2nd}
            color={isClicked === 3 ? palette.style.white : "#000000"}
            fontWeight={400}
            fontSize={"14px"}
            $textAlign={"start"}>
            파트별로 몇 명씩 모집하나요?
          </JoinRectangle>
        </M.ComponentContainer>

        {/* 답변 */}
        {isClicked === 3 && <FAQRecruitAnswer3 />}
      </M.ComponentContainer>
    </>
  );
};

export default FAQRecruitChat;
