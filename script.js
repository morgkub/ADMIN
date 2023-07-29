function checkPassword(event) {
    event.preventDefault(); 

    const enteredPassword = document.getElementById("password").value;
    const correctPassword = "66funvalue"; 

    if (enteredPassword === correctPassword) {
        window.location.href = "https://morgkub.github.io/Gaster_Note/"; 
    } else {
        alert("Wrong password. Try again.");
    }
}
