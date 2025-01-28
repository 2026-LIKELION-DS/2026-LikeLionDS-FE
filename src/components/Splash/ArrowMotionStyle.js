import styled from "styled-components";
import palette from "@lib/colorPalette";

export const ArrowMotion = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 21px 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%);
  cursor: pointer;

  opacity: ${(props) => (props.$isAnimating ? 0 : 1)};
  transition: 1s ease-in-out;
`;

export const LottieContainer = styled.div`
  width: 60px;
  height: 60px;
`;
