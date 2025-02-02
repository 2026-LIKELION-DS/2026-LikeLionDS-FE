import styled, { keyframes } from "styled-components";
import palette from "@lib/colorPalette";

export const QuestionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
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
  min-height: 30px;
  max-width: 77%;
  padding: 20px 25px;
  border-radius: 40px;
  margin-right: 0;
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
  right: 15px;

  img {
    filter: brightness(0) invert(0);
  }
`;

export const AnswerBubble = styled.div`
  background-color: ${palette.style.white};
  border: 1px solid #ccc;
  border-radius: 40px;
  padding: 20px 25px 15px 25px;
  width: 250px;
  min-height: 30px;
  word-wrap: break-word;
  white-space: pre-wrap;
  color: black;
  margin-left: 35px;
  line-height: 1.4;
  font-size: 16px;
  letter-spacing: 0.01px;
`;

export const AnswerInput = styled.textarea`
  background-color: ${palette.style.white};
  border: 1px solid #ccc;
  border-radius: 40px;
  padding: 20px 25px 3px 25px;
  width: 250px;
  height: auto;
  resize: none;
  overflow-y: hidden;
  outline: none;
  font-size: 16px;
  line-height: 1.4;
  margin-left: 35px;

  margin-bottom: 0;
  padding-bottom: 0;
`;

export const ArrowButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 13px;

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
