const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));


let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [{
        question: "Inside which HTML element do we put Javascript??",
        choice1: "<script>",
        choice2: "<javascript>",
        choice3: "<js>",
        choice4: "<scripting>",
        answer: 1
    },
    {
        question: "What is the correct syntax for referring to an external script called xxx.js?",
        Choice1: "<script href=xxx.js'>",
        Choice2: "<script href=xxx.js'>",
        Choice3: "<script href=xxx.js'>",
        Choice4: "<script href=xxx.js'>",
        answer: 3
    },
    {
        question: "What is my name?",
        Choice1: "Tom",
        Choice2: "Ian",
        Choice3: "Jack",
        Choice4: "Jill",
        answer: 4
    }
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;


startAgain = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};


getNewQuestion = () => {
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion["choice" + number];

    })


};

startAgain();