
const form = document.getElementById("form-contacto");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const mensaje = document.getElementById("mensaje");


const dominios = /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i;

function validarNombre() {
  const error = nombre.value.trim() === "" ? "El nombre es obligatorio." : "";
  document.getElementById("error-nombre").textContent = error;
  return error === "";
}

function validarCorreo() {
  let error = "";
  if (correo.value.trim() === "") {
    error = "El correo es obligatorio.";
  } else if (!dominios.test(correo.value.trim())) {
    error = "Correo inválido. Usa uno que termine en @duoc.cl, @profesor.duoc.cl o @gmail.com.";
  }
  document.getElementById("error-correo").textContent = error;
  return error === "";
}

function validarMensaje() {
  const error = mensaje.value.trim() === "" ? "El mensaje es obligatorio." : "";
  document.getElementById("error-mensaje").textContent = error;
  return error === "";
}


nombre.addEventListener("input", validarNombre);
correo.addEventListener("input", validarCorreo);
mensaje.addEventListener("input", validarMensaje);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nombreOk = validarNombre();
  const correoOk = validarCorreo();
  const mensajeOk = validarMensaje();

  if (nombreOk && correoOk && mensajeOk) {
    document.getElementById("mensaje-exito").textContent = "Mensaje enviado correctamente.";
    form.reset();
  } else {
    document.getElementById("mensaje-exito").textContent = "";
  }
});
