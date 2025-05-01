function selectFaction(name) {
  document.getElementById('chosen-faction').innerText = name;
  document.getElementById('selection').classList.remove('hidden');
}

function startGame() {
  const faction = document.getElementById('chosen-faction').innerText;
  alert(`Iniciando jogo com a facção: ${faction}`);
  // Aqui você pode redirecionar ou carregar o próximo módulo do jogo
}
