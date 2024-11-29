
document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementById('changeTextButton');
    let message = document.getElementById('message');

    button.addEventListener('click', function() {
        message.textContent = "Review complete!";
    });
});