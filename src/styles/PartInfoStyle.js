import styled from "styled-components";
import palette from "@lib/colorPalette";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;

  margin-top: ${(props) => props.$marginTop || "0px"};
  margin-bottom: ${(props) => props.$marginBottom || "0px"};

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

  position: relative;
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

export const PartOrangeWrapper = styled.div`
  position: absolute;
  box-sizing: border-box;

  top: ${(props) => props.$top};

  border-radius: 20px;
  background: rgba(255, 119, 16, 0.35);
  backdrop-filter: blur(4px);

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 6px 14px;
`;

export const PartOrangeWrapperBE = styled(PartOrangeWrapper)`
  right: ${(props) => props.$right};
`;

export const PartOrangeWrapperFE = styled(PartOrangeWrapper)`
  left: ${(props) => props.$left};
`;

export const PartName = styled.p`
  color: ${palette.style.white};

  font-size: ${(props) => props.$fontSize};
  font-weight: 600;
  line-height: 130%; /* 26px */
  letter-spacing: -0.6px;
`;

export const PartNameWrapper = styled.div`
  position: absolute;
  box-sizing: border-box;

  width: ${(props) => props.$width};
  height: ${(props) => props.$height};

  top: ${(props) => props.$top};

  display: flex;
  padding: 2px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 13px;
  background: rgba(255, 255, 255, 0.2);

  backdrop-filter: blur(4px);
`;

export const PartNameWrapperFE = styled(PartNameWrapper)`
  left: ${(props) => props.$left};
`;

export const PartNameWrapperBE = styled(PartNameWrapper)`
  right: ${(props) => props.$right};
`;
