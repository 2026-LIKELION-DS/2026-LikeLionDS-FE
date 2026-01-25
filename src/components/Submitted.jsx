import React from "react";
import * as S from "@styles/SubmittedStyle";
import check from "@/assets/icons/check.svg";
import kakao from "@/assets/icons/icon_kakaotalk.svg"; 
import underline from "@/assets/icons/underline.svg";
import logo from "@/assets/logo/logo_ds_topbar_orange.svg";

function Submitted({ title, messages = [], highlightText, showKakaoLink = false, onKakaoClick }) {
  return (
    <S.Wrapper>
      <S.Icon src={check} alt="완료" />
      <S.Title>
        {title}
        <S.UnderLine src={underline} alt="밑줄" />
      </S.Title>

      <S.Card>
        {messages.map((msg, idx) => (
          <S.Text key={idx}>
            {msg.before}
            {msg.highlight && <S.Highlight>{msg.highlight}</S.Highlight>}
            <br />
            {msg.after}
          </S.Text>
        ))}

        {showKakaoLink && (
          <S.KakaoLink onClick={onKakaoClick}>
            <S.KakaoIMG src={kakao} alt="카카오톡 로고" />
            카카오톡 오픈채팅 바로가기
          </S.KakaoLink>
        )}
      </S.Card>

      <S.LogoFooter>
        <S.DSLogo src={logo} alt="덕성로고 오렌지" />
      </S.LogoFooter>
    </S.Wrapper>
  );
}

export default Submitted;
