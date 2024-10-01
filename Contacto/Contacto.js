// Obtener elementos del DOM
const modal = document.getElementById("contactModal");
const btn = document.getElementById("contactButton");
const span = document.getElementsByClassName("close")[0];

// Abrir el modal cuando el usuario hace clic en el botón
btn.onclick = function() {
  modal.style.display = "block";
}

// Cerrar el modal cuando el usuario hace clic en la 'x'
span.onclick = function() {
  modal.style.display = "none";
}

// Cerrar el modal cuando el usuario hace clic fuera de él
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Validación simple del formulario
document.getElementById('contactForm').addEventListener('submit', function(event) {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;

  if (!name || !email || !message) {
    alert('Por favor, completa todos los campos.');
    event.preventDefault(); // Prevenir envío
  } else {
    alert('Formulario enviado correctamente.');
    modal.style.display = "none"; // Cerrar modal después de enviar
  }
});
