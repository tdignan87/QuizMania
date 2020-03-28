//jQuery for displaying modal on navbar
$("#navbar_register_btn").on("click", function(e) {
    e.preventDefault();
    $("#contactModal").modal("show");
})

function sendMail(contactForm) {
    emailjs.send("gmail", "emailQM", {
            "from_name": contactForm.yourname.value,
            "from_email": contactForm.youremail.value,
            "recommendations": contactForm.yourrecomend.value
        })
        .then(
            function(response) {
                console.log("SUCCESS", response);
                document.getElementById("statusMsg").style.display = "block";
                document.getElementById("statusMsg").innerHTML = "Sent Successfully";

            },
            function(error) {
                console.log("SUCCESS", response);
                document.getElementById("statusMsg").style.display = "block";
                document.getElementById("statusMsg").innerHTML = "Failed To Send";
            }
        );
    return false; // To block from loading a new page
}