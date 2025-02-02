import styled from "styled-components";
import palette from "@lib/colorPalette";

export const Footer = styled.div`
  padding: 29px 24px 34px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ isMain }) => (isMain ? "29px" : "11px")};
  background-color: ${palette.boldBlack.ex9};
  color: ${palette.boldBlack.ex4};
  margin-top: 108px;
`;

export const LikelionDS = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;

  font-size: 12px;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: -0.36px;
`;

export const Line = styled.div`
  width: 1px;
  height: 13.5px;
  background-color: ${palette.boldBlack.ex4};
`;

export const Inform = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const InformGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Lions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Group = styled.div`
  display: flex;
  gap: 12px;
`;

export const Part = styled.div`
  width: 60px;
  font-size: 12px;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.36px;
`;

export const People = styled.div`
  font-size: 12px;
  font-weight: 300;
  line-height: 130%;
  letter-spacing: -0.36px;

  display: flex;
  align-items: center;
  gap: 6px;
`;

export const PeopleGrid = styled.div`
  font-size: 12px;
  font-weight: 300;
  line-height: 130%;
  letter-spacing: -0.36px;

  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 6px;
`;

export const Sns = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Icon = styled.img`
  height: 18px;
  cursor: pointer;
`;

export const Rights = styled.div`
  font-size: 14px;
  font-weight: 300;
  line-height: 104%;
  letter-spacing: -0.7px;
`;
