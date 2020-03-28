//jQuery for displaying modal on navbar
$("#navbar_register_btn").on("click", function(e) {
    e.preventDefault();
    $('#contactModal').modal('show');
})

//JS for altering width of the description textbox.
document.getElementById('descript-txt').style.width = "300px";

function sendMail(contactForm) {
    emailjs.send("gmail", "rosie", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "project_request": contactForm.projectsummary.value
        })
        .then(
            function(response) {
                console.log("SUCCESS", response);
            },
            function(error) {
                console.log("FAILED", error);
            }
        );
    return false; // To block from loading a new page
}