import * as M from "@styles/JoinTargetStyle";
import * as M_ from "@styles/PartInfoStyle";

const JoinTarget = () => {
  return (
    <M_.ComponentContainer>
      <M.TitleText>모집 대상</M.TitleText>
      <M.ItemWrapper>
        <M.ItemText>자신의 아이디어를 실현시켜 꿈을 펼치고 싶으신 분</M.ItemText>
        <M.ItemLine />

        <M.ItemText>협업의 과정을 즐길 수 있는 분</M.ItemText>
        <M.ItemLine />

        <M.ItemText>주 2회 오프라인 세션 및 스터디 참여가 가능한 분</M.ItemText>
        <M.ItemLine />

        <M.ItemText>주 20시간 이상의 시간적 여유가 있으신 분</M.ItemText>
        <M.ItemLine />

        <M.ItemText>
          온라인 환경이 원활한 분 <br />
          (노트북 소지자)
        </M.ItemText>
        <M.ItemLine />

        <M.ItemText>
          동아리 회비 납부에 부담이 없으신 분 <br /> (1년 기준 50,000원)
        </M.ItemText>
        <M.ItemLine />

        <M.ItemText>
          25년도 기준 덕성여대 대학생 및 휴학생, 자대 편입생, 졸업유예자 (졸업자, 타대생 참여 불가)
        </M.ItemText>
      </M.ItemWrapper>
    </M_.ComponentContainer>
  );
};

export default JoinTarget;
