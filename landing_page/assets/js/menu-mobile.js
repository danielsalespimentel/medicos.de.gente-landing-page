// Script para o funcionamento do menu mobile
document.addEventListener('DOMContentLoaded', function() {
  const menuMobile = document.querySelector('.menu-mobile');
  const menu = document.querySelector('.menu');
  
  // Adiciona botão de fechar ao menu
  const closeButton = document.createElement('button');
  closeButton.className = 'menu-close-btn';
  closeButton.innerHTML = '&times;'; // Símbolo X
  closeButton.setAttribute('aria-label', 'Fechar menu');
  menu.appendChild(closeButton);
  
  // Abre o menu ao clicar no ícone de hambúrguer
  menuMobile.addEventListener('click', function() {
    menu.classList.toggle('active');
  });
  
  // Fecha o menu ao clicar no botão X
  closeButton.addEventListener('click', function() {
    menu.classList.remove('active');
  });
  
  // Fecha o menu ao clicar em um item do menu
  const menuItems = document.querySelectorAll('.menu a');
  menuItems.forEach(item => {
    item.addEventListener('click', function() {
      menu.classList.remove('active');
    });
  });
});
