import styled from "styled-components";
import palette from "@lib/colorPalette";

export const AppButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 19px 24px;
  cursor: pointer;
  background-color: ${palette.style.white};
  border-radius: 88px;
  box-shadow: 0 0 20px 0 rgba(255, 119, 16, 0.2);
  z-index: 100;
  margin: 0 24px 39px;
  width: -webkit-fill-available;
  max-width: 400px;

  color: ${palette.realOrange.ex5Primary};
  font-size: 20px;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: -0.6px;
  opacity: ${(props) => (props.$isAnimating ? 0 : 1)};
  transition: 1s ease-in-out;
`;

export const Empty = styled.div`
  width: 32px;
  height: 32px;
`;

export const Arrow = styled.img`
  width: 32px;
`;
