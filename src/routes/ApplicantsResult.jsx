import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as A from "@styles/ApplicantsResultStyle";
import discord from "../assets/icons/icon_discord.svg";
import notion from "../assets/icons/icon_notion.svg";
import chair from "../assets/icons/chair.svg";
import kakao from "../assets/icons/icon_kakaotalk.svg";

import Header from "@components/Header/HeaderApp";

function ApplicantsResult() {
  const [finalResult, setFinalResult] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { name, is_passed } = location.state || {};

  useEffect(() => {
    if (!location.state || !location.state.name || location.state.is_passed === undefined) {
      navigate("/error");
    }
  }, [location, navigate]);

  if (!location.state) return null; // 리디렉션 전에 렌더링 방지

  useEffect(() => {
    const today = new Date();
    const finalDate = new Date("2025-03-07");

    if (today > finalDate) {
      setFinalResult(true);
    }
  });

  return (
    <>
      <Header />
      <A.ApplicantsResult>
        <A.Page>
          {is_passed ? (
            <A.Box>
              <A.H1>{name} 님</A.H1>
              <A.H1>축하드립니다!</A.H1>
              <br />
              {/* 최종 합격 */}
              {finalResult ? (
                <>
                  <A.Orange>덕성여자대학교 멋쟁이사자처럼 13기에</A.Orange>
                  <A.Orange>최종 합격되신 것을 축하드립니다.</A.Orange>

                  <br />
                  <br />
                  <A.Info>
                    지원자 분께 좋은 소식을 알려드리게 되어 <br />
                    기쁘네요.
                  </A.Info>
                  <A.Info>3월 10일 전체 OT가 있습니다.</A.Info>
                  <A.Info>자세한 사항은 추후 공지를 확인해주세요.</A.Info>
                  <br />
                  <A.Info>
                    아래 노션 및 디스코드 링크에 접속하셔서 <br /> 최종 합격자로서의 기쁨을 누리세요!
                  </A.Info>
                  <br />
                  <A.LinkBox>
                    <A.Button>
                      <A.Img src={notion} />
                      <A.StyledLink
                        to="https://mogg22.notion.site/13-1abbe6508c3c8002a5efc6b1e05fb186?pvs=4"
                        target="_blank"
                        rel="noopener noreferrer">
                        노션 바로가기
                      </A.StyledLink>
                    </A.Button>
                    <A.Button>
                      <A.Img src={discord} />
                      <A.StyledLink to="https://discord.gg/WxJrCJYcyQ" target="_blank" rel="noopener noreferrer">
                        디스코드 바로가기
                      </A.StyledLink>
                    </A.Button>
                  </A.LinkBox>
                  <br />
                </>
              ) : (
                <>
                  {/* 1차 합격 */}
                  <A.Orange>덕성여자대학교 멋쟁이사자처럼 13기에</A.Orange>
                  <A.Orange>1차 합격되신 것을 축하드립니다.</A.Orange>
                  <br />

                  <A.Info>면접 일정 안내드립니다.</A.Info>
                  <A.Info>면접은 교내에서 대면으로 진행됩니다.</A.Info>
                  <br />
                  <A.Info>
                    면접 시간은 <br />
                    아래 폼에서 선착순으로 선택 가능합니다.
                  </A.Info>
                  <br />
                  <A.Infos>
                    - 폼 응답 시간: 2/26(수) 21시 ~ 2/27(목) 21시
                    <br />* 이 기간 내 자유로운 수정이 가능합니다.
                  </A.Infos>
                  <br />
                  <A.Info>
                    면접 시간과 장소는 <br />
                    3/1(토)에 이메일로 안내드리겠습니다.
                  </A.Info>
                  <br />
                  <A.Info>
                    추가 문의 사항은 카카오톡 오픈채팅으로
                    <br />
                    부탁드립니다. 감사합니다.
                  </A.Info>
                  <br />
                  <A.LinkBox>
                    <A.Button>
                      <A.Img src={chair} />
                      <A.StyledLink to="https://forms.gle/EfqhaNuzcbyiveJ49">면접 폼 바로가기</A.StyledLink>
                    </A.Button>
                    <A.Button>
                      <A.Img src={kakao} />
                      <A.StyledLink to="https://open.kakao.com/me/LikelionDS">카카오 오픈채팅 바로가기</A.StyledLink>
                    </A.Button>
                  </A.LinkBox>
                </>
              )}
            </A.Box>
          ) : (
            <A.Box>
              <A.H2>{name} 님, 덕성여자대학교</A.H2>
              <A.H2>멋쟁이사자처럼 13기에</A.H2>
              <A.H2>지원해주셔서 감사합니다.</A.H2>
              <br />
              <A.Info>예상보다 많은 지원자들로 인해</A.Info>
              <A.Orange>
                {finalResult ? "최종 면접 결과 합격하지 못하였음을" : "1차 서류 결과 합격하지 못하였음을"}
              </A.Orange>
              <A.Orange>전달 드립니다.</A.Orange>
              <br />

              <A.Info>
                더 많은 인재들을 모시지 못하여 <br />
                죄송한 마음을 전합니다.
              </A.Info>
              <br />
              <A.Info>
                모쪼록 이번 지원 과정이 여러분의 발전에 큰 <br />
                도움이 되었기를 간절히 바랍니다.
              </A.Info>
              <br />
              <A.Info>아울러 지원 과정에서 작성해주신 개인정보는 모두 폐기할 것을 약속드립니다.</A.Info>
              <br />
              <A.Info>감사합니다.</A.Info>
            </A.Box>
          )}
        </A.Page>
      </A.ApplicantsResult>
    </>
  );
}

export default ApplicantsResult;
