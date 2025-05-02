window.onload = () => {
  // Captura a facção escolhida
  const faction = localStorage.getItem('faction');
  
  if (faction) {
    // Mostra o banner da facção escolhida
    document.getElementById('faction-banner').innerHTML = `Facção: ${faction}`;
    
    // Adiciona animações baseadas na facção escolhida
    const animationPlaceholder = document.getElementById('animation-placeholder');
    
    // Exemplo de animações diferentes por facção
    if (faction === 'NeoBlock') {
      animationPlaceholder.innerHTML = "A NeoBlock está iniciando a batalha...";
      animationPlaceholder.style.backgroundColor = '#005cbf'; // Azul
      // Adicione animações específicas aqui
    } else if (faction === 'DAOminion') {
      animationPlaceholder.innerHTML = "A DAOminion está se preparando...";
      animationPlaceholder.style.backgroundColor = '#9b59b6'; // Roxo
      // Adicione animações específicas aqui
    } else if (faction === 'ShadowHash') {
      animationPlaceholder.innerHTML = "A ShadowHash está invocando suas forças...";
      animationPlaceholder.style.backgroundColor = '#333'; // Preto
      // Adicione animações específicas aqui
    } else if (faction === 'Nação Satoshi') {
      animationPlaceholder.innerHTML = "A Nação Satoshi está pronta!";
      animationPlaceholder.style.backgroundColor = '#f39c12'; // Amarelo
      // Adicione animações específicas aqui
    }
  } else {
    // Caso não haja facção selecionada
    document.getElementById('faction-banner').innerHTML = "Nenhuma facção selecionada!";
  }

  // Lógica do botão de iniciar batalha
  document.getElementById('startBattleBtn').addEventListener('click', () => {
    alert('Batalha iniciada!');
    // Aqui você pode colocar a lógica da batalha real ou transição para outra tela
  });
};
