import styled from "styled-components";
import palette from "@lib/colorPalette";

export const NoticeContent = styled.div`
  width: calc(100vw - 72px);
  @media (hover: hover) and (pointer: fine), screen and (min-width: 768px) {
    width: 318px;
  }
  height: 67px;
  padding: 12px 20px;
  border-bottom: 1px solid ${palette.boldBlack.ex7};
  cursor: pointer;
`;

export const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const Title = styled.div`
  display: -webkit-box;
  max-width: 269px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: ${palette.style.white};
  text-overflow: ellipsis;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: -0.54px;
`;

export const Created = styled.div`
  color: ${palette.boldBlack.ex5};
  text-align: right;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.36px;
`;

export const Bottom = styled.div`
  width: 100%;
  max-height: 36.41px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: -0.42px;
  color: ${palette.boldBlack.ex2};
  text-overflow: ellipsis;
  overflow: hidden;
`;