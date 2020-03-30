const highScoresList = document.getElementById("finalScore");
const resultScores = JSON.parse(localStorage.getItem("highScores")) || [];

console.log(resultScores);

highScores.map(score => {
    console.log(`<li>${score.name}-${score.score}</li>`);
});