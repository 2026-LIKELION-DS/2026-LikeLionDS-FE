import styled from "styled-components";
import palette from "@lib/colorPalette";

export const AdminLogin = styled.div`
  height: 25px;
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
  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
  outline: none;
  border: none;
`;

export const Bar = styled.div`
  width: 1px;
  height: 30px;
  background-color: #d9650d;
  position: relative;
  right: 10px;
`;

export const Button = styled.button`
  width: 342px;
  height: 48px;
  border-radius: 24px;
  background-color: #ff7710;
  color: white;
  border: none;
  margin: 10px;
  font-size: 18px;
`;
