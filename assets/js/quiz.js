/** function loads on Index load event. Using function to fetch the open trivia API.
 ** then if we get a response, we are converting it to JSON format and then logging the raw data into the console.
 */

let noOfQuestions = [10, 20, 30];

window.onload = function retrieveQuestions() {
    fetch(`https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple`

        ).then(response => response.json())
        .then(rawData => {
            console.log(rawData.results);
        })
        .catch(error => console.log(error));
}



$(document).ready(function generateCategories() {
    fetch(`https://opentdb.com/api_category.php`)
        .then(res => res.json())
        .then(data => {
            data.trivia_categories.forEach(category => {
                $("#category-options").append(`<option value="${category.id}">${category.name}</option>`)
                console.log(`test`);
            })
        })
})