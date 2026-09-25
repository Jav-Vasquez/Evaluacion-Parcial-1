const productos = [
  { id: 1, nombre: "Café Etiopía", precio: 12000, imagen: "img/cafe-etiopia.jpg" },
  { id: 2, nombre: "Café Huila", precio: 11000, imagen: "img/cafe-huila.jpg" },
  { id: 3, nombre: "Café Perú", precio: 11500, imagen: "img/cafe-peru.jpg" },
  { id: 4, nombre: "Té Sencha", precio: 8000, imagen: "img/te-sencha.jpg" },
  { id: 5, nombre: "Té Chai", precio: 8500, imagen: "img/te-chai.jpg" },
  { id: 6, nombre: "Prensa Francesa", precio: 15000, imagen: "img/prensa-francesa.jpg" },
  { id: 7, nombre: "Kit Pour Over", precio: 18000, imagen: "img/kit-pour-over.jpg" },
  { id: 8, nombre: "Termo", precio: 9000, imagen: "img/termo.jpg" },
];

let carrito = [];
let total = 0;


function mostrarProductos(idContenedor, cantidad) {
  const contenedor = document.getElementById(idContenedor);
  if (!contenedor) return;

  const lista = cantidad ? productos.slice(0, cantidad) : productos;

  lista.forEach(function (p) {
    contenedor.innerHTML += `
      <div class="tarjeta-producto">
        <img src="${p.imagen}" alt="${p.nombre}">
        <h3>${p.nombre}</h3>
        <p>$${p.precio}</p>
        <button onclick="agregarAlCarrito(${p.id})">Añadir al carrito</button>
      </div>
    `;
  });
}


function agregarAlCarrito(id) {
  const producto = productos[id - 1];
  carrito.push(producto);
  total = total + producto.precio;

  document.getElementById("contador-carrito").textContent = carrito.length;
  document.getElementById("total-carrito").textContent = total;
  document.getElementById("lista-carrito").innerHTML += "<li>" + producto.nombre + " - $" + producto.precio + "</li>";
}

function vaciarCarrito() {
  carrito = [];
  total = 0;
  document.getElementById("contador-carrito").textContent = 0;
  document.getElementById("total-carrito").textContent = 0;
  document.getElementById("lista-carrito").innerHTML = "";
}

document.addEventListener("DOMContentLoaded", function () {
  mostrarProductos("contenedor-productos");
  mostrarProductos("contenedor-destacados", 3);

  const btnVaciar = document.getElementById("btn-vaciar");
  if (btnVaciar) {
    btnVaciar.onclick = vaciarCarrito;
  }
});