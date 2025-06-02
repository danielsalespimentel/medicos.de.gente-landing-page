// Script para o funcionamento do menu mobile em coluna lateral
document.addEventListener('DOMContentLoaded', function() {
  const menuMobile = document.querySelector('.menu-mobile');
  const menu = document.querySelector('.menu');
  
  // Adiciona botão de fechar ao menu
  const closeButton = document.createElement('button');
  closeButton.className = 'menu-close-btn';
  closeButton.innerHTML = '&times;'; // Símbolo X
  closeButton.setAttribute('aria-label', 'Fechar menu');
  menu.appendChild(closeButton);
  
  // Cria overlay para fundo semi-transparente
  const overlay = document.createElement('div');
  overlay.className = 'menu-overlay';
  document.body.appendChild(overlay);
  
  // Abre o menu ao clicar no ícone de hambúrguer
  menuMobile.addEventListener('click', function() {
    menu.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Impede rolagem da página
  });
  
  // Fecha o menu ao clicar no botão X
  closeButton.addEventListener('click', function() {
    menu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = ''; // Restaura rolagem da página
  });
  
  // Fecha o menu ao clicar no overlay
  overlay.addEventListener('click', function() {
    menu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = ''; // Restaura rolagem da página
  });
  
  // Fecha o menu ao clicar em um item do menu
  const menuItems = document.querySelectorAll('.menu a');
  menuItems.forEach(item => {
    item.addEventListener('click', function() {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = ''; // Restaura rolagem da página
    });
  });
});
