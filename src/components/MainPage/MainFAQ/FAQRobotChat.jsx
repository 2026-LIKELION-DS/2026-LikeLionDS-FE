import * as M from "@styles/MainFAQStyle";
import JoinRectangle from "../MainJoin/JoinRectangle";
import palette from "@lib/colorPalette";

import robot_face from "@assets/icons/🤖 로봇 얼굴.svg";

const FAQRobotChat = () => {
  return (
    <>
      <div>
        <M.ChatWrapper>
          <M.IconImg src={robot_face} width={"40px"} />
          <JoinRectangle
            width={"289px"}
            height={"48px"}
            borderRadius={"51px"}
            bgr={palette.boldBlack.ex7}
            color={palette.style.white}
            fontWeight={400}
            fontSize={"14px"}
            textAlign={"start"}>
            궁금하신 질문을 선택해 답변을 확인해보세요!
          </JoinRectangle>
        </M.ChatWrapper>
      </div>
    </>
  );
};

export default FAQRobotChat;
