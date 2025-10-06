function sendMail(event) {
    event.preventDefault(); // 

    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("Message").value
    };

    emailjs.send("service_pu1rclh", "template_yqf441n", params)
        .then(function (response) {
            alert(" Message Sent Successfully!");
            console.log("SUCCESS!", response.status, response.text);
        }, function (error) {
            alert(" Failed to Send Message. Try again!");
            console.log("FAILED...", error);
        });
}