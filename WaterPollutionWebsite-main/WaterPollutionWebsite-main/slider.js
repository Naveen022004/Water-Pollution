// script.js
document.addEventListener('DOMContentLoaded', function() {
    var contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        // Here, you can perform form validation and submission to a server using Ajax or any backend technology.
        // This example demonstrates the front-end form only.
        
        alert('Thank you, ' + name + '! Your message has been sent.');
        contactForm.reset();
    });
});
