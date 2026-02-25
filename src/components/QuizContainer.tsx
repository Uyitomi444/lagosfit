import { useQuiz } from '../context/QuizContext';
import { QUESTIONS } from '../data/quiz_data';
import LandingPage from './LandingPage';
import QuestionPage from './QuestionPage';
import ResultPage from './ResultPage';

const QuizContainer = () => {
    const { step } = useQuiz();

    if (step === 0) {
        return <LandingPage />;
    }

    if (step > 0 && step <= QUESTIONS.length) {
        return <QuestionPage />;
    }

    return <ResultPage />;
};

export default QuizContainer;
