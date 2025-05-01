// Elementos de tela
const startScreen = document.getElementById('start-screen');
const selectFactionScreen = document.getElementById('select-faction-screen');
const gameScreen = document.getElementById('game-screen');
const factionInfo = document.getElementById('faction-info');

// Dados das facções
const factions = {
  'NeoBlock Corp': {
    description: 'Uma corporação centralizada com mineração poderosa.',
    resources: { tokens: 1000, influence: 500, infrastructure: 300 }
  },
  'DAOminion': {
    description: 'Uma organização descentralizada com forte consenso.',
    resources: { tokens: 500, influence: 800, infrastructure: 200 }
  },
  'ShadowHash': {
    description: 'Grupo hacker-criptoativista, focado em sabotagem.',
    resources: { tokens: 700, influence: 300, infrastructure: 400 }
  },
  'Nação Satoshi': {
    description: 'Estado digital com forte economia lastreada em blockchain.',
    resources: { tokens: 1200, influence: 600, infrastructure: 100 }
  }
};

// Função para mostrar a tela de seleção de facção
document.getElementById("start-game").addEventListener("click", function() {
  startScreen.style.display = "none";
  selectFactionScreen.style.display = "block";
});

// Função para processar a escolha da facção
document.querySelectorAll(".faction-button").forEach(button => {
  button.addEventListener("click", function() {
    const selectedFaction = this.getAttribute("data-faction");
    selectFactionScreen.style.display = "none";
    gameScreen.style.display = "block";

    // Exibir informações da facção escolhida
    factionInfo.innerHTML = `
      Você escolheu a facção <strong>${selectedFaction}</strong>.
      <p>${factions[selectedFaction].description}</p>
      <p>Recursos Iniciais: 
        Tokens: ${factions[selectedFaction].resources.tokens}, 
        Influência: ${factions[selectedFaction].resources.influence}, 
        Infraestrutura: ${factions[selectedFaction].resources.infrastructure}
      </p>
    `;
  });
});
let playerTokens = 1000; // Exemplo inicial de tokens do jogador

// Atualiza o display de tokens do jogador
function updatePlayerTokens() {
  document.getElementById('player-tokens').textContent = playerTokens;
}

// Exibir o marketplace ao iniciar o turno
document.getElementById("start-turn").addEventListener("click", function() {
  document.getElementById('marketplace').style.display = "block";
  updatePlayerTokens();
});

// Comprar Cripto
document.getElementById('buy-crypto').addEventListener('click', function() {
  const cryptoPrice = 100; // Preço da cripto (simples para protótipo)
  if (playerTokens >= cryptoPrice) {
    playerTokens -= cryptoPrice;
    alert('Você comprou 1 cripto!');
    updatePlayerTokens();
  } else {
    alert('Você não tem tokens suficientes!');
  }
});

// Vender Cripto
document.getElementById('sell-crypto').addEventListener('click', function() {
  const cryptoValue = 100; // Valor da cripto (simples para protótipo)
  playerTokens += cryptoValue;
  alert('Você vendeu 1 cripto!');
  updatePlayerTokens();
});
// Função para gerar eventos aleatórios
function generateRandomEvent() {
  const events = [
    { message: "A crise econômica afetou o mercado!", tokensChange: -200 },
    { message: "Um ataque hacker roubou seus tokens!", tokensChange: -500 },
    { message: "O mercado de criptos teve uma alta!", tokensChange: 300 }
  ];

  const event = events[Math.floor(Math.random() * events.length)];
  alert(event.message);
  playerTokens += event.tokensChange;
  updatePlayerTokens();
}

// Chamar um evento aleatório a cada turno
document.getElementById("start-turn").addEventListener("click", function() {
  generateRandomEvent();
});
// Função para trocar de tela com animação
function switchScreen(from, to) {
  from.style.opacity = 0;
  setTimeout(function () {
    from.style.display = 'none';
    to.style.display = 'block';
    setTimeout(function () {
      to.style.opacity = 1;
    }, 100);
  }, 300);
}

// Função para iniciar o jogo
document.getElementById("start-game").addEventListener("click", function() {
  switchScreen(startScreen, selectFactionScreen);
});

// Função para processar a escolha da facção
document.querySelectorAll(".faction-button").forEach(button => {
  button.addEventListener("click", function() {
    const selectedFaction = this.getAttribute("data-faction");
    switchScreen(selectFactionScreen, gameScreen);

    // Exibir informações da facção escolhida
    factionInfo.innerHTML = `
      Você escolheu a facção <strong>${selectedFaction}</strong>.
      <p>${factions[selectedFaction].description}</p>
      <p>Recursos Iniciais: 
        Tokens: ${factions[selectedFaction].resources.tokens}, 
        Influência: ${factions[selectedFaction].resources.influence}, 
        Infraestrutura: ${factions[selectedFaction].resources.infrastructure}
      </p>
    `;
  });
});
