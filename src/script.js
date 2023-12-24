// script.js

// Запитати користувача про ім'я
const userName = prompt("Будь ласка, введіть своє ім'я:");

// Отримати контейнер за його id
const outputContainer = document.getElementById("output-container");

// Перевірити, чи контейнер існує
if (outputContainer) {
    // Вивести ім'я на сторінці в контейнер
    outputContainer.innerHTML = "<h1>Привіт, " + userName + "!</h1>";
}
