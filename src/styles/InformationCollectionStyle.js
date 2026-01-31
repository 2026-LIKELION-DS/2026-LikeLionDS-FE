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

export const ContentsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const ContentsTitle = styled.div`
  font-weight: 600;
`;
export const Contents = styled.div`
  font-size: 14px;
  font-weight: 400;
`;
export const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const QButton = styled.button`
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
export const AgreeGrid = styled.div`
  margin: 36px 0;
  display: flex;
  width: 100%;
  gap: 8px;
  flex: 1 0 0;
  cursor: pointer;
  flex-direction: column;
`;

export const AgreeBox = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 8px;
  flex: 1 0 0;
  cursor: pointer;
`;

export const NextButton = styled.button`
  width: 370px;
  padding: 0 99px;
  height: 56px;
  border-radius: 88px;
  border: none;
  background-color: ${palette.realOrange.ex5Primary};
  color: ${palette.style.white};

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
  margin-top: 36px;
`;
