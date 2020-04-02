const tenQuestions = 10;
const twentyQuestions = 20;
const thirtyQuestions = 30;
const difficultyEasy = "easy";
const difficultyMedium = "medium";
const difficultyHard = "hard";

fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple")
    .then(function(response) {
        console.log(response);
        if (response.status == 200) {
            console.log("connected successfully");
            let x = document.getElementById("dropdown-options").value;
            console.log(x);


        } else {
            console.log("failed to connect");


        }
    })