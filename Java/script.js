document.addEventListener("DOMContentLoaded", function () {
    console.log("Website loaded successfully");
});
document.querySelector(".contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message sent successfully!");
}); 