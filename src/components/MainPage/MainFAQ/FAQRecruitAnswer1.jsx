import * as M from "@styles/MainFAQStyle";
import * as M_ from "@styles/FAQActivityAnswer1Style";
import JoinRectangle from "../MainJoin/JoinRectangle";
import palette from "@lib/colorPalette";

import lion_face from "@assets/icons/🦁 사자 얼굴.svg";

const FAQRecruitAnswer1 = () => {
  return (
    <>
      <M_.AnswerContainer>
        <M.ChatWrapper>
          <M.IconImg src={lion_face} width={"40px"} />
        </M.ChatWrapper>

        {/* 모집 관련 1번 답변 */}
        <M.ComponentContainer $marginTop={"8px"}>
          <JoinRectangle
            width={"99px"}
            height={"42px"}
            $borderRadius={"24px"}
            $bgr={palette.boldBlack.ex2}
            color={palette.boldBlack.ex10Primary}
            fontWeight={700}
            fontSize={"14px"}
            $textAlign={"start"}>
            가능합니다.
          </JoinRectangle>
        </M.ComponentContainer>

        <M.ComponentContainer $marginTop={"8px"}>
          <JoinRectangle
            width={"246px"}
            height={"96px"}
            $borderRadius={"24px"}
            $bgr={palette.boldBlack.ex2}
            color={palette.boldBlack.ex10Primary}
            fontWeight={400}
            fontSize={"14px"}
            $textAlign={"start"}>
            멋쟁이사자처럼은 비전공자들도 코딩을
            <br /> 배우며 자신만의 아이디어를 실현하는
            <br />
            동아리입니다.&nbsp;
            <b style={{ fontWeight: "700" }}>기초부터 알려드리기 때문에</b>
            <br />
            <b style={{ fontWeight: "700" }}>개발을 잘 몰라도 참여하실 수 있습니다.</b>
          </JoinRectangle>
        </M.ComponentContainer>

        <M.ComponentContainer $marginTop={"8px"}>
          <JoinRectangle
            width={"163px"}
            height={"60px"}
            $borderRadius={"24px"}
            $bgr={palette.boldBlack.ex2}
            color={palette.boldBlack.ex10Primary}
            fontWeight={400}
            fontSize={"14px"}
            $textAlign={"start"}>
            기획•디자인 파트는
            <br /> 개발이 필요하지 않아요!
          </JoinRectangle>
        </M.ComponentContainer>
      </M_.AnswerContainer>
    </>
  );
};

export default FAQRecruitAnswer1;
