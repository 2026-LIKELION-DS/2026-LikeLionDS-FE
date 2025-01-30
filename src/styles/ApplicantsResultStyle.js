import { Link } from "react-router-dom";
import styled from "styled-components";
import palette from "@lib/colorPalette";

export const ApplicantsResult = styled.div`
  height: 50px;
`;

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  background-color: white;
  width: 302px;
  padding: 20px;
  color: black;
  border-radius: 24px;
`;

export const Info = styled.div`
  font-size: 18px;
  font-weight: 400;
`;

export const H1 = styled.div`
  font-size: 28px;
  font-weight: 700;
`;

export const H2 = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

export const Orange = styled.div`
  color: #ff7710;
  font-size: 18px;
  font-weight: 600;
`;

export const Img = styled.img`
  width: 20px;
  height: 20px;
  margin-bottom: 3px;
`;

export const LinkBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLink = styled(Link)`
  color: #78726e;
`;

export const Button = styled.button`
  height: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 5px;

  border: none;
  background-color: white;
`;
