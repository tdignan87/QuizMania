const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById("score");
const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
finalScore.innerText = mostRecentScore;
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];


console.log(choices);




//open trivia fetch API
fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple")
    .then(res => {
        return res.json();
    })
    .then(availableQuestions => {
        console.log(availableQuestions.results);
        questions = availableQuestions.results.map(availableQuestions => {
            const formattedQuestion = {
                question: availableQuestions.question
            };


            const answerChoices = [...availableQuestions.incorrect_answers];
            formattedQuestion.answer = Math.floor(Math.random() * 3) + 0;
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
const MAX_QUESTIONS = 3;
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
        //go to the end page
        return window.location.assign("/index.html"); // needs changed here so it goes to results section of page.
    }
    questionCounter++;

    // Store score in local storage
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
    }) // highScores.splice(5);
localStorage.setItem("highScores", JSON.stringify(highScores));