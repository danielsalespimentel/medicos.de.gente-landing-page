/* JavaScript para o Blog */

document.addEventListener('DOMContentLoaded', function() {
    // Manipulação do menu mobile
    const menuMobile = document.querySelector('.menu-mobile');
    const menu = document.querySelector('.menu');
    
    if (menuMobile) {
        menuMobile.addEventListener('click', function() {
            menu.classList.toggle('active');
        });
    }
    
    // Botão flutuante - aparecer após scroll
    const floatingCta = document.querySelector('.floating-cta');
    
    if (floatingCta) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                floatingCta.style.display = 'block';
            } else {
                floatingCta.style.display = 'none';
            }
        });
    }
    
    // Animação suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Fechar menu mobile se estiver aberto
                if (menu.classList.contains('active')) {
                    menu.classList.remove('active');
                }
            }
        });
    });
});
