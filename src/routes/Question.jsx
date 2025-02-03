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

  console.log("✅ API_URL:", API_URL);

  useEffect(() => {
    axios
      .get(`${API_URL}/qna/answer/`)
      .then((response) => {
        console.log("✅ 답변 조회 응답:", response.data);
        const data = response.data.result;

        const existingIds = data.map((q) => q.id).filter((id) => id !== null);
        const maxId = existingIds.length > 0 ? Math.max(...existingIds) : 0;
        let tempId = maxId + 1; // 🟢 가장 높은 ID + 1을 시작점으로 설정

        // ✅ 질문을 기준으로 answers 배열을 생성하는 로직
        const questionMap = new Map();

        data.forEach((item) => {
          let { id, question, answer } = item;

          if (!id) {
            id = tempId++; // 🟢 null ID에 대해서 새로운 임시 ID 부여
          }

          if (!questionMap.has(question)) {
            questionMap.set(question, { id, question, answers: [] });
          }

          if (answer) {
            questionMap.get(question).answers.push(answer);
          }
        });

        // ✅ 객체를 배열로 변환
        const formattedQuestions = Array.from(questionMap.values());
        console.log("✅ 가공된 질문 데이터:", formattedQuestions);
        setQuestions(formattedQuestions);
      })
      .catch((error) => {
        if (error.response) {
          console.log("❌ 서버 응답 데이터:", error.response.data);
          console.log("❌ 상태 코드:", error.response.status);
        }
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
        console.warn("⚠️ 서버에서 ID를 반환하지 않음. 요청 실패 가능성 있음.");
        return;
      }

      const newQuestion = {
        id: response.data.result.id, // ✅ 서버에서 반환한 ID 사용
        question: response.data.result.question,
        answers: "운영진이 질문을 확인하고 답변을 달아줘요.",
      };

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
