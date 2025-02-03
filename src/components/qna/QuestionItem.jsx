import React, { useState, useRef } from "react";
import axios from "axios";
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
} from "@components/qna/QuestionItemStyle";

const API_URL = import.meta.env.VITE_API_URL;

const QuestionItem = ({ question, setQuestions }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editValue, setEditValue] = useState(""); // ✅ 수정 중인 답변 상태 저장
  const [isAddingAnswer, setIsAddingAnswer] = useState(false); // ✅ 답변 추가 상태
  const [newAnswer, setNewAnswer] = useState(""); // ✅ 새 답변 입력값
  const inputRef = useRef(null);
  const isAdmin = isAdminLoggedIn(); // ✅ 로그인 여부 확인

  // ✅ `answers`가 문자열일 경우 배열로 변환
  const normalizedAnswers = question.answers
    ? Array.isArray(question.answers)
      ? question.answers
      : [question.answers] // ✅ API 응답이 문자열이므로 배열로 변환
    : [];

  // 🔹 입력 높이 자동 조절 함수
  const adjustTextareaHeight = (textarea) => {
    textarea.style.height = "30px"; // 초기 높이
    textarea.style.height = `${Math.max(textarea.scrollHeight, 30)}px`; // 내용에 맞게 자동 조절
  };

  // ✅ 수정 모드 활성화 (버블 클릭 시)
  const enableEditing = (index) => {
    if (!isAdmin) return;
    setEditingIndex(index);
    setEditValue(normalizedAnswers[index]); // 기존 답변 불러오기

    setTimeout(() => {
      if (inputRef.current) {
        adjustTextareaHeight(inputRef.current);
        inputRef.current.focus();
      }
    }, 100);
  };

  const handleSaveAnswer = () => {
    if (!isAdmin || editingIndex === null) return;

    const answerId = normalizedAnswers[editingIndex]?.id; // ✅ 해당 답변의 ID 가져오기
    if (!answerId) {
      console.warn("⚠️ answerId가 null입니다. 수정할 수 없습니다.");
      return;
    }

    axios
      .patch(`${API_URL}/qna/answer/manage/${answerId}/`, { answer: editValue }) // ✅ answerId 사용
      .then(() => {
        setQuestions((prev) =>
          prev.map((q) =>
            q.id === question.id
              ? {
                  ...q,
                  answers: normalizedAnswers.map((a, i) => (i === editingIndex ? { ...a, answer: editValue } : a)),
                }
              : q,
          ),
        );
        setEditingIndex(null);
      })
      .catch((error) => {
        console.error("❌ 답변 수정 실패:", error);
      });
  };

  // ✅ 답변 추가 활성화
  const handleAddAnswerClick = () => {
    setIsAddingAnswer(true);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const handleAddAnswer = async () => {
    if (!newAnswer.trim()) return;
    if (!question.id) {
      console.warn("⚠️ question.id가 null이므로 답변 추가 요청을 보낼 수 없음.");
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/qna/answer/reply/${question.id}/`, {
        question_id: question.id,
        answer: newAnswer,
      });

      console.log("✅ 답변 추가 응답:", response.data);

      if (!response.data.result || !response.data.result.id) {
        console.warn("⚠️ 서버에서 answer ID를 반환하지 않음.");
        return;
      }

      setQuestions((prev) =>
        prev.map((q) =>
          q.id === question.id
            ? {
                ...q,
                answers: [...normalizedAnswers, { id: response.data.result.id, answer: response.data.result.answer }],
              }
            : q,
        ),
      );
      setNewAnswer("");
      setIsAddingAnswer(false);
    } catch (error) {
      console.error("❌ 답변 추가 실패:", error);
    }
  };
  // ✅ 모달 열기 (답변 삭제 확인)
  const openModal = (index) => {
    if (!isAdmin) return;
    setSelectedAnswerIndex(index);
    setIsModalOpen(true);
  };

  // ✅ 답변 삭제 기능
  const handleDeleteAnswer = () => {
    if (!isAdmin || selectedAnswerIndex === null) return;

    axios
      .delete(`${API_URL}/qna/answer/manage/${question.id}/`)
      .then(() => {
        setQuestions((prev) =>
          prev.map((q) =>
            q.id === question.id
              ? {
                  ...q,
                  answers: normalizedAnswers.filter((_, i) => i !== selectedAnswerIndex),
                }
              : q,
          ),
        );
        setIsModalOpen(false); // ✅ 모달 닫기
      })
      .catch((error) => {
        console.error("❌ 답변 삭제 실패:", error);
      });
  };

  return (
    <>
      <QuestionContainer>
        <QuestionBubbleWrapper>{question.question}</QuestionBubbleWrapper>
        {isAdmin && (
          <ArrowButton onClick={handleAddAnswerClick}>
            <img src={rightArrow} alt="질문 답변" />
          </ArrowButton>
        )}
      </QuestionContainer>
      <Wrapper>
        {normalizedAnswers.map((answer, index) => (
          <AnswerContainer key={index}>
            <img className="reply" src={replyArrow} alt="답변 아이콘" />
            {isAdmin && editingIndex === index ? (
              <AnswerInput
                ref={inputRef}
                value={editValue}
                onChange={(e) => {
                  setEditValue(e.target.value);
                  adjustTextareaHeight(e.target); // ✅ 입력 시 높이 자동 조정
                }}
              />
            ) : (
              <AnswerBubble onClick={() => enableEditing(index)}>{answer}</AnswerBubble>
            )}
            {isAdmin &&
              (editingIndex === index ? (
                <CloseButton onClick={handleSaveAnswer}>
                  <img src={rightArrow} alt="전송" /> {/* ✅ 수정 완료 버튼 */}
                </CloseButton>
              ) : (
                <CloseButton onClick={() => openModal(index)}>
                  <img src={closeIcon} alt="닫기" />
                </CloseButton>
              ))}
          </AnswerContainer>
        ))}
        {/* ✅ 답변 추가 입력창 */}
        {isAddingAnswer && (
          <AnswerContainer>
            <img className="reply" src={replyArrow} alt="답변 아이콘" />
            <AnswerInput
              ref={inputRef}
              value={newAnswer}
              onChange={(e) => {
                setNewAnswer(e.target.value);
                adjustTextareaHeight(e.target);
              }}
              placeholder="답변을 입력하세요..."
            />
            <CloseButton onClick={handleAddAnswer}>
              <img src={rightArrow} alt="전송" /> {/* ✅ 답변 추가 버튼 */}
            </CloseButton>
          </AnswerContainer>
        )}
      </Wrapper>

      {isAdmin && isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <ModalTitle>답변을 삭제하시겠습니까?</ModalTitle>
            <ButtonContainer>
              <CancelButton onClick={() => setIsModalOpen(false)}>취소</CancelButton>
              <ConfirmButton onClick={handleDeleteAnswer}>삭제</ConfirmButton>
            </ButtonContainer>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default QuestionItem;
