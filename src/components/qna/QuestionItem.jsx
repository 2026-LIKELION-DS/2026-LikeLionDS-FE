import React, { useState, useRef } from "react";
// import styled, { keyframes } from "styled-components";
import { isAdminLoggedIn } from "@utils/Admin";
import rightArrow from "@assets/icons/icon_arrow_button.svg";
import replyArrow from "@assets/icons/icon_arrow_top_left.svg";
import closeIcon from "@assets/icons/icon_close.svg";

// ✅ 스타일 import
import {
  QuestionContainer,
  Wrapper,
  QuestionBubbleWrapper,
  AnswerContainer,
  CloseButton,
  AnswerBubble,
  AnswerInput,
  ArrowButton,
  ModalOverlay,
  ModalContent,
  ModalTitle,
  ButtonContainer,
  CancelButton,
  ConfirmButton,
} from "@components/qna/QuestionItemStyle"; // 스타일 파일을 import

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
