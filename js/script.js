
document.getElementById('contactForm').addEventListener('submit', function(event) {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
        alert("Please fill in all required fields.");
        event.preventDefault();  // Prevent form submission if validation fails
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
    }
});
