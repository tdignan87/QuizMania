let noOfQuestions = [10, 20, 30];
let difficultySetting = ["easy", "medium", "hard"];
let category = null;
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
    alert("Score saved as " + localStorage.getItem("userScore") + "!");
    window.location.replace("index.html");
});


/** Retrieve API and convert response data into JSON format. Any errors are logged to console */
function getQuestions() {
    fetch(`https://opentdb.com/api.php?amount=${questions}&category=${category}&difficulty=${difficulty}&type=multiple`)
        .then(response => response.json())
        .then(rawData => {
            generateQuestionsAnswers(rawData);

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
/**
 * Take populated question and insert into the DOM.
 * 
 */
function populateQuestion(index) {
    if (index >= 0 && index < allQuestions.length) {
        $("#question-main").empty();
        $(`#available-answers`).empty();
        let question = allQuestions[index];

        $("#question-main").append(`<h3 id="question-main">${question.Question}</h3>`);

        let optionA = "<div class='col-sm'><p class='choice-options'>A</p><p class='choice-answer' id='answer-opt' onclick=\"showAnswer(" + index + ", 'A')\">" + question.OptionA + "</p></div>";
        $("#available-answers").append(optionA);

        let optionB = "<div class='col-sm'><p class='choice-options'>B</p><p class='choice-answer' id='answer-opt' onclick=\"showAnswer(" + index + ", 'B')\">" + question.OptionB + "</p></div>";
        $("#available-answers").append(optionB);

        let optionC = "<div class='col-sm'><p class='choice-options'>C</p><p class='choice-answer' id='answer-opt' onclick=\"showAnswer(" + index + ", 'C')\">" + question.OptionC + "</p></div>";
        $("#available-answers").append(optionC);

        let optionD = "<div class='col-sm'><p class='choice-options'>D</p><p class='choice-answer' id='answer-opt' onclick=\"showAnswer(" + index + ", 'D')\">" + question.OptionD + "</p></div>";
        $("#available-answers").append(optionD);

        if (index < allQuestions.length - 1) {
            $('#available-answers').append("<div class='col-sm'><input type='button' id='next-btn' value='Next Question' onclick=\"navigateQuestion(" + index + ")\" /></div>");



        }

        document.getElementById("questionCount").innerText = `Question:${index + 1}/${allQuestions.length}`;
    }
}



function showAnswer(index, option) {
    if (index >= 0 && index < allQuestions.length) {
        ("+index +") + navigateQuestion()
        let question = allQuestions[index];
        question.UserSelectedOption = option;
        switch (question.CorrectOption) {
            case 'A':
                $(".choice-answer:eq(0)").css("background-color", "green");
                break;
            case 'B':
                $(".choice-answer:eq(1)").css("background-color", "green");
                break;
            case 'C':
                $(".choice-answer:eq(2)").css("background-color", "green");
                break;
            case 'D':
                $(".choice-answer:eq(3)").css("background-color", "green");
                break;

        }

        /**
         * if correctOption in API doesnt match user input background color will go red
         * 
         */

        if (question.CorrectOption != question.UserSelectedOption) {
            switch (question.UserSelectedOption) {
                case 'A':
                    $(".choice-answer:eq(0)").css("background-color", "red");
                    break;
                case 'B':
                    $(".choice-answer:eq(1)").css("background-color", "red");
                    break;
                case 'C':
                    $(".choice-answer:eq(2)").css("background-color", "red");
                    break;
                case 'D':
                    $(".choice-answer:eq(3)").css("background-color", "red");
                    break;
            }
        } else {
            userScore = userScore + 10;
            document.getElementById("score-result").innerText = userScore;
        }
    }
}

/**
 * Gets next question and displays it to user
 */

function navigateQuestion(index) {
    if (index >= 0 && index < allQuestions.length) {
        populateQuestion(index + 1);
    }
}

function startAgain() {

}