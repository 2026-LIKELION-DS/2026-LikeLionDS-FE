import { Link } from "react-router-dom";
import styled from "styled-components";
import palette from "@lib/colorPalette";

export const ApplicantsResult = styled.div`
  height: 788px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  background-color: ${palette.style.white};
  width: 302px;
  padding: 20px;
  color: ${palette.boldBlack.ex10Primary};
  border-radius: 24px;
`;

export const Info = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: ${palette.boldBlack.ex10Primary};
`;

export const Infos = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${palette.boldBlack.ex8};
`;

export const H1 = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: ${palette.boldBlack.ex10Primary};
`;

export const H2 = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: ${palette.boldBlack.ex9};
`;

export const Orange = styled.div`
  color: ${palette.realOrange.ex5Primary};
  font-size: 18px;
  font-weight: 600;
`;

export const Img = styled.img`
  width: 20px;
  height: 20px;
  margin-bottom: 3px;
`;

export const LinkBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLink = styled(Link)`
  color: ${palette.boldBlack.ex6};

  &:hover {
    color: ${palette.boldBlack.ex8};
  }
`;

export const Button = styled.button`
  height: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;

  border: none;
  background-color: ${palette.style.white};
  margin-top: 8px;
  font-family: Pretendard;
  color: ${palette.boldBlack.ex8};

  &:hover {
    cursor: pointer;
  }
`;

export const TimeButtonGrid = styled.div`
  margin-top: 60px;
  display: Flex;
  justify-content: center;
  align-items: center;
`;
export const TimeButton = styled.button`
  width: 90%;
  padding: 16px 0;
  margin-top: 16px;

  border-radius: 88px;
  border: none;

  background-color: ${palette.realOrange.ex5Primary};
  color: ${palette.style.white};

  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 0px 20px 0px rgba(255, 119, 16, 0.2);

  &:hover {
    cursor: pointer;
    background-color: ${palette.realOrange.ex4};
  }

  &:active {
    transform: scale(0.98);
  }
`;
