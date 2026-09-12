function abrirCarta() {
  const btn = document.getElementById("openBtn");
  const msg = document.getElementById("message");

  btn.style.display = "none";
  msg.classList.remove("hidden");
  
  setTimeout(() => {
    msg.classList.add("show");
  }, 50);
}