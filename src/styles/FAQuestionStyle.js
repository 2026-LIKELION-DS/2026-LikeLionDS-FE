import styled from "styled-components";
import palette from "@lib/colorPalette";

export const MsgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: min(342px, 87.7vw);

  margin-top: 32px;
  margin-bottom: 233px;
  box-sizing: border-box;
`;

export const MsgInput = styled.input`
  box-sizing: border-box;
  width: min(284px, 72.82vw);
  height: 48px;

  border-radius: 100px;
  outline: none;
  border: none;

  padding-left: 20px; //placeholder
  margin-right: 10px;

  cursor: pointer;

  &::placeholder {
    color: #888888;

    font-size: 14px;
    font-weight: 400;
    line-height: 130%; /* 18.2px */
    letter-spacing: -0.42px;
  }
`;

export const SendBtn = styled.button`
  width: 48px;
  height: 48px;

  padding: 8px;

  border-radius: 50%;
  background: ${palette.style.white};

  display: flex;
  align-items: center;

  border: none;

  cursor: pointer;

  flex-shrink: 0;
`;
