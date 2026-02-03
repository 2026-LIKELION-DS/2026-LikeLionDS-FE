import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as A from "@styles/ApplicantsResultStyle";
import discord from "../assets/icons/icon_discord.svg";
import notion from "../assets/icons/icon_notion.svg";
import kakao from "../assets/icons/icon_kakaotalk.svg";

import Header from "@components/Header/HeaderApp";

function ApplicantsResult() {
  const location = useLocation();
  const navigate = useNavigate();

  // 개발용 fallback state, 배포 전 삭제해야 함
  const devState = {
    name: "김멋사",
    is_passed: true, // false로 바꾸면 불합격 UI 확인 가능
    email: "test@example.com",
  };

  if (!location.state && import.meta.env.PROD) {
    navigate("/error");
    return null;
  }

  const { name, is_passed, email } = location.state ?? devState;

  const [finalResult, setFinalResult] = useState(false); // true로 바꾸면 최종합격 UI 확인 가능

  // useEffect(() => {
  //   if (import.meta.env.PROD) {
  //     if (!location.state || !location.state.name || location.state.is_passed === undefined) {
  //       navigate("/error");
  //     }
  //   }
  // }, [location, navigate]);
  //방어코드 위에 하나 더 만들어둬서 우선은 주석 처리

  // if (!location.state) return null; // 리디렉션 전에 렌더링 방지

  useEffect(() => {
    const today = new Date();
    const finalDate = new Date("2026-03-07"); //3월 7일로 설정
    // // 최종합격 UI 보고싶다면
    // const finalDate = new Date("2026-02-02"); 

    if (today > finalDate) {
      setFinalResult(true);
    }
  }, []);

  const handleTime = () => {
    navigate("/timeselection", {
      state: { email },
    });
  };

  return (
    <>
      <Header />
      <A.ApplicantsResult>
        <A.Page>
          {is_passed ? (
            <>
              <A.Box>
                <A.H1>{name} 님</A.H1>
                <A.H1>축하드립니다!</A.H1>
                <br />
                {/* 최종 합격 */}
                {finalResult ? (
                  <>
                    <A.Orange>덕성여자대학교 멋쟁이사자처럼 14기에</A.Orange>
                    <A.Orange>최종 합격되신 것을 축하드립니다.</A.Orange>

                    <br />
                    <br />
                    <A.Info>
                      지원자 분께 좋은 소식을 알려드리게 되어 <br />
                      기쁘네요.
                    </A.Info>
                    <A.Info>3월 9일 전체 OT가 있습니다.</A.Info>
                    <A.Info>자세한 사항은 추후 공지를 확인해주세요.</A.Info>
                    <br />
                    <A.Info>
                      아래 노션 및 디스코드 링크에 접속하셔서 <br /> 최종 합격자로서의 기쁨을 누리세요!
                    </A.Info>
                    <br />
                    <A.LinkBox>
                      <A.Button>
                        <A.Img src={notion} />
                        <A.StyledLink to="#" target="_blank" rel="noopener noreferrer">
                          노션 바로가기
                        </A.StyledLink>
                      </A.Button>
                      <A.Button>
                        <A.Img src={discord} />
                        <A.StyledLink to="https://discord.gg/4PMSTQV2" target="_blank" rel="noopener noreferrer">
                          디스코드 바로가기
                        </A.StyledLink>
                      </A.Button>
                    </A.LinkBox>
                    <br />
                  </>
                ) : (
                  <>
                    {/* 1차 합격 */}
                    <A.Orange>덕성여자대학교 멋쟁이사자처럼 14기에</A.Orange>
                    <A.Orange>1차 합격되신 것을 축하드립니다.</A.Orange>
                    <br />

                    <A.Info>면접 일정 안내드립니다.</A.Info>
                    <A.Info>면접은 교내에서 대면으로 진행됩니다.</A.Info>
                    <br />
                    <A.Info>
                      면접 시간은 <br />
                      선택한 시간대를 기반으로 배정됩니다.
                    </A.Info>
                    <br />
                    <A.Info>
                      배정된 최종 면접 시간과 장소는 <br />
                      2/28(토)에 이메일로 안내 드리겠습니다.
                    </A.Info>
                    <br />
                    <A.Info>
                      선택한 일정에 변동이 있을 시, ~3/1(일)까지
                      <br />
                      카카오톡 오픈채팅으로 문의 부탁드립니다.
                    </A.Info>
                    <br />
                    <A.LinkBox>
                      <A.Button>
                        <A.Img src={kakao} />
                        <A.StyledLink to="https://open.kakao.com/o/sVlPfU7h">카카오 오픈채팅 바로가기</A.StyledLink>
                      </A.Button>
                    </A.LinkBox>
                  </>
                )}
              </A.Box>

              {is_passed && !finalResult && (
                <A.TimeButtonGrid>
                  <A.TimeButton onClick={handleTime}>면접시간 작성하기</A.TimeButton>
                </A.TimeButtonGrid>
              )}
            </>
          ) : (
            <A.Box>
              <A.H2>{name} 님, 덕성여자대학교</A.H2>
              <A.H2>멋쟁이사자처럼 14기에</A.H2>
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
