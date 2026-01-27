import React from "react";
import { useNavigate } from "react-router-dom";
import * as N from "@styles/ExitModalStyle";
import styled from "styled-components";

function ExitModal({ onClose }) {
  const navigate = useNavigate();

  return (
    <>
      <N.ModalBackground>
        <N.ModalGrid>
          <N.Text>
            페이지를 벗어날 경우 <br /> 작성된 내용은 <N.Span>저장되지 않습니다.</N.Span>
          </N.Text>

          <N.ChGrid>
            <N.ReT
              onClick={() => {
                onClose?.(); // 돌아가기: 모달 닫기
              }}
              style={{ cursor: "pointer" }}>
              돌아가기
            </N.ReT>
            <div style={{ width: "1px", backgroundColor: "#606268" }} />
            <N.Back
              onClick={() => {
                navigate("/"); // 홈으로 이동
              }}
              style={{ cursor: "pointer" }}>
              나가기
            </N.Back>
          </N.ChGrid>
        </N.ModalGrid>
      </N.ModalBackground>
    </>
  );
}

export default ExitModal;
