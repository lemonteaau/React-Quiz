import Options from "./Options";
import { useQuiz } from "./context/QuizProvider";

function Question() {
  const { questions, index } = useQuiz();
  const question = questions[index];
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} />
    </div>
  );
}

export default Question;
