/** function loads on Index load event. Using function to fetch the open trivia API.
 ** then if we get a response, we are converting it to JSON format and then logging the raw data into the console.
 */

let noOfQuestions = [10, 20, 30];
let difficultySetting = ["Easy", "Medium", "Hard"];
let allQuestions = [];
let Answers = [];
let incorrectAnswers = [];
let score = 0;
let counter = 0;
let availableQuestions = []



function getQuestions(difficulty, questionAmount, category) {
    loadingWheel(true);
    fetch(
            //`https://opentdb.com/api.php?amount=${questionAmount}&category=${category}&difficulty=${difficulty}&type=multiple`
            `https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple`
        )
        .then(response => response.json())
        .then(rawData => {
            generateQuestionsAnswers(rawData)
            loadingWheel(false);
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
        allQuestions = allQuestions[Math.floor(Math.random() * allQuestions.length)];
        $("#question-main").append(`<h3 id="question-main">${data.question}</h3>`);
        console.log(questionsOnly);
        let answersOnly = {
            answer: data.answer
        }



    })


    return;
}

/** Retrieves category list from API and passes to dropdown on homepage.
 ** 
 */
$(document).ready(function generateCategories() {
    fetch(`https://opentdb.com/api_category.php`)
        .then(res => res.json())
        .then(data => {
            data.trivia_categories.forEach(category => {
                $("#dropdown-choices-category").append(`<option value="${category.id}">${category.name}</option>`)
            })
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

    /** When user clicks play button call getQuestions function **/

    $("#play-submit-btn").click(function() {
        getQuestions();

    })
});