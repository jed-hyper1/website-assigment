
    document.addEventListener("DOMContentLoaded", function () {
        const form = document.getElementById("myForm");
        form.addEventListener("submit", function (event) {
            event.preventDefault(); 

            const username = document.getElementById("name").value;
            const password = document.getElementById("password").value;

            if (username.trim() === "" || password.trim() === "") {
                alert("Please fill in both fields.");
            } else {
                alert("Form submitted. ");
            }
        });
    });