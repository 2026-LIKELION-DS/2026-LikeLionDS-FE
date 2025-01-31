import styled from "styled-components";
import palette from "@lib/colorPalette";

export const MsgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 342px;

  margin-top: 32px;
  margin-bottom: 233px;
`;

export const MsgInput = styled.input`
  width: 284px;
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
`;
