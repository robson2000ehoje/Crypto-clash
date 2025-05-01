function selectFaction(name) {
  document.getElementById('chosen-faction').innerText = name;
  document.getElementById('selection').classList.remove('hidden');
}

function startGame() {
  const faction = document.getElementById('chosen-faction').innerText;
  
  // Esconde a tela de escolha e mostra a tela de jogo
  document.getElementById('selection').classList.add('hidden');
  document.getElementById('game-screen').classList.remove('hidden');
  
  // Inicia a simulação do jogo (poderia ser um load mais elaborado)
  setTimeout(function() {
    document.getElementById('game-title').innerText = `Facção ${faction} em ação!`;
    document.getElementById('game-description').innerText = `A batalha começou, prepare-se para o confronto!`;
    // Aqui você pode adicionar mais lógica para o jogo em si.
  }, 3000);  // Simula 3 segundos de carregamento
}