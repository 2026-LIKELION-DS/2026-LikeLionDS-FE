import React, { useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { isAdminLoggedIn } from "@utils/Admin";
import rightArrow from "@assets/icons/icon_arrow_button.svg";
import replyArrow from "@assets/icons/icon_arrow_top_left.svg";
import closeIcon from "@assets/icons/icon_close.svg";

const QuestionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;
`;

const QuestionBubbleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffe0c7;
  color: #000000;
  word-wrap: break-word;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  word-break: break-word;
  width: 100%;
  min-height: 30px;
  max-width: 77%;
  padding: 20px 25px;
  border-radius: 40px;
  margin-right: 0;
`;

const AnswerContainer = styled.div`
  display: flex;
  position: relative;
  margin-left: 40px;
  margin-top: 10px;
  padding-top: 13px;
  font-size: 16px;
  cursor: pointer;

  & img.reply {
    width: 28px;
    position: absolute;
  }
`;

const CloseButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  cursor: pointer;
  position: absolute;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(8.6px);
  border-radius: 50%;
  top: 0px;
  right: 15px;

  img {
    filter: brightness(0) invert(0);
  }
`;

const AnswerBubble = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 40px;
  padding: 20px 25px 15px 25px;
  width: 250px;
  min-height: 30px;
  word-wrap: break-word;
  white-space: pre-wrap;
  color: black;
  margin-left: 35px;
  line-height: 1.4;
  font-size: 16px;
  letter-spacing: 0.01px;
`;

const AnswerInput = styled.textarea`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 40px;
  padding: 20px 25px 3px 25px;
  width: 250px;
  height: auto;
  resize: none;
  overflow-y: hidden;
  outline: none;
  font-size: 16px;
  line-height: 1.4;
  margin-left: 35px;

  margin-bottom: 0;
  padding-bottom: 0;
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 13px;

  img {
    width: 28px;
    height: 28px;
    filter: brightness(0) invert(1);
  }
`;

// 🔹 모달 페이드 인 애니메이션
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 300ms ease-in-out;
  z-index: 10000;
`;

const ModalContent = styled.div`
  width: 281px;
  height: 126px;
  background: white;
  border-radius: 25px;
  border: 1px solid #dcdcdc;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 300ms ease-in-out;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
`;

const ModalTitle = styled.p`
  font-size: 17px;
  font-weight: 600;
  color: #182035;
  line-height: 22.1px;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 25px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  border-top: 1px solid #dcdcdc;
`;

const CancelButton = styled.button`
  width: 50%;
  height: 50px;
  color: #606268;
  background: none;
  font-size: 16px;
  font-weight: 500;
  border: none;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 10px;
    right: 0;
    height: 30px;
    width: 1px;
    background-color: #dcdcdc;
  }
`;

const ConfirmButton = styled.button`
  width: 50%;
  height: 50px;
  background: none;
  color: #ff7710;
  font-size: 16px;
  font-weight: 500;
  border: none;
  cursor: pointer;
