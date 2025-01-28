import styled, { keyframes } from "styled-components";
import palette from "@lib/colorPalette";

const slideUp = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-200px); /* 위로 200px 이동 */
    opacity: 0;
  }
`;

export const Splash = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

export const LogoSpace = styled.div`
  display: flex;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 348px;
  position: absolute;
  bottom: 101px;
  animation: ${(props) => (props.$isAnimating ? slideUp : "none")};
  transition: 0.4s ease-in-out forwards;
`;
