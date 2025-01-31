import React from "react";
import QuestionItem from "./QuestionItem";

const QuestionList = ({ questions, setQuestions, handleDeleteAnswer }) => {
  if (!questions || questions.length === 0) {
    return <p style={{ padding: "30px", paddingTop: "15px" }}>질문이 없습니다. 새로운 질문을 추가해보세요!</p>;
  }

  return (
    <div>
      {questions.map((question) => (
        <QuestionItem
          key={question.id}
          question={question}
          setQuestions={setQuestions}
          handleDeleteAnswer={handleDeleteAnswer} // ✅ 삭제 함수 전달
        />
      ))}
    </div>
  );
};

export default QuestionList;
