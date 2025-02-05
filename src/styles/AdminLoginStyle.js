import styled from "styled-components";
import palette from "@lib/colorPalette";

export const AdminLogin = styled.div`
  margin-top: 76px;
  padding: 0 24px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 12px;
  margin-top: 28px;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  border-radius: 24px;
  background-color: white;
  color: #d9650d;
  font-size: 16px;
  font-weight: 500;

  gap: 12px;
  padding: 9px 16px;
  width: calc(100% - 32px);
`;

export const InputName = styled.div`
  width: 80px;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 20.8px */
  letter-spacing: -0.48px;
  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
  outline: none;
  border: none;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  width: 100%;

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
`;

export const Button = styled.button`
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

  width: 100%;
  padding: 16px 0;
  margin-top: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
