import React, { useState, useEffect, useRef } from "react";
import * as Q from "@styles/QuestionStyle";
import arrowIcon from "@assets/icons/icon_send.svg";
import { isAdminLoggedIn } from "@utils/Admin";
import QuestionList from "@/components/qna/QuestionList";
import Header from "@components/Header/HeaderSub";
import Footer from "@components/Footer";

function Question() {
  const [questions, setQuestions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  // useEffect(() => {
  //   // 🔹 질문 목록 불러오기(API 연동_질문 조회)
  //   fetch("/qna/question/")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.result) {
  //         setQuestions(data.result);

  //         // 🔹 각 질문의 답변을 개별적으로 가져오기(API 연동_답변 조회)
  //         data.result.forEach((question) => {
  //           fetch(`/qna/answer/?question_id=${question.id}`)
  //             .then((res) => res.json())
  //             .then((answerData) => {
  //               setQuestions((prev) =>
  //                 prev.map((q) => (q.id === question.id ? { ...q, answers: answerData.result || [] } : q)),
  //               );
  //             })
  //             .catch((err) => console.error(`답변 불러오기 실패 (질문 ID: ${question.id})`, err));
  //         });
  //       }
  //     })
  //     .catch((err) => console.error("질문 불러오기 실패:", err));
  // }, []);

  // ✅ 더미데이터 사용 (👆🏻 연동시 윗 코드)
  const dummyQuestions = [
    { id: 1, text: "백엔드와 어떻게 연동하나요?", answers: ["API를 통해 요청을 보냅니다."] },
    { id: 2, text: "React에서 상태 관리는 어떻게 하나요?", answers: [] },
  ];

  useEffect(() => {
    setQuestions(dummyQuestions);
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    e.target.style.height = "30px";
    e.target.style.height = `${Math.max(e.target.scrollHeight, 30)}px`;
  };

  // 🔹 질문 추가 (API 연동_질문 작성)
  // const handleAddQuestion = async () => {
  //   if (!inputValue.trim()) return;

  //   try {
  //     const response = await fetch("/qna/question/", {
  //       method: "POST",
  //       body: JSON.stringify({ question: inputValue }),
  //       headers: { "Content-Type": "application/json" },
  //     });

  //     if (!response.ok) {
  //       throw new Error("서버 오류: 질문을 추가할 수 없습니다.");
  //     }

  //     const data = await response.json();
  //     if (data.result) {
  //       setQuestions((prev) => [{ id: data.result.id, text: data.result.question, answers: [] }, ...prev]);
  //       setInputValue("");
  //       if (inputRef.current) inputRef.current.style.height = "auto";
  //     }
  //   } catch (error) {
  //     alert(`❌ 질문 작성 실패: ${error.message}`);
  //     console.error("질문 작성 실패:", error);
  //   }
  // };

  // 👆🏻 연동시 윗 코드
  const handleAddQuestion = () => {
    if (!inputValue.trim()) return;

    const newQuestion = {
      id: questions.length + 1,
      text: inputValue,
      answers: [],
    };

    setQuestions([newQuestion, ...questions]);
    setInputValue("");

    if (inputRef.current) inputRef.current.style.height = "auto";
  };

  const handleDeleteAnswer = (questionId, answerIndex) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) =>
        q.id === questionId ? { ...q, answers: q.answers.filter((_, i) => i !== answerIndex) } : q,
      ),
    );
  };

  return (
    <>
      <Q.Space>
        <div>
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
          <QuestionList questions={questions} setQuestions={setQuestions} handleDeleteAnswer={handleDeleteAnswer} />
        </div>
        <Footer />
      </Q.Space>
    </>
  );
}

export default Question;
