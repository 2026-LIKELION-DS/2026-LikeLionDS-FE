import styled from "styled-components";

export const JoinContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: ${(props) => props.$marginTop || "0px"};
`;

export const AnimationWrapper = styled.div`
  width: 174px;
  height: 174px;

  margin-top: 35px;
  margin-bottom: 63px;
`;

export const ImgWrapper = styled.div`
  width: 40px;
  height: 91px;
`;

export const TitleContainer = styled.div`
  margin-top: 91.24px;
  width: fit-content;
`;
