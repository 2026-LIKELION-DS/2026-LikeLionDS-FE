import React, { useState, useRef, useEffect } from "react";
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
  WrapContainer,
  CloseArrowButton,
} from "@components/qna/QuestionItemStyle";

const API_URL = import.meta.env.VITE_API_URL;

const QuestionItem = ({ question, setQuestions }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [isAddingAnswer, setIsAddingAnswer] = useState(false);
  const [newAnswer, setNewAnswer] = useState("");
  const inputRef = useRef(null);
  const wrapperRef = useRef(null);
  const isAdmin = isAdminLoggedIn();
  // ✅ 질문과 답변 입력 제한을 위한 상수
  const MAX_LENGTH = 299;

  // ✅ `answers`가 배열이 아닐 경우 빈 배열로 설정
  const normalizedAnswers = Array.isArray(question.answers) ? question.answers : [];

  // ✅ 입력 높이 자동 조절 함수
  const adjustTextareaHeight = (textarea) => {
    textarea.style.height = "30px";
    textarea.style.height = `${Math.max(textarea.scrollHeight, 30)}px`;
  };

  // ✅ 수정 모드 활성화
  const enableEditing = (answerId) => {
    // ✅ index 대신 answerId 사용
    if (!isAdmin) return;

    const selectedAnswer = normalizedAnswers.find((a) => a.id === answerId); // ✅ id로 직접 찾기
    if (!selectedAnswer) return;

    console.log("📝 [디버깅] 수정할 답변 선택:", {
      answerId: selectedAnswer.id, // ✅ 클릭한 답변의 ID
      answerText: selectedAnswer.answer, // ✅ 클릭한 답변 내용
    });

    setEditingIndex(answerId); // ✅ id를 저장
    setEditValue(selectedAnswer.answer || "");

    setTimeout(() => {
      if (inputRef.current) {
        adjustTextareaHeight(inputRef.current);
        inputRef.current.focus();
      }
    }, 100);
  };

  // ✅ 답변 추가 (POST 요청)
  const handleAddAnswer = async () => {
    if (!newAnswer.trim()) return;
    // ✅ 답변 추가
    if (newAnswer.length > MAX_LENGTH) {
      alert(`답변은 300자 미만으로 입력 가능합니다.`);
      return;
    }
    if (!question.id) {
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/qna/answer/reply/${question.id}/`, {
        question_id: question.id,
        answer: newAnswer,
      });

      // console.log("✅ 답변 추가 응답:", response.data);

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

  // ✅ PATCH 요청 수정 (answer ID를 URL에 포함, 수정 내용은 request 바디에 담음)
  const handleSaveAnswer = () => {
    if (!isAdmin || editingIndex === null) return;

    const answerId = editingIndex; // ✅ id 직접 사용 (이전엔 index였음)
    if (!answerId) {
      console.warn("⚠️ answerId가 null이므로 요청을 보낼 수 없음.");
      return;
    }

    // console.log("📌 [디버깅] PATCH 요청 URL:", `${API_URL}/qna/answer/manage/${answerId}/`);
    // console.log("📌 [디버깅] 수정할 answerId:", answerId);
    // console.log("📌 [디버깅] 수정할 값:", editValue);

    if (editValue.length > MAX_LENGTH) {
      alert(`답변은 ${MAX_LENGTH}자까지 입력 가능합니다.`);
      return;
    }

    axios
      .patch(`${API_URL}/qna/answer/manage/${answerId}/`, { answer: editValue }) // ✅ URL에 answer ID 포함, 수정 내용 request body로 전달
      .then((response) => {
        // console.log("✅ [디버깅] PATCH 응답:", response.data);

        // ✅ id 기반으로 찾아서 업데이트
        setQuestions((prev) =>
          prev.map((q) =>
            q.id === question.id
              ? {
                  ...q,
                  answers: q.answers.map((a) =>
                    a.id === answerId ? { ...a, answer: response.data.result.answer } : a,
                  ),
                }
              : q,
          ),
        );

        setEditingIndex(null);
      })
      .catch((error) => {
        // console.error("❌ 답변 수정 실패:", error);
  
        // 🔹 400 에러 처리: 300자 제한 알림
        if (error.response && error.response.status === 400) {
          alert("최대 300자까지 입력 가능합니다.");
        }
      });
  };

  // ✅ 입력 필드에서 자동 제한 적용
  const handleInputChange = (setter) => (event) => {
    let value = event.target.value;
    if (value.length > MAX_LENGTH) {
      alert(`최대 300자 미만까지 입력 가능합니다.`);
      value = value.slice(0, MAX_LENGTH); // 300자 초과하면 자동으로 잘라줌
    }
    setter(value);

    // ✅ 높이 자동 조정 실행
    adjustTextareaHeight(event.target);
  };

  // ✅ 답변 삭제 (DELETE 요청)
  const handleDeleteAnswer = () => {
    if (!isAdmin || selectedAnswerIndex === null) return;

    let answerId = selectedAnswerIndex; // ✅ id 기반으로 변경

    setQuestions((prev) =>
      prev.map((q) =>
        q.id === question.id
          ? {
              ...q,
              answers: q.answers.filter((a) => a.id !== answerId), // ✅ id 기반으로 삭제
            }
          : q,
      ),
    );

    // ✅ answerId가 `null`이어도 삭제 가능하도록 처리 (혹시 몰라서..)
    if (!answerId) {
      console.warn("⚠️ answerId가 null이지만 클라이언트에서 삭제 처리함.");
      setIsModalOpen(false);
      return;
    }

    axios
      .delete(`${API_URL}/qna/answer/manage/${answerId}/`)
      .then(() => {
        // console.log(`✅ ${answerId} 삭제 완료`);
      })
      .catch((error) => {
        console.error("❌ 답변 삭제 실패:", error);
      });

    setIsModalOpen(false);
  };

  // ✅ 답변 추가 활성화
  const handleAddAnswerClick = () => {
    setIsAddingAnswer(true);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  // ✅ 답변 추가 취소 로직 (여백 클릭 감지)
  const handleOutsideClick = (event) => {
    // 현재 입력창을 클릭한 경우 예외 처리
    const isClickInsideInput = inputRef.current && inputRef.current.contains(event.target);

    // ✅ 입력 필드 외부 클릭 시
    if (!isClickInsideInput) {
      // ✅ newAnswer가 비어있거나 공백/엔터만 입력된 경우만 닫기
      if (isAddingAnswer && !newAnswer.trim()) {
        setIsAddingAnswer(false);
        setNewAnswer("");
      }

      // ✅ 수정 중인 답변도 공백/엔터만 남아있을 경우 닫기
      if (editingIndex !== null && !editValue.trim()) {
        setEditingIndex(null);
        setEditValue("");
      }
    }
  };

  useEffect(() => {
    if (isAddingAnswer || editingIndex !== null) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isAddingAnswer, editingIndex, newAnswer]);

  // ✅ 모달 열기 (답변 삭제 확인)
  const openModal = (index) => {
    if (!isAdmin) return;
    setSelectedAnswerIndex(index);
    setIsModalOpen(true);
  };

  return (
    <WrapContainer>
      <QuestionContainer>
        <QuestionBubbleWrapper>{question.question}</QuestionBubbleWrapper>
        {isAdmin && (
          <ArrowButton onClick={handleAddAnswerClick}>
            <img src={rightArrow} alt="질문 답변" />
          </ArrowButton>
        )}
      </QuestionContainer>
      <Wrapper ref={wrapperRef}>
        {normalizedAnswers
          .filter((answer) => answer.id !== null) // ✅ id가 null인 데이터 완전히 제거
          .map((answer) => (
            <AnswerContainer key={answer.id}>
              <img className="reply" src={replyArrow} alt="답변 아이콘" />
              {isAdmin && editingIndex === answer.id ? (
                <AnswerInput ref={inputRef} value={editValue} onChange={handleInputChange(setEditValue)} />
              ) : (
                <AnswerBubble onClick={() => enableEditing(answer.id)}>{answer.answer}</AnswerBubble>
              )}
              {isAdmin &&
                (editingIndex === answer.id ? (
                  <CloseArrowButton onClick={handleSaveAnswer}>
                    <img src={rightArrow} alt="전송" />
                  </CloseArrowButton>
                ) : (
                  <CloseButton onClick={() => openModal(answer.id)}>
                    <img src={closeIcon} alt="닫기" />
                  </CloseButton>
                ))}
            </AnswerContainer>
          ))}
        {isAddingAnswer && (
          <AnswerContainer>
            <img className="reply" src={replyArrow} alt="답변 아이콘" />
            <AnswerInput
              ref={inputRef}
              value={newAnswer}
              onChange={handleInputChange(setNewAnswer)}
              placeholder="답변을 입력하세요..."
            />
            <CloseArrowButton onClick={handleAddAnswer}>
              <img src={rightArrow} alt="전송" />
            </CloseArrowButton>
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
    </WrapContainer>
  );
};

export default QuestionItem;
