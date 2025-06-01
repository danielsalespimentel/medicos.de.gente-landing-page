// Script para o funcionamento do menu hambúrguer em dispositivos móveis

document.addEventListener('DOMContentLoaded', function() {
    const menuMobile = document.querySelector('.menu-mobile');
    const menu = document.querySelector('nav .menu');
    
    // Criar botão de fechar
    const closeButton = document.createElement('button');
    closeButton.className = 'menu-close';
    closeButton.innerHTML = '<i class="fas fa-times"></i>';
    closeButton.setAttribute('aria-label', 'Fechar menu');
    document.querySelector('nav').appendChild(closeButton);
    
    // Função para alternar a exibição do menu
    function toggleMenu() {
        menuMobile.classList.toggle('active');
        menu.classList.toggle('active');
        closeButton.classList.toggle('active');
    }
    
    // Função para fechar o menu
    function closeMenu() {
        menuMobile.classList.remove('active');
        menu.classList.remove('active');
        closeButton.classList.remove('active');
    }
    
    // Adiciona evento de clique ao ícone do menu
    menuMobile.addEventListener('click', toggleMenu);
    
    // Adiciona evento de clique ao botão de fechar
    closeButton.addEventListener('click', closeMenu);
    
    // Fecha o menu ao clicar em um item
    const menuItems = document.querySelectorAll('nav .menu li a');
    menuItems.forEach(item => {
        item.addEventListener('click', closeMenu);
    });
    
    // Fecha o menu ao clicar fora dele
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = menu.contains(event.target);
        const isClickOnMenuMobile = menuMobile.contains(event.target);
        const isClickOnCloseButton = closeButton.contains(event.target);
        
        if (!isClickInsideMenu && !isClickOnMenuMobile && !isClickOnCloseButton && menu.classList.contains('active')) {
            closeMenu();
        }
    });
});
