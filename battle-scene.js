document.addEventListener("DOMContentLoaded", () => {
  const faction = localStorage.getItem("faction");
  const title = document.getElementById("battle-title");

  if (faction) {
    title.textContent = `Entrando na batalha com a facção ${faction}...`;
  } else {
    title.textContent = "Nenhuma facção selecionada.";
  }

  // Aqui você pode adicionar animações ou lógica extra
});
