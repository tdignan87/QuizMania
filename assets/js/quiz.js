const tenQuestions = 10;
const twentyQuestions = 20;
const thirtyQuestions = 30;
const difficultyEasy = "easy";
const difficultyMedium = "medium";
const difficultyHard = "hard";

fetch("https://opentdb.com/api.php?amount=" + tenQuestions + "&category=9&difficulty=" + difficultyEasy + "&type=multiple")
    .then(function(response) {
        console.log(response);
        if (response.status == 200) {
            console.log("connected successfully");



        } else {
            console.log("failed to connect");


        }
    })