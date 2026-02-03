import styled from "styled-components";
import palette from "@lib/colorPalette";

export const Space = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  min-height: 100dvh;
`;

export const NoticeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${palette.boldBlack.ex10Primary};
  border-radius: 12px;
  padding: 16px;
  margin: 40px 7.5px 0px 7.5px;
  font-weight: 500;
`;

export const Icon = styled.img`
  display: flex;
  width: 32px;
  height: 32px;
  margin: 15px 0;
`;

export const NoticeText = styled.p`
  color: ${palette.style.white};
  font-size: 18px;
  line-height: 130%;
`;

export const DaySection = styled.section`
  margin: 25px;
`;

export const DayTitle = styled.h2`
  color: ${palette.style.white};
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 6px;
`;

export const SubText = styled.p`
  color: ${palette.boldBlack.ex6};
  font-size: 12px;
  margin-bottom: 14px;
`;

export const TimeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
  row-gap: 15px;
`;

export const TimeButton = styled.button`
  font-family: Pretendard;
  height: 42px;
  border-radius: 12px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.42px;
  white-space: nowrap;
  cursor: pointer;
  background-color: ${({ $selected }) => ($selected ? palette.realOrange.ex5Primary : palette.style.white)};
  color: ${({ $selected }) => ($selected ? palette.style.white : palette.boldBlack.ex10Primary)};
  border: none;
  &:active {
    transform: scale(0.97);
  }
`;

export const NextButton = styled.button`
  width: 90%;
  padding: 16px 0;
  margin-top: 16px;
  border-radius: 88px;
  border: none;
  background-color: ${palette.realOrange.ex5Primary};
  color: ${palette.style.white};

  font-family: Pretendard;
  font-size: 20px;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 0px 20px 0px rgba(255, 119, 16, 0.2);

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    background-color: ${palette.boldBlack.ex6};
    cursor: not-allowed;
  }
`;

export const NextButtonGrid = styled.div`
  margin-top: 60px;
  display: Flex;
  justify-content:center;
  align-items:center;
`;