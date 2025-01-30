import styled, { keyframes } from "styled-components";
import palette from "@lib/colorPalette";

const slideUp = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-100%);
    opacity: 1;
  }
`;

export const Splash = styled.div`
  height: calc(100dvh - 101px - 87px);
  padding-top: 87px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) => (props.$appDate ? "space-between" : "flex-end")};
`;

export const Logo = styled.img`
  width: 348px;
  z-index: 100;
  animation: ${(props) => (props.$isAnimating ? slideUp : "none")} 1s ease-in-out;
`;

export const LogoApp = styled.img`
  width: 348px;
  z-index: 100;
  opacity: ${(props) => (props.$isAnimating ? 0 : 1)};
  transition: 1s ease-in-out;
`;

export const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: ${palette.boldBlack.ex10Primary};
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.$isAnimating ? 0 : 1)};
  transition: 1s ease-in-out;
`;
