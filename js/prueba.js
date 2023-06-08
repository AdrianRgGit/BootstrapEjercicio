// Selectores
const nameInputSelector = document.querySelector("#name-input");
const emailInputSelector = document.querySelector("#email-input");
const passwordInputSelector = document.querySelector("#password-input");
const confirmPasswordInputSelector = document.querySelector(
  "#confirm-password-input"
);
const buttonInputSelector = document.querySelector("#button-input");
const parrafoErrorSelector = document.querySelector("#p-error");
const cardNombreSelector = document.querySelector("#name-card");
const cardEmailSelector = document.querySelector("#email-card");

let credenciales = {};

// Función Validar
function validarCredenciales(event) {
  event.preventDefault();
  credenciales = {
    nombre: nameInputSelector.value,
    email: emailInputSelector.value,
    password: passwordInputSelector.value,
    confirmPassword: confirmPasswordInputSelector.value,
  };

  // Validación de todos los campos. Ninguno se queda vacío
  if (
    nameInputSelector.value === "" ||
    emailInputSelector.value === "" ||
    passwordInputSelector.value === "" ||
    confirmPasswordInputSelector.value === ""
  ) {
    parrafoErrorSelector.innerHTML = "Rellene todos los campos";
    borrarMensaje();
  }
  
  //   Todas las validaciones son correctas
  else {
    guardarUsuario();
    parrafoErrorSelector.innerHTML = "Usuario registrado con éxito";
  }
}

// Función guardar usuario
function guardarUsuario() {
  localStorage.setItem("credenciales", JSON.stringify(credenciales));
}

// Borrar mensaje
setTimeout(function borrarMensaje() {
  parrafoErrorSelector.innerHTML = ""
}, 3000);

buttonInputSelector.addEventListener("click", validarCredenciales);

// Guardar en Cards//
// const cardData = JSON.parse(localStorage.getItem("credenciales"));
// document.getElementById(
//   "userGuardado"
// ).innerHTML = `<p> Usuarios: ${cardData.nombre}</p> <p>Correo: ${cardData.email}</p>`;
// console.log(cardData.nombre);
