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
