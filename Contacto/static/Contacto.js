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

// Manejo del envío del formulario
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevenir el comportamiento por defecto

  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;

  // Validación simple del formulario
  if (!name || !email || !message) {
    alert('Por favor, completa todos los campos.');
  } else {
    // Enviar el formulario usando fetch a Formspree
    fetch('https://formspree.io/f/meoqgrqv', {
      method: 'POST',
      body: new FormData(document.getElementById('contactForm')),
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        alert('Formulario enviado correctamente.');
        document.getElementById('contactForm').reset(); // Limpia el formulario
        modal.style.display = "none"; // Cierra el modal
      } else {
        alert('Hubo un error al enviar el formulario.');
      }
    }).catch(error => {
      alert('Hubo un problema con el envío. Inténtalo de nuevo.');
    });
  }
});
