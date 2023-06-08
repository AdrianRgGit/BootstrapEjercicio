// Me traigo el div cards
const cardsHtml = document.querySelector("#cards");

// Guardo las keys en un array 
const keys = Object.keys(localStorage); // es un metodo que devuelve todas las keys del localStorage como array
console.log(keys)// Para comprobar

// Itero sobre cada clave para obtener el valor
for (let i = 0; i < keys.length; i++) {
  usuario = JSON.parse(localStorage.getItem(keys[i]));
  cardsHtml.innerHTML += `<div class="card m-2"><div class="card-body"><h5 class="card-title">Usuario: ${usuario.nombre}</h5><p class="card-text">Usuario: ${usuario.email}</p></div>`;
} 
// Las clases de Bootstrap deben ponerse en el innerHTML porque sino al cargar los datos con <p> se concatenan en una sola card grande. De esta forma le aplicamos las clases a cada objeto.
