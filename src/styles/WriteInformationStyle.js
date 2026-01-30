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
  gap: 36px;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 12px;
  box-sizing: border-box;
`;

export const Name = styled.div``;
export const NameText = styled.div`
  margin-bottom: 16px;
`;
export const NameInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 12px;
  border-radius: 16px;
  outline: none;
  border: none;
  /* border: 1px solid ${palette.duksungBurgundy.ex3}; */

  &:hover {
    cursor: pointer;
  }
`;

export const Phone = styled.div``;
export const PhoneText = styled.div``;
export const InputEx = styled.div`
  font-weight: 340;
  font-size: 12px;
  margin-bottom: 16px;
  color: ${palette.boldBlack.ex5};
`;
export const PhoneInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 12px;
  border-radius: 16px;
  outline: none;
  border: none;
  /* border: 1px solid ${palette.duksungBurgundy.ex3}; */

  &:hover {
    cursor: pointer;
  }
`;

export const Mail = styled.div``;
export const MailText = styled.div``;
export const MailInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 12px;
  border-radius: 16px;
  outline: none;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

export const Lesson = styled.div``;
export const LessonText = styled.div``;
export const LessonInput = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 16px;
  outline: none;
  box-sizing: border-box;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

export const Number = styled.div``;
export const NumberText = styled.div``;
export const NumberInput = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 16px;
  outline: none;
  box-sizing: border-box;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

export const HlColor = styled.span`
  color: ${palette.realOrange.ex5Primary};
`;

export const PartGrid = styled.div``;
export const PartText = styled.div`
  margin-bottom: 16px;
`;
export const PartCon = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;
  gap: 8px;
  cursor: pointer;
`;
export const PartButton = styled.button`
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

export const NameEx = styled.div`
  color: ${palette.duksungBurgundy.ex3};
  margin: 12px;
  font-size: 14px;
  display: none;
`;
export const NumEx = styled.div`
  color: ${palette.duksungBurgundy.ex3};
  margin: 12px;
  font-size: 14px;
  display: none;
`;
