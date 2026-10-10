// Tizimga kirish formasini ushlab olamiz
const loginForm = document.getElementById('loginForm');

if (loginForm) {
  loginForm.addEventListener('submit', function(event) {
    // Sahifa avtomatik yangilanib ketishining oldini olamiz
    event.preventDefault();

    // Login va parolni o'qib olamiz
    const loginVal = document.getElementById('login').value;
    const passVal = document.getElementById('password').value;

    // Oddiy tekshiruv
    if (loginVal === "" || passVal === "") {
      alert("Iltimos, barcha maydonlarni to'ldiring!");
    } else {
      alert("Muvaffaqiyatli kirdingiz, " + loginVal + "!");
      // Bu yerda keyinchalik serverga yuborish kodlari yoziladi
    }
  });
}
