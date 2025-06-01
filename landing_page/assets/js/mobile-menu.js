// Script para o funcionamento do menu hambúrguer em dispositivos móveis

document.addEventListener('DOMContentLoaded', function() {
    const menuMobile = document.querySelector('.menu-mobile');
    const menu = document.querySelector('nav .menu');
    
    // Função para alternar a exibição do menu
    function toggleMenu() {
        menuMobile.classList.toggle('active');
        menu.classList.toggle('active');
    }
    
    // Adiciona evento de clique ao ícone do menu
    menuMobile.addEventListener('click', toggleMenu);
    
    // Fecha o menu ao clicar em um item
    const menuItems = document.querySelectorAll('nav .menu li a');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuMobile.classList.remove('active');
            menu.classList.remove('active');
        });
    });
    
    // Fecha o menu ao clicar fora dele
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = menu.contains(event.target);
        const isClickOnMenuMobile = menuMobile.contains(event.target);
        
        if (!isClickInsideMenu && !isClickOnMenuMobile && menu.classList.contains('active')) {
            menuMobile.classList.remove('active');
            menu.classList.remove('active');
        }
    });
});
