// Handle the Sign In form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission to simulate login
  
    // Get the email and password values
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Basic validation
    if (!email || !password) {
      alert("Both email and password are required.");
      return;
    }
  
    // Simulate an API call or successful login
    if (email === "user@gmail.com" && password === "12345678") {
      alert("Sign In Successful!");
      // Redirect to home.html after successful login
      window.location.href = "home.html"; // This redirects to home.html after successful login
    } else {
      alert("Invalid email or password.");
    }
  });
  