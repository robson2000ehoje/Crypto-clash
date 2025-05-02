document.getElementById("startBattleBtn").addEventListener("click", () => {
  const fadeOverlay = document.getElementById("fade-overlay");
  fadeOverlay.style.opacity = 1;

  setTimeout(() => {
    window.location.href = "battle-scene.html"; // Substitua pelo nome real da próxima página
  }, 1000); // Espera o fade durar 1 segundo
});