`;

const QuestionItem = ({ question, setQuestions, handleDeleteAnswer }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const inputRef = useRef(null);
  const isAdmin = isAdminLoggedIn(); // ✅ 로그인 여부 확인

  // 👇🏻 연동시 주석 해제
  // 🔹 답변 작성 API 호출 (API 연동_답변 작성)
  // const addAnswer = async (questionId) => {
  //   if (!isAdmin) return; // ❌ 운영진이 아니면 답변 추가 불가

  //   try {
  //     const response = await fetch(`/qna/answer/reply/${questionId}/`, {
  //       method: "POST",
  //       body: JSON.stringify({ question_id: questionId, answer: "" }), // 빈 문자열 추가
  //       headers: { "Content-Type": "application/json" },
  //     });

  //     if (!response.ok) {
  //       throw new Error("서버 오류: 답변 추가 실패");
  //     }

  //     const data = await response.json();

  // ✅ 서버에서 받은 데이터로 상태 업데이트
  //     setQuestions((prev) =>
  //       prev.map((q) => (q.id === questionId ? { ...q, answers: [...q.answers, data.result.answer] } : q)),
  //     );
  //   } catch (error) {
  //     console.error("❌ 답변 추가 실패:", error);
  //   }
  // };

  // 🔹 입력 높이 자동 조절 함수
  const adjustTextareaHeight = (textarea) => {
    textarea.style.height = "30px";
    textarea.style.height = `${Math.max(textarea.scrollHeight, 30)}px`;
  };

  // 🔹 수정 모드 활성화 (관리자 전용)
  const enableEditing = (index) => {
    if (!isAdmin) return; // ❌ 일반 사용자는 수정 불가
    setEditingIndex(index);
    setTimeout(() => {
      if (inputRef.current) {
        adjustTextareaHeight(inputRef.current);
        inputRef.current.focus();
      }
    }, 100);
  };

  // 🔹 답변 수정 API 호출 (관리자 전용) (API연동_답변 수정)
  const saveAnswer = async (index, value) => {
    if (!isAdmin) return; // ✅ 운영진만 수정 가능
    try {
      await fetch(`/qna/answer/manage/${index}/`, {
        method: "PATCH",
        body: JSON.stringify({ answer: value }),
        headers: { "Content-Type": "application/json" },
      });
      setEditingIndex(null);
    } catch (error) {
      console.error("답변 수정 실패:", error);
    }
  };

  // 🔹 답변 삭제 모달 열기 (관리자 전용)
  const openModal = (index) => {
    if (!isAdmin) return; // ❌ 일반 사용자는 삭제 불가
    setSelectedAnswerIndex(index);
    setIsModalOpen(true);
  };

  // 🔹 답변 삭제 API 호출 (관리자 전용) (API연동_답변 삭제)
  // const handleDelete = async () => {
  //   if (!isAdmin || selectedAnswerIndex === null) return;
  //   try {
  //     const response = await fetch(`/qna/answer/manage/${selectedAnswerIndex}/`, { method: "DELETE" });
  //     const data = await response.json();
  //     if (data.message === "답변 삭제에 성공했습니다.") {
  //       handleDeleteAnswer(selectedAnswerIndex);
  //     }
  //   } catch (error) {
  //     console.error("답변 삭제 실패:", error);
  //   }
  //   setIsModalOpen(false);
  // };

  // 👆🏻 연동시 윗 코드
  const handleDelete = () => {
    if (!isAdmin || selectedAnswerIndex === null) return;
    handleDeleteAnswer(question.id, selectedAnswerIndex);
    setIsModalOpen(false);
  };

  return (
    <>
      <QuestionContainer>
        <QuestionBubbleWrapper>{question.text}</QuestionBubbleWrapper>
        {isAdmin && (
          // 🔹 답변 작성 API 사용 시 (API연동_답변 작성)
          // <ArrowButton onClick={() => addAnswer(question.id)}>
          //   <img src={rightArrow} alt="질문 답변" />
          // </ArrowButton>

          // 👆🏻 연동시 윗 코드
          <ArrowButton
            onClick={() =>
              setQuestions((prev) =>
                prev.map((q) => (q.id === question.id ? { ...q, answers: [...q.answers, ""] } : q)),
              )
            }>
            <img src={rightArrow} alt="질문 답변" />
          </ArrowButton>
        )}
      </QuestionContainer>
      <Wrapper>
        {(question.answers || []).map((answer, index) => (
          <AnswerContainer key={index}>
            <img className="reply" src={replyArrow} alt="답변 아이콘" />
            {isAdmin && editingIndex === index ? (
              <AnswerInput
                ref={inputRef}
                value={answer}
                onBlur={() => saveAnswer(index, answer)}
                onChange={(e) => {
                  setQuestions((prev) =>
                    prev.map((q) =>
                      q.id === question.id
                        ? { ...q, answers: q.answers.map((a, i) => (i === index ? e.target.value : a)) }
                        : q,
                    ),
                  );
                  adjustTextareaHeight(e.target);
                }}
              />
            ) : (
              <AnswerBubble onClick={() => enableEditing(index)}>{answer}</AnswerBubble>
            )}
            {isAdmin && (
              <CloseButton onClick={() => openModal(index)}>
                <img src={closeIcon} alt="닫기" />
              </CloseButton>
            )}
          </AnswerContainer>
        ))}
      </Wrapper>

      {isAdmin && isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <ModalTitle>답변을 삭제하시겠습니까?</ModalTitle>
            <ButtonContainer>
              <CancelButton onClick={() => setIsModalOpen(false)}>취소</CancelButton>
              <ConfirmButton onClick={handleDelete}>삭제</ConfirmButton>
            </ButtonContainer>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default QuestionItem;
