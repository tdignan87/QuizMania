const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById("score");
const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];


let questions = [];

//open trivia fetch API

fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple")
    .then(res => {
        return res.json();
    })
    .then(availableQuestions => {


        questions = availableQuestions.results.map(availableQuestions => {
            const formattedQuestion = {
                question: availableQuestions.question
            };


            const answerChoices = [...availableQuestions.incorrect_answers];


            formattedQuestion.answer = Math.floor(Math.random() * 3) + 1;
            answerChoices.splice(formattedQuestion.answer - 1, 0,
                answerChoices.correct_answer);


            answerChoices.forEach((choice, index) => {
                formattedQuestion["choice" + (index + 1)] = choice;

            })

            return formattedQuestion;


        });

        startAgain();
        // questions = availableQuestions;
        //  startAgain();
    })
    //log error to console
    .catch(err => {
        console.error(err);
    });



//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;
const MAX_HIGH_SCORES = 5;

// Start again function to reset values
startAgain = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

// Once questions reached go back to top of page.

getNewQuestion = () => {


    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score);
        //go to the end page
        return window.location.assign("/index.html"); // needs changed here so it goes to results section of page.
    }
    // increments counter to 1
    questionCounter++;

    // Store score in local storage
    // Template literal to show no questions out of how many.
    questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;


    // make interger
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    // Dispose of questions already used
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
        }, 2000); // wait for 2 second

    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
}