import styled from "styled-components";

export const ComponentContainer = styled.div`
  margin-top: ${(props) => props.marginTop};
`;

export const ChatWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const IconImg = styled.img`
  width: ${(props) => props.width};
`;
