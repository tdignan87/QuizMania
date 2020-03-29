const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById("score");
const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);
finalScore.innerText = mostRecentScore;

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [{
        question: "Inside which HTML element do we put Javascript?",
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
const MAX_HIGH_SCORES = 5;

startAgain = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};


getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        //go to the end page
        return window.location.assign("/index.html"); // needs changed here so it goes to results section of page.
    }
    questionCounter++;

    questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;
    localStorage.setItem("mostRecentScore", score);



    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        let answerToApply = "wrong";
        if (selectedAnswer == currentQuestion.answer) {
            answerToApply = "correct";
        }

        if (answerToApply == "correct") {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(answerToApply);
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(answerToApply);
            getNewQuestion();
        }, 1000); // wait for 1 second

    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
}


username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value;
})


saveHighScore = (e) => {
    e.preventDefault();
}


const scoreArray = {
    score: Math.floor(Math.random() * 100),
    name: username.value
};
highScores.push(score);
highScores.sort((a, b) => {
    return b.score - a.score;
})
highScores.splice(5);
localStorage.setItem("highScores", JSON.stringify(highScores));
window.location.assign("/");


startAgain();