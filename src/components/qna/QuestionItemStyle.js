import styled, { keyframes } from "styled-components";
import palette from "@lib/colorPalette";

export const WrapContainer = styled.div`
  padding: 0 20px;
`;

export const QuestionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 14px;
`;

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;
`;

export const QuestionBubbleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${palette.realOrange.ex2};
  color: #000000;
  word-wrap: break-word;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  word-break: break-word;
  width: 100%;
  min-height: 18px;
  max-width: 77%;
  padding: 15px 16px;
  border-radius: 30px;
  margin-right: 0;
  // margin-left: 20px;
`;

export const AnswerContainer = styled.div`
  display: flex;
  position: relative;
  margin-left: 40px;
  margin-top: 10px;
  padding-top: 13px;
  font-size: 16px;
  cursor: pointer;

  & img.reply {
    width: 28px;
    position: absolute;
  }
`;

export const CloseButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  cursor: pointer;
  position: absolute;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(8.6px);
  border-radius: 50%;
  top: 0px;
  right: 10px;

  img {
    width: 20px;
    height: 20px;
    filter: brightness(0) invert(0);
    position: absolute;
    top: 5px;
    right: 5px;
  }
`;

export const CloseArrowButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  cursor: pointer;
  position: absolute;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(8.6px);
  border-radius: 50%;
  top: 0px;
  right: 10px;

  img {
    width: 20px;
    height: 20px;
    filter: brightness(0) invert(0);
    position: absolute;
    top: 4px;
    right: 3px;
  }
`;

export const AnswerBubble = styled.div`
  background-color: ${palette.style.white};
  border: 1px solid #ccc;
  border-radius: 40px;
  padding: 15px 16px;
  width: 100%;
  min-height: 30px;
  word-wrap: break-word;
  white-space: pre-wrap;
  color: black;
  margin-left: 35px;
  line-height: 1.4;
  font-size: 14px;
  letter-spacing: 0.01px;
  min-height: 18px;
`;

export const AnswerInput = styled.textarea`
  background-color: ${palette.style.white};
  border: 1px solid #ccc;
  border-radius: 40px;
  padding: 15px 16px 0px 16px;
  width: 100%;
  height: auto;
  resize: none;
  overflow-y: hidden;
  outline: none;
  font-size: 16px;
  line-height: 1.4;
  margin-left: 35px;
  margin-bottom: 0;
  padding-bottom: 0;
  color: #000;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: -0.42px;
`;

export const ArrowButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 5px;

  img {
    width: 28px;
    height: 28px;
    filter: brightness(0) invert(1);
  }
`;

// 🔹 모달 페이드 인 애니메이션
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 300ms ease-in-out;
  z-index: 10000;
`;

export const ModalContent = styled.div`
  width: 281px;
  height: 126px;
  background: ${palette.style.white};
  border-radius: 25px;
  border: 1px solid #dcdcdc;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 300ms ease-in-out;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
`;

export const ModalTitle = styled.p`
  font-size: 17px;
  font-weight: 600;
  color: #182035;
  line-height: 22.1px;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 25px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  border-top: 1px solid #dcdcdc;
`;

export const CancelButton = styled.button`
  width: 50%;
  height: 50px;
  color: #606268;
  background: none;
  font-size: 16px;
  font-weight: 500;
  border: none;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 10px;
    right: 0;
    height: 30px;
    width: 1px;
    background-color: #dcdcdc;
  }
`;

export const ConfirmButton = styled.button`
  width: 50%;
  height: 50px;
  background: none;
  color: ${palette.realOrange.ex5Primary};
  font-size: 16px;
  font-weight: 500;
  border: none;
  cursor: pointer;
`;
