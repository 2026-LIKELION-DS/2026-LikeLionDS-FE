import styled from "styled-components";
import palette from "@lib/colorPalette";

export const AdminLogin = styled.div`
  height: 60px;
  height: 25px;
  padding-top: 56px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  border-radius: 24px;
  background-color: white;
  color: #d9650d;
  margin: 8px;

  font-size: 16px;
  font-weight: 500;

  gap: 12px;
  padding: 0 16px;
  height: 48px;
`;

export const InputName = styled.div`
  width: 70px;
  font-size: 16px;
  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
  outline: none;
  border: none;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  width: 232px;
  /* 기본 상태 */
  background-color: white;
  color: black;

  /* 자동 완성된 상태에서 배경 제거 */
  &:-webkit-autofill {
    box-shadow: 0 0 0px 1000px white inset !important;
    -webkit-box-shadow: 0 0 0px 1000px white inset !important;
    -webkit-text-fill-color: black !important;
  }

  /* 자동 완성 시 포커스 상태에서도 유지 */
  &:-webkit-autofill:focus {
    box-shadow: 0 0 0px 1000px white inset !important;
    -webkit-box-shadow: 0 0 0px 1000px white inset !important;
    -webkit-text-fill-color: black !important;
  }
`;

export const Bar = styled.div`
  width: 1px;
  height: 30px;
  background-color: #d9650d;
  position: relative;
  right: 10px;
`;

export const Button = styled.button`
  border-radius: 88px;
  background-color: #ff7710;
  color: white;
  border: none;
  margin: 10px;
  font-size: 18px;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
  &:hover {
    cursor: pointer;
  }
  padding: 0px 155.075px;
  height: 56px;

  background: var(--Real-Orange-ex5_Primary, #ff7710);
  box-shadow: 0px 0px 20px 0px rgba(255, 119, 16, 0.2);
`;
