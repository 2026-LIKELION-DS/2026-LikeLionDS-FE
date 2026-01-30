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
  margin: 0 20px;
  display: flex;
  gap: 50px;
  flex-direction: column;
`;
export const FormTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

// 인적사항
export const InformationFormGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;
export const InfoTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  padding: 12px 0;
`;
export const InfoEdit = styled.button`
  font-size: 12px;
  font-weight: 300;
  color: ${palette.style.white};
  background-color: ${palette.boldBlack.ex10Primary};
  border: none;
  cursor: pointer;
`;

export const InfoBox = styled.div``;
export const InfoNameText = styled.div`
  font-weight: 600;
  margin-bottom: 16px;
`;
export const InfoName = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${palette.boldBlack.ex4};
`;

export const InfoPhone = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${palette.boldBlack.ex4};
`;

export const InfoMail = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${palette.boldBlack.ex4};
`;

//문항답변
export const CommonPartBox = styled.div``;
export const AnswerFormGrid = styled.div`
  display: flex;
  gap: 36px;
  flex-direction: column;
`;
export const AnsTitle = styled.div``;
export const AnsEdit = styled.button`
  font-size: 12px;
  font-weight: 300;
  color: ${palette.style.white};
  background-color: ${palette.boldBlack.ex10Primary};
  border: none;
  cursor: pointer;
`;

export const CoText = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
`;
export const CoQ = styled.div`
  font-weight: 600;
  margin: 16px 0;
`;
export const CoQA = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${palette.boldBlack.ex4};
  white-space: pre-wrap;
  word-break: break-word;
  overflow-wrap: anywhere;
`;
export const CoQABox = styled.div``;

//버튼 제출
export const Fixed = styled.div`
  width: 48px;
  height: 48px;

  position: ${({ $withNext }) => ($withNext ? "sticky" : "fixed")};
  bottom: ${({ $withNext }) => ($withNext ? "120px" : "24px")};
  right: ${({ $withNext }) => ($withNext ? "auto" : "24px")};
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

export const FixedBox = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
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
