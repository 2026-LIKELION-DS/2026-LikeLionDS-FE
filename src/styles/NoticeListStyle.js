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
