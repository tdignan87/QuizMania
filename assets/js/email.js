function sendMail(contactUs) {
    emailjs.send("gmail", "emailQM", {
            "from_name": contactUs.nameInputBox.value,
            "from_email": contactUs.emailInputBox.value,
            "recommendations": contactUs.recommendationInput.value
        })
        .then(
            function(response) {
                console.log("SUCCESS", response);
            },
            function(error) {
                console.log("FAILED", response);

            }
        );
    return false; // To block from loading a new page
}

console.log("hello world");