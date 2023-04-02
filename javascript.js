const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const timerText = document.querySelector('#timer');



let currentQuestion= {}
let acceptingAnswers = true
let timer = 70
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

