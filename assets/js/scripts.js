const menuToggle = document.getElementById('menuToggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

//validacion del formulario
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact__form');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evitar el envío normal del formulario

    // Obtener los valores de los campos
    const formData = new FormData(form);

    // Mostrar mensaje de cargando
    const submitButton = form.querySelector('.contact__button');
    submitButton.textContent = "Enviando...";

    // Enviar los datos con fetch (AJAX)
    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        alert('Mensaje enviado con éxito.');
        form.reset(); // Limpiar el formulario
      } else {
        alert('Hubo un error al enviar el mensaje. Por favor, inténtalo nuevamente.');
      }
    }).catch(error => {
      alert('Ocurrió un error: ' + error.message);
    }).finally(() => {
      submitButton.textContent = "Enviar"; // Restablecer el texto del botón
    });
  });
});