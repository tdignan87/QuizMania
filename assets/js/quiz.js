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
(document).ready(function generateCategories() {
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

/** Play submit function IF statements to ensure criteria is selected before game will allow to play. All options must be selected before questions will be generated. DOM items 
 * Will show depending on what items are selected.
 */
$("#play-submit-btn").click(function() {
    if (($(`#dropdown-choices-difficulty option:selected`).index() > 0) && ($(`#dropdown-choices-category option:selected`).index() > 0) && ($(`#dropdown-choices-questions option:selected`).index() > 0)) {
        category = $("#dropdown-choices-category option:selected").val();
        difficulty = $("#dropdown-choices-difficulty option:selected").text();
        questions = $("#dropdown-choices-questions option:selected").text();
        document.getElementById("question_grid").style.display = "block";
        document.getElementById("score_grid").style.display = "block";
        document.getElementById("options-container-choices").style.display = "none";
        document.getElementById("jumbo-picture-main").style.display = "none";
        document.getElementById("play-submit-btn").style.display = "none";
        getQuestions();
    } else {
        document.getElementById("main-status").style.display = "block";
    }
});

/** click function for play submit button. Once pressed the score is saved to local storage */
$("#success-btn").click(function() {
    localStorage.setItem("userScore", userScore);
    alert("Score saved as " + localStorage.getItem("userScore") + "!"); //aw
});


/** Retrieve API and convert response data into JSON format. Any errors are logged to console */
function getQuestions() {
    fetch(`https://opentdb.com/api.php?amount=${questions}&category=${category}&difficulty=${difficulty}&type=multiple`)
        .then(response => response.json())
        .then(rawData => {
            generateQuestionsAnswers(rawData);
            console.log(rawData);
        })
        .catch(error => console.log(error));
}

/** create options and answers array using the API's correct_answer and incorrect_answers. Data index is stored. Selected value is null until value is selected.  */

function generateQuestionsAnswers(data) {
    $.each(data.results, function(index, item) {
        let question = {};
        question.Question = item.question;
        let randomNumber = Math.floor(Math.random() * 3) + 1;
        switch (randomNumber) {
            case 1:
                question.OptionA = item.correct_answer;
                question.OptionB = item.incorrect_answers[0];
                question.OptionC = item.incorrect_answers[1];
                question.OptionD = item.incorrect_answers[2];
                question.CorrectOption = 'A';
                break;
            case 2:
                question.OptionB = item.correct_answer;
                question.OptionA = item.incorrect_answers[0];
                question.OptionC = item.incorrect_answers[1];
                question.OptionD = item.incorrect_answers[2];
                question.CorrectOption = 'B';
                break;
            case 3:
                question.OptionC = item.correct_answer;
                question.OptionA = item.incorrect_answers[0];
                question.OptionB = item.incorrect_answers[1];
                question.OptionD = item.incorrect_answers[2];
                question.CorrectOption = 'C';
                break;
            case 4:
                question.OptionD = item.correct_answer;
                question.OptionA = item.incorrect_answers[0];
                question.OptionB = item.incorrect_answers[1];
                question.OptionC = item.incorrect_answers[2];
                question.CorrectOption = 'D';
                break;
        }
        question.UserSelectedOption = '';
        question.Enabled = true;
        allQuestions.push(question);
    });
    populateQuestion(0);
}


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