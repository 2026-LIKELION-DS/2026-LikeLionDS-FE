import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as N from "@styles/InformationCollectionStyle";
import styled from "styled-components";
import Step1 from "@/assets/icons/Step1.svg";

import Header from "@components/Header/HeaderSubExit";
import Footer from "@components/Footer";

function InformationCollection() {
  const [agree, setAgree] = useState(null);
  const isAgreeYes = agree === "yes";
  const navigate = useNavigate();

  return (
    <>
      <Header title="서류 지원서 작성"></Header>
      <N.Space>
        <N.StepGrid>
          <N.StepTitle>STEP 1</N.StepTitle>
          <N.StepText>개인정보 수집 안내</N.StepText>
          <N.StepIcon src={Step1} alt="단계1" />
        </N.StepGrid>
        <N.ContentsGrid>
          <N.ContentsTitle>개인정보 수집·이용 동의서</N.ContentsTitle>
          <N.ContentsBox>
            <N.Contents>
              사단법인 멋쟁이사자처럼은 「정보통신망 이용촉진 및 정보보호에 관한 법률」 및 「개인정보보호법」 등 관련
              법령상의 개인정보보호 규정을 준수하여 「멋쟁이사자처럼 대학 모집」 참가자의 개인정보 및 권익을
              보호하고, 개인정보와 관련한 참가자의 고충을 원활하게 처리할 수 있도록 다음과 같은 개인정보 처리방침을 두고
              있습니다.
            </N.Contents>
            <N.Contents>가. 개인 정보의 수집· 이용에 관한 사항</N.Contents>
            <N.Contents>
              ▣ 개인 정보의 수집· 이용 목적
              <br />
              개인 정보는 1차적으로 본 프로그램 참가신청, 참가신청에 따른 본인확인, 개인식별, 프로그램 진행, 프로그램
              관련 안내/고지사항 등의 전달, 문의사항 또는 불만사항 등의 확인 및 처리, 분쟁 조정을 위한 기록 보존 등을
              위해 사용됩니다. 이후 멋쟁이사자처럼의 프로그램 및 브랜드 홍보를 위한 마케팅에 활용될 수 있습니다.
            </N.Contents>
            <N.Contents>
              ▣ 수집하는 개인 정보의 항목
              <br />
              성명, 연락처, 이메일, 소속, 직업 등 신청 및 프로그램 운영 중 취득한 정보
            </N.Contents>
            <N.Contents>
              ▣ 개인 정보의 보유· 이용기간 <br />
              개인 정보는 원칙적으로 개인 정보의 수집 및 이용목적이 달성되면 지체 없이 파기합니다. 단, 본 사업 종료 후
              참여 인정 문서 발급을 위한 최소한의 자료(성명, 전화번호, 이메일)는 사업종료 이후 5년간 보존됩니다.
            </N.Contents>
            <N.Contents>
              ▣ 동의를 거부할 권리 및 동의를 거부할 경우의 불이익 <br />위 개인 정보의 수집· 이용에 거부할 권리가 있음을
              알려드립니다. 단, 수집항목은 사업 진행을 위한 최소한의 필수 정보로서 개인 정보 수집· 이용에 동의하지
              않으실 경우 프로그램 참가 및 제반 활동이 불가능합니다.
            </N.Contents>
            <N.Contents>나. 개인 정보 제3자 제공에 관한 사항</N.Contents>
            <N.Contents>
              ▣ 제공받는 자 <br />
              덕성여자대학교 멋쟁이사자처럼
            </N.Contents>
            <N.Contents>
              ▣ 제공받는 자의 목적
              <br />
              ‘멋쟁이사자처럼 대학 모집’ 진행 및 운영, 참가자 관리, 마케팅 활용
            </N.Contents>
            <N.Contents>
              ▣ 제공하는 개인 정보 항목
              <br />
              성명, 연락처, 이메일, 소속, 직업 등 신청 및 프로그램 운영 중 취득한 정보
            </N.Contents>
            <N.Contents>
              ▣ 동의를 거부할 권리 및 동의를 거부할 경우의 불이익 <br /> 위 제3자에 대한 개인 정보의 제공에 관한 동의를
              거부할 수 있으나 본 프로그램 참가를 위해 필수적이므로 위 사항에 동의하셔야만 참가 및 활동이 가능합니다.
            </N.Contents>
          </N.ContentsBox>
          <N.AgreeGrid>
            <N.ContentsTitle>개인정보 수집에 동의하십니까?</N.ContentsTitle>
            <N.AgreeBox>
              <N.QButton $selected={agree === "yes"} onClick={() => setAgree("yes")}>
                예
              </N.QButton>
              <N.QButton $selected={agree === "no"} onClick={() => setAgree("no")}>
                아니오
              </N.QButton>
            </N.AgreeBox>
          </N.AgreeGrid>
        </N.ContentsGrid>
        <N.NextButtonGrid>
          <N.NextButton
            disabled={!isAgreeYes}
            onClick={() => {
              if (!isAgreeYes) return;
              navigate("/writeinformation");
            }}>
            다음으로
          </N.NextButton>
        </N.NextButtonGrid>
      </N.Space>
      <Footer></Footer>
    </>
  );
}

export default InformationCollection;
