import styled from "styled-components";
import palette from "@lib/colorPalette";

export const Space = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  min-height: 100dvh;
`;

// Named exports만 사용
// export const Container = styled.div`
//   padding: 20px;
//   background-color: ${palette.style.white};
// `;

// export const Question = styled.h1`
//   font-size: 24px;
//   color: ${palette.boldBlack.ex10Primary};
// `;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 25px 20px;
  margin-top: 56px;
`;

export const KakaoButton = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 48px;
  box-sizing: border-box;
  padding: 15px 20px;
  border-radius: 88px;
  background-color: ${palette.style.white};
  transition: 200ms ease-in-out;
  cursor: pointer;

  color: ${palette.boldBlack.ex10Primary};
  font-size: 14px;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: -0.42px;
`;

export const Icon = styled.img`
  width: 20px;
`;

export const InputBox = styled.textarea`
  border-radius: 88px;
  outline: none;
  resize: none;
  overflow-y: hidden;
  flex: 1;
  padding: 15.5px 20px 0 20px;
  color: #888;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: -0.42px;
  &::placeholder {
    font-size: 14px;
  }
  height: 18px;
`;

export const SendButton = styled.button`
  background-color: ${palette.style.white};
  border: none;
  border-radius: 50%;
  padding: 8px;
  cursor: pointer;
  width: 48px;
  height: 48px;
  & img {
    width: 32px;
    height: 32px;
  }
`;

export const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid #56585cde;
  margin-bottom: 25px; /* 위아래 여백 추가 */
`;
