import * as M from "@styles/FAQuestionStyle";
import send from "@assets/icons/icon_send.svg";
import { useNavigate } from "react-router";

const FAQuestion = ({ text }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/qna");
  };

  return (
    <M.MsgContainer>
      <M.MsgInput type="text" placeholder={text} readOnly={true} onClick={handleClick}></M.MsgInput>
      <M.SendBtn onClick={handleClick}>
        <img src={send} />
      </M.SendBtn>
    </M.MsgContainer>
  );
};

export default FAQuestion;
