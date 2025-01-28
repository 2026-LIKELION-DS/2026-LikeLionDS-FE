import styled from "styled-components";
import palette from "@lib/colorPalette";

export const ArrowMotion = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 21px 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%);

  opacity: ${(props) => (props.$isAnimating ? 0 : 1)};
  transition: 0.4s ease-in-out forwards;

  @media (hover: hover) and (pointer: fine) {
    width: 390px;
  }
`;

export const LottieContainer = styled.div`
  width: 60px;
  height: 60px;
`;
