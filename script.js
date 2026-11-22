
// Mobile menu and navigation interaction

document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            console.log("Welcome to Nexora Digital!");
        });
    });

    console.log("Nexora Digital Website Loaded Successfully!");

});
