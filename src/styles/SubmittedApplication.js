import styled from "styled-components";
import palette from "@lib/colorPalette";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;

export const Icon = styled.img`
  width: 25px;
`;

export const Title = styled.h1`
  color: ${palette.style.white};
  font-family: Pretendard;
  line-height: 130%;
  letter-spacing: -0.84px;
  font-size: 28px;
  font-weight: 600;
  padding-bottom: 10px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UnderLine = styled.img`
  width: 230px;
  margin-top: 3px;
`;
export const Card = styled.div`
  background-color: ${palette.style.white};
  border-radius: 16px;
  padding: 20px;
  width: 230px;
  text-align: center;
  margin-top: 40px;
  
`;
export const Checking_Card = styled.div`
  background-color: ${palette.style.white};
  border-radius: 16px;
  padding:20px 20px 0 20px;
  width: 230px;
  text-align: center;
  margin-top: 40px;
  display: flex;
  flex-direction:column;
`;

export const Text = styled.p`
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  color: ${palette.boldBlack.ex10Primary};
  line-height: 130%;
  letter-spacing: -0.48px;
  margin-bottom: 20px;
`;


export const Highlight = styled.span`
  color: ${palette.realOrange.ex5Primary};
  font-weight: 600;
`;

export const KakaoLink = styled.div`
  margin-top: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  background: none;
  border: none;
  color: ${palette.boldBlack.ex7};
  font-family: "Advent Pro";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: -0.48px;
  cursor: pointer;
  margin-bottom: 15px;
`;

export const LogoFooter = styled.div`
  font-size: 12px;
  color: ${palette.boldBlack.ex6};

  span {
    color: ${palette.realOrange.ex5Primary};
  }
`;

export const DSLogo = styled.img`
  width: 93px;
  margin-top: 60px;
`;

export const KakaoIMG = styled.img`
  width: 16px;
`;

export const Submit_Button = styled.button`
 width:342px;
min-height:65px;
display:flex;
color:white;
background-color:#FF7710;
border-radius:88px;
justify-content: center;
    align-items: center;
margin-top:70px;
cursor:pointer;
border:none;
font-size:20px;
font-weight:600;
  font-family: "Pretendard";

`;