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
export const Container = styled.div`
  padding: 20px;
  background-color: ${palette.style.white};
`;

export const Question = styled.h1`
  font-size: 24px;
  color: ${palette.boldBlack.ex10Primary};
`;

export const InputContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  padding-top: 56px;
`;

export const InputBox = styled.textarea`
  border-radius: 40px; /* 둥근 모서리 */
  resize: none; /* 사용자가 크기를 조정하지 못하도록 */
  overflow-y: auto; /* 스크롤 표시 */
  white-space: pre-wrap; /* 줄바꿈 처리 */
  flex: 1;

  padding: 18px 25px 0px 25px;
  border: 1px solid #888888;
  font-size: 16px;
  line-height: 1.3;
  word-wrap: break-word;

  height: 40px; /* 시작 높이를 30px로 설정 */
  min-height: 30px; /* 최소 높이 유지 */
  max-height: 150px; /* 최대 높이 제한 (선택) */

  &::placeholder {
    font-size: 16px;
    line-height: 1.3; /* placeholder도 line-height 적용 */
  }
`;

export const SendButton = styled.button`
  background-color: ${palette.style.white};
  border: none;
  border-radius: 50%;
  padding: 7px;
  cursor: pointer;
  width: 55px;
  height: 55px;
`;

export const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid #56585cde;
  margin-bottom: 25px; /* 위아래 여백 추가 */
`;
