import palette from "@lib/colorPalette";
import styled from "styled-components";

export const ComponentContainer = styled.div`
  margin-top: ${(props) => props.$marginTop};

  width: ${(props) => (props.width ? props.width : "max-content")};

  cursor: ${(props) => (props.cursor ? props.cursor : "default")};
`;

export const ChatWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const IconImg = styled.img`
  width: ${(props) => props.width};
`;
