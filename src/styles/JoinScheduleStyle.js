import styled from "styled-components";
import palette from "@lib/colorPalette";

export const LineContainer = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 30px;
`;

export const Line = styled.div`
  width: 1px;
  height: 30px;
  background-color: ${palette.boldBlack.ex8};

  margin-left: 5px;

  margin-top: -10px;
  margin-bottom: -10px;
`;
