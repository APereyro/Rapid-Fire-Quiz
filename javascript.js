const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const timerText = document.querySelector('#timer');

let currentQuestion = {}
let acceptingAnswers = true
let score = 70
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        choice1: '<js>',
        choice2: '<script>',
        choice3: '<scripting>',
        choice4: '<javascript>',
        answer: 2,
    },
    {
        question: 'How do you write Hello World in an alert box?',
        choice1: 'alert("hello World")',
        choice2: 'msg("helloo World")',
        choice3: 'msgbox("helloo World")',
        choice4: 'alertbox("helloo World")',
        answer: 1,
    },
    {
        question: 'Which operator is used to assign a value to a variable?',
        choice1: '*',
        choice2: '=',
        choice3: '-',
        choice4: 'x',
        answer: 2
    },
    {
        question: 'How to write an IF statement in JavaScript?',
        choice1: 'if i--5 then',
        choice2: 'if i = 5',
        choice3: 'if i = 5 then',
        choice4: 'if (i==5)',
        answer: 4,
    }
]

const minusTime = 10
const maxQuestions = 4 

startGame = () => {
    questionCounter = 0
    score = 70
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= maxQuestions) {
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('./scores.html')
    }

    questionCounter++
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    choices.forEach(choice => {
        choice.addEventListener('click', e => {
            if (!acceptingAnswers) return;

            acceptingAnswers = false;
            const selected = e.target;
            const selectedAnswer = selected.dataset['number'];

            let classToApply =
                selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

            if (classToApply === 'incorrect') {
                decrementTimer(minusTime);
            }

            selected.parentElement.classList.add(classToApply);

            setTimeout(() => {
                selected.parentElement.classList.remove(classToApply);
                acceptingAnswers = true;
                availableQuestions.splice(questionsIndex,1);
                getNewQuestion();
            }, 1000);       
        })
    })

    acceptingAnswers = true
}

decrementTimer = num => {
    score -=num
    timerText.innerText = score
}

startGame()


