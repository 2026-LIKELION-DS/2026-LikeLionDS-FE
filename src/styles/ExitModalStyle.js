import styled from "styled-components";
import palette from "@lib/colorPalette";

export const ModalGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

export const Text = styled.div`
  color: var(--Black-1, #182035);
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  background-color: ${palette.style.white};

  width: 281px;
  height: 44px;
  padding: 36px 0 24px 0;
  border-radius: 24px 24px 0 0;
`;
export const Span = styled.span`
  color: var(--Duksung-Burgundy-ex6_Main, #971b44);
`;

export const ChGrid = styled.span`
  display: flex;
  border-top: 1px solid ${palette.boldBlack.ex4};
`;
export const ReT = styled.div`
  color: var(--Black-2, #606268);
  background-color: ${palette.style.white};
  padding-top: 13px;
  cursor: pointer;
  width: 140px;
  height: 44px;
  border-radius: 0 0 0 24px;
`;
export const Back = styled.div`
  color: var(--Duksung-Burgundy-ex6_Main, #971b44);
  width: 140px;
  height: 44px;
  padding-top: 13px;
  border-radius: 0 0 24px 0;
  background-color: ${palette.style.white};
  cursor: pointer;

  text-align: center;
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const Line = styled.div`
  width: 1px;
  background-color: ${palette.boldBlack.ex4};
`;
