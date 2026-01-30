import React from "react";
import { useNavigate } from "react-router-dom";
import * as N from "@styles/ExitModalStyle";
import styled from "styled-components";

function ExitModal({ onCancel, onExit }) {
  const navigate = useNavigate();
  const handleExit = () => {
    navigate("/");
  };

  return (
    <>
      <N.ModalBackground>
        <N.ModalGrid>
          <N.Text>
            페이지를 벗어날 경우 <br /> 작성된 내용은 <N.Span>저장되지 않습니다.</N.Span>
          </N.Text>

          <N.ChGrid>
            <N.ReT onClick={onCancel}>돌아가기</N.ReT>
            <N.Line></N.Line>
            <N.Back onClick={handleExit}>나가기</N.Back>
          </N.ChGrid>
        </N.ModalGrid>
      </N.ModalBackground>
    </>
  );
}

export default ExitModal;
