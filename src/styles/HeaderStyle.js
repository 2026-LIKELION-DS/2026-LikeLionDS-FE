import styled from "styled-components";
import palette from "@lib/colorPalette";

export const Header = styled.div`
  position: fixed;
  width: calc(100% - 40px);
  top: 0;
  z-index: 2000;
  padding: 12px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${palette.boldBlack.ex10Primary};
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.2);

  @media (hover: hover) and (pointer: fine) {
    width: calc(390px - 40px);
  }
`;

export const Logo = styled.div`
  width: 147px;
  display: flex;
  align-items: center;
  padding-left: 4px;
  cursor: pointer;
`;

export const LogoOrg = styled.div`
  width: 147px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const LogoMin = styled.div`
  width: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Back = styled.img`
  width: 32px;
  cursor: pointer;
`;

export const Menu = styled.img`
  width: 32px;
  cursor: pointer;
`;

export const Close = styled.img`
  width: 32px;
  cursor: pointer;
`;

export const Empty = styled.div`
  width: 32px;
  height: 32px;
`;

export const Title = styled.div`
  color: ${palette.style.white};
  text-align: center;

  font-size: 20px;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: -0.6px;
`;

export const Pages = styled.div`
  color: ${palette.style.white};
  text-align: center;

  font-size: 20px;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: -0.6px;
`;
