import styled from "styled-components";
import palette from "@lib/colorPalette";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;

  margin-top: ${(props) => props.$marginTop || "0px"};

  padding: 0 20px;
`;

export const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: self-start;

  width: ${(props) => (props.$width ? `min(${props.$width}, 87.7vw)` : `min(350px, 89.74vw)`)};
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

  width: min(350px, 89.74vw);
  height: 575px;
`;

export const PartImgContainer = styled.div`
  width: min(350px, 89.74vw);
  // height: 212px;
  aspect-ratio: 350 / 212;

  cursor: pointer;
  overflow: hidden;
`;

export const PartImgContainerFE = styled(PartImgContainer)`
  margin-top: 17px;
  z-index: 10;
  clip-path: polygon(0 0, 200% 0, 15% 95%, 0 95%);
  border-radius: 32px;
`;

export const PartImgContainerBE = styled(PartImgContainer)`
  clip-path: polygon(95% 2%, 100% 2%, 100% 100%, -100% 100%);
  border-radius: 32px;

  margin-top: -80px;
  z-index: 20;
`;

export const PartImgWrapper = styled.img`
  margin-top: ${(props) => props.$marginTop || "0px"};

  pointer-events: none;

  width: 100%;
  height: 100%;
`;
