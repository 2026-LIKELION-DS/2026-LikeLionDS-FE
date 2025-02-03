import React from "react";
import QuestionItem from "./QuestionItem";

const QuestionList = ({ questions, setQuestions, handleDeleteAnswer }) => {
  if (!questions || questions.length === 0) {
    return (
      <div style={{ display: "flex", minHeight: "65vh" }}>
        <p style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
          질문이 없습니다. 새로운 질문을 추가해보세요!
        </p>
      </div>
    );
  }

  return (
    <div>
      {questions.map(
        (
          question,
          index, // ✅ `index` 추가
        ) => (
          <QuestionItem
            key={question.id !== null ? question.id : `fallback-${index}`} // ✅ null이면 index로 대체
            question={question}
            setQuestions={setQuestions}
            handleDeleteAnswer={handleDeleteAnswer}
          />
        ),
      )}
    </div>
  );
};

export default QuestionList;
