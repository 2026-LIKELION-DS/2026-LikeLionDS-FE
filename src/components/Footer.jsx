import React from "react";
import * as F from "@styles/FooterStyle";

import Instagram from "@assets/icons/icon_instagram.svg";
import Kakao from "@assets/icons/icon_kakaotalk.svg";

function Footer({ isMain }) {
  return (
    <>
      <F.Footer $isMain={isMain}>
        <F.Inform>
          <F.InformGroup>
            <F.LikelionDS>
              <F.Line />
              덕성여대 멋쟁이사자처럼 13기 운영진
            </F.LikelionDS>
            {isMain && (
              <F.Lions>
                <F.Group>
                  <F.Part>기획•디자인</F.Part>
                  <F.People>
                    <div>강승현</div>
                    <div>송은지</div>
                  </F.People>
                </F.Group>
                <F.Group>
                  <F.Part>프론트엔드</F.Part>
                  <F.PeopleGrid>
                    <div>김서윤</div>
                    <div>김진효</div>
                    <div>노진경</div>
                    <div>목소연</div>
                    <div>정서영</div>
                    <div>최윤영</div>
                  </F.PeopleGrid>
                </F.Group>
                <F.Group>
                  <F.Part>백엔드</F.Part>
                  <F.PeopleGrid>
                    <div>고희주</div>
                    <div>김은서</div>
                    <div>이가은</div>
                    <div>장다연</div>
                    <div>조희원</div>
                  </F.PeopleGrid>
                </F.Group>
              </F.Lions>
            )}
          </F.InformGroup>
          <F.Sns>
            <a href="https://www.instagram.com/likelion_ds" target="_blank" rel="noopener noreferrer">
              <F.Icon src={Instagram} alt="인스타그램" />
            </a>
            <a href="https://open.kakao.com/me/LikelionDS" target="_blank" rel="noopener noreferrer">
              <F.Icon src={Kakao} alt="카카오톡" />
            </a>
          </F.Sns>
        </F.Inform>
        <F.Rights>© 2025. likelion_ds all rights reserved.</F.Rights>
      </F.Footer>
    </>
  );
}

export default Footer;
