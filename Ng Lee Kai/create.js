document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const username = document.getElementById("name").value;
        const password = document.getElementById("password").value;
        const data = document.getElementById("data").value;
        const phone = document.getElementById("phone").value;
        const passwordBox = document.getElementById("passwordBox").value;

            alert("Form submitted.")        
    });
});