function checkPassword(event) {
    event.preventDefault(); // Заборонити стандартну дію форми (відправку)

    const enteredPassword = document.getElementById("password").value;
    const correctPassword = "your_password_here"; // Ваш реальний пароль

    if (enteredPassword === correctPassword) {
        // Якщо пароль правильний, перенаправити користувача на інший сайт
        window.location.href = "https://www.example.com"; // Ваш URL
    } else {
        alert("Неправильний пароль. Спробуйте ще раз.");
    }
}
