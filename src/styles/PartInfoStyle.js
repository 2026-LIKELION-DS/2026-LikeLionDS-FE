import styled from "styled-components";
import palette from "@lib/colorPalette";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;

  margin-top: ${(props) => props.$marginTop || "0px"};
`;

export const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: self-start;

  width: ${(props) => props.$width || "350px"};
`;

export const TextContainer = styled.div`
  width: fit-content;
`;

export const TextWrapper = styled.p`
  font-size: ${(props) => props.$fontSize};
  font-family: "Pretendard", sans-serif;
  font-weight: ${(props) => props.$fontWeight};

  line-height: 130%;
  letter-spacing: ${(props) => props.$letterSpacing || "-0.54px"};

  margin-bottom: 5px;
`;

export const ImgWrapper = styled.div`
  width: ${(props) => props.width};
  margin-top: -15px;
`;

export const PartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 40px;
`;

export const PartImgContainer = styled.div`
  width: 350px;
  height: 212px;
`;

export const PartImgWrapper = styled.object`
  margin-top: ${(props) => props.$marginTop || "0px"};

  pointer-events: none;
`;
