const noOfQuestions = [10, 20, 30];
const difficultySetting = ["Easy", "Medium", "Hard"];
const choiceOptions = ["A", "B", "C", "D"];
let allQuestions = [];
let correctAnswer = [];
let incorrectAnswers = [];
let score = 0;
let counter = 0;
let availableQuestions = []
let catChoice = document.getElementById("dropdown-choices-category");

/** Fetches API and converts to JSON format.
 */
function getQuestions(difficulty, questionAmount, category) {
    //loadingWheel(true);
    fetch(
            // `https://opentdb.com/api.php?amount=${questionAmount}&category=${category}&difficulty=${difficulty}&type=multiple`
            `https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple`
        )
        .then(response => response.json())
        .then(rawData => {
            generateQuestionsAnswers(rawData)
                // loadingWheel(false);
            console.log(rawData.results);
        })
        .catch(error => console.log(error));
}
/** Takes the allquestions array and adds the API data results and filters out on questions only. 
 ** Display the questions only in the DOM.
 */
function generateQuestionsAnswers(data) {
    allQuestions = data.results.map(data => {
        let questionsOnly = {
            question: data.question
        };
        questionsOnly.answer = Math.floor(Math.random() * 3) + 1;
        allQuestions = allQuestions[Math.floor(Math.random() * allQuestions.length)];
        $("#question-main").append(`<h3 id="question-main">${data.question}</h3>`);
        incorrectAnswers = data.incorrect_answers;
        correctAnswer = data.correct_answer;
        /** Pushes the incorrect answers into the correct answers Array.*/
        incorrectAnswers.push(correctAnswer);
        populateAnswers(incorrectAnswers);
    })
    return;
}

function populateAnswers(answers) {
    answers.forEach(function(item, index) {
        $(`#available-answers`).append(`<div class="col-sm">
        <p class="choice-options">${choiceOptions[index]}</p>
         <p class="choice-answer" data-number="${index +1}">${item}</p>
     </div>`)

    });

    choiceOptions.forEach(value, index => {
        let html = `
        <p>${value}<p>
        `
        $(`<p class="choice-options>"${index}</p`).append(html)

    });
}

/** Retrieves category list from API and passes to dropdown on homepage.
 */
$(document).ready(function generateCategories() {
    fetch(`https://opentdb.com/api_category.php`)
        .then(res => res.json())
        .then(data => {
            data.trivia_categories.forEach(category => {
                $("#dropdown-choices-category").append(`<option value="${category.id}">${category.name}</option>`)
            });

        })
    $(document).ready(function questionsAmount() {
        $.each(noOfQuestions, function(val, text) {
            $('#dropdown-choices-questions').append($(`<option>${text}</option>`))
        });
    })

    $(document).ready(function generateDifficulty() {
        $.each(difficultySetting, function(val, text) {
            $('#dropdown-choices-difficulty').append($(`<option>${text}</option>`))
        });
    })

    $("#play-submit-btn").click(function() {

        // category = catChoice.options[catChoice.selectedIndex].id;
        // difficulty = difficultySetting.options[difficultySetting.selectedIndex].id;
        //questionAmount = noOfQuestions.options[noOfQuestions.selectedIndex].id;
        getQuestions();

    })



})