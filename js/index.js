// Selectores
const nameInputSelector = document.querySelector("#nameInput");
const emailInputSelector = document.querySelector("#emailInput");
const passwordInputSelector = document.querySelector("#passwordInput");
const confirmPasswordInputSelector = document.querySelector(
  "#confirmPasswordInput"
);
const buttonInputSelector = document.querySelector("#buttonInput");
const parrafoSelector = document.querySelector("#parrafo");

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
    parrafoSelector.innerHTML = "Rellene todos los campos";
    
  }

  //   Validación email
  else if (
    /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(emailInputSelector.value) !== true
  ) {
    parrafoSelector.innerHTML = "Introduzca un email válido";
    
  }

  //   Validación Contraseñas iguales
  else if (passwordInputSelector.value !== confirmPasswordInputSelector.value) {
    parrafoSelector.innerHTML = "Las contraseñas no coinciden";
    
  }

  //   Validación contraseña
  else if (/^[a-zA-Z]\w{3,14}$/.test(passwordInputSelector.value)) {
    parrafoSelector.innerHTML = "Introduzca una contraseña válida";
    
  }

  //   Todas las validaciones son correctas
  else {
    guardarUsuario();
    parrafoSelector.innerHTML = "Usuario registrado con éxito";
  }
}

// Función guardar usuario
function guardarUsuario() {
  localStorage.setItem("credenciales", JSON.stringify(credenciales));
}

// Borrar mensaje
setTimeout(function () {
  parrafoSelector.innerHTML = "";
}, 3000);

buttonInputSelector.addEventListener("click", validarCredenciales);
