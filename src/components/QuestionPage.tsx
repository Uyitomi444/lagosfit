import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';
import { QUESTIONS } from '../data/quiz_data';
import OptionCard from './OptionCard';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Info } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const QuestionPage = () => {
    const { step, nextStep, prevStep, answers, setAnswer, toggleAnswer, isAnswerSelected } = useQuiz();
    const { language, t } = useLanguage();
    const navigate = useNavigate();

    // Ensure step is valid
    const currentQuestionIndex = step - 1;
    const question = QUESTIONS[currentQuestionIndex];

    if (!question) {
        // Redirect to start if state is invalid
        setTimeout(() => navigate('/'), 0);
        return null;
    }

    const currentAnswer = answers[question.id];
    const customBudgetAnswer = answers.customBudget;
    const isLast = currentQuestionIndex === QUESTIONS.length - 1;
    const isRentQuestion = question.id === 'rent';

    const handleNext = () => {
        if (currentAnswer || customBudgetAnswer) {
            if (isLast) {
                navigate('/result');
            } else {
                nextStep();
            }
        }
    };

    const handleCustomBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = parseInt(e.target.value.replace(/\D/g, ''));
        if (!isNaN(val)) {
            setAnswer('customBudget', val);
            // Clear categorical rent selection when using custom budget
            setAnswer('rent', undefined as any);
        } else {
            setAnswer('customBudget', undefined as any);
        }
    };

    const progressPercentage = ((currentQuestionIndex + 1) / QUESTIONS.length) * 100;

    return (
        <div style={{ padding: '40px 20px', maxWidth: '600px', margin: '0 auto', minHeight: '80vh', display: 'flex', flexDirection: 'column' }}>
            {/* Simple Progress Bar */}
            <div style={{ height: '4px', background: 'var(--border-color)', borderRadius: '4px', marginBottom: '40px', overflow: 'hidden' }}>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercentage}%` }}
                    transition={{ duration: 0.5 }}
                    style={{ height: '100%', background: 'var(--primary-color)' }}
                />
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={question.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '12px' }}>
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            {t('quiz.progress').replace('{0}', step.toString()).replace('{1}', QUESTIONS.length.toString())}
                        </span>
                        {question.multiSelect && (
                            <span style={{ fontSize: '0.8rem', color: 'var(--primary-color)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <Info size={14} /> {t('quiz.multi_select')}
                            </span>
                        )}
                    </div>

                    <h2 style={{ fontSize: '2rem', marginBottom: '32px', lineHeight: 1.3 }}>{question.text[language]}</h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
                        {question.options.map((opt) => (
                            <OptionCard
                                key={opt.id}
                                label={opt.label[language]}
                                selected={isAnswerSelected(question.id, opt.value)}
                                multiSelect={question.multiSelect}
                                onSelect={() => {
                                    if (question.multiSelect) {
                                        toggleAnswer(question.id, opt.value);
                                        if (isRentQuestion) setAnswer('customBudget', undefined as any);
                                    } else {
                                        setAnswer(question.id, opt.value);
                                        if (isRentQuestion) setAnswer('customBudget', undefined as any);
                                        // Auto-advance
                                        setTimeout(() => {
                                            if (isLast) navigate('/result');
                                            else nextStep();
                                        }, 400);
                                    }
                                }}
                            />
                        ))}

                        {isRentQuestion && (
                            <div style={{ marginTop: '20px', padding: '24px', background: 'rgba(var(--primary-rgb), 0.03)', borderRadius: '16px', border: '1px dashed var(--border-color)' }}>
                                <label style={{ display: 'block', marginBottom: '12px', fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-main)' }}>
                                    {t('quiz.budget_label')}
                                </label>
                                <input
                                    type="text"
                                    placeholder={t('quiz.budget_placeholder')}
                                    value={customBudgetAnswer ? customBudgetAnswer.toLocaleString() : ''}
                                    onChange={handleCustomBudgetChange}
                                    style={{
                                        width: '100%',
                                        padding: '16px',
                                        background: 'var(--bg-color)',
                                        border: '2px solid var(--border-color)',
                                        borderRadius: '12px',
                                        color: 'var(--text-color)',
                                        fontSize: '1.2rem',
                                        fontWeight: 600,
                                        outline: 'none',
                                        transition: 'border-color 0.2s'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'}
                                    onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                                />
                            </div>
                        )}
                    </div>

                    <div style={{ display: 'flex', gap: '20px', marginTop: 'auto', paddingTop: '40px' }}>
                        <button
                            className="btn btn-outline"
                            onClick={step <= 1 ? () => navigate('/') : prevStep}
                            style={{ flex: 1, height: '56px' }}
                        >
                            <ArrowLeft size={18} /> {t('quiz.back')}
                        </button>
                        <button
                            className="btn btn-primary"
                            onClick={handleNext}
                            disabled={!currentAnswer && !customBudgetAnswer}
                            style={{ flex: 1, height: '56px', opacity: (currentAnswer || customBudgetAnswer) ? 1 : 0.5 }}
                        >
                            {isLast ? t('quiz.results') : t('quiz.next')} <ArrowRight size={18} />
                        </button>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default QuestionPage;
