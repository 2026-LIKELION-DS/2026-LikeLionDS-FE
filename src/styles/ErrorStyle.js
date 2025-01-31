import styled from "styled-components";
import palette from "@lib/colorPalette";

export const Error = styled.div`
  height: 100dvh;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 63px;

  color: ${palette.style.white};
  line-height: 130%;
`;

export const Logo = styled.img`
  width: 192px;
`;

export const LogoSpace = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;

  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.42px;
`;

export const HomeButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 11px 37.5px;
  border-radius: 62px;
  background-color: ${palette.realOrange.ex5Primary};

  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.48px;

  cursor: pointer;
  box-shadow: 0 0 20px 0 rgba(255, 119, 16, 0.2);
`;
