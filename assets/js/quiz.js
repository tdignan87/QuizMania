/** function loads on Index load event. Using function to fetch the open trivia API.
 ** then if we get a response, we are converting it to JSON format and then logging the raw data into the console.
 */

window.onload = function retrieveQuestions() {
    fetch(`https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple`

        ).then(response => response.json())
        .then(rawData => {
            console.log(rawData.results);
        })
}