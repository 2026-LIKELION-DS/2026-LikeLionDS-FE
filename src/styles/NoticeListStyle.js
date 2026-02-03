import styled from "styled-components";
import palette from "@lib/colorPalette";

export const Space = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  min-height: 100dvh;
`;

export const NoticeList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: calc(16px + 56px);
`;

export const Button = styled.div`
  border-radius: 88px;
  background-color: #ff7710;
  color: white;
  border: none;

  font-size: 18px;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;

  &:hover {
    cursor: pointer;
  }

  background: var(--Real-Orange-ex5_Primary, #ff7710);
  box-shadow: 0px 0px 20px 0px rgba(255, 119, 16, 0.2);

  width: 90%;
  padding: 16px 0;
  margin-bottom: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
