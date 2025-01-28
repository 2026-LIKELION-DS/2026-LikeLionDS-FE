import React from "react";
import { Link } from "react-router-dom";
import * as A from "@styles/ApplicantsResultStyle";
import discord from "../assets/icons/icon_discord.svg";
import notion from "../assets/icons/icon_notion.svg";

import Header from "@components/Header/HeaderApp";

function ApplicantsResult() {
  return (
    <>
      <Header />
      <A.ApplicantsResult></A.ApplicantsResult>
      <A.Page>
        {/* <A.Box>
          <A.H1>김멋사 님</A.H1>
          <A.H1>축하드립니다!</A.H1>
          <br />
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
              <A.StyledLink to="#">노션 바로가기</A.StyledLink>
            </A.Button>
            <A.Button>
              <A.Img src={discord} />
              <A.StyledLink to="#">디스코드 바로가기</A.StyledLink>
            </A.Button>
          </A.LinkBox>
        </A.Box> */}

        <A.Box>
          <A.H2>김멋사 님, 덕성여자대학교</A.H2>
          <A.H2>멋쟁이사자처럼 12기에</A.H2>
          <A.H2>지원해주셔서 감사합니다.</A.H2>
          <br />
          <A.Info>예상보다 많은 지원자들로 인해</A.Info>
          <A.Orange>최종 면접 결과 합격하지 못하였음을</A.Orange>
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
      </A.Page>
    </>
  );
}

export default ApplicantsResult;
