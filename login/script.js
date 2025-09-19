// Simulación de login y registro (sin base de datos real)

// Evento login
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Inicio de sesión exitoso (simulado).");
      window.location.href = "../index.html"; 
    });
  }

  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Registro exitoso (simulado).");
      window.location.href = "../index.html";
    });
  }
});
