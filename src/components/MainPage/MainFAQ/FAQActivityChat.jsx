import * as M from "@styles/MainFAQStyle";
import JoinRectangle from "../MainJoin/JoinRectangle";
import palette from "@lib/colorPalette";

import baby_face from "@assets/icons/👶 아기.svg";

import FAQActivityAnswer1 from "./FAQActivityAnswer1";
import FAQActivityAnswer2 from "./FAQActivityAnswer2";
import FAQActivityAnswer3 from "./FAQActivityAnswer3";
import FAQActivityAnswer4 from "./FAQActivityAnswer4";
import { useState } from "react";

const FAQActivityChat = ({ isClicked, handleChatClick }) => {
  return (
    <>
      <M.ComponentContainer $marginTop={"38px"} width={"100%"}>
        <M.ChatWrapper>
          <M.IconImg src={baby_face} width={"40px"} />
          <p>활동 관련</p>
        </M.ChatWrapper>

        {/* 활동 관련 질문 1 */}
        <M.ComponentContainer $marginTop={"16px"} onClick={() => handleChatClick(4)} width={"100%"} cursor={"pointer"}>
          <JoinRectangle
            width={"190px"}
            height={"60px"}
            $borderRadius={"24px"}
            $bgr={isClicked === 4 ? palette.realOrange.ex4 : palette.realOrange.ex2nd}
            color={isClicked === 4 ? "#fff" : "#000000"}
            fontWeight={400}
            fontSize={"14px"}
            $textAlign={"start"}>
            세션과 스터디의 차이가 뭔지,
            <br /> 무엇을 하는지 궁금해요!
          </JoinRectangle>
        </M.ComponentContainer>

        {/* 답변 */}
        {isClicked === 4 && <FAQActivityAnswer1 />}

        {/* 활동 관련 질문 2 */}
        <M.ComponentContainer $marginTop={"12px"} onClick={() => handleChatClick(5)} width={"100%"} cursor={"pointer"}>
          <JoinRectangle
            width={"231px"}
            height={"42px"}
            $borderRadius={"24px"}
            $bgr={isClicked === 5 ? palette.realOrange.ex4 : palette.realOrange.ex2nd}
            color={isClicked === 5 ? "#fff" : "#000000"}
            fontWeight={400}
            fontSize={"14px"}
            $textAlign={"start"}>
            세션과 스터디 모두 필수 참여인가요?
          </JoinRectangle>
        </M.ComponentContainer>

        {/* 답변 */}
        {isClicked === 5 && <FAQActivityAnswer2 />}

        {/* 활동 관련 질문 3 */}
        <M.ComponentContainer $marginTop={"12px"} onClick={() => handleChatClick(6)} width={"100%"} cursor={"pointer"}>
          <JoinRectangle
            width={"178px"}
            height={"42px"}
            $borderRadius={"24px"}
            $bgr={isClicked === 6 ? palette.realOrange.ex4 : palette.realOrange.ex2nd}
            color={isClicked === 6 ? "#fff" : "#000000"}
            fontWeight={400}
            fontSize={"14px"}
            $textAlign={"start"}>
            학업과 병행이 가능한가요?
          </JoinRectangle>
        </M.ComponentContainer>

        {/* 답변 */}
        {isClicked === 6 && <FAQActivityAnswer3 />}

        {/* 활동 관련 질문 4 */}
        <M.ComponentContainer $marginTop={"12px"} onClick={() => handleChatClick(7)} width={"100%"} cursor={"pointer"}>
          <JoinRectangle
            width={"231px"}
            height={"78px"}
            $borderRadius={"24px"}
            $bgr={isClicked === 7 ? palette.realOrange.ex4 : palette.realOrange.ex2nd}
            color={isClicked === 7 ? "#fff" : "#000000"}
            fontWeight={400}
            fontSize={"14px"}
            $textAlign={"start"}>
            해커톤에 대해 궁금해요!
            <br /> 해커톤은 몇 번 있는지, 필수 참여인지
            <br />
            궁금해요.
          </JoinRectangle>
        </M.ComponentContainer>

        {/* 답변 */}
        {isClicked === 7 && <FAQActivityAnswer4 />}
      </M.ComponentContainer>
    </>
  );
};

export default FAQActivityChat;
