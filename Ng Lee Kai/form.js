document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const username = document.getElementById("name").value;
        const password = document.getElementById("password").value;
        const email = document.getElementById("email").value;

            alert("Form submitted.")        
    });
});