
const dominios = /@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i;

document.getElementById("form-contacto").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const mensaje = document.getElementById("mensaje").value;

  document.getElementById("error-nombre").textContent = nombre === "" ? "El nombre es obligatorio." : "";
  document.getElementById("error-correo").textContent = !dominios.test(correo) ? "Correo inválido. Usa @duoc.cl, @profesor.duoc.cl o @gmail.com." : "";
  document.getElementById("error-mensaje").textContent = mensaje === "" ? "El mensaje es obligatorio." : "";

  if (nombre !== "" && dominios.test(correo) && mensaje !== "") {
    document.getElementById("mensaje-exito").textContent = "Mensaje enviado correctamente.";
    this.reset();
  } else {
    document.getElementById("mensaje-exito").textContent = "";
  }
});