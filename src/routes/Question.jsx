import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import * as Q from "@styles/QuestionStyle";
import arrowIcon from "@assets/icons/icon_send.svg";
import { isAdminLoggedIn } from "@utils/Admin";
import QuestionList from "@/components/qna/QuestionList";
import Header from "@components/Header/HeaderSub";

function Question() {
  const [questions, setQuestions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios
      .get(`${API_URL}/qna/answer/`)
      .then((response) => {
        console.log("✅ 답변 조회 응답:", response.data);
        const fetchedData = response.data.result || [];

        // 🔹 질문을 기준으로 그룹화 (question.id를 key로 사용)
        const questionMap = new Map();

        fetchedData.forEach((item) => {
          const { id, question, answer } = item; // ✅ id는 answer의 id
          if (!questionMap.has(question)) {
            questionMap.set(question, {
              id: id || null, // ✅ 질문 ID가 null일 경우 처리
              question: question,
              answers: [],
            });
          }

          if (answer) {
            questionMap.get(question).answers.push({ id, answer });
          }
        });

        // 🔹 객체를 배열로 변환 + 질문을 `id` 기준 역순 정렬 (최신 질문이 위로)
        const formattedQuestions = Array.from(questionMap.values()).sort((a, b) => b.id - a.id);

        // 🔹 각 질문 안의 답변은 `id` 기준 오름차순 정렬 (등록된 순서대로)
        formattedQuestions.forEach((q) => {
          q.answers.sort((a, b) => a.id - b.id);
        });

        console.log("✅ 정렬된 질문 데이터:", formattedQuestions);
        setQuestions(formattedQuestions);
      })
      .catch((error) => {
        console.error("❌ 답변 조회 실패:", error);
      });
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    e.target.style.height = "30px";
    e.target.style.height = `${Math.max(e.target.scrollHeight, 30)}px`;
  };

  const handleAddQuestion = async () => {
    if (!inputValue.trim()) return;

    try {
      const response = await axios.post(`${API_URL}/qna/question/`, { question: inputValue });
      console.log("✅ 질문 추가 응답:", response.data);

      if (!response.data.result || !response.data.result.id) {
        console.warn("⚠️ 서버에서 질문 ID를 반환하지 않음.");
        return;
      }

      const newQuestion = {
        id: response.data.result.id, // ✅ 서버에서 반환한 question.id
        question: response.data.result.question,
        answers: [], // ✅ 새 질문에는 답변 없음
      };

      // 🔹 새 질문을 최상단에 추가 (최신 질문이 위로)
      setQuestions((prevQuestions) => [newQuestion, ...prevQuestions]);
      setInputValue("");
      if (inputRef.current) inputRef.current.style.height = "auto";
    } catch (error) {
      console.error("❌ 질문 추가 실패:", error);
    }
  };

  return (
    <>
      {isAdminLoggedIn() ? <Header title="Q&A 답변 페이지(운영진)" /> : <Header title="Q&A" />}
      <Q.InputContainer>
        <Q.InputBox
          as="textarea"
          ref={inputRef}
          value={inputValue}
          onChange={handleInputChange}
          placeholder="더 궁금한 내용을 질문해주세요!"
        />
        <Q.SendButton onClick={handleAddQuestion}>
          <img src={arrowIcon} alt="전송 버튼" />
        </Q.SendButton>
      </Q.InputContainer>
      <Q.Divider />
      <QuestionList questions={questions} setQuestions={setQuestions} />
    </>
  );
}

export default Question;
