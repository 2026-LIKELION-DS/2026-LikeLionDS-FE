import styled from "styled-components";
import palette from "@lib/colorPalette";

export const Space = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  margin: 40px 24px 0px 24px;

  min-height: 100dvh;
`;
export const StepIcon = styled.img`
  display: flex;
  width: 176px;
  height: 16px;
  margin: 36px 0;
`;

export const StepTitle = styled.div`
  font-size: 20px;
`;
export const StepText = styled.div`
  font-size: 20px;
`;
export const StepGrid = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 24px 0 24px 0;
`;

export const FormGrid = styled.div`
  display: flex;
  gap: 56px;
  flex-direction: column;
  margin: 0 20px 20px 20px;
`;
export const CommonQGrid = styled.div``;
export const QTitle = styled.div`
  margin: 12px 0;
  font-size: 20px;
  font-weight: 600;
`;
export const QBox = styled.div``;

export const QBoxG = styled.div`
  display: flex;
  gap: 36px;
  flex-direction: column;
  margin-top: 16px;
`;

export const QInput = styled.textarea`
  cursor: pointer;
  outline: none;
  border: none;
  resize: none;
  resize: none;
  max-height: 280px;
  min-height: 18px;
  font-family: Pretendard;
  width: 100%;
`;

export const QInputBox = styled.div`
  position: relative;
  border: none;
  resize: none;
  outline: none;
  margin-top: 18px;
  min-height: 74px;
  line-height: 1.5;
  border-radius: 16px;
  padding: 12px;
  display: flex; // 추가된 부분
  flex-direction: column; // 추가된 부분
  max-height: 300px;
  background: ${palette.style.white};
`;

export const TextCount = styled.div`
  position: absolute;
  right: 12px;
  bottom: 8px;
  margin-top: 20px;
  color: ${palette.boldBlack.ex5};
  display: flex;
  font-size: 12px;
`;
export const WriteText = styled.span`
  color: ${palette.boldBlack.ex5};
  font-size: 12px;
`;

export const Question = styled.div`
  font-weight: 600;
`;

export const PartQGrid = styled.div``;
export const PartQ = styled.span``;

export const QEx = styled.div`
  font-size: 12px;
  font-weight: 300;
  color: ${palette.boldBlack.ex5};
`;

export const PartQButton = styled.button`
  padding: 12px 24px;
  font-size: 14px;
  border-radius: 12px;
  cursor: pointer;
  text-align: center;
  width: 100%;
  letter-spacing: -0.42px;
  background-color: ${({ $selected }) => ($selected ? palette.realOrange.ex5Primary : palette.style.white)};
  color: ${({ $selected }) => ($selected ? palette.style.white : palette.boldBlack.ex10Primary)};
  border: none;
  &:active {
    transform: scale(0.97);
  }
`;
export const ButtonGrid = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 8px;
  flex: 1 0 0;
  cursor: pointer;
`;

export const Fixed = styled.div`
  width: 48px;
  height: 48px;

  position: ${({ $withNext }) => ($withNext ? "sticky" : "fixed")};
  bottom: ${({ $withNext }) => ($withNext ? "30px" : "24px")};
  right: calc(50% - 150px);
  margin-left: ${({ $withNext }) => ($withNext ? "auto" : "0")};

  z-index: 1000;
  margin-bottom: 15px;

  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: ${palette.realOrange.ex5Primary};

  &:active {
    transform: scale(0.97);
  }
`;

export const UpIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const NextButton = styled.button`
  width: 100%;
  padding: 0 99px;
  margin: 20px 20px 20px 20px;
  height: 56px;
  border-radius: 88px;
  border: none;
  background-color: ${palette.realOrange.ex5Primary};
  color: ${palette.style.white};
  white-space: nowrap;

  font-size: 20px;
  font-weight: 500;

  cursor: pointer;

  box-shadow: 0px 0px 20px 0px rgba(255, 119, 16, 0.2);

  &:disabled {
    background-color: ${palette.boldBlack.ex6};
    cursor: not-allowed;
    &:active {
      transform: none;
    }
  }
  &:active {
    transform: scale(0.97);
  }
`;

export const NextButtonGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
