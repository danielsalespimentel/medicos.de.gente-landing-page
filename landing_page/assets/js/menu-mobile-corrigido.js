// Script para o funcionamento do menu mobile em coluna lateral direita
document.addEventListener('DOMContentLoaded', function() {
  // Limpar qualquer botão X existente para evitar duplicação
  const existingCloseButtons = document.querySelectorAll('.menu-close-btn');
  existingCloseButtons.forEach(button => button.remove());
  
  const menuMobile = document.querySelector('.menu-mobile');
  const menu = document.querySelector('.menu');
  
  // Adiciona botão de fechar ao menu
  const closeButton = document.createElement('button');
  closeButton.className = 'menu-close-btn';
  closeButton.innerHTML = '&times;'; // Símbolo X
  closeButton.setAttribute('aria-label', 'Fechar menu');
  menu.appendChild(closeButton);
  
  // Verifica se o overlay já existe, se não, cria um novo
  let menuOverlay = document.querySelector('.menu-overlay');
  if (!menuOverlay) {
    menuOverlay = document.createElement('div');
    menuOverlay.className = 'menu-overlay';
    document.body.appendChild(menuOverlay);
  }
  
  // Força o posicionamento do menu à direita
  function forceRightPosition() {
    menu.style.left = 'auto';
    menu.style.right = menu.classList.contains('active') ? '0' : '-100%';
  }
  
  // Aplica o posicionamento inicial
  forceRightPosition();
  
  // Abre o menu ao clicar no ícone de hambúrguer
  menuMobile.addEventListener('click', function() {
    menu.classList.add('active');
    menuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Impede rolagem da página
    forceRightPosition(); // Garante posicionamento à direita
  });
  
  // Fecha o menu ao clicar no botão X
  closeButton.addEventListener('click', function() {
    menu.classList.remove('active');
    menuOverlay.classList.remove('active');
    document.body.style.overflow = ''; // Restaura rolagem da página
    forceRightPosition(); // Garante posicionamento à direita
  });
  
  // Fecha o menu ao clicar no overlay
  menuOverlay.addEventListener('click', function() {
    menu.classList.remove('active');
    menuOverlay.classList.remove('active');
    document.body.style.overflow = ''; // Restaura rolagem da página
    forceRightPosition(); // Garante posicionamento à direita
  });
  
  // Fecha o menu ao clicar em um item do menu
  const menuItems = document.querySelectorAll('.menu a');
  menuItems.forEach(item => {
    item.addEventListener('click', function() {
      menu.classList.remove('active');
      menuOverlay.classList.remove('active');
      document.body.style.overflow = ''; // Restaura rolagem da página
      forceRightPosition(); // Garante posicionamento à direita
    });
  });
});
