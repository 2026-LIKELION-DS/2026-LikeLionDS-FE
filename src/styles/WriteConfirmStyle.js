import styled from "styled-components";
import palette from "@lib/colorPalette";

export const Space = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  margin: 40px 7.5px 0px 7.5px;
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
`;
export const FormTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

// 인적사항
export const InformationFormGrid = styled.div``;
export const InfoTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
export const InfoEdit = styled.div``;

export const InfoBox = styled.div``;
export const InfoNameText = styled.div``;
export const InfoName = styled.div``;

export const InfoPhoneText = styled.div``;
export const InfoPhone = styled.div``;

export const InfoMailText = styled.div``;
export const InfoMail = styled.div``;

//문항답변
export const AnswerFormGrid = styled.div``;
export const AnsTitle = styled.div``;
export const AnsEdit = styled.div``;

export const CoText = styled.div``;
export const CoQ = styled.div``;
export const CoQA = styled.div``;
export const CoQABox = styled.div``;

//버튼 제출
export const Fixed = styled.div`
  width: 48px;
  height: 48px;

  position: sticky;
  bottom: 120px;
  margin-left: auto;

  z-index: 1000;

  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 99999px;
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

  font-size: 20px;
  font-weight: 500;

  cursor: pointer;

  box-shadow: 0px 0px 20px 0px rgba(255, 119, 16, 0.2);

  &:disabled {
    background-color: ${palette.boldBlack.ex6};
    box-shadow: none;
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
