import styled from "styled-components";

export const RectangleDiv = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  border-radius: ${(props) => props.$borderRadius};
  background: ${(props) => props.$bgr};
  color: ${(props) => props.color};

  font-family: "Pretendard", sans-serif;
  font-weight: ${(props) => props.fontWeight};
  line-height: 130%;
  font-size: ${(props) => props.fontSize};
  letter-spacing: ${(props) => props.letterSpacing || "-0.42px"};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: ${(props) => props.$textAlign || "center"};
`;

export const TextDiv = styled.div`
  text-align: ${(props) => props.$textAlign || "center"};
`;
