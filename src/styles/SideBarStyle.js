import styled, { keyframes } from "styled-components";
import palette from "@lib/colorPalette";

const slideLeft = keyframes`
  from {
    transform: translateX(224px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideRight = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(224px);
    opacity: 0;
  }
`;

export const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  z-index: 3000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SideBar = styled.div`
  z-index: 3500;
  width: 224px;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  gap: 32px;
  background-color: #262625;
  box-shadow: -4px 0 20px 0 rgba(0, 0, 0, 0.2);

  position: fixed;
  top: 0;
  right: 0;
  animation: ${(props) => (props.$isSidebarOpen ? slideLeft : slideRight)} 0.4s ease-in-out;
  transition: right 0.4s ease-in-out;
`;

export const CloseBtn = styled.div`
  padding: 12px 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Close = styled.img`
  width: 32px;
  cursor: pointer;
`;

export const Index = styled.div`
  padding: 0 28px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Title = styled.div`
  color: ${(props) => (props.$isActive ? palette.realOrange.ex4 : palette.style.white)};
  font-size: 20px;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: -0.6px;
  cursor: pointer;
`;

export const ResultGroup = styled.div`
  display: flex;
  flex-direction: column;
  color: ${palette.boldBlack.ex7};
  font-weight: 600;
  line-height: 130%;
`;

export const SubTitle = styled.div`
  font-size: 20px;
  letter-spacing: -0.6px;
`;

export const SubDate = styled.div`
  font-size: 14px;
  letter-spacing: -0.42px;
`;

export const MainGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SubGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-left: 1px solid ${palette.boldBlack.ex4};
`;

export const SubIndex = styled.div`
  color: ${(props) => (props.$isActive ? palette.realOrange.ex4 : palette.style.white)};
  font-size: 16px;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: -0.48px;
  padding: 0 16px;
  border-left: 1px solid ${(props) => (props.$isActive ? palette.realOrange.ex4 : palette.boldBlack.ex4)};
  margin-left: -1px;
  cursor: pointer;
  transition: 200ms ease-in-out;

  &:hover {
    color: ${palette.realOrange.ex4};
    border-left: 1px solid ${palette.realOrange.ex4};
  }
`;
