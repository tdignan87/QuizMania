const noOfQuestions = [10, 20, 30];
const difficultySetting = ["easy", "medium", "hard"];
const choiceOptions = ["A", "B", "C", "D"];
const questionCounter = document.getElementById("questionCount");
let allQuestions = [];
let correctAnswer = [];
let incorrectAnswers = [];
let score = 0;
let counter = 0;
let acceptingInput = false;
let availableQuestions = []
let catChoice = document.getElementById("dropdown-choices-category");
let difficultyOptions = document.getElementById("dropdown-choices-difficulty");
let questionOptions = document.getElementById("dropdown-choices-questions");
let answers = Array.from(document.getElementsByClassName(""));



/** Fetches API and converts to JSON format.
 * 
 */
function getQuestions() {
    //loadingWheel(true);
    fetch(
        `https://opentdb.com/api.php?amount=${questions}&category=${category}&difficulty=${difficulty}&type=multiple`

    )

    .then(response => response.json())
        .then(rawData => {
            generateQuestionsAnswers(rawData)
            console.log(rawData.results);
            // loadingWheel(false);

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
        startGame();
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
        category = catChoice.options[catChoice.selectedIndex].id;
        difficulty = difficultyOptions.options[difficultyOptions.selectedIndex].value;
        questions = questionOptions.options[questionOptions.selectedIndex].value;

        if ($(`#dropdown-choices-difficulty option:selected`).index() > 0 || ($(`#dropdown-choices-category option:selected`).index() > 0 || ($(`#dropdown-choices-questions option:selected`).index() > 0))) {

            document.getElementById("question_grid").style.display = "block";
            document.getElementById("score_grid").style.display = "block";
            document.getElementById("options-container-choices").style.display = "none";
            document.getElementById("jumbo-picture-main").style.display = "none";
            document.getElementById("play-submit-btn").style.display = "none";
            console.log(difficulty);
            getQuestions();


        } else {
            document.getElementById("main-status").style.display = "block";
            //console.log(difficulty);
        }






    })







})