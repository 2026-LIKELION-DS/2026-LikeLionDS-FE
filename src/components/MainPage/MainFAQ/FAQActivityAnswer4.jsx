import * as M from "@styles/MainFAQStyle";
import * as M_ from "@styles/FAQActivityAnswer1Style";
import JoinRectangle from "../MainJoin/JoinRectangle";
import palette from "@lib/colorPalette";

import lion_face from "@assets/icons/🦁 사자 얼굴.svg";

const FAQActivityAnswer4 = () => {
  return (
    <>
      <M_.AnswerContainer>
        <M.ChatWrapper>
          <M.IconImg src={lion_face} width={"40px"} />
        </M.ChatWrapper>

        {/* 활동 관련 4번 답변 */}
        <M.ComponentContainer $marginTop={"8px"}>
          <JoinRectangle
            width={"246px"}
            height={"60px"}
            $borderRadius={"24px"}
            $bgr={palette.boldBlack.ex2}
            color={palette.boldBlack.ex10Primary}
            fontWeight={400}
            fontSize={"14px"}
            $textAlign={"start"}>
            작년 13기 기준 1번의 아이디어톤과 3번
            <br />의 해커톤에 참여할 수 있었어요.
          </JoinRectangle>
        </M.ComponentContainer>

        <M.ComponentContainer $marginTop={"8px"}>
          <JoinRectangle
            width={"246px"}
            height={"100px"}
            $borderRadius={"24px"}
            $bgr={palette.boldBlack.ex2}
            color={palette.boldBlack.ex10Primary}
            fontWeight={400}
            fontSize={"14px"}
            $textAlign={"start"}>
              이번 14기는&nbsp;
            <b style={{ fontWeight: "700", width: "206.87px"}}>
              중앙 아이디어톤과 중앙 
              <br />해커톤, 그리고 2학기 연합/기업 
              해커톤 
              <br />1회 이상이 필수 참여
            </b>
            이고, 나머지는 
            <br />율 참여에요.
          </JoinRectangle>
        </M.ComponentContainer>

        <M.ComponentContainer $marginTop={"8px"}>
          <JoinRectangle
            width={"246px"}
            height={"60px"}
            $borderRadius={"24px"}
            $bgr={palette.boldBlack.ex2}
            color={palette.boldBlack.ex10Primary}
            fontWeight={400}
            fontSize={"14px"}
            $textAlign={"start"}>
            이외의 내용은 각 기수마다 달라질 수 있<br />
            으니 참고 부탁드려요!
          </JoinRectangle>
        </M.ComponentContainer>
      </M_.AnswerContainer>
    </>
  );
};

export default FAQActivityAnswer4;
