const highScoresList = document.getElementById("highScoresList");
const resultScores = JSON.parse(localStorage.getItem("highScores")) || [];

console.log(resultScores);