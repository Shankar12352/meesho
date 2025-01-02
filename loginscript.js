document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission for now

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;

    if (name && email && phone && password) {
        alert(`Welcome, ${name}! Your account has been created.`);
        
    } else {
        alert("Please fill out all fields!");
    }
});
