import styled from "styled-components";
import palette from "@lib/colorPalette";

export const ComponentContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  margin-top: 25px;
  width: 100%;
`;

export const AnimationContainer = styled.div`
  width: 95px;
  height: 42px;
  border-radius: 24px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${palette.boldBlack.ex2};
`;

export const AnimationWrapper = styled.div`
  width: 65px;
  height: 20.125px;

  display: flex;
  justify-content: center;
  align-items: center;

  // Lottie
  > div {
    width: 50px;
    height: 50px;
  }
`;
