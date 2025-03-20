// You can add interactivity here, like form submission handling or other features.
document.addEventListener('DOMContentLoaded', function () {
    // Example to handle form submission
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Form submitted!');
    });
});
