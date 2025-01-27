import styled from "styled-components";
import palette from "@lib/colorPalette";

export const TextWrapper = styled.p`
  font-size: 18px;
`;

export const TitleWrapper = styled.p`
  font-size: 28px;
`;

export const ImgWrapper = styled.div`
  width: 121px;
  margin-top: -10px;
`;

export const PartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PartImgContainer = styled.div`
  width: 350px;
  height: 212px;
`;

export const PartImgWrapper = styled.img`
  margin-top: ${(props) => props.$marginTop || "0px"};
`;
