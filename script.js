function validateLogin() {
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

   
    if (username === "JM RAMOS" && password === "gwapo") {
        document.getElementById("error-message").innerHTML = "Login successful!";
        window.location.href = "payroll.html";
    } else {
        document.getElementById("error-message").innerHTML = "Invalid username or password";
    }
}