import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import * as Q from "@styles/QuestionStyle";
import arrowIcon from "@assets/icons/icon_send.svg";
import { isAdminLoggedIn } from "@utils/Admin";
import QuestionList from "@/components/qna/QuestionList";
import Header from "@components/Header/HeaderSub";
import Footer from "@components/Footer";

const API_URL = import.meta.env.VITE_API_URL;

function Question() {
  const [questions, setQuestions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const textAreaRef = useRef(null);
  const [borderRadius, setBorderRadius] = useState(88);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "18px";
      textAreaRef.current.style.height = `${Math.max(textAreaRef.current.scrollHeight, 18)}px`;
      const newBorderRadius = Math.max(30, 88 - inputValue.length * 0.5); // 최소 30px 유지
      setBorderRadius(newBorderRadius);
    } 
  }, [inputValue]); 

  useEffect(() => {
    const fetchQuestionsAndAnswers = async () => {
      try {
        // ✅ 1️⃣ 질문 리스트 가져오기
        const questionResponse = await axios.get(`${API_URL}/qna/question/`);
        console.log("✅ 질문 조회 응답:", questionResponse.data);
        const questionsData = questionResponse.data.result || [];

        // ✅ 2️⃣ 답변 리스트 가져오기
        const answerResponse = await axios.get(`${API_URL}/qna/answer/`);
        console.log("✅ 답변 조회 응답:", answerResponse.data);
        const answersData = answerResponse.data.result || [];

        // ✅ 3️⃣ 질문을 기준으로 매핑
        const questionMap = new Map();
        questionsData.forEach((q) => {
          questionMap.set(q.question, {
            id: q.id, // ✅ 질문 ID 저장
            question: q.question, // ✅ 질문 내용
            answers: [],
          });
        });

        // ✅ 4️⃣ 답변을 질문에 매칭
        answersData.forEach((a) => {
          // ✅ question_id가 있으면 그대로 매칭
          if (a.question_id && questionMap.has(a.question)) {
            questionMap.get(a.question).answers.push({
              id: a.id, // ✅ answer ID
              answer: a.answer, // ✅ 답변 내용
            });
          }
          // ✅ question_id가 없고, 질문 내용만 있는 경우 매칭
          else if (a.question && questionMap.has(a.question)) {
            questionMap.get(a.question).answers.push({
              id: a.id, // ✅ answer ID
              answer: a.answer, // ✅ 답변 내용
            });
          }
        });

        // ✅ 5️⃣ 정렬
        const formattedQuestions = Array.from(questionMap.values()).sort((a, b) => b.id - a.id);
        formattedQuestions.forEach((q) => {
          q.answers.sort((a, b) => a.id - b.id);
        });

        console.log("✅ 최종 정렬된 질문 데이터:", formattedQuestions);
        setQuestions(formattedQuestions);
      } catch (error) {
        console.error("❌ 질문/답변 조회 실패:", error);
      }
    };

    fetchQuestionsAndAnswers();
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
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
    } catch (error) {
      console.error("❌ 질문 추가 실패:", error);
    }
  };

  return (
    <>
      <Q.Space>
        <div>
          {isAdminLoggedIn() ? <Header title="Q&A 답변 페이지(운영진)" /> : <Header title="Q&A" />}
          <Q.InputContainer>
            <Q.InputBox
              ref={textAreaRef}
              value={inputValue}
              onChange={handleInputChange}
              placeholder="더 궁금한 내용을 질문해주세요!"
              style={{ borderRadius: `${borderRadius}px` }}
            />
            <Q.SendButton onClick={handleAddQuestion}>
              <img src={arrowIcon} alt="전송 버튼" />
            </Q.SendButton>
          </Q.InputContainer>
          <Q.Divider />
          <QuestionList questions={questions} setQuestions={setQuestions} />
        </div>
        <Footer />
      </Q.Space>
    </>
  );
}

export default Question;
