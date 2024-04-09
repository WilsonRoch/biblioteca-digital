function redirecionar(event) {
  event.preventDefault();

  let checkbox = document.getElementById("alerta");

  if (checkbox.checked == true) {
    window.location.href = "./pages/pagina1.html";
  } else {
    window.location.href = "./pages/pagina2.html";
  }
}
