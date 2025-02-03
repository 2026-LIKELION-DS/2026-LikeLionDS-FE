import React from "react";
import QuestionItem from "./QuestionItem";

const QuestionList = ({ questions, setQuestions, handleDeleteAnswer }) => {
  if (!questions || questions.length === 0) {
    return <p style={{ padding: "30px", paddingTop: "15px" }}>질문이 없습니다. 새로운 질문을 추가해보세요!</p>;
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
