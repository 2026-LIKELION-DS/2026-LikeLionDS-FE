import styled from "styled-components";
import palette from "@lib/colorPalette";

export const Applicants = styled.div`
  height: 60px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputBox = styled.div`
  width: 342px;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  border-radius: 24px;
  background-color: white;
  color: #d9650d;
  margin: 8px;
`;

export const InputName = styled.div`
  width: 90px;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
  outline: none;
  border: none;
  width: 200px;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
`;

export const bar = styled.div`
  width: 1px;
  height: 30px;
  background-color: #d9650d;
  position: relative;
  right: 10px;
`;

export const Button = styled.button`
  width: 342px;
  height: 56px;
  border-radius: 24px;
  background-color: #ff7710;
  color: white;
  border: none;
  margin: 10px;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
`;
