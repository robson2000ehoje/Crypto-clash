window.onload = () => {
  const faction = localStorage.getItem('faction');
  const factionNameEl = document.getElementById('faction-name');
  const playerAvatar = document.getElementById('player-avatar');
  const battleStatus = document.getElementById('battle-status');

  if (faction) {
    factionNameEl.innerText = `Facção: ${faction}`;

    switch (faction) {
      case 'NeoBlock':
        playerAvatar.style.background = '#005cbf';
        battleStatus.innerText = "NeoBlock pronta para invadir o sistema!";
        break;
      case 'DAOminion':
        playerAvatar.style.background = '#9b59b6';
        battleStatus.innerText = "DAOminion energizando a rede...";
        break;
      case 'ShadowHash':
        playerAvatar.style.background = '#111';
        battleStatus.innerText = "ShadowHash operando nas sombras...";
        break;
      case 'Nação Satoshi':
        playerAvatar.style.background = '#f39c12';
        battleStatus.innerText = "Nação Satoshi defendendo o legado!";
        break;
      default:
        battleStatus.innerText = "Facção desconhecida.";
    }
  } else {
    factionNameEl.innerText = "Nenhuma facção selecionada!";
  }

  document.getElementById('startBattleBtn').addEventListener('click', () => {
    battleStatus.innerText = "Batalha em andamento...";
    // Aqui você pode adicionar animações ou lógica real da batalha
  });
};
