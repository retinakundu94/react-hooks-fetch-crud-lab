import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questionsArray, setQuestions}) {
  function handleDelete(id){
    const newQuestionArray = questionsArray.filter(q => q.id !== id);
    setQuestions(newQuestionArray)
    fetch("http://localhost:4000/questions/"+id, { 
      method: 'DELETE' })
    .then()
  }

  const displayPrompte = questionsArray.map(question => <QuestionItem key={question.id} question={question} handleDelete={handleDelete}/>)
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}
      {displayPrompte}
      </ul>
    </section>
  );
}

export default QuestionList;