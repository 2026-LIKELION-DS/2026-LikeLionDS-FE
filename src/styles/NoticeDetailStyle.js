import styled from "styled-components";
import palette from "@lib/colorPalette";

export const Space = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  min-height: 100dvh;
`;

export const NoticeDetail = styled.div`
  width: 100vw;
  @media (hover: hover) and (pointer: fine) {
    width: 390px;
  }
`;

export const Created = styled.div`
  width: calc(100% -48px);
  padding: 80px 24px 0 24px;
  color: ${palette.boldBlack.ex5};
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.36px;
  margin-bottom: 4px;
`;

export const Title = styled.div`
  width: calc(100% -48px);
  padding: 24px 24px 0 24px;
  color: ${palette.style.white};
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: -0.6px;
  margin-bottom: 24px;
`;

export const Content = styled.div`
  width: calc(100% -48px);
  padding: 24px 24px 0 24px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: -0.48px;
  color: ${palette.boldBlack.ex2};
`;

export const Admin = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 52px 0 20px 0;
`;

export const Button = styled.div`
  display: flex;
  width: 161px;
  height: 56px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 88px;
  background: ${palette.style.white};
  box-shadow: 0px 0px 20px 0px rgba(255, 119, 16, 0.2);
  color: ${palette.realOrange.ex5Primary};
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: -0.6px;
  cursor: pointer;
`;

export const ImageContainer = styled.div`
  padding: 0 24px 0 24px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const Image = styled.img`
  width: 256px;
  height: 256px;
  border-radius: 12px;
  margin-top: 24px;
`;
