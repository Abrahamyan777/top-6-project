import { useState } from 'react';
import css from './Quiz.module.scss'

const questions = [
    {
        title: 'What is React?',
        variants: ['library ', 'methodology ', 'state'],
        correct: 0
    },
    {
        title: ' What is JSX?',
        variants: ['method ', 'JSX is a syntax', 'is an object-oriented'],
        correct: 1
    },
    {
        title: ' What is Redux?',
        variants: ['features  ', 'extremely  ', 'library'],
        correct: 2
    },
    {
        title: ' What is Redux?',
        variants: ['features  ', 'extremely  ', 'library'],
        correct: 2
    },
]

function Quiz() {
    const [step, setStep] = useState(0)
    const [correct, setCorrect] = useState(0)
    const [percen, setPercen] = useState(0)

    const question = questions[step]
    const percentage = Math.round(step / questions.length * 100)
    // console.log(percentage , percen );
    
    const onClickVariant = (index) => {
        // console.log(correct, index);
        
        setPercen(percentage + percen)
        console.log(percen);


        // debugger
        setStep(step + 1)
        if(question.correct === index){
            // console.log(question.correct , index);
            setCorrect(correct + 1)
        }
    }
    const newGame = () => {
        setStep(0)
        setCorrect(0)
        setPercen(0)
    }

    return (
        <div className={css.QuizContener}>
            {
                step !== questions.length ?
                    <div className={css.Game}>
                        <div className={css.Progres}>
                            <div className={css.ProgresLiner } style={{ width: `${percentage}%` }} ></div>
                        </div>
                        <h2>{question.title}</h2>
                        <ul>
                            {
                                question.variants.map((text, index) => (
                                    <li key={index} onClick={() => onClickVariant(index)}>{text}</li>
                                ))
                            }
                        </ul>
                    </div> :
                    <div className={css.GameOver}>
                        <h2>Game Over</h2>
                        <p>Your {correct} is {questions.length} questions</p>
                        <button onClick={newGame}>Click Me</button>
                    </div>
            }
        </div>
    )
}

export default Quiz;