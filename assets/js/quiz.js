const noOfQuestions = [10, 20, 30];
const difficultySetting = ["easy", "medium", "hard"];
const category = null;
let difficulty = null;
let questions = null;
let allQuestions = [];
let userScore = 0;


/** Fetches the API Categories if successful connection to API. Simen gave me this part of the code
 * 
 */
$(document).ready(function generateCategories() {
    fetch(`https://opentdb.com/api_category.php`)
        .then(res => res.json())
        .then(data => {
            data.trivia_categories.forEach(category => {
                $("#dropdown-choices-category").append(`<option value="${category.id}">${category.name}</option>`);
            });
        });
    $.each(noOfQuestions, function(val, text) {
        $('#dropdown-choices-questions').append($(`<option>${text}</option>`));
    });

    $.each(difficultySetting, function(val, text) {
        $('#dropdown-choices-difficulty').append($(`<option>${text}</option>`));
    });
});


function generateQuestionsAnswers(data) {
    allQuestions = data.results.map(data => {
        let questionsOnly = {
            question: data.question

        };
        questionCount = 0;
        allQuestions = allQuestions[Math.floor(Math.random() * allQuestions.length)];
        //   questionsOnly.answer = Math.floor(Math.random() * 3) + 1;
        //  questionsOnly.answer - 1, 0, data.correct_answer
        $("#question-main").append(`<h3 id="question-main">${data.question}</h3>`);
        incorrectAnswers = data.incorrect_answers;
        correctAnswer = data.correct_answer;
        /** Pushes the incorrect answers into the correct answers Array.*/
        incorrectAnswers.push(correctAnswer);
        incorrectAnswers = shuffleArray(incorrectAnswers)
        populateAnswers(incorrectAnswers);
        questionCounter.innerText = (`Question:${questionCount}/${questions}`)
        startGame();
    })
    return;

}

function populateAnswers(answers) {
    answers.forEach(function(item, index) {
        $(`#available-answers`).append(`<div class="col-sm">
        <p class="choice-options" >${choiceOptions[index]}</p>
         <p class="choice-answer" id="answer-opt" onclick="verifyAnswer()"  data-number="${index +1}">${item}</p>
     </div>`)

    });

    choiceOptions.forEach(index => {
        let html = `
        `
        $(`<p class="choice-options>"${index}</p`).append(html)

    });
}
/** Retrieves category list from API and passes to dropdown on homepage.
 */
(document).ready(function generateCategories() { // this is your code
    fetch(`https://opentdb.com/api_category.php`)
        .then(res => res.json())
        .then(data => {
            data.trivia_categories.forEach(category => {
                $("#dropdown-choices-category").append(`<option value="${category.id}">${category.name}</option>`);
            });
        });
    $.each(noOfQuestions, function(val, text) {
        $('#dropdown-choices-questions').append($(`<option>${text}</option>`));
    });

    $.each(difficultySetting, function(val, text) {
        $('#dropdown-choices-difficulty').append($(`<option>${text}</option>`));
    });
});

/** Play submit function IF statements to ensure criteria is selected before game will allow to play. All options must be selected before questions will be generated.
 */

$("#play-submit-btn").click(function() {
category = catChoice.options[catChoice.selectedIndex].id;
difficulty = difficultyOptions.options[difficultyOptions.selectedIndex].value;
questions = questionOptions.options[questionOptions.selectedIndex].value;

if (($(`#dropdown-choices-difficulty option:selected`).index() > 0) && ($(`#dropdown-choices-category option:selected`).index() > 0) && ($(`#dropdown-choices-questions option:selected`).index() > 0)) {

    document.getElementById("question_grid").style.display = "block";
    document.getElementById("score_grid").style.display = "block";
    document.getElementById("options-container-choices").style.display = "none";
    document.getElementById("jumbo-picture-main").style.display = "none";
    document.getElementById("play-submit-btn").style.display = "none";
    getQuestions();


} else {
    document.getElementById("main-status").style.display = "block";

}

})

})

function startGame() {

    $(`[id="answer-opt"]`).click(function() {

        $.each(noOfQuestions, function(index, question) {
            question.Enabled = false; {
                if (question.correct_answer == question.UserSelectedOption)
                    score++ * 10;
                console.log("You have selected correct answer");
            }
        });
        document.getElementById("score-result").innerText = `${score}`;

    })



}

function shuffleArray(array) {
    let currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}