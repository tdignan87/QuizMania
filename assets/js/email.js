function sendMail(contactForm) {
    emailjs.send("gmail", "emailQM", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "recommendations": contactForm.recommendationInput.value
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